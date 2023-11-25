"use strict";(self.webpackChunkhashicorp_aws=self.webpackChunkhashicorp_aws||[]).push([[3308],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=s(a),d=n,f=u["".concat(p,".").concat(d)]||u[d]||c[d]||o;return a?r.createElement(f,l(l({ref:t},m),{},{components:a})):r.createElement(f,l({ref:t},m))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},755:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const o={sidebar_position:3,title:"MLflow Model through REST API"},l=void 0,i={unversionedId:"mlflow",id:"mlflow",title:"MLflow Model through REST API",description:"[//]: # (Copyright Jiaqi Liu)",source:"@site/docs/3-mlflow.md",sourceDirName:".",slug:"/mlflow",permalink:"/hashicorp-aws/docs/mlflow",draft:!1,editUrl:"https://github.com/QubitPi/hashicorp-aws/tree/gh-pages/docs/3-mlflow.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"MLflow Model through REST API"},sidebar:"tutorialSidebar",previous:{title:"Setup",permalink:"/hashicorp-aws/docs/setup"},next:{title:"Elastic Stack (ELK)",permalink:"/hashicorp-aws/docs/elk"}},p={},s=[{value:"Manual Deployment",id:"manual-deployment",level:2}],m={toc:s};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"manual-deployment"},"Manual Deployment"),(0,n.kt)("p",null,"The following script variables need to be defined:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html"},(0,n.kt)("strong",{parentName:"a"},"AWS_ACCESS_KEY_ID"))," & ",(0,n.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html"},(0,n.kt)("strong",{parentName:"a"},"AWS_SECRET_ACCESS_KEY"))),(0,n.kt)("admonition",{parentName:"li",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"The ",(0,n.kt)("em",{parentName:"p"},"IAM user")," associated with the credentials above must have the following ",(0,n.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction_access-management.html"},"AWS permissions policies"),":"),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"IAMFullAccess"),(0,n.kt)("li",{parentName:"ul"},"AmazonEC2FullAccess"),(0,n.kt)("li",{parentName:"ul"},"AmazonRoute53FullAccess")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"HC_DIR"),": The local absolute path to the ",(0,n.kt)("a",{parentName:"p",href:"https://qubitpi.github.io/hashicorp-aws/"},"hashicorp-aws")," directory")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"HC_CONFIG_DIR"),": The local absolute path to a directory containing the following deployment files:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"A ",(0,n.kt)("a",{parentName:"p",href:"https://qubitpi.github.io/hashicorp-packer/packer/guides/hcl/variables#from-a-file"},"HashiCorp Packer variable file")," named ",(0,n.kt)("strong",{parentName:"p"},"aws-mlflow-docker.pkrvars.hcl")," with the\nfollowing variable values (",(0,n.kt)("inlineCode",{parentName:"p"},"/abs/path/to/hashicorp-aws-config-dir/aws-mlflow-docker.pkrvars.hcl"),"):"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-hcl"},'aws_image_region = "my-aws-region"\nami_name         = "my-mlflow-models"\ninstance_type                    = "<one of t2.micro/t2.small/t2.medium/t2.large/t2.xlarge/t2.2xlarge>"\nml_models_path   = "/abs/path/to/mlflow_models/"\n'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"A ",(0,n.kt)("a",{parentName:"p",href:"https://qubitpi.github.io/hashicorp-terraform/terraform/language/values/variables#variable-definitions-tfvars-files"},"HashiCorp Terraform variable file")," named ",(0,n.kt)("strong",{parentName:"p"},"aws-mlflow-docker.tfvars")," with the\nfollowing variable values (",(0,n.kt)("inlineCode",{parentName:"p"},"/abs/path/to/hashicorp-aws-config-dir/aws-mlflow-docker.tfvars"),"):"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-hcl"},'aws_deploy_region   = "my-aws-region"\nami_name            = "my-mlflow-models"\ninstance_type       = "<one of t2.micro/t2.small/t2.medium/t2.large/t2.xlarge/t2.2xlarge>"\nec2_instance_name   = "My MLflow models"\nkey_name            = "myKeyPairName"\nec2_security_groups = ["myKeyPairName"]\n')))))),(0,n.kt)("p",null,"Then we can execute the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://github.com/QubitPi/hashicorp-aws/blob/master/hashicorp/mlflow/deploy.sh"},"deploy.sh"))," to manually deploy any MLflow models"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"The packer simply builds a non-model specific AMI"),(0,n.kt)("li",{parentName:"ul"},"If the container runs multiple models at different ports, make sure to add a ",(0,n.kt)("strong",{parentName:"li"},"PORT")," file containg a port number only\nin each sub-dir of ",(0,n.kt)("inlineCode",{parentName:"li"},"/abs/path/to/mlflow_models/")),(0,n.kt)("li",{parentName:"ul"},"If we need custom module imports in model, add module.py and a ",(0,n.kt)("inlineCode",{parentName:"li"},"__init__.py")," file to the sub-dir of\n",(0,n.kt)("inlineCode",{parentName:"li"},"/abs/path/to/mlflow_models/my-model")))))}c.isMDXComponent=!0}}]);