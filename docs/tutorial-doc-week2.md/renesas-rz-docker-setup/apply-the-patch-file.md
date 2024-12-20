---
sidebar_position: 7
---

# 7. Apply the Patch File 

When you use the early version of the RZ/G2L LSI, please run the commands below to apply the patch files. You need to apply a patch file that suitable for your version. In this tutorial, the package version we used is **v3.0.6**.

Apply a patch file to update vlp to update3.
```
patch -p1 < ../RTK0EF0045Z0021AZJ-v3.0.6-update3/vlpg306-to-vlpg306update3.patch
```

![alt text](<WhatsApp Image 2024-11-27 at 19.13.23_330bad30.jpg>)

You are required to download the patch file for [GStramer Moil Plugin](https://m11158002.github.io/moil-renesas/assets/files/0001-gstreamer-moil-plugin-91a25cd4d16fc479aefd2aa853466770.patch) and Qt [Smart Home URL](https://m11158002.github.io/moil-renesas/assets/files/0002-fix_qtsmarthome_url-db1d20dcf1b5af60dc7034e78271ddc2.patch).

After download the patch file, please move them into the Yocto directory.

![alt text](<WhatsApp Image 2024-11-27 at 19.18.33_f05af07e.jpg>)

Next, you need to apply a patch file to add the GStreamer Moil Plugin. **Please make sure you are previous in Yocto directory and you need to tab the "Tab Key" to replace in order to complete the file address**

```
patch -p1 < 0001-gstreamer-moil-plugin.patch
```

Apply a patch file to fix the Qt Smart Home URL.

```
patch -p1 < 0002-fix_qtsmarthome_url.patch
```

![alt text](<WhatsApp Image 2024-11-27 at 19.29.18_7072cabc.jpg>)


Next, you should move to the working directory "meta-renesas" and download the extras patch file.

```
cd meta-renesas
```

![alt text](<WhatsApp Image 2024-11-27 at 19.20.17_91caeb3e.jpg>)


Apply a patch file extras.

```
patch -p1 < ../extra/0001-rz-common-recipes-debian-buster-glibc-update-to-v2.2.patch
```

```
patch -p1 < ../extra/0001-rz-common-linux-update-linux-kernel-to-the-latest-re.patch
```

```
patch -p1 < ../extra/0001-rz-common-gst-plugins-bad-Depending-bayer2raw-if-lay.patch
```

![alt text](<WhatsApp Image 2024-11-27 at 19.23.03_c5de8b10.jpg>)