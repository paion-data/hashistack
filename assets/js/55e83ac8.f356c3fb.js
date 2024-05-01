"use strict";(self.webpackChunkhashicorp_aws=self.webpackChunkhashicorp_aws||[]).push([[4799],{3931:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=n(4848),s=n(8453);const i={slug:"npm-release",title:"NPM Release action",authors:["jiaqi"],tags:["CI/CD","GitHub","Frontend","NPM"]},r=void 0,o={permalink:"/blog/npm-release",editUrl:"https://github.com/QubitPi/hashicorp-aws/tree/master/docs/blog/2024-04-14-npm-release.md",source:"@site/blog/2024-04-14-npm-release.md",title:"NPM Release action",description:"This action works for both [npm] and [yarn] package managers",date:"2024-04-14T00:00:00.000Z",formattedDate:"April 14, 2024",tags:[{label:"CI/CD",permalink:"/blog/tags/ci-cd"},{label:"GitHub",permalink:"/blog/tags/git-hub"},{label:"Frontend",permalink:"/blog/tags/frontend"},{label:"NPM",permalink:"/blog/tags/npm"}],readingTime:.52,hasTruncateMarker:!1,authors:[{name:"Jiaqi Liu",title:"Maintainer of hashicorp-aws",url:"https://github.com/QubitPi",imageURL:"https://avatars.githubusercontent.com/u/16126939?v=4",key:"jiaqi"}],frontMatter:{slug:"npm-release",title:"NPM Release action",authors:["jiaqi"],tags:["CI/CD","GitHub","Frontend","NPM"]},unlisted:!1,prevItem:{title:"Setting up JDK in GitHub Actions",permalink:"/blog/jdk-setup"},nextItem:{title:"UI Unit Test",permalink:"/blog/ui-unit-test"}},c={authorsImageUrls:[void 0]},l=[];function u(e){const t={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsxs)(t.p,{children:["This action works for both ",(0,a.jsx)(t.a,{href:"https://www.npmjs.com/",children:"npm"})," and ",(0,a.jsx)(t.a,{href:"https://yarnpkg.com/",children:"yarn"})," package managers"]})}),"\n",(0,a.jsxs)(t.p,{children:["The NPM release action bundles up a React/Vue package and publishes it to ",(0,a.jsx)(t.a,{href:"https://www.npmjs.com/",children:"npm registry"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["To use the release action,\n",(0,a.jsx)(t.a,{href:"https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions#creating-secrets-for-a-repository",children:"create a GitHub Secret"}),"\nfor ",(0,a.jsx)(t.a,{href:"https://docs.npmjs.com/creating-and-viewing-access-tokens",children:"npm token"}),", which will be used to authenticate against\nNPM in the action. Then use the following template in CI/CD:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:"name: CI/CD\n\n\"on\":\n  pull_request:\n  push:\n    branches:\n      - master\n\nenv:\n  NODE_VERSION: 18\n\njobs:\n  publish:\n    name: Publish Package to NPM\n    if: github.ref == 'refs/heads/master'\n    runs-on: ubuntu-latest\n    steps:\n      - uses: QubitPi/hashicorp-aws/.github/actions/npm-release.yml@master\n        with:\n          node-version: ${{ env.NODE_VERSION }}\n          npm-token: ${{ env.NPM_TOKEN }}\n          user: Qubitpi\n          email: jack20220723@gmail.com\n"})})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var a=n(6540);const s={},i=a.createContext(s);function r(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);