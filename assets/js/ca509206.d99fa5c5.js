"use strict";(self.webpackChunkhashicorp_aws=self.webpackChunkhashicorp_aws||[]).push([[9659],{4630:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>l,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var s=i(4848),r=i(8453);const a={sidebar_position:2,title:"Deployment via Screwdriver CD",description:"Deploying Kong API Gateway via Screwdriver CD Template"},n="Kong API Gateway Release Definition Template",o={id:"kong-api-gateway/screwdriver-cd-deployment",title:"Deployment via Screwdriver CD",description:"Deploying Kong API Gateway via Screwdriver CD Template",source:"@site/docs/kong-api-gateway/screwdriver-cd-deployment.md",sourceDirName:"kong-api-gateway",slug:"/kong-api-gateway/screwdriver-cd-deployment",permalink:"/hashicorp-aws/docs/kong-api-gateway/screwdriver-cd-deployment",draft:!1,unlisted:!1,editUrl:"https://github.com/QubitPi/hashicorp-aws/tree/master/docs/docs/kong-api-gateway/screwdriver-cd-deployment.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Deployment via Screwdriver CD",description:"Deploying Kong API Gateway via Screwdriver CD Template"},sidebar:"tutorialSidebar",previous:{title:"General Deployment",permalink:"/hashicorp-aws/docs/kong-api-gateway/"},next:{title:"Jersey-Jetty Based Webservice",permalink:"/hashicorp-aws/docs/webservice"}},c={},d=[{value:"How to Use This Template",id:"how-to-use-this-template",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"kong-api-gateway-release-definition-template",children:"Kong API Gateway Release Definition Template"}),"\n",(0,s.jsxs)(t.p,{children:["hashicorp-aws offer a ",(0,s.jsx)(t.a,{href:"https://qubitpi.github.io/screwdriver-cd-guide/user-guide/templates",children:"Screwdriver CD template"})," that deploys an ",(0,s.jsx)(t.a,{href:"https://www.hashicorp.com/resources/what-is-mutable-vs-immutable-infrastructure",children:"immutable"})," instance of\n",(0,s.jsx)(t.a,{href:"https://qubitpi.github.io/docs.konghq.com/",children:"Kong API Gateway"})," to AWS. It uses the ",(0,s.jsx)(t.a,{href:"https://github.com/QubitPi/screwdriver-cd-template-main",children:"screwdriver-template-main npm package"})," to assist with template validation,\npublishing, and tagging. This template tags the latest versions with the ",(0,s.jsx)(t.code,{children:"latest"})," tag."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Error loading kong-ports-diagram.png",src:i(4516).A+"",width:"1662",height:"1064"})}),"\n",(0,s.jsx)(t.h2,{id:"how-to-use-this-template",children:"How to Use This Template"}),"\n",(0,s.jsxs)(t.admonition,{type:"warning",children:[(0,s.jsxs)(t.p,{children:["Before preceding, please note that it is assumed\n",(0,s.jsx)(t.a,{href:"https://github.com/QubitPi/hashicorp-aws/tree/master/adaptors/screwdriver-cd/templates/kong-api-gateway-sd-template.yaml",children:"the template"}),"\nhas already been installed in Screwdriver. If not, please see documentation on ",(0,s.jsx)(t.a,{href:"https://qubitpi.github.io/screwdriver-cd-guide/user-guide/templates#publishing-a-template",children:"publishing a template in Screwdriver"})]}),(0,s.jsxs)(t.p,{children:["The designated ",(0,s.jsx)(t.a,{href:"https://github.com/QubitPi/hashicorp-aws/tree/master/screwdriver.yaml",children:"screwdriver.yaml"})," file used to\nvalidate and publish the template is located at the root of hashicorp-aws project"]})]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://qubitpi.github.io/screwdriver-cd-guide/user-guide/templates#using-a-template",children:"Create a Screwdriver pipeline that uses this template"})," with the\n",(0,s.jsx)(t.code,{children:"screwdriver.yaml"})," file of"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"---\njobs:\n  main:\n    requires: [~pr, ~commit]\n    template: QubitPi/kong-api-gateway-release-definition-template@latest\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The following ",(0,s.jsx)(t.a,{href:"https://qubitpi.github.io/screwdriver-cd-guide/user-guide/configuration/secrets",children:"Screwdriver CD Secrets"})," needs to be defined before running the pipeline:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"../setup#aws",children:(0,s.jsx)(t.code,{children:"AWS_ACCESS_KEY_ID"})})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"../setup#aws",children:(0,s.jsx)(t.code,{children:"AWS_SECRET_ACCESS_KEY"})})}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"SSL_CERTIFICATE"})," - the content of SSL certificate file serving HTTPS-enabled DNS name of the EC2 hosting our Kong\nAPI Gateway instance. This is the same as the ",(0,s.jsx)(t.code,{children:"SSL_CERTIFICATE"})," from the ",(0,s.jsx)(t.a,{href:"https://qubitpi.github.io/hashicorp-aws/docs/setup#ssl",children:"general SSL setup of hashicorp-aws"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"SSL_CERTIFICATE_KEY"})," - the content of SSL certificate key file serving HTTPS-enabled DNS name of the EC2 hosting our\nAPI Gateway instance. This is the same as the ",(0,s.jsx)(t.code,{children:"SSL_CERTIFICATE_KEY"})," from the ",(0,s.jsx)(t.a,{href:"https://qubitpi.github.io/hashicorp-aws/docs/setup#ssl",children:"general SSL setup of hashicorp-aws"})]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["To run the pipeline, fill in the AWS-related ",(0,s.jsx)(t.strong,{children:"parameters"})," first"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Error kong-api-gateway-release-definition-template-parameters.png",src:i(6275).A+"",width:"834",height:"1419"})}),"\n",(0,s.jsxs)(t.p,{children:['Then hit "',(0,s.jsx)(t.strong,{children:"Submit"}),'" to start deploying.']})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},6275:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/kong-api-gateway-release-definition-template-parameters-b592a814383129cf13098b8ea981351c.png"},4516:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/kong-ports-diagram-94dd812152799d6acdc342b76be0588a.png"},8453:(e,t,i)=>{i.d(t,{R:()=>n,x:()=>o});var s=i(6540);const r={},a=s.createContext(r);function n(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);