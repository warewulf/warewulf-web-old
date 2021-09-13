---
id: containers
title: Container Management
---

Since the inception of Warewulf over 20 years ago, Warewulf has used the model of the "Virtual Node File System" (VNFS) as a template image for the compute nodes. This is similar to a golden master image, except that the node file system exists within a directory on the Warewulf control node (e.g. a `chroot()`).

In hindsight, we've been using containers all along, but the buzzword just didn't exist. Over the last 5-6 years, the enterprise has created a lot of tooling and standards around defining, building, distributing, securing, and managing containers, so Warewulf (as of v4.0) now integrates directly within the container ecosystem to facilitate the process of VNFS image management.

If you are not currently leveraging the container ecosystem in any other way, you can still build your own chroot directories and use Warewulf as you always have.

It is important to understand that Warewulf is not running a container runtime on the nodes. While that is absolutely possible to run containers from the booted hosts, Warewulf is provisioning the container image to the bare metal and booting it. This container will be used as the base operating system and by default it will run stateless in memory. This means when you reboot the node, the node persists no information about Warewulf or how it booted.

## Importing a Container From Docker
Docker is one of the most utilized container platforms in the enterprise and it has a lot of tooling around it (Singularity is, of course, the most utilized container platform for HPC though). You can use either infrastructure to create and manage the containers when you import them into Warewulf. For example:

```
$ sudo wwctl container import docker://warewulf/rocky rocky-8
Getting image source signatures
Copying blob d7f16ed6f451 done  
Copying config da2ca70704 done  
Writing manifest to image destination
Storing signatures
[LOG]       info unpack layer: sha256:d7f16ed6f45129c7f4adb3773412def4ba2bf9902de42e86e77379a65d90a984
Updating the container's /etc/resolv.conf
Building container: rocky-8
```

> **IMPORTANT NOTE: Most containers in DockerHub are not "bootable" in that they have a limited version of Systemd to make them lighter weight for container purposes. For this reason, don't expect any base Docker container (e.g. `docker://centos` or `docker://debian`) to boot properly. They will not as they will get stuck into a single user mode. The containers in [https://hub.docker.com/u/warewulf](https://hub.docker.com/u/warewulf) are not limited and thus they boot as you would expect.**

## Listing All Imported Containers
Once the container has been imported, you can list them all with the following command:

```
$ sudo wwctl container list
CONTAINER NAME                      BUILT  NODES 
rocky-8                             true   0     
```

Once a container has been imported and showing up in this list you can configure it to boot compute nodes.

## Making Changes to Containers
Warewulf has a minimal container runtime built into it. This means you can run commands inside of any of the containers and make changes to them as follows:

```
$ sudo wwctl container exec rocky-8 /bin/sh
[rocky-8] Warewulf> cat /etc/rocky-release
Rocky Linux release 8.4 (Green Obsidian)
[rocky-8] Warewulf> exit
Rebuilding container...
[INFO]     Skipping (VNFS is current)
```

You can also `--bind` directories from your host into the container when using the exec command. This works as follows:

```
$ sudo wwctl container exec --bind /tmp:/mnt rocky-8 /bin/sh
[rocky-8] Warewulf> 
```

> note: As with any mount command, both the source and the target must exist. This is why the example uses the `/mnt/` directory location, as it is almost always present and empty in every Linux distribution (as prescribed by the LSB file hierarchy standard).

When the command completes, if anything within the container changed, the container will be rebuilt into a bootable static object automatically.

## Creating Containers From Scratch
You can also create containers from scratch and import those containers into Warewulf as previous versions of Warewulf did.

### Building a container from your host
RPM based distributions, as well as Debian variants can all bootstrap mini `chroot()` directories which can then be used to bootstrap your node's container.

For example, on an RPM based Linux distribution with YUM or DNF, you can do something like the following:

```
$ sudo yum install --installroot /tmp/newroot basesystem bash \
    chkconfig coreutils e2fsprogs ethtool filesystem findutils \
    gawk grep initscripts iproute iputils net-tools nfs-utils pam \
    psmisc rsync sed setup shadow-utils rsyslog tzdata util-linux \
    words zlib tar less gzip which util-linux openssh-clients \
    openssh-server dhclient pciutils vim-minimal shadow-utils \
    strace cronie crontabs cpio wget rocky-release ipmitool yum \
    NetworkManager
```

And you can do similar with Debian-based distributions:
```
$ sudo apt-get install debootstrap
$ sudo debootstrap stable /tmp/newroot http://ftp.us.debian.org/debian
```

Once you have created and modified your new `chroot()`, you can import it into Warewulf with the following command:

```bash
$ sudo wwctl container import /tmp/newroot containername
```

### Building a container from Singularity
Singularity, a container platform for HPC and performance intensive applications, can also be used to create node containers for Warewulf. There are several Singularity container recipes in the `containers/Singularity/` directory and can be found on GitHub at [https://github.com/hpcng/warewulf/tree/main/containers/Singularity](https://github.com/hpcng/warewulf/tree/main/containers/Singularity).

You can use these as starting points and adding any additional steps you want in the `%post` section of the recipe file. Once you've done that, installing Singularity, building a container sandbox and importing into Warewulf can be done with the following steps:

```bash
$ sudo yum install epel-release
$ sudo yum install singularity
$ sudo singularity build --sandbox /tmp/newroot /path/to/Singularity/recipe.def
$ sudo wwctl container import /tmp/newroot containername
```