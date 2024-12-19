---
sidebar_position: 6
---

# 6. Create Yocto Directory

You need to create a working directory at your home directory, and decompress Yocto recipe package.

Make the working directory on your Linux PC.
```
mkdir yocto
```

![alt text](<WhatsApp Image 2024-11-27 at 19.06.03_89dbf4a6.jpg>)

Move to the working directory to extract the package file.

```
cd yocto
```

Extract RZ/G Verified Linux Package tar.gz file.
```
tar zxvf ../RTK0EF0045Z0021AZJ-v3.0.6-update3/rzg_vlp_v3.0.6.tar.gz
```

Extract RZ/G Graphics Package tar.gz file.
```
tar zxvf ../RTK0EF0045Z13001ZJ-v1.2.2_EN/meta-rz-features_graphics_v1.2.2.tar.gz
```

Extract RZ/G Codecs Package tar.gz file.
```
tar zxvf ../RTK0EF0045Z15001ZJ-v1.2.2_EN/meta-rz-features_codec_v1.2.2.tar.gz
```

After extract the file, please check working directory to confirm the package contents.

```
ls -l
```

If the above command prints followings, the package is extracted correctly and will be shown like this.

![alt text](<WhatsApp Image 2024-11-27 at 19.10.31_50600511.jpg>)

