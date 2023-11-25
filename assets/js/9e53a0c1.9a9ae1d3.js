"use strict";(self.webpackChunkhashicorp_aws=self.webpackChunkhashicorp_aws||[]).push([[6899],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(a),h=r,d=u["".concat(l,".").concat(h)]||u[h]||c[h]||i;return a?n.createElement(d,o(o({ref:t},m),{},{components:a})):n.createElement(d,o({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2942:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:6,title:"Jersey-Jetty Based Webservice"},o=void 0,s={unversionedId:"webservice",id:"webservice",title:"Jersey-Jetty Based Webservice",description:"[//]: # (Copyright Jiaqi Liu)",source:"@site/docs/6-webservice.md",sourceDirName:".",slug:"/webservice",permalink:"/hashicorp-aws/docs/webservice",draft:!1,editUrl:"https://github.com/QubitPi/hashicorp-aws/tree/gh-pages/docs/6-webservice.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Jersey-Jetty Based Webservice"},sidebar:"tutorialSidebar",previous:{title:"React App",permalink:"/hashicorp-aws/docs/react"}},l={},p=[{value:"Manual Deployment",id:"manual-deployment",level:2},{value:"GitHub Action Automatic Deployment",id:"github-action-automatic-deployment",level:2},{value:"General Template in Downstream Repo",id:"general-template-in-downstream-repo",level:3},{value:"Auxiliary Actions",id:"auxiliary-actions",level:3},{value:"JDK 17 Setup",id:"jdk-17-setup",level:4},{value:"Jersey Webservice Template (JPA through Elide)",id:"jersey-webservice-template-jpa-through-elide",level:4},{value:"Installing Data Models",id:"installing-data-models",level:5},{value:"Docker Compose",id:"docker-compose",level:5},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"The Webservice was Running Properly Right After Deployment, but NOT After a While with &quot;503 Service Unavailable&quot;",id:"the-webservice-was-running-properly-right-after-deployment-but-not-after-a-while-with-503-service-unavailable",level:3}],m={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Yes, we DO NOT support Spring, never ever"),(0,r.kt)("li",{parentName:"ul"},"EBS volumes during build time will ",(0,r.kt)("a",{parentName:"li",href:"https://qubitpi.github.io/hashicorp-packer/packer/integrations/hashicorp/amazon/latest/components/builder/ebs#:~:text=Optional%3A-,delete_on_termination,-(bool)%20%2D%20Indicates%20whether"},"automatically be removed")))),(0,r.kt)("h2",{id:"manual-deployment"},"Manual Deployment"),(0,r.kt)("p",null,"The following script variables need to be defined:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html"},(0,r.kt)("strong",{parentName:"a"},"AWS_ACCESS_KEY_ID"))," & ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html"},(0,r.kt)("strong",{parentName:"a"},"AWS_SECRET_ACCESS_KEY"))),(0,r.kt)("admonition",{parentName:"li",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("em",{parentName:"p"},"IAM user")," associated with the credentials above must have the following ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction_access-management.html"},"AWS permissions policies"),":"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"IAMFullAccess"),(0,r.kt)("li",{parentName:"ul"},"AmazonEC2FullAccess"),(0,r.kt)("li",{parentName:"ul"},"AmazonRoute53FullAccess")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"WS_DIR"),": The local absolute path to the webservice repo")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"HC_DIR"),": The local absolute path to the ",(0,r.kt)("a",{parentName:"p",href:"https://qubitpi.github.io/hashicorp-aws/"},"hashicorp-aws")," directory")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"HC_CONFIG_DIR"),": The local absolute path to a directory containing the following deployment files:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"SSL cert file located (",(0,r.kt)("inlineCode",{parentName:"p"},"/abs/path/to/hashicorp-aws-config-dir/server.crt"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"SSL cert key file (",(0,r.kt)("inlineCode",{parentName:"p"},"/abs/path/to/hashicorp-aws-config-dir/server.key"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Nginx config file (",(0,r.kt)("inlineCode",{parentName:"p"},"/abs/path/to/hashicorp-aws-config-dir/nginx.conf"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"ELK Filebeat config file (",(0,r.kt)("inlineCode",{parentName:"p"},"/abs/path/to/hashicorp-aws-config-dir/filebeat.yml"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Any webservice ",(0,r.kt)("strong",{parentName:"p"},".properties")," files (",(0,r.kt)("inlineCode",{parentName:"p"},"/abs/path/to/hashicorp-aws-config-dir"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A ",(0,r.kt)("a",{parentName:"p",href:"https://qubitpi.github.io/hashicorp-packer/packer/guides/hcl/variables#from-a-file"},"HashiCorp Packer variable file")," named ",(0,r.kt)("strong",{parentName:"p"},"aws-ws.pkrvars.hcl")," with the following\nvariable values (",(0,r.kt)("inlineCode",{parentName:"p"},"/abs/path/to/hashicorp-aws-config-dir/aws-ws.pkrvars.hcl"),"):"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-hcl"},'aws_image_region                 = "my-aws-region"\nami_name                         = "my-webservice"\ninstance_type                    = "<one of t2.micro/t2.small/t2.medium/t2.large/t2.xlarge/t2.2xlarge>"\nws_war_path                      = "../../../../WAR/my-webservice-1.0-SNAPSHOT.war"\naws_ws_ssl_cert_file_path        = "../../../../hashicorp-aws-config-dir/server.crt"\naws_ws_ssl_cert_key_file_path    = "../../../../hashicorp-aws-config-dir/server.key"\naws_ws_nginx_config_file_path    = "../../../../hashicorp-aws-config-dir/nginx.conf"\naws_ws_filebeat_config_file_path = "../../../../hashicorp-aws-config-dir/filebeat.yml"\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A ",(0,r.kt)("a",{parentName:"p",href:"https://qubitpi.github.io/hashicorp-terraform/terraform/language/values/variables#variable-definitions-tfvars-files"},"HashiCorp Terraform variable file")," named ",(0,r.kt)("strong",{parentName:"p"},"aws-ws.tfvars")," with the following\nvariable values (",(0,r.kt)("inlineCode",{parentName:"p"},"/abs/path/to/hashicorp-aws-config-dir/aws-ws.tfvars"),"):"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-hcl"},'aws_deploy_region   = "my-aws-region"\nami_name            = "my-webservice"\ninstance_type       = "<one of t2.micro/t2.small/t2.medium/t2.large/t2.xlarge/t2.2xlarge>"\nec2_instance_name   = "My Webservice"\nec2_security_groups = ["My Webservice"]\nroute_53_zone_id    = "9DQXLTNSN7ZX9P8V2KZII"\nws_domain           = "mywebservice.mycompany.com"\nsentry_dsn          = "can be empty if sentry.io is not needed"\n')),(0,r.kt)("admonition",{parentName:"li",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Although the ",(0,r.kt)("inlineCode",{parentName:"p"},"ws_domain")," is a public identity, ",(0,r.kt)("a",{parentName:"p",href:"https://qubitpi.github.io/hashicorp-aws/"},"hashicorp-aws")," will bind a ",(0,r.kt)("strong",{parentName:"p"},"private IP")," address to this domain,\nbecause webservice tend to be deployed in a virtual private network and AWS also requires\n",(0,r.kt)("a",{parentName:"p",href:"https://serverfault.com/a/967483"},"EC2 instances of different Security Groups to communicate through private IP"))))))),(0,r.kt)("p",null,"Then we can execute the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/QubitPi/hashicorp-aws/blob/master/hashicorp/webservice/deploy.sh"},"deploy.sh"))," to manually deploy any Jersey-Jetty based webservice."),(0,r.kt)("h2",{id:"github-action-automatic-deployment"},"GitHub Action Automatic Deployment"),(0,r.kt)("h3",{id:"general-template-in-downstream-repo"},"General Template in Downstream Repo"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Java 17 is assumed in the example below"),(0,r.kt)("li",{parentName:"ul"},"Assuming ws dir is called ",(0,r.kt)("strong",{parentName:"li"},"my-webservice")),(0,r.kt)("li",{parentName:"ul"},"~/.m2/settings.xml is working on CI/CD server"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"jobs:\n  hashicorp:\n    name: Generated WS WAR in GitHub Action, publish its AMI and deploy the AMI to EC2 through HashiCorp\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout\n        uses: actions/checkout@v3\n      - name: Set up JDK 17\n        uses: actions/setup-java@v3\n        with:\n          java-version: '17'\n          distribution: 'adopt'\n      - name: Checkout HashiCorp deployment tool\n        run: git clone https://github.com/QubitPi/hashicorp-aws.git ../hashicorp-aws\n      - name: Load hashicorp-aws-config-dir and put it in the same directory as hashicorp-aws\n        run: ...\n      - name: Load Packer variable file\n        run: cp ../hashicorp-aws-config-dir/aws-ws.pkrvars.hcl ../hashicorp-aws/hashicorp/webservice/images/aws-ws.auto.pkrvars.hcl\n      - name: Load Terraform variable file\n        run: cp ../hashicorp-aws-config-dir/aws-ws.tfvars ../hashicorp-aws/hashicorp/webservice/instances/aws-ws.auto.tfvars       \n      - name: Generate webservice WAR file\n        run: mvn -B clean package\n      - name: Move WAR file to a location for HashiCorp deployment to pickup\n        run: |\n          mkdir ../WAR\n          mv target/my-webservice-1.0-SNAPSHOT.war ../WAR\n      - name: QubitPi/hashicorp-aws\n        uses: QubitPi/hashicorp-aws@master\n        with:\n          hashicorp-dir: ../hashicorp-aws/hashicorp/webservice\n          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}\n          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}\n          aws-region: ${{ secrets.AWS_REGION }}\n")),(0,r.kt)("h3",{id:"auxiliary-actions"},"Auxiliary Actions"),(0,r.kt)("h4",{id:"jdk-17-setup"},"JDK 17 Setup"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"---\nname: My CI/CD\n\njobs:\n  my-job:\n    name: My job name\n    runs-on: ubuntu-latest\n    steps:\n      - uses: QubitPi/hashicorp-aws/auxiliary/github/actions/jdk-setup@master\n")),(0,r.kt)("h4",{id:"jersey-webservice-template-jpa-through-elide"},"Jersey Webservice Template (JPA through Elide)"),(0,r.kt)("h5",{id:"installing-data-models"},"Installing Data Models"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"model-package-jar-group-id"),' is the Maven group ID of JAR containing data models, e.g. "com.myorg"'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"model-package-jar-artifact-id"),' is the Maven artifact ID of JAR containing data models, e.g. "my-data-models"'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"model-package-jar-version"),' is the version of JAR containing data models, e.g. "3.1.7"'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"model-repo-org")," is the data models repo owner, e.g. paion-data. This can be eigher a GitHub user account name or\na GitHub organization name"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"models-repo-name")," is the data models repo name, e.g. my-data-models"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"models-repo-token"),' is the GitHub Fine-grained token with at least "Read access to code and metadata" repository\npermissions to the data models repo'))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"---\nname: My CI/CD\n\njobs:\n  my-job:\n    name: My job name\n    runs-on: ubuntu-latest\n    steps:\n      - uses: QubitPi/hashicorp-aws/auxiliary/github/actions/jersey-webservice-template/jpa-elide/install-data-models@master\n        with:\n          model-package-jar-group-id: com.myorg\n          model-package-jar-artifact-id: my-data-models\n          model-package-jar-version: 1.0.0\n          model-repo-org: myorg\n          models-repo-name: my-data-models\n          models-repo-token: ${{ secrets.ASTRAIOS_DATA_MODELS_REPO_TOKEN }}\n")),(0,r.kt)("h5",{id:"docker-compose"},"Docker Compose"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"webservice-repo-clone-url")," is the git clone URL of the GitHub repo generated by ",(0,r.kt)("a",{parentName:"li",href:"https://qubitpi.github.io/jersey-webservice-template/"},"jersey-webservice-template")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"model-package")," is the\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/QubitPi/jersey-webservice-template-jpa-data-model/blob/master/src/main/java/com/qubitpi/ws/jersey/template/models/Book.java#L16"},"fully qualified name of the package containing all JPA models")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"---\nname: My CI/CD\n\njobs:\n  my-job:\n    name: My job name\n    runs-on: ubuntu-latest\n    steps:\n      - uses: QubitPi/hashicorp-aws/auxiliary/github/actions/jersey-webservice-template/jpa-elide/docker-compose@master\n        with:\n          webservice-repo-clone-url: https://github.com/QubitPi/jersey-webservice-template.git\n          model-package: ${{ secrets.MODEL_PACKAGE_NAME }}\n")),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("h3",{id:"the-webservice-was-running-properly-right-after-deployment-but-not-after-a-while-with-503-service-unavailable"},'The Webservice was Running Properly Right After Deployment, but NOT After a While with "503 Service Unavailable"'),(0,r.kt)("p",null,"This could be the resource starvation on EC2 instance. Please try using a bigger EC2 sizes. For example, bumping\n",(0,r.kt)("em",{parentName:"p"},"t2.micro")," to ",(0,r.kt)("em",{parentName:"p"},"t2.medium"),". ",(0,r.kt)("a",{parentName:"p",href:"https://qubitpi.github.io/hashicorp-aws/"},"hashicorp-aws")," currently supports ",(0,r.kt)("strong",{parentName:"p"},"t2.x")," sizes, i.e. one of the following sizes can be\nselected:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"t2.micro"),(0,r.kt)("li",{parentName:"ul"},"t2.small"),(0,r.kt)("li",{parentName:"ul"},"t2.medium"),(0,r.kt)("li",{parentName:"ul"},"t2.large"),(0,r.kt)("li",{parentName:"ul"},"t2.xlarge"),(0,r.kt)("li",{parentName:"ul"},"t2.2xlarge")),(0,r.kt)("p",null,"To modify the size, set the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"instance_type")," in both ",(0,r.kt)("em",{parentName:"p"},"aws-ws.pkrvars.hcl")," and ",(0,r.kt)("em",{parentName:"p"},"aws-ws.tfvars"),". For\nexample:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hcl"},'instance_type       = "t2.medium"\n')))}c.isMDXComponent=!0}}]);