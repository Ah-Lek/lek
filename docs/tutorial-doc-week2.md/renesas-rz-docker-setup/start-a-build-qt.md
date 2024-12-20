---
sidebar_position: 13
---

# 13. Start a Build (Core-Image-Qt)

You also need to build the **Core-Image-Qt**, before you build the image, please make sure to initialize the build enviroment again.

```
source poky/oe-init-build-env build
```

![alt text](<WhatsApp Image 2024-11-28 at 14.30.15_77af5df7.jpg>)

 After that, run the commands below to start a build of Core-Image-Qt. Building an image can take up to a few hours depending on the user’s host system performance. Please always check for remaining free space of the harddisk.

```
MACHINE=smarc-rzg2l bitbake core-image-qt
```

Sometimes there are some error message shown and the build stop at a certain percentage of progress. It is possible caused by fetch operation (network problem) or sometimes the dependency of the packages was not set properly. Don't worry, you can try to execute the same command again, it is possible to move on for a while. A succefully Yocto build not always at the first try.

After the installation, it will show like this:

![alt text](<WhatsApp Image 2024-11-28 at 18.08.04_ac127dcb.jpg>)
