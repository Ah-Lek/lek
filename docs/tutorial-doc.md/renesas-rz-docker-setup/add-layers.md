---
sidebar_position: 9
---

# 9. Add Layers

Please follow the below steps to add the necessary layers you need. The steps add the settings to bblayers.conf (configration file for layers).

- Graphics: Please run the below command if you need the Graphics library.

```
bitbake-layers add-layer ../meta-rz-features/meta-rz-graphics
```

- Video Codec: Please run the below command if you need the video codec library.

```
bitbake-layers add-layer ../meta-rz-features/meta-rz-codecs
```

- Qt: Please run the below commands if you want to include Qt.

```
bitbake-layers add-layer ../meta-qt5
```

![alt text](<WhatsApp Image 2024-11-27 at 19.37.15_ec1989e9.jpg>)