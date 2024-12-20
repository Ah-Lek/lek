---
sidebar_position: 1
---

# 1. Overview

In the previous sections, we build the Linux image using Yocto project. Here we would like to add our own code into the Yocto project as a part of the Linux image. Finally the executable from the source code can be run on the target Renesas RZ/G2L.

We partice adding a simple "hello world" to our project. First, we need to edit, compile the execute this "hello world" program on our Ubuntu 22.04 development platform, then we prepare a folder for the source program and other necessary files like .bb receipe file and .conf file. All of those files are required for the Yocto project.

Once we successfully build the Yocto project to the Linux image, run the executable on Renesas RZ/G2L to check if it did work.