---
id: configuration
title: Warewulf Configuration
---

The default installation of Warewulf will put all of the configuration files into `/etc/warewulf/`. In that directory, you will find the primary configuration files needed by Warewulf.

## warewulf.conf

The Warewulf configuration exists as follows in the current version of Warewulf (4.2.0):

```
ipaddr: 10.0.0.1
netmask: 255.255.252.0
warewulf:
  port: 9873
  secure: true
  update interval: 60
dhcp:
  enabled: true
  range start: 10.0.1.1
  range end: 10.0.1.255
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

Generally you can leave this file as is, as long as you set the appropriate networking information. Specifically the following configurations:

- `ipaddr`: This is the control node's networking interface connecting to the cluster's **PRIVATE** network. This configuration must match the host's network IP address for the cluster's private interface.
- `netmask`: Similar to the `ipaddr`, this is the subnet mask for the cluster's **PRIVATE** network and it must also match the host's subnet mask for the cluster's private interface.
- `dhcp:range start`: This address must exist on the network defined above. If it is outside of this scope, failures will occur. This is where you want the DHCP range IP addressing to begin.
- `dhcp:range end`: Same as the above, but this is where the DHCP range will end.

> note: The network configuration listed above assumes the network layout in the [Warewulf Architecture](architecture.md) portion of the documentation.

The other configuration options are usually not touched, but they are explained as follows:

- `enabled`: This disables Warewulf's control of an external service. This is useful if you want to mange that service directly.
- `systemd name`: This is so Warewulf can control some of the host's services. For the distributions that we've built and tested this on, these will require no changes.
- `warewulf:port`: This is the port that the Warewulf web server will be listening on. It is recommended not to change this so there is no misalignment with node's expectations of how to contact the Warewulf service.
- `warewulf:secure`: When `true`, this limits the Warewulf server to only respond to runtime overlay requests originating from a privileged report port. This makes it so that only the `root` user on a compute node can request the runtime overlay. While generally there is nothing super "secure" in these overlays, this adds the necessary protection that the user's can not obtain this information.
- `nfs:exports`: Warewulf will automatically set up the NFS exports if you wish for it to do this. 

## nodes.conf

The `nodes.conf` is the primary database file for all compute nodes. It is a flat text YAML configuration file that is managed by the `wwctl` command but some sites manage the compute nodes and infrastructure via configuration management. This file being flat text and very light weight makes management of the node configurations very easy no matter what your configuration paradigm is.

For the purpose of this document, we will not go into the detailed format of this file as it is recommended to edit with the `wwctl` command.

> note: This configuration is not written at install time, but the first time you attempt to run `wwctl`, this file will be generated if it does not exist already.

## hosts.tmpl

The `hosts.tmpl` is a _text/template_ file that can be used to rewrite the control node's `/etc/hosts` file with the command `wwctl configure hosts`.

## Directories

There are two directories in the `/etc/warewulf/` directory, these are `ipxe` and `dhcp`. Both of these directories contain _text/templates_ that are used by the Warewulf configuration process.