"use strict";(self.webpackChunkahlek=self.webpackChunkahlek||[]).push([[3010],{8023:(A,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>r,metadata:()=>i,toc:()=>g});const i=JSON.parse('{"id":"tutorial-doc.md/qt-cross-platform-development/build-qt-project","title":"4. Build Qt Project","description":"We are about to create a Qt project, open an example project for pratice or create a blank new project.","source":"@site/docs/tutorial-doc.md/qt-cross-platform-development/build-qt-project.md","sourceDirName":"tutorial-doc.md/qt-cross-platform-development","slug":"/tutorial-doc.md/qt-cross-platform-development/build-qt-project","permalink":"/lek/docs/tutorial-doc.md/qt-cross-platform-development/build-qt-project","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"practicalSidebar","previous":{"title":"3. Qt Creator Installation","permalink":"/lek/docs/tutorial-doc.md/qt-cross-platform-development/qt-creator-installation"},"next":{"title":"5. Build Executables for RZ/G2L","permalink":"/lek/docs/tutorial-doc.md/qt-cross-platform-development/build-executables-for-renesas"}}');var t=o(4848),n=o(8453);const r={sidebar_position:4},s="4. Build Qt Project",c={},g=[];function a(A){const e={a:"a",code:"code",h1:"h1",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,n.R)(),...A.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"4-build-qt-project",children:"4. Build Qt Project"})}),"\n",(0,t.jsx)(e.p,{children:"We are about to create a Qt project, open an example project for pratice or create a blank new project."}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["Open Qt Creator, click on the ",(0,t.jsx)(e.code,{children:"Welcome"})," on the left, click on ",(0,t.jsx)(e.code,{children:"Examples"})," and browse to example or existing projects or you can create a blank project, you can follow the demo video below to create a new Qt Quick Project."]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"https://www.youtube.com/watch?v=LNVMQhFXNHA",children:"Demo Video"})}),"\n",(0,t.jsxs)(e.ol,{start:"2",children:["\n",(0,t.jsx)(e.li,{children:'On the upper-left project folder tree, double click on file "MainForm.ui.qml", Qt will switch to Design mode immediately.'}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"alt text",src:o(7720).A+"",width:"1850",height:"1053"})}),"\n",(0,t.jsxs)(e.p,{children:["Under Design mode, we can drag the objects like buttons, or drag the contols from the left side to the center canvas. You also can click on anyone of the control list, then set it's properties on the right-hand side. We can click the ",(0,t.jsx)(e.code,{children:"Edit"})," to switch the window back to Edit mode to see all of the changes."]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"alt text",src:o(7567).A+"",width:"1850",height:"1053"})}),"\n",(0,t.jsx)(e.p,{children:"You can switch among the Design mode and Edit mode the compare the dirrerences."}),"\n",(0,t.jsx)(e.p,{children:"The below video shows a simple pratice of QML. A qml file named Btn.qml is created, then used in the main.qml."}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"https://www.youtube.com/watch?v=w_-jhwnOFvY",children:"Demo Video"})}),"\n",(0,t.jsx)(e.p,{children:"Btn.qml :"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:'import QtQuick 2.5\nimport QtQuick.Controls 1.4\nimport QtQuick.Layouts 1.2\n        Button {\n            width: 100\n            height: 50\n            id: button1\n            text: qsTr("Hello")\n        }\n'})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"alt text",src:o(4272).A+"",width:"947",height:"434"})}),"\n",(0,t.jsx)(e.p,{children:"Qt Examples are located at the directory as below, projects are in the sub-directories by catagory."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"<Qt Dir>/Examples/Qt-5.6.3/ \n"})}),"\n",(0,t.jsxs)(e.p,{children:["Please learn Qt from those examples, in Qt Creator, Click on ",(0,t.jsx)(e.code,{children:"File"}),"/",(0,t.jsx)(e.code,{children:"Open File or Project"}),". Browse to ",(0,t.jsx)(e.code,{children:"Examples/gui/analogclock/analogclock.pro"}),"."]}),"\n",(0,t.jsxs)(e.p,{children:["Click on ",(0,t.jsx)(e.code,{children:"Run"})," button in the lower left corner."]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"alt text",src:o(4630).A+"",width:"511",height:"350"})}),"\n",(0,t.jsxs)(e.p,{children:["Let start the other new project, please choose ",(0,t.jsx)(e.code,{children:"File"})," and ",(0,t.jsx)(e.code,{children:"New File or Project"})," in the menu. Choose ",(0,t.jsx)(e.code,{children:"Application"})," and ",(0,t.jsx)(e.code,{children:"Qt Quick Control Application"}),"."]}),"\n",(0,t.jsxs)(e.p,{children:["Input project name, for example ",(0,t.jsx)(e.code,{children:"ex01"}),". In ",(0,t.jsx)(e.code,{children:"Kit"}),' selection dislog, choose "Desktop Qt 5.6.3 GCC 64bit". Press green triangle button on the lower-left or press F5 or Ctrl-R to start execution. Since the selected kits is "Desktop", the built executables can be run on PC as below,']}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"alt text",src:o(8300).A+"",width:"660",height:"535"})}),"\n",(0,t.jsx)(e.p,{children:"Next, remember to run the executable to build it outside of At Creator. The success of the above steps means We've completely build a environment for development. The executable would be in another folder named as"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"/build-ex01-Desktop_Qt_5_6_3_GCC_64bit-Debug\n"})}),"\n",(0,t.jsx)(e.p,{children:"You can do the software development to meet your project need by repeating the programming and debugging procedures."}),"\n",(0,t.jsx)(e.p,{children:"Start from some example projects come with Qt installation is a good way to quickly learn the Qt UI programming. You can add controls like buttons, design the layout, and write program behind the controls to connect them with others."}),"\n",(0,t.jsx)(e.p,{children:"For Qt Programming, you can start by familiar with those topics,"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"QML"}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"QML (Qt Markup Language) is a programming language based on JavaScript, used to design applications based on graphical user interfaces. QML is mainly used for mobile applications, focusing on touch input and user experience."}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"https://www.youtube.com/watch?v=4U7j-B1mq00",children:"Demo Video"})}),"\n",(0,t.jsx)(e.p,{children:"A .qml file example is as below,"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"alt text",src:o(1365).A+"",width:"1850",height:"1053"})}),"\n",(0,t.jsx)(e.p,{children:"Please notice the top few lines looks like,"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"import QtQuick 2.4\n\nimport QtQuick.Controls 1.5\n"})}),"\n",(0,t.jsxs)(e.ol,{start:"2",children:["\n",(0,t.jsx)(e.li,{children:"Qt Quick"}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"Different from Qt Widget, Qt Quick is a function library of QML Class and Functions that uses QML language to develop graphical interfaces."}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"https://www.youtube.com/watch?v=6zmQ2yuXxY0",children:"Demo Video"})}),"\n",(0,t.jsxs)(e.ol,{start:"3",children:["\n",(0,t.jsx)(e.li,{children:"Qt Quick Controls"}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"Qt Quick Controls is an interface module in the Qt framework, which provides a set of visual user control components. It includes buttons, text input boxes, sliders, etc."}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"https://www.youtube.com/watch?v=uuhmSZxK1mk",children:"Demo Video"})}),"\n",(0,t.jsx)(e.p,{children:"Most of the search result about Qt could be of newer version. We are using Qt5.6.3, aware of the differences."})]})}function l(A={}){const{wrapper:e}={...(0,n.R)(),...A.components};return e?(0,t.jsx)(e,{...A,children:(0,t.jsx)(a,{...A})}):a(A)}},8300:(A,e,o)=>{o.d(e,{A:()=>i});const i="data:image/png;base64,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BACgiKAEAKCIoAQAoIigBACgiKAEAKCIoAQAoIigBACgiKAEAKCIoAQAoIigBACgiKAEAKCIoAQAoIigBACgiKAEAKCIoAQAoIigBACgiKAEAKCIoAQAoIigBACgiKAEAKCIoAQAoIigBACgiKAEAKCIoAQAoIigBACgiKAEAKCIoAQAoIigBACgiKAEAKCIoAQAoIigBACgiKAEAKCIoAQAoIigBACgiKAEAKCIoAQAoIigBACgiKAEAKCIoAQAoIigBACgiKAEAKCIoAQAoIigBACgiKAEAKCIoAQAoIigBACgiKAEAKCIoAQAoIigBACgiKAEAKCIoAQAoIigBACgiKAEAKCIoAQAoIigBACgiKAEAKCIoAQAoIigBACgiKAEAKCIoAQAoIigBACgiKAEAKCIoAQAoIigBACgiKAEAKCIoAQAoIigBACgiKAEAKCIoAQAoIigBACgiKAEAKCIoAQAoIigBACgiKAEAKCIoAQAoIigBACgiKAEAKCIoAQAoIigBACgiKAEAKCIoAQAoIigBACgiKAEAKCIoAQAoIigBACgiKAEAKCIoAQAoIigBACgiKAEAKCIoAQAoIigBACgiKAEAKCIoAQAoIigBACgiKAEAKCIoAQAoIigBACgiKAEAKCIoAQAoIigBACgiKAEAKCIoAQAoIigBACgiKAEAKCIoAQAoIigBACgiKAEAKCIoAQAoIigBACgiKAEAKCIoAQAoIigBACgiKAEAKCIoAQAoIigBACgiKAEAKCIoAQAoIigBACgiKAEAKCIoAQAoIigBACgiKAEAKCIoAQAoIigBACgiKAEAKCIoAQAoIigBACgiKAEAKCIoAQAoIigBACgiKAEAKCIoAQAoIigBACgiKAEAKCIoAQAoIigBACgiKAEAKCIoAQAoIigBACgiKAEAKCIoAQAoIigBACgiKAEAKCIoAQAoIigBACgiKAEAKCIoAQAoIigBACgiKAEAKCIoAQAoIigBACgiKAEAKCIoAQAoIigBACgiKAEAKCIoAQAoIigBACgiKAEAKCIoAQAoIigBACgiKAEAKCIoAQAoIigBACgiKAEAKCIoAQAoIigBACgiKAEAKCIoAQAoIigBACgiKAEAKCIoAQAoIigBACgiKAEAKCIoAQAoIigBACgiKAEAKCIoAQAoIigBACgiKAEAKCIoAQAoIigBACgiKAEAKCIoAQAoIigBACgiKAEAKCIoAQAoIigBACgiKAEAKCIoAQAoIigBACgiKAEAKCIoAQAoIigBACgiKAEAKCIoAQAoEjTjh4AsO3WrF2Xp1aszMYXNu3ooezymkePyrSpkzNh/LhBn2u7D5+t2e7AzktQwi5qzdp1efypFTl45vRMGDd2Rw9nl7dm7fo88MjvMr2STBjXf9zY7sNrqNsd2LkJSthFPf3sczl45vRMNLMzLCZOGJeDZ0zPY48/NWDY2O7Da6jbHdi5OYYSdlEbWjeaIRtmE8ePzfrWjQM+x3YffkPZ7sDOTVDCLqxSqezoIexWhro9bffhZXvCrk9QAgBQRFACAFBEUAIAUERQwm7qrLPOyvHHH5958+blLW95S84888xcdtllWbt27Y4eWpJk8eLFOeGEE/LMM8/Uffzqq6/OvHnzsmLFiuLPuv322/PWt741d9xxR/F7DWZP3+7VajU33XRT3ve+9+WEE07IX/7lX2bRokXp6OgoGTawk3PZINhNPf300/mTP/mTzJ8/Py+88EIeeuihLF26ND//+c9z+eWXZ8SIETt0fM8++2w2b96cr3/96zn//PN7PbZy5cpcd911SZJVq1Zl6tSp2/QZK1asyNKlS3PLLbekvb29eMxDsadv98ceeyxLlizJqaeempkzZ+bee+/Ntddem5aWlpxxxhnD8jsAOx9BCbuxqVOn5rDDDkuSzJkzJ3vvvXc+/elP5+67786cOXOycOHC/OY3v8nzzz+fUaNG5dOf/nSOOuqoPPPMM/nqV7+ae+65J6NHj85xxx2Xs88+O6NHj06S/OQnP8lVV12VJ598MmPHjs2pp56a97znPVm3bl0uvvji/PKXv8wLL7yQ/fbbLxdddFEmTZrUZ2zPPfdcpk+fnttuuy3Lly/PwQcf3P3YkiVLsvfee+fxxx/P888/333/Cy+8kMsvvzw/+clPsmnTphxxxBE599xz+w2fxYsXZ/369fnCF76Q8847bzg37YD25O1+wAEH5Prrr+8O57lz5+auu+7KvffeKyhhNyYoYQ8yZsyYJMmmTZvS0dGRH/7wh5k/f36OP/74rF+/PgceeGBaW1tzzjnn5JBDDskFF1yQ559/PpdcckmS5GMf+1h+//vf54ILLshf/MVfdL+uubk5SbJo0aLcd999+eQnP5lJkybl0UcfzYQJE+qOZfXq1Tn22GPz8MMP58orr8znPve5JFtm0G655ZZ86lOfyuc///msWrWq+zXnn39+nnzyyZx77rlpbm7ON77xjSxYsCCLFy9OQ0PfI3gWLFiQhoaGXnG0I+xp273nLGxHR0dWr16dww8/fHg2JrBTEpSwG6tWq2lvb09ra2uWL1+er33taxk7dmyOPPLI7uccdthhvX5eunRp2tvbc/7553eHwbPPPptrr702H/vYx7Jq1ap0dHTkqKOOyqxZs3p93sqVKzN58uQcc8wxaWho6PN4T6tXr8748ePz/ve/Px/96Efz0EMP5cADD8w//dM/Zfr06TnuuONy2WWXdYfNr3/969xxxx254oorctBBByXZEmof+chH8vDDD3ff11O92Hk57OnbvafLL788mzZtMjsJuzlBCbuxpUuXZunSpUm2XDx61qxZ+eIXv5hx48Zl8+bNdV9z//33Z/Xq1Xnb297WfV9XIG3YsCEHHXRQjjvuuCxYsCDHH3985s+f3z37dNppp2XBggU588wz8+d//ud5+9vfnpaWlrqfs3bt2owdOzazZs3K7Nmzc+211+bcc8/NzTffnAULFqRSqWTs2LFZs2ZN97iS5MMf/nCf93rmmWcGDZuXk+2+xeLFi/Ov//qvueiii7LXXnsNYcsBuypBCbuxE088MfPnz8+4ceMyadKk7l2kAxk5cmRe9apXZeHChX0ea25uTkNDQy688MLcc889+fa3v51zzjknJ598cs4999wceeSRuf7663PzzTfnm9/8Zq677rpccskl2X///Xu9z6ZNm9LW1tYdPe9973vzN3/zNxk5cmSmTp2a4447LknS0tKSdevWJUlGjRqVJPnKV77SJ5YmT5689RtnO7Ldk0svvTS33nprvvSlL+1UsQ9sHy4bBLuxvfbaK4ceemimTZs2pKhJkpkzZ+app57KqFGjMn369F5Lz13IRx55ZC688MJ86EMfyo033pgNGzYkScaPH593v/vdWbJkSSqVSr773e/2+Yz169cnSffJJq973evy6le/Ov/2b/+Wd73rXd2f09zc3P3cmTNnJkmeeuqpPuPqOkZxZ7Gnb/fvfve73TOTYhL2DGYogV5OOumk3HDDDfnEJz6RM844I5MnT86zzz6b/fbbL0cccURWrFiR//iP/8jBBx+czs7O3H///Wlubs6oUaPy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"},1365:(A,e,o)=>{o.d(e,{A:()=>i});const i=o.p+"assets/images/image-11-deb636a1fc97b71d1bec841540a0638c.png"},4272:(A,e,o)=>{o.d(e,{A:()=>i});const i=o.p+"assets/images/image-29-dc085f6f728bd9e996ea478f1a8ceff6.png"},4630:(A,e,o)=>{o.d(e,{A:()=>i});const i=o.p+"assets/images/image-30-b151c088929bbbadbca8451ead08bd3d.png"},7720:(A,e,o)=>{o.d(e,{A:()=>i});const i=o.p+"assets/images/image-7-c066e64d45c20b71ce742fce95dbc46b.png"},7567:(A,e,o)=>{o.d(e,{A:()=>i});const i=o.p+"assets/images/image-8-7fb4984facd6d97dfe863dcb50eaa985.png"},8453:(A,e,o)=>{o.d(e,{R:()=>r,x:()=>s});var i=o(6540);const t={},n=i.createContext(t);function r(A){const e=i.useContext(n);return i.useMemo((function(){return"function"==typeof A?A(e):{...e,...A}}),[e,A])}function s(A){let e;return e=A.disableParentContext?"function"==typeof A.components?A.components(t):A.components||t:r(A.components),i.createElement(n.Provider,{value:e},A.children)}}}]);