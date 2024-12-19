"use strict";(self.webpackChunkahlek=self.webpackChunkahlek||[]).push([[6547],{7682:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"tutorial-doc.md/renesas-rz-docker-setup/add-layers","title":"9. Add Layers","description":"Please follow the below steps to add the necessary layers you need. The steps add the settings to bblayers.conf (configration file for layers).","source":"@site/docs/tutorial-doc.md/renesas-rz-docker-setup/add-layers.md","sourceDirName":"tutorial-doc.md/renesas-rz-docker-setup","slug":"/tutorial-doc.md/renesas-rz-docker-setup/add-layers","permalink":"/lek/docs/tutorial-doc.md/renesas-rz-docker-setup/add-layers","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"sidebar_position":9},"sidebar":"practicalSidebar","previous":{"title":"8. Build Initialize","permalink":"/lek/docs/tutorial-doc.md/renesas-rz-docker-setup/build-initialize"},"next":{"title":"10. RZ/G2L-EVKIT Yocto Configuration","permalink":"/lek/docs/tutorial-doc.md/renesas-rz-docker-setup/yocto-configuration"}}');var n=r(4848),a=r(8453);const o={sidebar_position:9},d="9. Add Layers",i={},c=[];function l(e){const t={code:"code",h1:"h1",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"9-add-layers",children:"9. Add Layers"})}),"\n",(0,n.jsx)(t.p,{children:"Please follow the below steps to add the necessary layers you need. The steps add the settings to bblayers.conf (configration file for layers)."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Graphics: Please run the below command if you need the Graphics library."}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"bitbake-layers add-layer ../meta-rz-features/meta-rz-graphics\n"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Video Codec: Please run the below command if you need the video codec library."}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"bitbake-layers add-layer ../meta-rz-features/meta-rz-codecs\n"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Qt: Please run the below commands if you want to include Qt."}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"bitbake-layers add-layer ../meta-qt5\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"alt text",src:r(3325).A+"",width:"1080",height:"177"})})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},3325:(e,t,r)=>{r.d(t,{A:()=>s});const s=r.p+"assets/images/WhatsApp Image 2024-11-27 at 19.37.15_ec1989e9-dac8eb10fdcce030cacb76ad80eaae8e.jpg"},8453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>d});var s=r(6540);const n={},a=s.createContext(n);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);