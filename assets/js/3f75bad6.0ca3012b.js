"use strict";(self.webpackChunkaergia=self.webpackChunkaergia||[]).push([[2315],{3905:(e,n,t)=>{t.d(n,{Zo:()=>k,kt:()=>h});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},k=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,k=s(e,["components","mdxType","originalType","parentName"]),c=p(t),h=i,m=c["".concat(l,".").concat(h)]||c[h]||d[h]||r;return t?a.createElement(m,o(o({ref:n},k),{},{components:t})):a.createElement(m,o({ref:n},k))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=c;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},3882:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=t(7462),i=(t(7294),t(3905));const r={sidebar_position:6},o="aergia::jenkins_agent",s={unversionedId:"recipes/jenkins-agent",id:"recipes/jenkins-agent",title:"aergia::jenkins_agent",description:"Creates a Jenkins agent running directly on a Chef node.",source:"@site/docs/recipes/jenkins-agent.md",sourceDirName:"recipes",slug:"/recipes/jenkins-agent",permalink:"/aergia/docs/recipes/jenkins-agent",draft:!1,editUrl:"https://github.com/QubitPi/aergia/tree/gh-pages/docs/recipes/jenkins-agent.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"aergia::jenkins",permalink:"/aergia/docs/recipes/jenkins"},next:{title:"aergia::jenkins_github_webhook",permalink:"/aergia/docs/recipes/jenkins-github-webhook"}},l={},p=[{value:"Recipe Details",id:"recipe-details",level:2},{value:"Generating an SSH key Pair on Jenkins Controller Node",id:"generating-an-ssh-key-pair-on-jenkins-controller-node",level:3},{value:"Adjusting Private Key Format (If Needed)",id:"adjusting-private-key-format-if-needed",level:3},{value:"Configuring Jenkins Credential on Controller Node on First Use",id:"configuring-jenkins-credential-on-controller-node-on-first-use",level:3},{value:"Allowing Jenkins Controller to SSH passwordless into Agent Node",id:"allowing-jenkins-controller-to-ssh-passwordless-into-agent-node",level:3},{value:"Starts Jenkins Agent on Node",id:"starts-jenkins-agent-on-node",level:3},{value:"Connecting to Agent from Controller",id:"connecting-to-agent-from-controller",level:3},{value:"Recipe Verification",id:"recipe-verification",level:2}],k={toc:p};function d(e){let{components:n,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},k,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"aergiajenkins_agent"},"aergia::jenkins_agent"),(0,i.kt)("p",null,"Creates a Jenkins agent running directly on a Chef node."),(0,i.kt)("p",null,"The Jenkins architecture is designed for distributed build environments. It allows us to use different environments for\neach build project balancing the workload among multiple agents running jobs in parallel."),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Jenkins controller")," is the original node in the Jenkins installation. The Jenkins controller administers the\n",(0,i.kt)("strong",{parentName:"p"},"Jenkins agents")," and orchestrates their work, including scheduling jobs on agents and monitoring agents. Agents may be\nconnected to the Jenkins controller using either local or cloud computers."),(0,i.kt)("p",null,"The agents require a Java installation and a network connection to the Jenkins controller and can be launched in\nphysical machines, virtual machines, Kubernetes clusters, and with Docker images. This section connects ",(0,i.kt)("em",{parentName:"p"},"Docker")," agents\nto Jenkins with SSH."),(0,i.kt)("h2",{id:"recipe-details"},"Recipe Details"),(0,i.kt)("h3",{id:"generating-an-ssh-key-pair-on-jenkins-controller-node"},"Generating an SSH key Pair on Jenkins Controller Node"),(0,i.kt)("p",null,'When Jenkins was installed on Jenkins Controller Chef node, a "',(0,i.kt)("strong",{parentName:"p"},"jenkins"),'" user has been created. Its working directory\nis ',(0,i.kt)("strong",{parentName:"p"},"/var/jenkins_home/")," on the Controller, ",(0,i.kt)("inlineCode",{parentName:"p"},"aergia::jenkins_agent"),' generates they key pair under this user so Jenkins\ncontroller can use the key pair to ssh into agent nodes with this "jenkins" user:'),(0,i.kt)("p",null,"In the Jenkins Controller Chef node, the following command is executed:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"ssh-keygen -f ~/.ssh/jenkins_agent_key\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"An empty passphrase to use with the key is provided")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Running the command above shall generate the output like this:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"$ ssh-keygen -f ~/.ssh/jenkins_agent_key\nGenerating public/private rsa key pair.\nEnter passphrase (empty for no passphrase):\nEnter same passphrase again:\nYour identification has been saved in /home/ubuntu/.ssh/jenkins_agent_key\nYour public key has been saved in /home/ubuntu/.ssh/jenkins_agent_key.pub\nThe key fingerprint is:\nSHA256:XqxxjqsLlvDD0ZHm9Y2iR7zC6IbsUlMEHo3ffy8TzGs\nThe key's randomart image is:\n+---[RSA 3072]----+\n|  o+             |\n| ...o  .         |\n|  .o .+ .        |\n|    o+.+ o o     |\n|  ... o.So* .    |\n|  o+ = +.X=      |\n| o oO + *..+     |\n|. oo.o o .E .    |\n| o... oo.. o     |\n+----[SHA256]-----+\n"))))),(0,i.kt)("h3",{id:"adjusting-private-key-format-if-needed"},"Adjusting Private Key Format (If Needed)"),(0,i.kt)("p",null,"If the content of the file ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.ssh/jenkins_agent_key"),' ends with "-----END ',(0,i.kt)("strong",{parentName:"p"},"OPENSSH"),' PRIVATE KEY-----", then we will be\nseeing an SSH connection error when Jenkins controller tries to ssh-connect to agent later with a ',(0,i.kt)("inlineCode",{parentName:"p"},"BadPaddingException"),",\n",(0,i.kt)("a",{parentName:"p",href:"https://stackoverflow.com/a/31946825/14312712"},"this has to do with cipher default parameters"),". The error indicates\nthat the format for private key in credential is not correct. ",(0,i.kt)("a",{parentName:"p",href:"https://stackoverflow.com/a/54418715/14312712"},"The Jenkins credential should be ",(0,i.kt)("em",{parentName:"a"},(0,i.kt)("strong",{parentName:"em"},"RSA"))," secret\nkey"),". In this case, ",(0,i.kt)("inlineCode",{parentName:"p"},"aergia::jenkins_agent"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://stackoverflow.com/a/61095760/14312712"},"converts this private key from the new OPENSSH format to the older PEM format")," by effectively ",(0,i.kt)("a",{parentName:"p",href:"https://stackoverflow.com/a/63188738/14312712"},"executing"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/.ssh\nssh-keygen -f jenkins_agent_key -m PEM -p\n")),(0,i.kt)("p",null,"In the mean time, the ",(0,i.kt)("strong",{parentName:"p"},"/var/jenkins_home/.ssh/jenkins_agent_key.pub"),' key from the "jenkins" user on the Jenkins\ncontroller node has been recorded by ',(0,i.kt)("inlineCode",{parentName:"p"},"aergia::jenkins_agent")," for the\n",(0,i.kt)("a",{parentName:"p",href:"#allowing-jenkins-controller-to-ssh-passwordless-into-agent-node"},"next step")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Unlike Jenkins controller which runs in container, since ",(0,i.kt)("inlineCode",{parentName:"p"},"aergia::jenkins_agent"),' makes Jenkins agent run directly on\nChef node, the "jenkins" user home (',(0,i.kt)("inlineCode",{parentName:"p"},"~")," directory) is ",(0,i.kt)("strong",{parentName:"p"},'"/var/lib/jenkins"'),",  and we can access\n\"/var/lib/jenkins/.ssh/jenkins_agent_key.pub\" by entering shell as 'jenkins' user using:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker exec -it jenkins bash\njenkins@4fh7irw45hr:/$ whoami\njenkins\n"))),(0,i.kt)("h3",{id:"configuring-jenkins-credential-on-controller-node-on-first-use"},"Configuring Jenkins Credential on Controller Node on First Use"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to the Jenkins dashboard")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Manage Jenkins")," option in main menu and click on the ",(0,i.kt)("strong",{parentName:"p"},"Manage Credentials")," button;"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Error loading jenkins-credentials-1.png",src:t(2713).Z,width:"1260",height:"872"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select the drop option ",(0,i.kt)("strong",{parentName:"p"},"Add Credentials")," from the global item;"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Error loading jenkins-credentials-2.png",src:t(2138).Z,width:"1273",height:"489"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Fill in the form:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Kind: SSH Username with private key;"),(0,i.kt)("li",{parentName:"ul"},"Scope: Global"),(0,i.kt)("li",{parentName:"ul"},"id: jenkins"),(0,i.kt)("li",{parentName:"ul"},"description: The Jenkins SSH Key"),(0,i.kt)("li",{parentName:"ul"},"username: jenkins"),(0,i.kt)("li",{parentName:"ul"},"Private Key: select ",(0,i.kt)("strong",{parentName:"li"},"Enter directly")," and press the ",(0,i.kt)("strong",{parentName:"li"},"Add")," button to insert the content of our private key file\nat ",(0,i.kt)("strong",{parentName:"li"},"~/.ssh/jenkins_agent_key")," (with the ",(0,i.kt)("inlineCode",{parentName:"li"},"-----END RSA PRIVATE KEY-----")," ending, NOT\n",(0,i.kt)("del",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"del"},"-----END OPENSSH PRIVATE KEY-----")),")"),(0,i.kt)("li",{parentName:"ul"},"Passphrase: fill our passphrase used to generate the SSH key pair (leave empty if we didn't use one at the previous\nstep)"),(0,i.kt)("li",{parentName:"ul"},"press the ",(0,i.kt)("strong",{parentName:"li"},"Create")," button")))),(0,i.kt)("h3",{id:"allowing-jenkins-controller-to-ssh-passwordless-into-agent-node"},"Allowing Jenkins Controller to SSH passwordless into Agent Node"),(0,i.kt)("p",null,"Next, on the ",(0,i.kt)("strong",{parentName:"p"},"agent")," Chef node, ",(0,i.kt)("inlineCode",{parentName:"p"},"aergia::jenkins_agent"),' switches to the root user and add a jenkins user with the home\n"/var/lib/jenkins"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo su\nuseradd -d /var/lib/jenkins jenkins\n")),(0,i.kt)("p",null,"it also creates an ",(0,i.kt)("strong",{parentName:"p"},"authorized_keys"),' file for the "jenkins" user on agent node:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo mkdir -p /var/lib/jenkins/.ssh\nsudo touch /var/lib/jenkins/.ssh/authorized_keys\n")),(0,i.kt)("p",null,"Next, ",(0,i.kt)("inlineCode",{parentName:"p"},"aergia::jenkins_agent")," ",(0,i.kt)("strong",{parentName:"p"},'pastes the public key ("/var/jenkins_home/.ssh/jenkins_agent_key.pub") of the Jenkins\ncontroller from the previous step into the file "/var/lib/jenkins/.ssh/authorized_keys"')," and makes sure the files have\nthe correct owner and permission."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo chown -R jenkins /var/lib/jenkins\nsudo chown -R jenkins /var/lib/jenkins/.ssh\nsudo chmod 600 /var/lib/jenkins/.ssh/authorized_keys\nsudo chmod 700 /var/lib/jenkins/.ssh\n")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"If the agent node runs on AWS EC2, we need to have the EC2 instance running Jenkins agent with a network configuration\nthat allows SSH access from Jenkins controller to agent, we could do that through Security Group.")),(0,i.kt)("h3",{id:"starts-jenkins-agent-on-node"},"Starts Jenkins Agent on Node"),(0,i.kt)("p",null,"There are several options to run agent and ",(0,i.kt)("inlineCode",{parentName:"p"},"aergia::jenkins_agent")," chooses one of them which is ",(0,i.kt)("em",{parentName:"p"},"running the agent\ndirectly on Chef node"),'. (see "',(0,i.kt)("strong",{parentName:"p"},"RUNNING AGENT INSIDE DOCKER CONTAINER"),'" alternative below)'),(0,i.kt)("p",null,"It it important to know that ",(0,i.kt)("strong",{parentName:"p"},"a Jenkins agent is simply a Java process running on a node"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"aergia::jenkins_agent"),"\nwill simply have Java 11 installed on the Chef node running the Jenking agent:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install openjdk-11-jre\n")),(0,i.kt)("admonition",{title:"Running Agent Inside Docker Container",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Although ",(0,i.kt)("inlineCode",{parentName:"p"},"aergia::jenkins_agent")," does NOT do, We could alternatively run Jenkins agent inside a Docker container.")),(0,i.kt)("p",null,'Before considering this option, it should be known that this approach has at least one "drawback" - everything runs\ninside a container. This becomes a little issue when we would CI/CD an App that\'s packaged in a Docker. Even though we\nhave our EC2 node with Docker installed, we would still need to install Docker inside agent container, because ',(0,i.kt)("strong",{parentName:"p"},"it is\nthe agent that's executing the deployment, not the host"),". A team which heavily dockerizes its infrastructure, this is\nnot easy to deal with."),(0,i.kt)("p",null,"On the other hand, though, running agent inside container avoids resource sharing issues"),(0,i.kt)("p",null,":::"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"After Jenkins controller successfully ssh/connects to Agent Docker container, ",(0,i.kt)("strong",{parentName:"p"},"anything, including error messages, we\nsee in Jenkins Agent Log are from ",(0,i.kt)("em",{parentName:"strong"},"container"),", NOT agent node itself"),'. For example, when we see from log that says\n"Java not installed", we know it is the ',(0,i.kt)("em",{parentName:"p"},"container")," that needs to install Java, not AWS EC2 instance")),(0,i.kt)("p",null,"Here we will use the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jenkinsci/docker-ssh-agent"},"docker-ssh-agent")," image to create the agent\ncontainer:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'docker run -d --rm --name=jenkins-agent -p 22:22 \\\n-e "JENKINS_AGENT_SSH_PUBKEY=[jenkins-controller-public-key]" \\\njenkins/ssh-agent:alpine\n')),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},'In the command above, replace the tag "',"[","jenkins-controller-public-key","]",'" with the SSH public key generated in the\n',(0,i.kt)("a",{parentName:"p",href:"#generating-an-ssh-key-pair-on-controller-nodejenkins-controller"},"previous step"),". The public key value in this example\ncould be found by issuing ",(0,i.kt)("inlineCode",{parentName:"p"},"cat ~/.ssh/jenkins_agent_key.pub")," on the Jenkins controller machine. Do NOT add the square\nbrackets ",(0,i.kt)("inlineCode",{parentName:"p"},"[]")," around the key value"),(0,i.kt)("p",{parentName:"admonition"},"If the EC2 instance machine already has a ssh server running on the 22 port (if we logged onto this machine using the\n",(0,i.kt)("inlineCode",{parentName:"p"},"ssh")," command, then that's the case), we should use another port for the docker command, such as ",(0,i.kt)("strong",{parentName:"p"},"-p 4444:22")," (",(0,i.kt)("strong",{parentName:"p"},"but\nwe will then need to configure a little more on this later so please keep reading"),"), in this case, make sure to add a\nnew inbound rule to the agent node's AWS security group: Custom TCP with port range equal to ",(0,i.kt)("strong",{parentName:"p"},"4444")," and specify the\nclient source that includes our Jenkins controller EC2 instace (can be its private IP or its containing security group)")),(0,i.kt)("p",null,"Now run the following command to update the container environment:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ VARS1="HOME=|USER=|MAIL=|LC_ALL=|LS_COLORS=|LANG="\n$ VARS2="HOSTNAME=|PWD=|TERM=|SHLVL=|LANGUAGE=|_="\n$ VARS="${VARS1}|${VARS2}"\n$ docker exec jenkins-agent sh -c "env | egrep -v \'^(${VARS})\' >> /etc/environment"\n')),(0,i.kt)("p",null,"This step is necessary because the image is configured to reject changes to environment variables. when the Jenkins\nteam fixes ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jenkinsci/docker-ssh-agent/issues/33"},"this issue"),", we can ignore this step."),(0,i.kt)("p",null,'Now the container "jenkins-agent" is running and we can verify this using ',(0,i.kt)("inlineCode",{parentName:"p"},"docker ps -a")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"When we need to diagnose this container later, ",(0,i.kt)("inlineCode",{parentName:"p"},"docker container inspect jenkins-agent")," can be used")),(0,i.kt)("p",null,"Now, if we move forward to the ",(0,i.kt)("a",{parentName:"p",href:"#connecting-to-agent-from-controller"},"next step"),', we will see 2 errors ("Java 8/11 not\ninstalled" & "Permission Denied on /var/lib/jenkins/ for \'jenkins\' user") from agent (this could be fixed by Jenkins\nteam in the future but for now, let\'s fact them), so we need to do 2 more setups for the Jenkins agent running\ncontainer:'),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Install Java 11 inside Container"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo docker exec -it jenkins-agent bash\napk add openjdk11\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Create Jenkins user workspace manually this user access to it"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p /var/lib/jenkins/\nchown -R jenkins /var/lib/jenkins\n")))),(0,i.kt)("p",null,":::"),(0,i.kt)("h3",{id:"connecting-to-agent-from-controller"},"Connecting to Agent from Controller"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to your Jenkins dashboard;")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to ",(0,i.kt)("strong",{parentName:"p"},"Manage Jenkins")," option in main menu;")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to ",(0,i.kt)("strong",{parentName:"p"},"Manage Nodes and Clouds")," item;"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Error loading jenkins-manage-node-1.png",src:t(9619).Z,width:"1249",height:"369"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to ",(0,i.kt)("strong",{parentName:"p"},"New Node")," option in side menu;")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Fill the Node/agent name (such as "Awesome App Agent") and select the type of ',(0,i.kt)("strong",{parentName:"p"},"Permanent Agent"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Now fill the fields in the next page prompted:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Remote root directory: ",(0,i.kt)("strong",{parentName:"p"},"/var/lib/jenkins"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"label: can be arbitrary")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"usage: ",(0,i.kt)("strong",{parentName:"p"},"Only build jobs with label expression matching this node"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Launch method: ",(0,i.kt)("strong",{parentName:"p"},"Launch agents via SSH")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Host: the ",(0,i.kt)("strong",{parentName:"p"},"Private IPv4 addresses")," of our network"),(0,i.kt)("admonition",{parentName:"li",title:"Example",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If this Chef node is a EC2 instance, the Host should be the ",(0,i.kt)("strong",{parentName:"p"},"Private IPv4 addresses")," of the EC2 instance running\nthe agent"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Credentials: ",(0,i.kt)("a",{parentName:"p",href:"#configuring-jenkins-credential-on-controller-node-on-first-use"},(0,i.kt)("strong",{parentName:"a"},"jenkins")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Host Key verification Strategy: ",(0,i.kt)("strong",{parentName:"p"},"Manually trusted key verification Strategy")))))),(0,i.kt)("admonition",{parentName:"li",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If, not using ",(0,i.kt)("inlineCode",{parentName:"p"},"aergia::jenkins_agent"),', we have decided to run Jenkins agent inside Docker container, there is\nan extra followup step. Hit "',(0,i.kt)("strong",{parentName:"p"},"Advanced..."),'" under ',(0,i.kt)("strong",{parentName:"p"},"Launch method")," sub-menue and put ",(0,i.kt)("strong",{parentName:"p"},"4444")," as the port number\nbecause we have mapped container SSH port 22 to 4444 on Chef node"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Press the ",(0,i.kt)("strong",{parentName:"p"},"Save")," button and the agent will be registered. Click on it. The message: ",(0,i.kt)("inlineCode",{parentName:"p"},"Agent successfully connected\nand online")," on the last log line should appear short after"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Congratulations"),"! ",(0,i.kt)("em",{parentName:"p"},"Jenkins controller has successfully obtained a distributed node for deployment"),"."),(0,i.kt)("h2",{id:"recipe-verification"},"Recipe Verification"))}d.isMDXComponent=!0},2713:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/jenkins-credentials-1-016cd28536a209fa1f39c30701052049.png"},2138:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/jenkins-credentials-2-6f38901c84a0286de7f2499381d7bee5.png"},9619:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/jenkins-manage-node-1-35d3b4ee30519e9b2b55b150c1b97374.png"}}]);