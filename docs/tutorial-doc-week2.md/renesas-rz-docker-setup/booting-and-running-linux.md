---
sidebar_position: 15
---

# 15. Booting and Running Linux

1) Please connect USB Type-micro-B cable to CN14

![alt text](image-3.png)

2) Connect USB-PD Power Charger to USB Type-C Connector (CN6). LED1(VBUS Power ON) and LED3 (Module PWR On) lights up.

![alt text](image-4.png)

3) Insert microSD card to slot on carry board.

![alt text](image-6.png)

4) Press the power button(SW9) to turn on the power. **Note: When turn on the power, press and hold the power button for 1 second. When turn off the power, press and hold the power button for 2 seconds**. LED4(Carrier PWR On) lights up

![alt text](image-5.png)

5) Bring up the terminal software and select the “File” > “New Connection” to set the connection on the software. Select the “Setup” > “Serial port” to set the settings about serial communication protocol on the software.

Set the settings about serial communication protocol on a terminal software as below:
- • Speed: 115200 bps
- • Data: 8bit
- • Parity: None
- • Stop bit: 1bit
- • Flow control: None

![alt text](image-7.png)

Press the Blue button (RESET) to boot the program. 

![alt text](<WhatsApp Image 2024-12-02 at 14.17.15_66a89c5d.jpg>)

Press **Root** to login the "smarc-rzg21" and you can start to run the program. 

![alt text](image-8.png)

![alt text](<WhatsApp Image 2024-12-02 at 14.22.28_ac55621c.jpg>)

Congratuations!! You can start your Yocto Project now.