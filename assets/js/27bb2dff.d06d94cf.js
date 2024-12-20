"use strict";(self.webpackChunkahlek=self.webpackChunkahlek||[]).push([[1968],{7029:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"tutorial-doc-week1.md/linux-basic/basic-command","title":"3. Basic Commands","description":"Learning some common Linux commands is essential for using the system effectively. Here are some basic commands:","source":"@site/docs/tutorial-doc-week1.md/linux-basic/basic-command.md","sourceDirName":"tutorial-doc-week1.md/linux-basic","slug":"/tutorial-doc-week1.md/linux-basic/basic-command","permalink":"/lek/docs/tutorial-doc-week1.md/linux-basic/basic-command","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"practicalSidebar","previous":{"title":"2. Linux Directory Structure","permalink":"/lek/docs/tutorial-doc-week1.md/linux-basic/linux-directory-structure"},"next":{"title":"4. Open a Terminal","permalink":"/lek/docs/tutorial-doc-week1.md/linux-basic/open-a-terminal"}}');var a=i(4848),l=i(8453);const t={sidebar_position:3},r="3. Basic Commands",c={},o=[{value:"3.1 File and Directory Operations",id:"31-file-and-directory-operations",level:2},{value:"3.2 Viewing and Manipulating File Contents",id:"32-viewing-and-manipulating-file-contents",level:2},{value:"3.3 Package Management",id:"33-package-management",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"3-basic-commands",children:"3. Basic Commands"})}),"\n",(0,a.jsx)(n.p,{children:"Learning some common Linux commands is essential for using the system effectively. Here are some basic commands:"}),"\n",(0,a.jsx)(n.h2,{id:"31-file-and-directory-operations",children:"3.1 File and Directory Operations"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"pwd"}),": Displays the full path of the current directory."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"ls"}),": Lists files and directories in the current directory.","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"ls -l"}),": Lists files in detailed format."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"ls -a"}),": Lists all files, including hidden files (those starting with ",(0,a.jsx)(n.code,{children:"."}),")."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"cd <path>"}),": Changes the current directory to ",(0,a.jsx)(n.code,{children:"<path>"}),". For example, ",(0,a.jsx)(n.code,{children:"cd /home/username"}),".","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"cd .."}),": Moves up one directory level."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"cd ~"}),": Moves to the user's home directory."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"mkdir <directory>"}),": Creates a new directory."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"rmdir <directory>"}),": Removes an empty directory."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"rm <file>"}),": Deletes a file.","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"rm -r <directory>"}),": Deletes a non-empty directory and its contents."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"rm -f <file>"}),": Forces deletion of a file, ignoring errors."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"32-viewing-and-manipulating-file-contents",children:"3.2 Viewing and Manipulating File Contents"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"cat <file>"}),": Displays the contents of a file."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"less <file>"}),": Displays the contents of a file one page at a time, allowing scrolling."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"head <file>"}),": Displays the first few lines of a file."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"tail <file>"}),": Displays the last few lines of a file."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"grep <pattern> <file>"}),": Searches for a pattern (string) in a file."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"33-package-management",children:"3.3 Package Management"}),"\n",(0,a.jsx)(n.p,{children:"In Linux, software is often managed through package managers, which vary by distribution. Common package managers are apt (Ubuntu/Debian), yum (CentOS/RHEL), and dnf (Fedora)."}),"\n",(0,a.jsx)(n.p,{children:"Ubuntu/Debian (APT):"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"sudo apt update"}),": Updates the package database."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"sudo apt upgrade"}),": Upgrades installed packages."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"sudo apt install <package>"}),": Installs a package."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"sudo apt remove <package>"}),": Removes a package."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Let\u2019s look at the 60 most commonly used Linux commands and their examples for system administration. In this tutorial, we will explain 60 essential Linux commands for various purposes, from navigation to software management. Download this Linux command cheat sheet from the link below to access the information offline."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Click ",(0,a.jsx)(n.a,{href:"https://www.hostinger.com/tutorials/linux-commands",children:"HERE"}),"!!"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>r});var s=i(6540);const a={},l=s.createContext(a);function t(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);