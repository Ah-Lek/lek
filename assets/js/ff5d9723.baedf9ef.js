"use strict";(self.webpackChunkahlek=self.webpackChunkahlek||[]).push([[9117],{7390:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"tutorial-doc-week4.md/qt-cross-platform-development/qt-creator-installation","title":"3. Qt Creator Installation","description":"Please install Qt5.6.3 in Ubuntu 22.04, we\'ll use it as our mainly used version. Download and install Qt from the below,","source":"@site/docs/tutorial-doc-week4.md/qt-cross-platform-development/qt-creator-installation.md","sourceDirName":"tutorial-doc-week4.md/qt-cross-platform-development","slug":"/tutorial-doc-week4.md/qt-cross-platform-development/qt-creator-installation","permalink":"/lek/docs/tutorial-doc-week4.md/qt-cross-platform-development/qt-creator-installation","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"practicalSidebar","previous":{"title":"2. Prepare the Toolchain","permalink":"/lek/docs/tutorial-doc-week4.md/qt-cross-platform-development/prepare-the-toolchain"},"next":{"title":"4. Build Qt Project","permalink":"/lek/docs/tutorial-doc-week4.md/qt-cross-platform-development/build-qt-project"}}');var i=n(4848),o=n(8453);const r={sidebar_position:3},a="3. Qt Creator Installation",l={},c=[];function d(e){const t={a:"a",code:"code",h1:"h1",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"3-qt-creator-installation",children:"3. Qt Creator Installation"})}),"\n",(0,i.jsx)(t.p,{children:"Please install Qt5.6.3 in Ubuntu 22.04, we'll use it as our mainly used version. Download and install Qt from the below,"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://download.qt.io/new_archive/qt/5.6/5.6.3/",children:"Qt5.6.3 Download"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"alt text",src:n(7959).A+"",width:"773",height:"68"})}),"\n",(0,i.jsx)(t.p,{children:"Before running of Qt Creator, we need to set the environment variables. Open a terminal window, paste the commands,"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"unset LD_LIBRARY_PATH\n\nsource /opt/poky/3.1.31/environment-setup-aarch64-poky-linux\n"})}),"\n",(0,i.jsx)(t.p,{children:"Run Qtcreator ( Qt5.6.3 )"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"cd ~/Qt5.6.3/Tools/QtCreator/bin/\n./qtcreator\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"alt text",src:n(927).A+"",width:"957",height:"552"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Everytime running the Qt Creator, we need to set the environment variables first."})}),"\n",(0,i.jsxs)(t.p,{children:["Select the menu of Qt Creator ",(0,i.jsx)(t.code,{children:"Tools/ External/ Configure"}),". On the left side, click on Devices, Input the IP of RZ/G2L, click ",(0,i.jsx)(t.code,{children:"Test"})," to start connection test."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"alt text",src:n(9228).A+"",width:"1312",height:"622"})}),"\n",(0,i.jsx)(t.p,{children:'Click on Build & Run on the left, Choose Kits, Then Add, Set Name as "RZ/G2L", Set C/C++ Compiler, Debugger, Qt Version, alternatively you can click on the Manager on the right side, add and set the paths, or Choose from the Tabs on the upper items(Qt Version/ Compiler/ Debuggers ). Set all of the settings.'}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"alt text",src:n(6741).A+"",width:"944",height:"530"})}),"\n",(0,i.jsx)(t.p,{children:"The below is a settings example:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Device : Select the Device in the previous step,"}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Sysroot : /opt/poky/3.1.31/sysroots/aarch64-poky-linux"}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"C Compiler : /opt/poky/3.1.31/sysroots/x86_64-pokysdk-linux/usr/bin/aarch64-poky-linux/aarch64-poky-linux-gcc"}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"C++ Compiler : /opt/poky/3.1.31/sysroots/x86_64-pokysdk-linux/usr/bin/aarch64-poky-linux/aarch64-poky-linux-g++"}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Debugger : /opt/poky/3.1.31/sysroots/x86_64-pokysdk-linux/usr/bin/aarch64-poky-linux/aarch64-poky-linux-gdb"}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Qt Version : /opt/poky/3.1.31/sysroots/x86_64-pokysdk-linux/usr/bin/qt5/qmake"}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"cmake : /opt/poky/3.1.31/sysroots/x86_64-pokysdk-linux/usr/bin/cmake"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Screen captures for your reference,"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"alt text",src:n(9460).A+"",width:"932",height:"522"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"alt text",src:n(589).A+"",width:"1093",height:"604"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"alt text",src:n(8866).A+"",width:"1098",height:"607"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"alt text",src:n(9371).A+"",width:"1095",height:"606"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"alt text",src:n(5552).A+"",width:"1095",height:"610"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"alt text",src:n(1801).A+"",width:"1100",height:"605"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"alt text",src:n(2414).A+"",width:"1098",height:"614"})}),"\n",(0,i.jsx)(t.p,{children:"After the settings, please make sure there are no exclamation on the Kits icon, or you need to check if there are some errors need to be fixed."})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},7959:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/image-1-792c9d325035952946b4e09e3985e133.png"},9228:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/image-2-d256b3b73ca11043d73fc6453d1877b7.png"},927:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/image-21-9eaf67ed51e10f43f9573b992897bc1a.png"},9460:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/image-22-344a573a577316f57abfdb23b64a817e.png"},589:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/image-23-4bb935668d531024cfce4fc7f8865849.png"},8866:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/image-24-fc2664863f3e144e1eb5e188bf8856d5.png"},9371:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/image-25-132559f926dd62533d96c05755cd6559.png"},5552:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/image-26-ab13b7fc9946cc08ad2ca340f4bb995b.png"},1801:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/image-27-7f67ef74c5945d05ee10785ae9f62bd8.png"},2414:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/image-28-6cba9ccb81633e5924d6823f667460d6.png"},6741:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/image-3-eeede287b6313acd5b8ba8f39478763b.png"},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var s=n(6540);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);