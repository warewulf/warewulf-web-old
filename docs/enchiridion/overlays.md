---
id: overlays
title: Warewulf Overlays
---

So at this point, we have discussed how Warewulf is designed to scalably provision and manage thousands of cluster nodes by utilizing identical stateless boot images. And there-in lies a problem to solve. If these boot images are completely identical, then how do we configure things like hostnames? IP addresses? Custom configurations?

While some of this can be managed by services like DHCP, and other bits by configuration management, which can absolutely be done with Warewulf and many people choose to do, these are heavy-weight solutions to a simple problem to solve.

Warewulf solves this with overlays and uses overlays in different ways through the provisioning process. Two of these overlays are exposed to the users, the **system overlay** and the **runtime overlay**.

> note: Another overlay that isn't directly exposed is the **kmods overlay** which contains all of the kernel modules to match the configured kernel. Because this overlay is used "behind the scenes" it is outside the scope of this document.

## System Overlay
The System Overlay is used to set node specific configuration parameters before the system is booted.

This allows us to pre-configure a cluster node with specific configurations before `/sbin/init` is called. This is important for service configurations that are normally necessary by the boot process. A simple example of this is the networking configuration as this subsystem is responsible for initializing network and all following services like NFS mounts, OpenSSH, resource manager configurations, directory services, etc. Another example would be the `/etc/fstab` file, as that is generally needed to properly setup the node file systems.

## Runtime Overlay
After the system has been provisioned (post `/sbin/init`) the runtime overlay provides a mechanism to update configurations that may change in-between node reboots. Examples of what would go into the Runtime Overlay are user and group files.

The runtime overlay is technically outside of the provisioning process as it normally runs via a client program (`wwclient`) which is provisioned to every node via the system overlay. `wwclient` will poll the Warewulf service running on the control node at periodic intervals and will download updates if they are available.

> note: Overlays within `system` or `runtime` exist within their own namespace, so even if they are both named as `default` they are not related.

## Where Do I Put ________?
One of the most frequently asked questions about Warewulf is, "Where do I put `$FILE`?". The answer is always: it depends on the file. 

To help identify where a particular file or package should go, ask yourself these questions:

1. Is this a simple configuration or text file?
    - **yes**: This might be applicable for inclusion to an overlay... Go ahead to the following questions.
    - **no**: Generally speaking, binary files and/or packages belong in the container. There are exceptions to this rule, but those are pretty specific (e.g. a statically compiled binary that should be on every node despite container or system role, like `wwclient`).
1. Is this file specific to a particular node configuration?
    - **yes**: Then it belongs in either a system or runtime overlay, go onto the next questions.
    - **no**: This file should be put into the container.
1. Is this file required to properly boot the node or start system services at boot?
    - **yes**: This file belongs in the system overlay.
    - **no**: This file might belong in the runtime overlay, go to the following question.
1. Does the content of the file change and nodes would need to pull updates?
    - **yes**: This file belongs in the runtime overlay.
    - **no**: This file technically could go in either overlay, but because it is not changing, it makes the most sense to put it in the system overlay as that is just provisioned once per boot.

## Templates
Templates allow you to create dynamic content such that the files downloaded for each node will be customized for that node. Templates allow you to insert everything from variables, to including files from the control node, as well as conditional content and loops.

Warewulf uses the `text/template` engine to facilitate implementing dynamic content in a simple and standardized manner.

All template files will end with the suffix of `.ww`. That tells Warewulf that when building a file, that it should parse that file as a template. When it does that, the resulting file is static and can have node customizations that are obtained from the node configuration attributes.

> note: When the file is persisted within the built overlay, the `.ww` will be dropped, so `/etc/hosts.ww` will end up being `/etc/hosts`.

## Using Overlays

Warewulf includes a command group for manipulating overlays (`wwctl overlay`). With this you can add, edit, remove, change ownership, permissions, etc.

The general syntax is as follows:

