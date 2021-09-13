---
id: kernel
title: Kernel Management
---

## Importing a Kernel
Warewulf nodes require a Linux kernel to boot. There are a number of ways to import a kernel into Warewulf, but this document is going to focus on the easiest and most widely used manner, which is to import it from the host.

If your compute nodes have any special hardware configurations or need any customizations, make and test those customizations on the control node, and when your control node kernel is built and working as you like, you can import it into Warewulf with the following command:

```
$ sudo wwctl kernel import $(uname -r)
4.18.0-305.3.1.el8_4.x86_64: Done
```

This process will import not only the kernel image itself, but also all of the kernel modules and firmware associated to this kernel. 

## Listing All Imported Kernels
Once the kernel has been imported, you can list them all with the following command:

```
$ sudo wwctl kernel list
VNFS NAME                           NODES 
4.18.0-305.3.1.el8_4.x86_64              0
```

Once a kernel has been imported and showing up in this list you can configure it to boot compute nodes.