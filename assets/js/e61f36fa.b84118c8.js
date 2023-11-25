"use strict";(self.webpackChunkhashicorp_aws=self.webpackChunkhashicorp_aws||[]).push([[7311],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>c});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),p=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=p(e.components);return o.createElement(l.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=p(t),c=a,m=d["".concat(l,".").concat(c)]||d[c]||h[c]||i;return t?o.createElement(m,s(s({ref:n},u),{},{components:t})):o.createElement(m,s({ref:n},u))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=d;var r={};for(var l in n)hasOwnProperty.call(n,l)&&(r[l]=n[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,s[1]=r;for(var p=2;p<i;p++)s[p]=t[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1063:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var o=t(7462),a=(t(7294),t(3905));const i={slug:"nvm",title:"Switching Node.js Versions with NVM",authors:["jiaqi"],date:new Date("2023-11-20T00:00:00.000Z"),tags:["Node.js","nvm"]},s=void 0,r={permalink:"/hashicorp-aws/blog/nvm",editUrl:"https://github.com/QubitPi/hashicorp-aws/tree/gh-pages/blog/2023-04-21-nvm/index.md",source:"@site/blog/2023-04-21-nvm/index.md",title:"Switching Node.js Versions with NVM",description:"[//]: # (Copyright Jiaqi Liu)",date:"2023-11-20T00:00:00.000Z",formattedDate:"November 20, 2023",tags:[{label:"Node.js",permalink:"/hashicorp-aws/blog/tags/node-js"},{label:"nvm",permalink:"/hashicorp-aws/blog/tags/nvm"}],readingTime:2.72,hasTruncateMarker:!1,authors:[{name:"Jiaqi Liu",title:"Maintainer of hashicorp-aws",url:"https://github.com/QubitPi",imageURL:"https://avatars.githubusercontent.com/u/16126939?v=4",key:"jiaqi"}],frontMatter:{slug:"nvm",title:"Switching Node.js Versions with NVM",authors:["jiaqi"],date:"2023-11-20T00:00:00.000Z",tags:["Node.js","nvm"]},prevItem:{title:"Build and Push Docker Images through GitHub Action",permalink:"/hashicorp-aws/blog/dockerhub-github-actions"},nextItem:{title:"SSL through Certbot",permalink:"/hashicorp-aws/blog/certbot"}},l={authorsImageUrls:[void 0]},p=[{value:"What is Node Version Manager (NVM)",id:"what-is-node-version-manager-nvm",level:2},{value:"Displaying a List of Node.js Versions",id:"displaying-a-list-of-nodejs-versions",level:2},{value:"Switching Among Node.js Versions",id:"switching-among-nodejs-versions",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Changing Node Version",id:"changing-node-version",level:3},{value:"&quot;npm install&quot; Error",id:"npm-install-error",level:3},{value:"GitHub Operation Times Out",id:"github-operation-times-out",level:4},{value:"node-sass Version Issue",id:"node-sass-version-issue",level:4}],u={toc:p};function h(e){let{components:n,...i}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"what-is-node-version-manager-nvm"},"What is Node Version Manager (NVM)"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm"},"Node Version Manager")," is a tool that helps us manage Node versions and is a convenient\nway to install Node. Think of it as npm or Yarn that helps manage Node packages, but instead of packages, NVM manages\nNode versions."),(0,a.kt)("p",null,"This also means you can install multiple Node versions onto your machine at the same time and switch among them if\nneeded."),(0,a.kt)("h2",{id:"displaying-a-list-of-nodejs-versions"},"Displaying a List of Node.js Versions"),(0,a.kt)("p",null,"We can now view all the versions we downloaded so far with"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"nvm ls\n")),(0,a.kt)("p",null,"The list then appears:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Error loading node-versions.png",src:t(1582).Z,width:"1454",height:"588"})),(0,a.kt)("p",null,"The first three lines show the list of Node versions with the arrow pointing to the 14.18.1 version that is currently in\nuse; when a version is used, it displays as green."),(0,a.kt)("h2",{id:"switching-among-nodejs-versions"},"Switching Among Node.js Versions"),(0,a.kt)("p",null,"The best feature about NVM is the ability to easily switch between different Node versions. Say we must use version\n16.13.0 and then switch to 12.22.7; we can simply run either ",(0,a.kt)("inlineCode",{parentName:"p"},"nvm use 12.22.7")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"nvm use 16.13.0")," to easily switch\ninto either version we need."),(0,a.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("h3",{id:"changing-node-version"},"Changing Node Version"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f Warning: This answer does not support Windows OS")),(0,a.kt)("p",null,"Suppose we would like to down-grade version from 18 to 14, then we can use ",(0,a.kt)("inlineCode",{parentName:"p"},"n")," for node's version management like this.\n",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/n"},"There")," is a simple intro for ",(0,a.kt)("inlineCode",{parentName:"p"},"n"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g n\nn 6.10.3\n")),(0,a.kt)("p",null,"This is very easy to use. then you can show your node version:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"node -v\nv6.10.3\n")),(0,a.kt)("p",null,"The available node versions can be found on Node's ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/en/about/previous-releases"},"release page")),(0,a.kt)("p",null,"For windows ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/coreybutler/nvm-windows"},"nvm")," is a well-received tool."),(0,a.kt)("h3",{id:"npm-install-error"},'"npm install" Error'),(0,a.kt)("h4",{id:"github-operation-times-out"},"GitHub Operation Times Out"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'git config --global url."https://".insteadOf git://\n')),(0,a.kt)("p",null,"This will change all of your urls so that they all start with ",(0,a.kt)("inlineCode",{parentName:"p"},"https://")," which shall be working for you."),(0,a.kt)("h4",{id:"node-sass-version-issue"},"node-sass Version Issue"),(0,a.kt)("p",null,"Running ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install")," gives"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},".node-gyp/18.7.0/include/node/v8-internal.h:646:38: error: no template named 'remove_cv_t' in namespace 'std'; did you mean 'remove_cv'?\n")),(0,a.kt)("p",null,"What you're seeing is an error during compilation of node-sass. That's a package processing your Sass/SCSS styles, which\nis written in C++ and only re-packaged as a JavaScript library. The fact it's written in C++ means it needs to be\ncompiled on your device during installation (this is internally done by a tool called node-gyp, which you can spot in\nyour error output, too)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"The problem is node-sass with the specified version in package.json doesn't support Node version installed on the\nmachine"),". The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/sass/node-sass"},"node-sass community")," needs time to catch up to support it (and\nthat's fair, as it's a volunteer-driven project)."),(0,a.kt)("p",null,"Case-by-case soulutions would be either upgrading sass versions or ",(0,a.kt)("a",{parentName:"p",href:"#change-node-version"},"downgrading Node")))}h.isMDXComponent=!0},1582:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/node-versions-89fef4e214d145afb847b956dfb90f82.png"}}]);