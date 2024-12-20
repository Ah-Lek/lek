"use strict";(self.webpackChunkahlek=self.webpackChunkahlek||[]).push([[5373],{1671:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>n,toc:()=>a});const n=JSON.parse('{"id":"tutorial-doc-week2.md/renesas-rz-docker-setup/write-files-to-the-mircosd-card","title":"14. Write Files to the MicroSD Card (Used Wic Image)","description":"After complete build the core-image-weston and core-image-qt, please download this file by using this command.","source":"@site/docs/tutorial-doc-week2.md/renesas-rz-docker-setup/write-files-to-the-mircosd-card.md","sourceDirName":"tutorial-doc-week2.md/renesas-rz-docker-setup","slug":"/tutorial-doc-week2.md/renesas-rz-docker-setup/write-files-to-the-mircosd-card","permalink":"/lek/docs/tutorial-doc-week2.md/renesas-rz-docker-setup/write-files-to-the-mircosd-card","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":14,"frontMatter":{"sidebar_position":14},"sidebar":"practicalSidebar","previous":{"title":"13. Start a Build (Core-Image-Qt)","permalink":"/lek/docs/tutorial-doc-week2.md/renesas-rz-docker-setup/start-a-build-qt"},"next":{"title":"15. Booting and Running Linux","permalink":"/lek/docs/tutorial-doc-week2.md/renesas-rz-docker-setup/booting-and-running-linux"}}');var s=r(4848),i=r(8453);const o={sidebar_position:14},c="14. Write Files to the MicroSD Card (Used Wic Image)",d={},a=[];function l(e){const t={code:"code",h1:"h1",header:"header",img:"img",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"14-write-files-to-the-microsd-card-used-wic-image",children:"14. Write Files to the MicroSD Card (Used Wic Image)"})}),"\n",(0,s.jsxs)(t.p,{children:["After complete build the ",(0,s.jsx)(t.strong,{children:"core-image-weston"})," and ",(0,s.jsx)(t.strong,{children:"core-image-qt"}),", please download this file by using this command."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"wget http://192.168.113.104/rz/orig/rzg/smarc-rzg2l.tar.gz\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"alt text",src:r(3970).A+"",width:"1080",height:"164"})}),"\n",(0,s.jsx)(t.p,{children:"After that, please check the output directory."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"cd build/tmp/deploy/images/smarc-rag2l/\n"})}),"\n",(0,s.jsx)(t.p,{children:"The output files of the build will show these files."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"core-image-qt-smarc-rzg2l.wic.gz\ncore-image-qt-smarc-rzg2l.wic.bmap\n"})}),"\n",(0,s.jsx)(t.p,{children:"Exit Docker image and insert SD card to Linux PC. And check the mount device name with fdisk command."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"sudo fdisk -l\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"alt text",src:r(4502).A+"",width:"784",height:"301"})}),"\n",(0,s.jsxs)(t.p,{children:["At the end, expand the disk image for ",(0,s.jsx)(t.strong,{children:"core-image-weston"})," and ",(0,s.jsx)(t.strong,{children:"core-image-qt"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Run the following command to expand the weston image."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"sudo bmaptool copy core-image-weston-smarc-rzg2l.wic.gz /dev/sda\n"})}),"\n",(0,s.jsx)(t.p,{children:"Run the following command to expand the qt image."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"sudo bmaptool copy core-image-qt-smarc-rzg2l.wic.gz /dev/sda\n"})}),"\n",(0,s.jsx)(t.p,{children:"At the end, remove SD card and insert it to RZ/G2L and boot up. Now you can click on the Qt Demo items or open a terminal then input some commands for the test."})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},3970:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/WhatsApp Image 2024-11-28 at 13.10.48_928cbaea-4ba45d6a8ef9d49ad81ad65a1c1bceec.jpg"},4502:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/WhatsApp Image 2024-11-28 at 13.26.56_951e750c-43f831980de3f3ac72de81f003afc704.jpg"},8453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>c});var n=r(6540);const s={},i=n.createContext(s);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);