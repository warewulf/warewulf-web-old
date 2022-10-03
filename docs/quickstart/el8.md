---
id: el8
title: EL8 Quickstart (Rocky and RHEL)
---

## Install Warewulf and dependencies

```bash
sudo dnf groupinstall "Development Tools" -y
sudo dnf install -y epel-release
sudo dnf install -y golang podman tftp-server dhcp-server nfs-utils

git clone https://github.com/hpcng/warewulf.git
cd warewulf
make all
sudo make install
```

## Configure firewalld

Restart firewalld to register the added service file, add the service to the default zone, and reload.

```bash
sudo systemctl restart firewalld
sudo firewall-cmd --permanent --add-service warewulf
sudo firewall-cmd --permanent --add-service nfs
sudo firewall-cmd --permanent --add-service tftp
sudo firewall-cmd --reload
```

## Configure the controller

Edit the file `/etc/warewulf/warewulf.conf` and ensure that you've set the appropriate
configuration parameters. Here are some of the defaults for reference assuming that `192.168.200.1`
is the IP address of your cluster's private network interface:

```yaml
ipaddr: 192.168.200.1
netmask: 255.255.255.0
warewulf:
  port: 9873
  secure: false
  update interval: 60
dhcp:
  enabled: true
  range start: 192.168.200.10
  range end: 192.168.200.99
  template: default
  systemd name: dhcpd
tftp:
  enabled: true
  tftproot: /var/lib/tftpboot
  systemd name: tftp
nfs:
  systemd name: nfs-server
  exports:
    - /home
    - /var/warewulf
```

:::note
The DHCP range ends at `192.168.200.99` and as you will see below, the first node static IP
address (post boot) is configured to `192.168.200.100`.
:::

## Start and enable the Warewulf service

```bash
# Start and enable the warewulfd service
sudo systemctl enable --now warewulfd
```

## Configure system services automatically

There are a number of services and configurations that Warewulf relies on to operate.
If you wish to configure all services, you can do so individually (omitting the `--all`)
will print a help and usage instructions.

```bash
sudo wwctl configure --all
```
> note: If you just installed the system fresh and have SELinux enforcing, you may need to reboot the system at this stage to properly set the contexts of the TFTP contents. After rebooting, you might also need to run `$ sudo restorecon -Rv /var/lib/tftpboot/` if there are errors with TFTP still.

## Build the VNFS container locally with podman and import the tarball (including the kernel)

This will build a basic rocky-8 image locally using podman, import container using the tarball archive, and will import default running
kernel from the controller node and set both in the "default" node profile.

```bash
# Build the rocky-8 image
sudo podman build -f ./containers/Docker/rocky-8 -t imagename .
```

```bash
# Create a tar archive of the image
sudo podman save -o /tmp/imagename.tar imagename
```

```bash
# Import the container
sudo wwctl container import file://tmp/imagename.tar rocky-8
```

## Set up the default node profile

Node configurations can be set via node profiles. Each node by default is configured to
be part of the `default` node profile, so any changes you make to that profile will
affect all nodes.

The following command will set the container we just imported above to the `default` node profile:

```bash
sudo wwctl profile set --yes --container rocky-8 "default"
```

Next we set some default networking configurations for the first ethernet device. On
modern Linux distributions, the name of the device is not critical, as it will be setup
according to the HW address. Because all nodes will share the netmask and gateway
configuration, we can set them in the default profile as follows:

```bash
sudo wwctl profile set --yes --netdev eth0 --netmask 255.255.255.0 --gateway 192.168.200.1 "default"
```

Once those configurations have been set, you can view the changes by listing the profiles as follows:

```bash
sudo wwctl profile list -a
```

## Add a node 

Adding nodes can be done while setting configurations in one command. Here we are setting
the IP address of ``eth0`` and setting this node to be discoverable, which will then
automatically have the HW address added to the configuration as the node boots.

Node names must be unique. If you have node groups and/or multiple clusters, designate
them using dot notation.

Note that the full node configuration comes from both cascading profiles and node
configurations which always supersede profile configurations.

```bash
sudo wwctl node add n0000.cluster --ipaddr 192.168.200.100 --discoverable
```

At this point you can view the basic configuration of this node by typing the following:

```bash
sudo wwctl node list -a n0000.cluster
```

## Turn on your compute node and watch it boot!
