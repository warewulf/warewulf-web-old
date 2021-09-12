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

This allows us to pre-configure a node before `/sbin/init` is called and it is important for service configurations that are normally necessary by the boot process. A simple example of this is the networking configuration as this subsystem is responsible for initializing network and all following services like NFS mounts, OpenSSH, resource manager configurations, directory services, etc. Another example would be the `/etc/fstab` file, as that is generally needed to properly setup the node file systems.

## Runtime Overlay
After the system has been provisioned (post `/sbin/init`) the Runtime Overlay provides a mechanism to update configurations that may change in-between node reboots. Examples of what would go into the Runtime Overlay are user and group files.

The runtime overlay is technically outside of the provisioning process as it normally runs via a client program (`wwclient`) which is provisioned to every node via the System Overlay. `wwclient` will poll the Warewulf service running on the control node at periodic intervals and will download updates if they are available.


## Where Do I Put ________?
One of the most frequently asked questions about Warewulf is, "Where do I put `$FILE`?". The answer is always, it depends on the file. 

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

## Using Overlays

(coming soon)

## Templates
Files within overlays can be both static as well as contain dynamic content. Warewulf uses the `text/template` engine to facilitate implementing dynamic content in a simple and standardized manner.

All template files will end with the suffix of `.ww`. That tells Warewulf that when building a file, that it should parse that file as a template. When it does that, the resulting file is static and can have node customizations that are obtained from the node configuration attributes.

> note: When the file is persisted within the built overlay, the `.ww` will be dropped, so `/etc/hosts.ww` will end up being `/etc/hosts`.