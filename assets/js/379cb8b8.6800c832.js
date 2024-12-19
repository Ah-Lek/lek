"use strict";(self.webpackChunkahlek=self.webpackChunkahlek||[]).push([[793],{8230:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>i,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"tutorial-doc.md/renesas-rz-docker-setup/yocto-configuration","title":"10. RZ/G2L-EVKIT Yocto Configuration","description":"Before you run the Yocto package, you need to do the configuration. You need add the configuration command inside the local.conf.","source":"@site/docs/tutorial-doc.md/renesas-rz-docker-setup/yocto-configuration.md","sourceDirName":"tutorial-doc.md/renesas-rz-docker-setup","slug":"/tutorial-doc.md/renesas-rz-docker-setup/yocto-configuration","permalink":"/lek/docs/tutorial-doc.md/renesas-rz-docker-setup/yocto-configuration","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"sidebar_position":10},"sidebar":"practicalSidebar","previous":{"title":"9. Add Layers","permalink":"/lek/docs/tutorial-doc.md/renesas-rz-docker-setup/add-layers"},"next":{"title":"11. Download RZ/G2L- EVKIT Yocto Package","permalink":"/lek/docs/tutorial-doc.md/renesas-rz-docker-setup/download-yocto-package"}}');var r=t(4848),c=t(8453);const s={sidebar_position:10},a="10. RZ/G2L-EVKIT Yocto Configuration",i={},d=[];function u(e){const o={code:"code",h1:"h1",header:"header",img:"img",p:"p",pre:"pre",strong:"strong",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.header,{children:(0,r.jsx)(o.h1,{id:"10-rzg2l-evkit-yocto-configuration",children:"10. RZ/G2L-EVKIT Yocto Configuration"})}),"\n",(0,r.jsxs)(o.p,{children:["Before you run the Yocto package, you need to do the configuration. You need add the configuration command inside the ",(0,r.jsx)(o.strong,{children:"local.conf"}),"."]}),"\n",(0,r.jsx)(o.p,{children:'First, you need to open the "yocto" folder, cleck "build", click "conf" and click inside "local.conf". Please paste these command:'}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{children:'QT_DEMO = "1"\n\nIMAGE_INSTALL_append = " kernel-module-uvcvideo "\nEXTRA_IMAGE_FEATURES_append = " ssh-server-openssh "\n\nIMAGE_INSTALL_append = " curl graphviz "\nIMAGE_INSTALL_append = " gst-instruments gst-shark"\nPACKAGECONFIG_append_pn-gstreamer1.0 = " tracer-hooks "\n'})}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.img,{alt:"alt text",src:t(1099).A+"",width:"1080",height:"498"})})]})}function l(e={}){const{wrapper:o}={...(0,c.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},1099:(e,o,t)=>{t.d(o,{A:()=>n});const n=t.p+"assets/images/WhatsApp Image 2024-11-27 at 20.12.52_b6520444-4e3d37c7f479529ebf6ddce7a5c0966c.jpg"},8453:(e,o,t)=>{t.d(o,{R:()=>s,x:()=>a});var n=t(6540);const r={},c=n.createContext(r);function s(e){const o=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(c.Provider,{value:o},e.children)}}}]);