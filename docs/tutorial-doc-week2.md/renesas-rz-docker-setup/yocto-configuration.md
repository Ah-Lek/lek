---
sidebar_position: 10
---

# 10. RZ/G2L-EVKIT Yocto Configuration

Before you run the Yocto package, you need to do the configuration. You need add the configuration command inside the **local.conf**. 

First, you need to open the "yocto" folder, cleck "build", click "conf" and click inside "local.conf". Please paste these command: 

```
QT_DEMO = "1"

IMAGE_INSTALL_append = " kernel-module-uvcvideo "
EXTRA_IMAGE_FEATURES_append = " ssh-server-openssh "

IMAGE_INSTALL_append = " curl graphviz "
IMAGE_INSTALL_append = " gst-instruments gst-shark"
PACKAGECONFIG_append_pn-gstreamer1.0 = " tracer-hooks "
```

![alt text](<WhatsApp Image 2024-11-27 at 20.12.52_b6520444.jpg>)