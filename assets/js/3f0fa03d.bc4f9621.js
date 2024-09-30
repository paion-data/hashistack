"use strict";(self.webpackChunkhashistack=self.webpackChunkhashistack||[]).push([[6547],{2719:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var s=t(3860),i=t(9162);const o={slug:"aws-troubleshooting",title:"AWS Troubleshooting",authors:["jiaqi"],tags:["AWS"]},a=void 0,l={permalink:"/blog/aws-troubleshooting",editUrl:"https://github.com/QubitPi/hashistack/tree/master/docs/blog/2022-10-12-aws-troubleshooting/index.md",source:"@site/blog/2022-10-12-aws-troubleshooting/index.md",title:"AWS Troubleshooting",description:"New Volume in EC2 Instance Not Reflecting",date:"2022-10-12T00:00:00.000Z",formattedDate:"October 12, 2022",tags:[{label:"AWS",permalink:"/blog/tags/aws"}],readingTime:.705,hasTruncateMarker:!0,authors:[{name:"Jiaqi Liu",title:"Maintainer of hashistack",url:"https://github.com/QubitPi",imageURL:"https://avatars.githubusercontent.com/u/16126939?v=4",key:"jiaqi"}],frontMatter:{slug:"aws-troubleshooting",title:"AWS Troubleshooting",authors:["jiaqi"],tags:["AWS"]},unlisted:!1,prevItem:{title:"Deploying Jenkins to AWS",permalink:"/blog/jenkins-on-aws"},nextItem:{title:"AWS Identity and Access Management (IAM)",permalink:"/blog/aws-iam"}},r={authorsImageUrls:[void 0]},c=[{value:"New Volume in EC2 Instance Not Reflecting",id:"new-volume-in-ec2-instance-not-reflecting",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"new-volume-in-ec2-instance-not-reflecting",children:"New Volume in EC2 Instance Not Reflecting"}),"\n",(0,s.jsxs)(n.p,{children:["When we have increased the size of the volume attached a running EC2 instance. We are able to see the new volume using\n",(0,s.jsx)(n.code,{children:"lsblk"}),":"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Error loading ec2-volume-1.png",src:t(3023).Z+"",width:"498",height:"137"})}),"\n",(0,s.jsxs)(n.p,{children:["But when ",(0,s.jsx)(n.code,{children:"df -h"})," command still displays the old volume size:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Error loading ec2-volume-2.png",src:t(6043).Z+"",width:"547",height:"215"})}),"\n",(0,s.jsx)(n.p,{children:"This is because new volumes should be formatted to be accessible. Resized existing volumes should also be modified\n(resized) from the inside of the operating system. The general information on how to do this safely (e.g. with snapshots)\nis given in the following AWS documentation:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-using-volumes.html",children:"Making an Amazon EBS volume available for use on Linux"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recognize-expanded-volume-linux.html",children:"Extending a Linux file system after resizing a volume"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Based on the discussion in comments, two commands were used to successfully solve the problem:"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo growpart /dev/xvda 1\nsudo resize2fs /dev/xvda1\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},3023:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/ec2-volume-1-f280db8f5b7637d99d23b53bc02e1c7c.png"},6043:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/ec2-volume-2-fd495fbf5f157b7fb8cee027fdb686b3.png"},9162:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>a});var s=t(1733);const i={},o=s.createContext(i);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);