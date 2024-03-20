"use strict";(self.webpackChunkhashicorp_aws=self.webpackChunkhashicorp_aws||[]).push([[5074],{9293:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var s=i(4848),r=i(8453);const n={sidebar_position:2,title:"Deployment via Screwdriver CD",description:"Deploying ELK via Screwdriver CD Template"},a="ELK Release Definition Template",l={id:"elk/screwdriver-cd-deployment",title:"Deployment via Screwdriver CD",description:"Deploying ELK via Screwdriver CD Template",source:"@site/docs/elk/screwdriver-cd-deployment.md",sourceDirName:"elk",slug:"/elk/screwdriver-cd-deployment",permalink:"/hashicorp-aws/docs/elk/screwdriver-cd-deployment",draft:!1,unlisted:!1,editUrl:"https://github.com/QubitPi/hashicorp-aws/tree/master/docs/docs/elk/screwdriver-cd-deployment.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Deployment via Screwdriver CD",description:"Deploying ELK via Screwdriver CD Template"},sidebar:"tutorialSidebar",previous:{title:"Elastic Stack (ELK)",permalink:"/hashicorp-aws/docs/elk/"},next:{title:"General Troubleshooting",permalink:"/hashicorp-aws/docs/troubleshooting"}},o={},c=[{value:"How to Use This Template",id:"how-to-use-this-template",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"elk-release-definition-template",children:"ELK Release Definition Template"}),"\n",(0,s.jsxs)(t.p,{children:["hashicorp-aws offer a ",(0,s.jsx)(t.a,{href:"https://qubitpi.github.io/screwdriver-cd-guide/user-guide/templates",children:"Screwdriver CD template"})," that deploys ",(0,s.jsx)(t.a,{href:"https://www.hashicorp.com/resources/what-is-mutable-vs-immutable-infrastructure",children:"immutable"})," instances of ELK to\nAWS. It uses the ",(0,s.jsx)(t.a,{href:"https://github.com/QubitPi/screwdriver-cd-template-main",children:"screwdriver-template-main npm package"})," to assist with template validation, publishing, and tagging.\nThe template tags the latest versions with the ",(0,s.jsx)(t.code,{children:"latest"})," tag."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Error loading elk-deployment-diagram.png",src:i(2953).A+"",width:"1404",height:"994"})}),"\n",(0,s.jsx)(t.h2,{id:"how-to-use-this-template",children:"How to Use This Template"}),"\n",(0,s.jsxs)(t.admonition,{type:"warning",children:[(0,s.jsxs)(t.p,{children:["Before preceding, please note that it is assumed\n",(0,s.jsx)(t.a,{href:"https://github.com/QubitPi/hashicorp-aws/tree/master/adaptors/screwdriver-cd/templates/elk-sd-template.yaml",children:"the template"}),"\nhas already been installed in Screwdriver. If not, please see documentation on ",(0,s.jsx)(t.a,{href:"https://qubitpi.github.io/screwdriver-cd-guide/user-guide/templates#publishing-a-template",children:"publishing a template in Screwdriver"})]}),(0,s.jsxs)(t.p,{children:["The designated ",(0,s.jsx)(t.a,{href:"https://github.com/QubitPi/hashicorp-aws/tree/master/screwdriver.yaml",children:"screwdriver.yaml"})," file used to\nvalidate and publish the template is located at the root of hashicorp-aws project"]})]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://qubitpi.github.io/screwdriver-cd-guide/user-guide/templates#using-a-template",children:"Create a Screwdriver pipeline that uses this template"})," with the\n",(0,s.jsx)(t.code,{children:"screwdriver.yaml"})," file of"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"---\njobs:\n  main:\n    requires: [~pr, ~commit]\n    template: QubitPi/elk-release-definition-template@latest\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The following ",(0,s.jsx)(t.a,{href:"https://qubitpi.github.io/screwdriver-cd-guide/user-guide/configuration/secrets",children:"Screwdriver CD Secrets"})," needs to be defined before running the pipeline:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"../setup#aws",children:(0,s.jsx)(t.code,{children:"AWS_ACCESS_KEY_ID"})})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"../setup#aws",children:(0,s.jsx)(t.code,{children:"AWS_SECRET_ACCESS_KEY"})})}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"SSL_CERTIFICATE"})," - the content of SSL certificate file serving HTTPS-enabled DNS name of the EC2 hosting our ELK\ninstance. This is the same as the ",(0,s.jsx)(t.code,{children:"SSL_CERTIFICATE"})," from the ",(0,s.jsx)(t.a,{href:"https://qubitpi.github.io/hashicorp-aws/docs/setup#ssl",children:"general SSL setup of hashicorp-aws"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"SSL_CERTIFICATE_KEY"})," - the content of SSL certificate key file serving HTTPS-enabled DNS name of the EC2 hosting our\nELK instance. This is the same as the ",(0,s.jsx)(t.code,{children:"SSL_CERTIFICATE_KEY"})," from the ",(0,s.jsx)(t.a,{href:"https://qubitpi.github.io/hashicorp-aws/docs/setup#ssl",children:"general SSL setup of hashicorp-aws"})]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["To run the pipeline, fill in the AWS-related ",(0,s.jsx)(t.strong,{children:"parameters"})," first"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Error loading elk-release-definition-template-parameters.png",src:i(2319).A+"",width:"835",height:"1385"})}),"\n",(0,s.jsxs)(t.p,{children:['Then hit "',(0,s.jsx)(t.strong,{children:"Submit"}),'" to start deploying.']}),"\n",(0,s.jsxs)(t.admonition,{type:"warning",children:[(0,s.jsxs)(t.p,{children:["Once the pipeline deploys ELK, we must remember to do the\n",(0,s.jsx)(t.a,{href:"index#post-setup-in-ec2-instance",children:"post setup in EC2 instance"}),"."]}),(0,s.jsxs)(t.p,{children:["The password for user 'elastic' can be found ",(0,s.jsx)(t.em,{children:"packer-build"})," step logs. Here is an example:"]}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Error loading elastic-password-from-log.png",src:i(7552).A+"",width:"3584",height:"1925"})})]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},7552:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/elastic-password-from-log-63b8b57e4befaf2ec8e27ce008c89806.png"},2953:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/elk-deployment-diagram-c6144ad9e3b78ea9e9a1b6ec8d3d3108.png"},2319:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/elk-release-definition-template-parameters-f6a1cc4c839a0a80f130ab12d0fd0a3c.png"},8453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>l});var s=i(6540);const r={},n=s.createContext(r);function a(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);