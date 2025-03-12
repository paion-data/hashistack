"use strict";(self.webpackChunkhashistack=self.webpackChunkhashistack||[]).push([[4955],{6200:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>h});var n=r(3860),a=r(9162);const o={slug:"testing-hashicorp-terraform",title:"Testing HashiCorp Terraform",authors:["rose-wang"],tags:["HashiCorp","Terraform"]},i=void 0,s={permalink:"/blog/testing-hashicorp-terraform",editUrl:"https://github.com/paion-data/hashistack/tree/master/docs/blog/testing-hashicorp-terraform/index.md",source:"@site/blog/testing-hashicorp-terraform/index.md",title:"Testing HashiCorp Terraform",description:"How do we know if we can run terraform apply to our infrastructure without negatively affecting critical business",date:"2025-03-12T02:41:11.000Z",formattedDate:"March 12, 2025",tags:[{label:"HashiCorp",permalink:"/blog/tags/hashi-corp"},{label:"Terraform",permalink:"/blog/tags/terraform"}],readingTime:1.885,hasTruncateMarker:!1,authors:[{name:"ROSEMARY WANG",url:"https://www.hashicorp.com/blog/testing-hashicorp-terraform",imageURL:"https://www.hashicorp.com/_next/static/media/terraform_on-dark.8e9a65a1.svg",key:"rose-wang"}],frontMatter:{slug:"testing-hashicorp-terraform",title:"Testing HashiCorp Terraform",authors:["rose-wang"],tags:["HashiCorp","Terraform"]},unlisted:!1,nextItem:{title:"Bumping Semantic Version by GitHub Tag",permalink:"/blog/version-bump"}},c={authorsImageUrls:[void 0]},h=[{value:"The Testing Pyramid",id:"the-testing-pyramid",level:2},{value:"Linting and Formatting",id:"linting-and-formatting",level:2},{value:"Unit Tests",id:"unit-tests",level:2}];function d(e){const t={admonition:"admonition",code:"code",h2:"h2",img:"img",p:"p",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["How do we know if we can run ",(0,n.jsx)(t.code,{children:"terraform apply"})," to our infrastructure without negatively affecting critical business\napplications? We can run ",(0,n.jsx)(t.code,{children:"terraform validate"})," and ",(0,n.jsx)(t.code,{children:"terraform plan"})," to check our configuration, but will that be enough?\nWhether we've updated some HashiCorp Terraform configuration or a new version of a module, we want to catch errors\nquickly before we apply any changes to production infrastructure."]}),"\n",(0,n.jsxs)(t.p,{children:["In this post, We will discuss some testing strategies for HashiCorp Terraform configuration and modules so that we can\n",(0,n.jsx)(t.code,{children:"terraform apply"})," with greater confidence."]}),"\n",(0,n.jsx)(t.h2,{id:"the-testing-pyramid",children:"The Testing Pyramid"}),"\n",(0,n.jsx)(t.p,{children:"In theory, we might decide to align our infrastructure testing strategy with the test pyramid, which groups tests by\ntype, scope, and granularity. The testing pyramid suggests that we write fewer tests in the categories at the top of the\npyramid, and more at the bottom. Those on the pyramid take more time to run and cost more due to the higher number of\nresources we have to configure and create."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Error loading pyramid.png",src:r(6229).Z+"",width:"3840",height:"2470"})}),"\n",(0,n.jsx)(t.p,{children:"In reality, our tests may not perfectly align with the pyramid shape. The pyramid offers a common framework to describe\nwhat scope a test can cover to verify configuration and infrastructure resources. We'll start at the bottom of the\npyramid with unit tests and work the way up the pyramid to end-to-end tests."}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"hashistack does not merit any manual testing; so it is not discussed here"})}),"\n",(0,n.jsx)(t.h2,{id:"linting-and-formatting",children:"Linting and Formatting"}),"\n",(0,n.jsxs)(t.p,{children:["While not on the test pyramid, we often encounter tests to verify the hygiene of your Terraform configuration. Use\n",(0,n.jsx)(t.code,{children:"terraform fmt -check"})," and terraform validate to format and validate the correctness of our Terraform configuration."]}),"\n",(0,n.jsx)(t.p,{children:"When we collaborate on Terraform, we may consider testing the Terraform configuration for a set of standards and best\npractices. Build or use a linting tool to analyze our Terraform configuration for specific best practices and patterns.\nFor example, a linter can verify that our teammate defines a Terraform variable for an instance type instead of\nhard-coding the value."}),"\n",(0,n.jsx)(t.h2,{id:"unit-tests",children:"Unit Tests"}),"\n",(0,n.jsx)(t.p,{children:"At the bottom of the pyramid, unit tests verify individual resources and configurations for expected values. They should\nanswer the question, \u201cDoes my configuration or plan contain the correct metadata?\u201d Traditionally, unit tests should run\nindependently, without external resources or API calls."})]})}function l(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},6229:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/pyramid-c61e3ecc738268f3a07cbcf4faeea8a5.png"},9162:(e,t,r)=>{r.d(t,{Z:()=>s,a:()=>i});var n=r(1733);const a={},o=n.createContext(a);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);