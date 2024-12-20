---
sidebar_position: 7
---

# 7. Displaying the Network Streaming

GStreamer works on all major operating systems and can bridge to other multimedia frameworks. We implement MOIL image functions on different platform, the goal is to distribute tasks base on Gstreamer efficiently across platforms with varying computational power while maintaining system coherence via network streaming.

X, Y maps are precomputed on powerful PCs for efficiency. The current implementation focuses on equirectangular for a full 360 degree streaming. The reciver side can do futher processing like 360 dewarping for some specific angles( Anypoint ), or we can prepare quad view map, the server continuously send the mapped image streaming out. All the fisheye related processing has been done on the server side. So the client doesn't need the parameters of the fisheye camera.

Network streaming resolution is limited to 2048x1536, potentially a bottleneck for high-resolution applications.

Successful implementation on RZ/G2L with MOIL transformation enables streaming to PCs, paving the way for future embedded applications development.

Alternatives to H.264 may be considered for better processing performance.

Next, we'll try to connect MOIL Gstreamer equirectangular stream to VLC Player, PotPlayer and Pannellum view for the web.

VLC Player : [VLC Player](https://www.videolan.org/vlc/index.html)

PotPlayer: [Pot Player](https://potplayer.daum.net/)

Pannellum : [Pannellum](https://pannellum.org/download/)
