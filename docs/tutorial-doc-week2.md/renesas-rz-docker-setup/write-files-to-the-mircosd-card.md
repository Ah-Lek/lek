---
sidebar_position: 14
---

# 14. Write Files to the MicroSD Card (Used Wic Image)

After complete build the **core-image-weston** and **core-image-qt**, please download this file by using this command.

```
wget http://192.168.113.104/rz/orig/rzg/smarc-rzg2l.tar.gz
```

![alt text](<WhatsApp Image 2024-11-28 at 13.10.48_928cbaea.jpg>)


After that, please check the output directory.

```
cd build/tmp/deploy/images/smarc-rag2l/
```

The output files of the build will show these files.

```
core-image-qt-smarc-rzg2l.wic.gz
core-image-qt-smarc-rzg2l.wic.bmap
```

Exit Docker image and insert SD card to Linux PC. And check the mount device name with fdisk command. 


```
sudo fdisk -l
```

![alt text](<WhatsApp Image 2024-11-28 at 13.26.56_951e750c.jpg>)

At the end, expand the disk image for **core-image-weston** and **core-image-qt**.

Run the following command to expand the weston image.

```
sudo bmaptool copy core-image-weston-smarc-rzg2l.wic.gz /dev/sda
```

Run the following command to expand the qt image.

```
sudo bmaptool copy core-image-qt-smarc-rzg2l.wic.gz /dev/sda
```

At the end, remove SD card and insert it to RZ/G2L and boot up. Now you can click on the Qt Demo items or open a terminal then input some commands for the test.