---
sidebar_position: 2
---

# 2. Linux GPIO Driver

sysfs is a pseudo file system provided by the Linux kernel that exports information about various kernel subsystems, hardware devices, and associated device drivers from the kernel's device model to user space through virtual files. In addition to providing information about various devices and kernel subsystems, exported virtual files are also used for their configuration.

In Linux, we usually use these 2 simple commands to access files

- READ content from a file

```
cat filename
```

- WRITE content to a file

```
echo xxx > filename
```

Let's us start to build Linux GPIO Sysfs Interface, please reference to the document first.

[https://www.kernel.org/doc/Documentation/gpio/sysfs.txt](https://www.kernel.org/doc/Documentation/gpio/sysfs.txt)

These are some important steps:

1) Ask kernel for the control privilege

```
/sys/class/gpio/
```

For example, to get the control privilege of GPIO19

```
cd /sys/class/gpio
echo 19 > export  74
```

2) Set read/write direction,

```
/sys/class/gpio/gpioN/
```

For example,

```
echo "out" direction
```

We actually input the below Linux commands on Renesas RZ/G2L

```
cd /sys/class/gpio
echo 19 > export
```

We would get the below error message:

```
invalid argument
```

Since that GPIO number doesn't exist,