"use strict";(self.webpackChunkhashistack=self.webpackChunkhashistack||[]).push([[6334],{3661:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var i=n(3860),r=n(9162);const s={sidebar_position:3,title:"UI Code Style"},o=void 0,a={id:"react-code-style",title:"UI Code Style",description:"In Frontend dev realm, there are lots of code style checker. Assembling all of them together takes efforts and pains.",source:"@site/docs/react-code-style.md",sourceDirName:".",slug:"/react-code-style",permalink:"/docs/react-code-style",draft:!1,unlisted:!1,editUrl:"https://github.com/paion-data/hashistack/tree/master/docs/docs/react-code-style.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"UI Code Style"},sidebar:"tutorialSidebar",previous:{title:"Performing Style Check on YAML & Markdown Files and Link Check",permalink:"/docs/yml-md-style-and-link-checks"},next:{title:"UI Unit Test",permalink:"/docs/ui-unit-test"}},c={},l=[];function d(e){const t={a:"a",admonition:"admonition",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"In Frontend dev realm, there are lots of code style checker. Assembling all of them together takes efforts and pains.\nThis action runs the following two code style checker specifically for frontend dev:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://prettier.io/",children:"Prettier"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://eslint.org/",children:"ESLint"})}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["This action assume ",(0,i.jsx)(t.a,{href:"https://eslint.org/",children:"ESLint"}),", ",(0,i.jsx)(t.a,{href:"https://typescript-eslint.io/",children:"typescript-eslint"}),", and ",(0,i.jsx)(t.a,{href:"https://prettier.io/",children:"Prettier"})," have been installed, which can be done with:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"yarn add --dev @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint typescript\nyarn add --dev --exact prettier\n"})}),"\n",(0,i.jsx)(t.p,{children:"Here is an example usage of the action:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:'name: CI/CD\n\n"on":\n  pull_request:\n  push:\n    branches:\n      - master\n\n  code-style:\n    name: Code Style Check\n    uses: paion-data/hashistack/.github/workflows/react-code-style.yaml@master\n    with:\n      node-version: 22\n'})}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"In the example above, the node 22 and the most recent stable yarn version is assumed in the CI/CD project."})}),"\n",(0,i.jsxs)(t.p,{children:["The configurations of Prettier and ESLint can be done regularly by following their respective documentations. For\nexample, the ",(0,i.jsx)(t.a,{href:"https://prettier.io/docs/en/configuration",children:".prettierrc.json"})," and\n",(0,i.jsx)(t.a,{href:"https://prettier.io/docs/en/ignore.html",children:".prettierignore"})," can be placed at the project root with the\nfollowing contents:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",metastring:'title=".prettierrc.json"',children:'{\n  "tabWidth": 2,\n  "useTabs": false,\n  "printWidth": 120\n}\n'})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ignore",metastring:'title=".prettierignore"',children:"*.md\n*.mdx\nbuild\ncoverage\nnode_modules\n"})}),"\n",(0,i.jsxs)(t.admonition,{type:"tip",children:[(0,i.jsx)(t.p,{children:"We can fix it by formatting all files at the root of project with:"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"yarn prettier . --write\n"})})]}),"\n",(0,i.jsx)(t.p,{children:"Initial ESLint configuration template can be generated with"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"yarn run eslint --init # https://dev.to/maithanhdanh/configuration-for-eslint-b47\n"})}),"\n",(0,i.jsxs)(t.admonition,{title:"Prettier & ESLint Conflict",type:"info",children:[(0,i.jsxs)(t.p,{children:["Linters usually contain not only code quality rules, but also stylistic rules. Most stylistic rules are unnecessary\nwhen using Prettier, but worse - they might conflict with Prettier! Use Prettier for code formatting concerns, and\nlinters for code-quality concerns, as outlined in\n",(0,i.jsx)(t.a,{href:"https://prettier.io/docs/en/comparison",children:"Prettier vs. Linters"}),"."]}),(0,i.jsx)(t.p,{children:"Luckily it's easy to turn off rules that conflict or are unnecessary with Prettier, by using these pre-made configs:"}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/prettier/eslint-config-prettier",children:"eslint-config-prettier"})}),"\n"]}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"yarn add --dev eslint-config-prettier\n"})})]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},9162:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>o});var i=n(1733);const r={},s=i.createContext(r);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);