```
wwctl overlay [action] [overlay type] [overlay name] ...
```

* **action**: the overlay subcommand you are invoking
* **overlay type**: this is either `system` or `runtime` as defined above
* **overlay name**: the name of the overlay in question within a given type
* **...**: additional arguments are action specific

By default there is one overlay in each of the system and runtime overlay types. Both overlays are called "default". To say it differently, there are two default overlays, one is a system overlay and one is a runtime overlay.

## Viewing the Files Within an Overlay
Overlays can be viewed with the command `wwctl overlay list`. You can see the files within an overlay by adding the `-a` or `-l` options as follows:

```
$ sudo wwctl overlay list runtime -l
PERM MODE    UID GID   RUNTIME-OVERLAY    FILE PATH
-rwxr-xr-x     0 0     default            /etc/
-rw-r--r--     0 0     default            /etc/group.ww
-rw-r--r--     0 0     default            /etc/hosts.ww
-rw-r--r--     0 0     default            /etc/passwd.ww
-rwxr-xr-x     0 0     default            /root/
-rwxr-xr-x     0 0     default            /root/.ssh/
-rw-r--r--     0 0     default            /root/.ssh/authorized_keys.ww
```

## Creating a New File Within an Overlay
Just like any file on the system, you can create and edit a file at the same time. So to do that, you simple `edit` a new file as follows:

```
$ sudo wwctl overlay edit [overlay type] [overlay name] [file path]
```

Where _[overlay type]_ is either `system` or `runtime`, the _[overlay name]_ is the name of the existing overlay and the _[file path]_ is the new or existing file you want to edit within the overlay.

For example:

```
$ sudo wwctl overlay edit runtime default /etc/testfile
```

and you can validate that the file is there with the `list` command:
```
$ sudo wwctl overlay list runtime -l
PERM MODE    UID GID   RUNTIME-OVERLAY    FILE PATH
-rwxr-xr-x     0 0     default            /etc/
-rw-r--r--     0 0     default            /etc/group.ww
-rw-r--r--     0 0     default            /etc/hosts.ww
-rw-r--r--     0 0     default            /etc/passwd.ww
-rwxr-xr-x     0 0     default            /etc/testfile
-rwxr-xr-x     0 0     default            /root/
-rwxr-xr-x     0 0     default            /root/.ssh/
-rw-r--r--     0 0     default            /root/.ssh/authorized_keys.ww
```

>note: To create a template file, simply name the file with the suffix `.ww`. This suffix will tell Warewulf that the file should be parsed by the templating engine and written into the overlay with the suffix stripped off.

## Building Overlays
Warewulf makes use of as much static content as it can. This is to optimize the provisioning process. For instance, if there are thousands of cluster nodes booting up in parallel, the provisioning load to the Warewulf server can be very high and become a bottleneck.

To mitigate any content during provisioning, Warewulf tries to pre-compile as much of the provisioning pieces as possible. This means when you edit an overlay, it must be rebuilt for all of the compute nodes that leverage that overlay.

By default, Warewulf does this automatically but if you are making a number of changes to the overlays, it might be in your best interest to use the `--noupdate` flag so you can do a bulk rebuild after multiple edits are made.

## Other Overlay Actions
Warewulf includes a number of overlay action commands to interact with the overlays in a programmatic and controlled manner. All of the commands use very similar usage structure and work as the above examples do. A summary of all of the overlay actions are as follows:

* **build**: (Re)build an overlay
* **chmod**: Change file permissions within an overlay
* **chown**: Change file ownership within an overlay
* **create**: Initialize a new Overlay
* **delete**: Delete Warewulf Overlay or files
* **edit**: Edit/Create a file within a Warewulf Overlay
* **import**: Import a file into a Warewulf Overlay
* **list**: List Warewulf Overlays and files
* **mkdir**: Create a new directory within an Overlay
* **show**: Show (cat) a file within a Warewulf Overlay
