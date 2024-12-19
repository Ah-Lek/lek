"use strict";(self.webpackChunkahlek=self.webpackChunkahlek||[]).push([[5865],{4294:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>A,frontMatter:()=>c,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tutorial-doc.md/gstreamer/editing-rcompiling-yocto-project","title":"5. Editing Recipes and Recompiling Yocto Project","description":"Please ensure you already have a Docker container for Yocto project compilation.","source":"@site/docs/tutorial-doc.md/gstreamer/editing-rcompiling-yocto-project.md","sourceDirName":"tutorial-doc.md/gstreamer","slug":"/tutorial-doc.md/gstreamer/editing-rcompiling-yocto-project","permalink":"/lek/docs/tutorial-doc.md/gstreamer/editing-rcompiling-yocto-project","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"practicalSidebar","previous":{"title":"4. Preparing gst-plugins-bad Project for Yocto Compilation","permalink":"/lek/docs/tutorial-doc.md/gstreamer/preparing-project-for-yocto"},"next":{"title":"6. GStreamer Streaming Tests","permalink":"/lek/docs/tutorial-doc.md/gstreamer/gstreamer-streaming-tests"}}');var i=t(4848),o=t(8453);const c={sidebar_position:5},s="5. Editing Recipes and Recompiling Yocto Project",a={},d=[];function l(e){const n={code:"code",h1:"h1",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"5-editing-recipes-and-recompiling-yocto-project",children:"5. Editing Recipes and Recompiling Yocto Project"})}),"\n",(0,i.jsx)(n.p,{children:"Please ensure you already have a Docker container for Yocto project compilation."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Open the ",(0,i.jsx)(n.code,{children:".bbappend"})," file in the Yocto environment."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"meta-renesas/meta-rz-common/recipes-multimedia/gstreamer/gstreamer1.0-plugins-bad_1.16.3.bbappend\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"Add the GitHub repository."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'SRC_URI_append = " \\\ngit://github.com/Ah-Lek/gst-plugins-bad.git;branch=RCAR-GEN3e/1.16.3 \\\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"alt text",src:t(344).A+"",width:"1345",height:"286"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"Insert the commit ID."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'SRCREV="<commit ID>"\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"alt text",src:t(7558).A+"",width:"418",height:"39"})}),"\n",(0,i.jsx)(n.p,{children:"You can also find your commit ID from Github."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"alt text",src:t(7885).A+"",width:"1824",height:"190"})}),"\n",(0,i.jsx)(n.p,{children:"Compile the Yocto image and write it to an SD card, but don't forget to initialize and build image before you compile:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"sudo bmaptool copy <image>.wic.gz /dev/sdX\n"})}),"\n",(0,i.jsx)(n.p,{children:"Then we can perform testings on RZ/G2L. Boot the RZ/G2L board and verify if the library exist with:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"gst-inspect-1.0 equirectangular\n"})}),"\n",(0,i.jsx)(n.p,{children:"The output would be as below, it reveal the exist of equirectangular element in the Gstreamer library"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"alt text",src:t(7636).A+"",width:"1536",height:"1152"})}),"\n",(0,i.jsx)(n.p,{children:"Prepare working directories in RZ/G2L,"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"cd /home/root\nmkdir gst-work\ncd gst-work\n"})}),"\n",(0,i.jsx)(n.p,{children:"Please transfer your test data from PC to RZ/G2L:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"scp -r user@IP:/path/to/test_env/* .\n\nFor example, \n\nscp -r skc@192.168.0.105:/home/skc/gst-work/gst-plugins-bad-dev/test_env/* .\n* .\n"})}),"\n",(0,i.jsx)(n.p,{children:"Please note that, the user@IP is from the RZ/G2L. You can try to find with command below:"}),"\n",(0,i.jsx)(n.p,{children:"To check the User."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"whoami\n"})}),"\n",(0,i.jsx)(n.p,{children:"To check the IP address."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"ifconfig\n"})})]})}function A(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},344:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/image-16-dc19f3482980fa909f1637b21e5794ca.png"},7558:(e,n,t)=>{t.d(n,{A:()=>r});const r="data:image/png;base64,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"},7885:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/image-22-66aa5c17fa0fcc670f4bd7dcae615a5a.png"},7636:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/image-23-242b5c37cd61bf51682b182c1abf34de.png"},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>s});var r=t(6540);const i={},o=r.createContext(i);function c(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);