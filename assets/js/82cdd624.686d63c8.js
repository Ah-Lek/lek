"use strict";(self.webpackChunkahlek=self.webpackChunkahlek||[]).push([[8624],{1931:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"tutorial-doc-week1.md/docker-installation/installation-docker","title":"2. Installation and Setup Docker","description":"You can install Docker Engine in different ways, depending on your needs:","source":"@site/docs/tutorial-doc-week1.md/docker-installation/installation-docker.md","sourceDirName":"tutorial-doc-week1.md/docker-installation","slug":"/tutorial-doc-week1.md/docker-installation/installation-docker","permalink":"/lek/docs/tutorial-doc-week1.md/docker-installation/installation-docker","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"practicalSidebar","previous":{"title":"1. Overview","permalink":"/lek/docs/tutorial-doc-week1.md/docker-installation/overview"},"next":{"title":"3. Install the Docker Packages","permalink":"/lek/docs/tutorial-doc-week1.md/docker-installation/install-the-docker-packages"}}');var s=n(4848),r=n(8453);const i={sidebar_position:2},a="2. Installation and Setup Docker",c={},l=[];function d(e){const t={a:"a",code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"2-installation-and-setup-docker",children:"2. Installation and Setup Docker"})}),"\n",(0,s.jsx)(t.p,{children:"You can install Docker Engine in different ways, depending on your needs:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Docker Engine comes bundled with ",(0,s.jsx)(t.a,{href:"https://docs.docker.com/desktop/setup/install/linux/",children:"Docker Desktop for Linux"}),". This is the easiest and quickest way to get started."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Set up and install Docker Engine from ",(0,s.jsx)(t.a,{href:"https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository",children:"Docker's apt repository"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.docker.com/engine/install/ubuntu/#install-from-a-package",children:"Install it manually"})," and manage upgrades manually."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["In this tutorial we just install using the ",(0,s.jsx)(t.strong,{children:"apt repository"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Before you install Docker Engine for the first time on a new host machine, you need to set up the Docker apt repository. Afterward, you can install and update Docker from the repository."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'# Add Docker\'s official GPG key:\nsudo apt-get update\nsudo apt-get install ca-certificates curl\nsudo install -m 0755 -d /etc/apt/keyrings\nsudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc\nsudo chmod a+r /etc/apt/keyrings/docker.asc\n\n# Add the repository to Apt sources:\necho \\\n  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \\\n  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \\\n  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null\nsudo apt-get update\n'})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var o=n(6540);const s={},r=o.createContext(s);function i(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);