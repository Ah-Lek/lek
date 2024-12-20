"use strict";(self.webpackChunkahlek=self.webpackChunkahlek||[]).push([[4723],{3987:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"tutorial-doc-week4.md/hardware-gpio/hardware-testing","title":"6. Hardware Testing","description":"6.1 PMOD Interface","source":"@site/docs/tutorial-doc-week4.md/hardware-gpio/hardware-testing.md","sourceDirName":"tutorial-doc-week4.md/hardware-gpio","slug":"/tutorial-doc-week4.md/hardware-gpio/hardware-testing","permalink":"/lek/docs/tutorial-doc-week4.md/hardware-gpio/hardware-testing","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_position":6},"sidebar":"practicalSidebar","previous":{"title":"5. Control GPIO using C++ Class in Qt Project","permalink":"/lek/docs/tutorial-doc-week4.md/hardware-gpio/control-gpio-using-c++"}}');var o=n(4848),i=n(8453);const s={sidebar_position:6},a="6. Hardware Testing",d={},c=[{value:"6.1 PMOD Interface",id:"61-pmod-interface",level:2},{value:"6.2 PMOD Button:",id:"62-pmod-button",level:2},{value:"6.3 PMOD Led :",id:"63-pmod-led-",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"6-hardware-testing",children:"6. Hardware Testing"})}),"\n",(0,o.jsx)(t.h2,{id:"61-pmod-interface",children:"6.1 PMOD Interface"}),"\n",(0,o.jsx)(t.p,{children:"Pmod interface (peripheral module interface) is an open standard defined by Digilent in the Pmod Interface Specification for connecting peripheral modules to FPGA and microcontroller development boards using 6 pins. Pmod or Pmods may also refer to modules compatible with the Pmod interface."}),"\n",(0,o.jsx)(t.p,{children:"Pmods come with a standard 6-pin interface of 4 signals, one ground and one power pin."}),"\n",(0,o.jsx)(t.p,{children:"PIN#5 = GND"}),"\n",(0,o.jsx)(t.p,{children:"PIN#6 = Vcc"}),"\n",(0,o.jsx)(t.p,{children:"Pmods can use either SPI, I2C or UART protocol. We will test GPIO pins using PMOD button and PMOD Led small board."}),"\n",(0,o.jsx)(t.h2,{id:"62-pmod-button",children:"6.2 PMOD Button:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://digilent.com/reference/pmod/pmodbtn/start",children:"PMOD Button"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"alt text",src:n(5216).A+"",width:"600",height:"558"})}),"\n",(0,o.jsx)(t.h2,{id:"63-pmod-led-",children:"6.3 PMOD Led :"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://digilent.com/reference/pmod/pmodled/start",children:"PMOD Led"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"alt text",src:n(1465).A+"",width:"600",height:"562"})}),"\n",(0,o.jsx)(t.p,{children:"Clone and build the below Github repository:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://github.com/yourskc/q563_rzgpio/",children:"https://github.com/yourskc/q563_rzgpio/"})}),"\n",(0,o.jsx)(t.p,{children:"For the matching to the configurations in our software program, plug the PMOD board to Renesas RZ/G2L. Connect the Led board to the lower pins of PMOD0 on Renesas carrier board, and connect the button board to the lower pins of PMOD1."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"alt text",src:n(5902).A+"",width:"500",height:"667"})}),"\n",(0,o.jsx)(t.p,{children:"Transfer the executable q563_rzgpio to Renesas RZ/G2L, then run it,"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"./q563_rzgpio\n"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"alt text",src:n(5127).A+"",width:"380",height:"423"})}),"\n",(0,o.jsx)(t.p,{children:"This is a two-way test, click the button on the screen will see the on/off of Led, click on the PMOD buttons will see the color change of the red light on screen."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://www.youtube.com/watch?v=5rZZOqaB67k",children:"Demo Video"})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},5216:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/image-6-f68df0c01570d72fd1fbc930cdab8fa2.png"},1465:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/image-7-50ba3f6944de17c4d03b1642cf9ed62f.png"},5902:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/image-8-87964614cb9870a5f89828e853059ba1.png"},5127:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/image-9-33caa0fb17c120bc49903bb53476849f.png"},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var r=n(6540);const o={},i=r.createContext(o);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);