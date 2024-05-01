"use strict";(self.webpackChunkhashicorp_aws=self.webpackChunkhashicorp_aws||[]).push([[4868],{4768:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>a,default:()=>o,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var s=t(4848),n=t(8453);const r={sidebar_position:2,title:"Deployment via Screwdriver CD",description:"Deploying React App via Screwdriver CD Template"},a="React App Release Definition Template",l={id:"react/screwdriver-cd-deployment",title:"Deployment via Screwdriver CD",description:"Deploying React App via Screwdriver CD Template",source:"@site/docs/react/screwdriver-cd-deployment.md",sourceDirName:"react",slug:"/react/screwdriver-cd-deployment",permalink:"/docs/react/screwdriver-cd-deployment",draft:!1,unlisted:!1,editUrl:"https://github.com/QubitPi/hashicorp-aws/tree/master/docs/docs/react/screwdriver-cd-deployment.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Deployment via Screwdriver CD",description:"Deploying React App via Screwdriver CD Template"},sidebar:"tutorialSidebar",previous:{title:"General Deployment",permalink:"/docs/react/"},next:{title:"Kong API Gateway",permalink:"/docs/category/kong-api-gateway"}},c={},d=[{value:"How to Use This Template",id:"how-to-use-this-template",level:2},{value:"Installing Template in Screwdriver",id:"installing-template-in-screwdriver",level:3},{value:"Using the Template",id:"using-the-template",level:3}];function h(e){const i={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"react-app-release-definition-template",children:"React App Release Definition Template"}),"\n",(0,s.jsxs)(i.p,{children:["hashicorp-aws offers a ",(0,s.jsx)(i.a,{href:"https://qubitpi.github.io/screwdriver-cd-guide/user-guide/templates/job-templates",children:"Screwdriver template"})," that deploys an\n",(0,s.jsx)(i.a,{href:"https://www.hashicorp.com/resources/what-is-mutable-vs-immutable-infrastructure",children:"immutable"})," instance of React-based frontend App to AWS. It uses the\n",(0,s.jsx)(i.a,{href:"https://github.com/QubitPi/screwdriver-cd-template-main",children:"screwdriver-template-main npm package"})," to assist with template validation, publishing, and tagging. This template tags\nthe latest versions with the ",(0,s.jsx)(i.code,{children:"latest"})," tag."]}),"\n",(0,s.jsx)(i.h2,{id:"how-to-use-this-template",children:"How to Use This Template"}),"\n",(0,s.jsx)(i.h3,{id:"installing-template-in-screwdriver",children:"Installing Template in Screwdriver"}),"\n",(0,s.jsx)(i.p,{children:"The template needs to be installed first in Screwdriver running instance. Installation has two parts:"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/QubitPi/hashicorp-aws/tree/master/adaptors/screwdriver-cd/templates/react-app-sd-template.yaml",children:"the template"})}),"\n",(0,s.jsxs)(i.li,{children:["Some ",(0,s.jsx)(i.a,{href:"https://github.com/QubitPi/screwdriver-cd-commands",children:"pre-defined Screwdriver commands"})," that this template uses"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["The template and the commands can be automatically installed using the regular ",(0,s.jsx)(i.a,{href:"https://github.com/QubitPi/hashicorp-aws/tree/master/screwdriver.yaml",children:"screwdriver.yaml"})," config file by\nfollowing the steps below:"]}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"https://qubitpi.github.io/screwdriver-cd-guide/user-guide/quickstart#create-a-new-pipeline",children:"Create a Screwdriver pipeline"})," with the repository link being\n",(0,s.jsx)(i.code,{children:"https://github.com/QubitPi/hashicorp-aws.git"})]}),"\n",(0,s.jsx)(i.li,{children:"Trigger a pipeline run, which will install the templates and commands automatically. Wait the pipeline to finish\nrunning."}),"\n",(0,s.jsxs)(i.li,{children:["The installed template and commands can be found in ",(0,s.jsx)(i.a,{href:"https://qubitpi.github.io/screwdriver-cd-guide/user-guide/templates/job-templates#finding-templates",children:"Templates page"})," and\n",(0,s.jsx)(i.a,{href:"https://qubitpi.github.io/screwdriver-cd-guide/user-guide/commands#finding-commands",children:"Commands page"}),", respectively"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"using-the-template",children:"Using the Template"}),"\n",(0,s.jsxs)(i.admonition,{type:"warning",children:[(0,s.jsxs)(i.p,{children:["Before preceding, please note that it is assumed\n",(0,s.jsx)(i.a,{href:"https://github.com/QubitPi/hashicorp-aws/tree/master/adaptors/screwdriver-cd/templates/react-app-sd-template.yaml",children:"the template"}),"\nhas already been installed in Screwdriver. If not, please see documentation on ",(0,s.jsx)(i.a,{href:"https://qubitpi.github.io/screwdriver-cd-guide/user-guide/templates/job-templates#publishing-a-template",children:"publishing a template in Screwdriver"})]}),(0,s.jsxs)(i.p,{children:["The designated ",(0,s.jsx)(i.a,{href:"https://github.com/QubitPi/hashicorp-aws/tree/master/screwdriver.yaml",children:"screwdriver.yaml"})," file used to\nvalidate and publish the template is located at the root of hashicorp-aws project"]})]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.a,{href:"https://qubitpi.github.io/screwdriver-cd-guide/user-guide/templates/job-templates#using-a-template",children:"Create a Screwdriver pipeline that uses this template"}),".\nHere is an example:"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-yaml",children:"---\njobs:\n  main:\n    requires: [~pr, ~commit]\n    template: QubitPi/react-app-release-definition-template@latest\n    secrets:\n      - AWS_REACT_PKRVARS_HCL\n      - SSL_CERTIFICATE\n      - SSL_CERTIFICATE_KEY\n      - NGINX_CONFIG_FILE\n      - AWS_REACT_TFVARS\n      - DOT_ENV_FILE\n      - AWS_ACCESS_KEY_ID\n      - AWS_SECRET_ACCESS_KEY\n"})}),"\n",(0,s.jsxs)(i.p,{children:["The following ",(0,s.jsx)(i.a,{href:"https://qubitpi.github.io/screwdriver-cd-guide/user-guide/configuration/secrets",children:"Screwdriver Secrets"})," needs to be defined before running this template:"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"../setup#aws",children:(0,s.jsx)(i.strong,{children:"AWS_ACCESS_KEY_ID"})})}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"../setup#aws",children:(0,s.jsx)(i.strong,{children:"AWS_SECRET_ACCESS_KEY"})})}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"../setup#ssl",children:(0,s.jsx)(i.strong,{children:"SSL_CERTIFICATE"})})}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"../setup#ssl",children:(0,s.jsx)(i.strong,{children:"SSL_CERTIFICATE_KEY"})})}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"../setup#ssl",children:(0,s.jsx)(i.strong,{children:"NGINX_CONFIG_FILE"})})}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"AWS_REACT_PKRVARS_HCL"})," - A ",(0,s.jsx)(i.a,{href:"https://qubitpi.github.io/hashicorp-packer/packer/guides/hcl/variables#from-a-file",children:"HashiCorp Packer variable values file"})," with the following variable values:"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-hcl",children:'aws_image_region                 = "us-east-2"\nami_name                         = "my-react-app-ami"\ninstance_type                    = "t2.small"\naws_react_ssl_cert_file_path     = "ssl.crt"\naws_react_ssl_cert_key_file_path = "ssl.key"\naws_react_nginx_config_file_path = "nginx.conf"\nreact_dist_path = "dist"\n'})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"aws_image_region"})," is the ",(0,s.jsx)(i.a,{href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html#Concepts.RegionsAndAvailabilityZones.Availability",children:"image region"})," of ",(0,s.jsx)(i.a,{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html",children:"AWS AMI"})]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"ami_name"})," is the published AMI name; it can be arbitrary"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"instance_type"})," is the recommended ",(0,s.jsx)(i.a,{href:"https://aws.amazon.com/ec2/instance-types/",children:"AWS EC2 instance type"})," running this image"]}),"\n",(0,s.jsxs)(i.li,{children:["Please keep the values of ",(0,s.jsx)(i.code,{children:"react_dist_path"}),", ",(0,s.jsx)(i.code,{children:"aws_react_ssl_cert_file_path"}),", ",(0,s.jsx)(i.code,{children:"aws_react_ssl_cert_key_file_path"}),", and\n",(0,s.jsx)(i.code,{children:"aws_react_nginx_config_file_path"})," as they are. They are used by ",(0,s.jsx)(i.a,{href:"../hashicorp-aws/adaptors/screwdriver-cd/templates/sd-template.yaml",children:"template"})," so that SSL\nconfigs are picked up from the right locations"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"AWS_REACT_TFVARS"})," - A ",(0,s.jsx)(i.a,{href:"https://qubitpi.github.io/hashicorp-terraform/terraform/language/values/variables#variable-definitions-tfvars-files",children:"HashiCorp Terraform variable values file"})," with the following variable values:"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-hcl",children:'aws_deploy_region   = "us-east-2"\nami_name            = "my-react-app-ami"\ninstance_type       = "t2.small"\nec2_instance_name   = "My React App"\nec2_security_groups = ["My React App Security Group"]\nroute_53_zone_id    = "MBS8YLKZML18VV2E8M8OK"\nreact_domain        = "myapp.mycompany.com"\n'})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"aws_deploy_region"})," is the ",(0,s.jsx)(i.a,{href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html#Concepts.RegionsAndAvailabilityZones.Availability",children:"EC2 runtime region"})]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"ami_name"})," is the name of the published AMI; ",(0,s.jsxs)(i.strong,{children:["it must be the same as the ",(0,s.jsx)(i.code,{children:"ami_name"})," in AWS_REACT_PKRVARS_HCL"]})]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"instance_type"})," is the chosen ",(0,s.jsx)(i.a,{href:"https://aws.amazon.com/ec2/instance-types/",children:"AWS EC2 instance type"})," at runtime"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"ec2_instance_name"})," is the deployed EC2 name as appeared in the instance list of AWS console; it can be arbitrary"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"ec2_security_groups"})," is the ",(0,s.jsx)(i.a,{href:"https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-groups.html",children:"AWS Security Group"})," ",(0,s.jsx)(i.em,{children:"name"})," (yes, not ID, but name...)"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"react_domain"})," is the SSL-enabled domain that will serve the React App"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"route_53_zone_id"})," is the AWS Route 53 hosted Zone ID that hosts the domain ",(0,s.jsx)(i.code,{children:"myapp.mycompany.com"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsx)(i.p,{children:"[!TIP]\nTo find the zone ID in AWS Route 53, we can:"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:"Sign in to the AWS Management Console"}),"\n",(0,s.jsxs)(i.li,{children:["Open the Route 53 console at ",(0,s.jsx)(i.a,{href:"https://console.aws.amazon.com/route53/",children:"https://console.aws.amazon.com/route53/"})]}),"\n",(0,s.jsx)(i.li,{children:"Select Hosted zones in the navigation pane"}),"\n",(0,s.jsx)(i.li,{children:"Find the requested ID in the top level Hosted Zones summary in the Route 53 section"}),"\n"]}),"\n"]})]})}function o(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,i,t)=>{t.d(i,{R:()=>a,x:()=>l});var s=t(6540);const n={},r=s.createContext(n);function a(e){const i=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(r.Provider,{value:i},e.children)}}}]);