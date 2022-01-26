---
id: el8
title: EL8 Quickstart (Rocky and RHEL)
---

## Install Warewulf and dependencies

```bash
sudo dnf groupinstall "Development Tools"
sudo dnf install epel-release
sudo dnf install golang tftp-server dhcp-server nfs-utils

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
  secure: true
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
# Create the group the warewulfd service will run as
sudo groupadd -r warewulf

# Reload system services
sudo systemctl daemon-reload

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

## Pull and build the VNFS container and kernel

This will pull a basic VNFS container from Docker Hub and import the default running
kernel from the controller node and set both in the "default" node profile.

```bash
sudo wwctl container import docker://warewulf/rocky:8 rocky-8 --setdefault
sudo wwctl kernel import $(uname -r) --setdefault
```

## Set up the default node profile

The ``--setdefault`` arguments above will automatically set those entries in the default
profile, but if you wanted to set them by hand to something different, you can do the
following:

```bash
sudo wwctl profile set -y default -K $(uname -r) -C rocky-8
```

Next we set some default networking configurations for the first ethernet device. On
modern Linux distributions, the name of the device is not critical, as it will be setup
according to the HW address. Because all nodes will share the netmask and gateway
configuration, we can set them in the default profile as follows:

```bash
sudo wwctl profile set -y default --netname default --netmask 255.255.255.0 --gateway 192.168.200.1
sudo wwctl profile list
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
sudo wwctl node add n0000.cluster --netname default -I 192.168.200.100 --discoverable
sudo wwctl node list -a n0000
```

## Turn on your compute node and watch it boot!
