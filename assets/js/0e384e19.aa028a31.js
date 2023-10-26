"use strict";(self.webpackChunkhashicorp_aws=self.webpackChunkhashicorp_aws||[]).push([[9671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>h,kt:()=>u});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},h=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),m=p(r),u=a,d=m["".concat(l,".").concat(u)]||m[u]||c[u]||n;return r?o.createElement(d,i(i({ref:t},h),{},{components:r})):o.createElement(d,i({ref:t},h))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<n;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9881:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var o=r(7462),a=(r(7294),r(3905));const n={sidebar_position:1,title:"hashicorp-aws Documentation"},i=void 0,s={unversionedId:"intro",id:"intro",title:"hashicorp-aws Documentation",description:"Introduction",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/hashicorp-aws/docs/intro",draft:!1,editUrl:"https://github.com/QubitPi/hashicorp-aws/tree/gh-pages/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"hashicorp-aws Documentation"},sidebar:"tutorialSidebar",next:{title:"How to Enable SSL Automatically Through HashiCorp AWS",permalink:"/hashicorp-aws/docs/ssl"}},l={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Traditional Software Development",id:"traditional-software-development",level:3},{value:"How Big Techs Improve It",id:"how-big-techs-improve-it",level:3},{value:"Software Development Tomorrow (What <em>HashiCorp AWS</em> Does)",id:"software-development-tomorrow-what-hashicorp-aws-does",level:3},{value:"Community Discord",id:"community-discord",level:2}],h={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("h3",{id:"traditional-software-development"},"Traditional Software Development"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/QubitPi/QubitPi/blob/master/img/hashicorp-aws/traditional.png?raw=true",alt:"Error loading traditional.png"})),(0,a.kt)("p",null,"I learned, from years of work experience, that thriving as a Software Engineer with their internal and external\nengagement demands requires high levels of ",(0,a.kt)("em",{parentName:"p"},"interpersonal sophistication"),". It is no doubt then that the ",(0,a.kt)("strong",{parentName:"p"},"single\nhardest task in teamwork is ",(0,a.kt)("em",{parentName:"strong"},"efficient communication")),". This gets exacerbated in a software development cycle in which\na developer has to distribute their communication efforts among ",(0,a.kt)("strong",{parentName:"p"},"3")," parties, which makes mis-communication frequent"),(0,a.kt)("h3",{id:"how-big-techs-improve-it"},"How Big Techs Improve It"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/QubitPi/QubitPi/blob/master/img/hashicorp-aws/yahoo.png?raw=true",alt:"Error loading yahoo.png"})),(0,a.kt)("p",null,"By the time I joined Yahoo at 2016, the company had already made a\n",(0,a.kt)("a",{parentName:"p",href:"https://spectrum.ieee.org/yahoos-engineers-move-to-coding-without-a-net"},"big move by removing all of its QA teams COMPLETELY"),". Software developers were required to write\nautomated tests by themselves using open source test frameworks, such as Groovy Spock, Jest, and Cypress. The software\ntesting was then fully automated through ",(0,a.kt)("a",{parentName:"p",href:"https://screwdriver.cd/"},"Yahoo's own CI platform"),", which is developed on top of\nJenkins originally."),(0,a.kt)("p",null,'This brought a big software quality improvements but in terms of communication\nquality, at least from my experience, was still not optimal. I\'ve had such experience when I finshed implementing a\nsystem but waited for extra couple of weeks before DevOps Engineer set up a dedicated server for deployment. This\nvirtually got mis-translated to my boss as "A software developer had his work delayed for couple weeks".'),(0,a.kt)("h3",{id:"software-development-tomorrow-what-hashicorp-aws-does"},"Software Development Tomorrow (What ",(0,a.kt)("em",{parentName:"h3"},"HashiCorp AWS")," Does)"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/QubitPi/QubitPi/blob/master/img/hashicorp-aws/new.png?raw=true",alt:"Error loading new.png"})),(0,a.kt)("p",null,"The reason we still have DevOps staff is resource isolation using the ubiquitous Docker, which borns out of the\ntraditional on-premise technology, is ",(0,a.kt)("em",{parentName:"p"},"manual"),". With on-demand cloud, resource isolations are assumed NOT managed. We\ninstead ",(0,a.kt)("em",{parentName:"p"},"manage business logics")," with efficiency (",(0,a.kt)("a",{parentName:"p",href:"https://qubitpi.github.io/hashicorp-packer/packer/docs"},"Packer"),") and immutability\n(",(0,a.kt)("a",{parentName:"p",href:"https://qubitpi.github.io/hashicorp-terraform/terraform/docs"},"Terraform"),"). ",(0,a.kt)("strong",{parentName:"p"},"With HashiCorp + OpenStack Cloud, business no longer needs ",(0,a.kt)("del",{parentName:"strong"},"Docker + k8s")),".\nTeams and developers as well, with almost no overhead, are able to eliminate human DevOps",(0,a.kt)("br",null),(0,a.kt)("br",null),"This is the picture\nfrom which I'm turning into reality in my team. Giving our developer fully ",(0,a.kt)("strong",{parentName:"p"},"automated")," control over infrastructure\nbrings the following benefits to the team:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Our developers learn more cutting-edge industry skills compared to their peers which makes our developers more\nvaluable along their career path")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Taking hardware constraint into account causes a paradigm shift in how our engineers thought about problems, which\nmakes our developers better skilled and our software better in terms of quality")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Eventually reduces the labor costs of company"))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://qubitpi.github.io/hashicorp-aws/"},"hashicorp-aws")," does exactly that."),(0,a.kt)("h2",{id:"community-discord"},"Community ",(0,a.kt)("a",{parentName:"h2",href:"https://discord.com/widget?id=1060753787125514332"},"![Discord]")),(0,a.kt)("p",null,"The hashicorp-aws community generally hangs out ",(0,a.kt)("a",{parentName:"p",href:"https://discord.com/widget?id=1060753787125514332"},"on Discord"),", so\nplease drop by if you have any questions, comments, concerns, wishes, hopes, dreams, wants, needs, yearnings, musings,\nor idle curiosities about hashicorp-aws. We love meeting new people and talking with them about how they can best use\nhashicorp-aws to solve their IaC problems. We know there are gaps in hashicorp-aws, and definitely lots of new, powerful\ncapabilities to add, so hearing about what's working and what could be better will help drive the direction of\nhashicorp-aws."),(0,a.kt)("p",null,"If you have other thoughts, or are running into trouble and are not able to get help from the community on Discord,\nplease ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/hashicorp-aws/issues"},"open an issue")," describing your problem or idea."))}c.isMDXComponent=!0}}]);