---
sidebar_position: 8
---

# 8. Build Initialize

Next, you need to initialize a build using the oe-init-build-env script in Poky and set environment variable TEMPLATECONF to the below path. **Everytime you build the image, you must initialize the enviroment variable**.

```
TEMPLATECONF=$PWD/meta-renesas/meta-rzg2l/docs/template/conf/ source poky/oe-init-build-env build
```

![alt text](<WhatsApp Image 2024-11-27 at 19.34.03_6627eba1.jpg>)

