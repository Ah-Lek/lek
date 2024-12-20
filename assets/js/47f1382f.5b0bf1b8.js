"use strict";(self.webpackChunkahlek=self.webpackChunkahlek||[]).push([[1322],{606:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>d,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"tutorial-doc-week2.md/yocto-layer-and-recipe/docker-image-hello-world","title":"5. Run Docker Image \\"Hello, World!\\"","description":"Please insert the MicroSD Card and you need to initialize the build enviroment again in docker.","source":"@site/docs/tutorial-doc-week2.md/yocto-layer-and-recipe/docker-image-hello-world.md","sourceDirName":"tutorial-doc-week2.md/yocto-layer-and-recipe","slug":"/tutorial-doc-week2.md/yocto-layer-and-recipe/docker-image-hello-world","permalink":"/lek/docs/tutorial-doc-week2.md/yocto-layer-and-recipe/docker-image-hello-world","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"practicalSidebar","previous":{"title":"4. Add the Configuration","permalink":"/lek/docs/tutorial-doc-week2.md/yocto-layer-and-recipe/add-the-configuration"},"next":{"title":"Tutorial Docs (Week 3)","permalink":"/lek/docs/category/tutorial-docs-week-3-1"}}');var r=t(4848),a=t(8453);const d={sidebar_position:5},i='5. Run Docker Image "Hello, World!"',c={},l=[];function s(e){const o={code:"code",h1:"h1",header:"header",img:"img",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.header,{children:(0,r.jsx)(o.h1,{id:"5-run-docker-image-hello-world",children:'5. Run Docker Image "Hello, World!"'})}),"\n",(0,r.jsx)(o.p,{children:"Please insert the MicroSD Card and you need to initialize the build enviroment again in docker."}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{children:"source poky/oe-init-build-env build\n"})}),"\n",(0,r.jsx)(o.p,{children:"After that, run the commands below to start a build of Core-Image-Qt."}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{children:"sudo bmaptool copy core-image-qt-smarc-rzg2l.wic.gz /dev/sda\n"})}),"\n",(0,r.jsxs)(o.p,{children:["At the end, remove SD card and insert it to RZ/G2L and press the RESET button to boot up. Same as the previous tutorial, press ",(0,r.jsx)(o.strong,{children:"root"}),' to run the program. You can run the commands to get the docker image of "',(0,r.jsx)(o.strong,{children:"Hello, World!"}),'" and run the image']}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.img,{alt:"alt text",src:t(3456).A+"",width:"221",height:"68"})})]})}function p(e={}){const{wrapper:o}={...(0,a.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}},3456:(e,o,t)=>{t.d(o,{A:()=>n});const n="data:image/png;base64,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"},8453:(e,o,t)=>{t.d(o,{R:()=>d,x:()=>i});var n=t(6540);const r={},a=n.createContext(r);function d(e){const o=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),n.createElement(a.Provider,{value:o},e.children)}}}]);