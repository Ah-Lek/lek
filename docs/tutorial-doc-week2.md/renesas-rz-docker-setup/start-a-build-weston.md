---
sidebar_position: 12
---

# 12. Start a Build (Core-Image-Weston)

Run the commands below to start a build. In this tutorial, you will build the **Core-Image-Weston**, building this image can take up to a few hours depending on the user’s host system performance. Please always check for remaining free space of the harddisk.

```
MACHINE=smarc-rzg2l bitbake core-image-weston
```

Sometimes there are some error message shown and the build stop at a certain percentage of progress. It is possible caused by fetch operation (network problem) or sometimes the dependency of the packages was not set properly. Don't worry, you can try to execute the same command again, it is possible to move on for a while. A succefully Yocto build not always at the first try.

After the installation, it will show the result like this:

![alt text](<WhatsApp Image 2024-11-28 at 12.52.41_579a3611.jpg>)