"use strict";(self.webpackChunkhashicorp_aws=self.webpackChunkhashicorp_aws||[]).push([[5423],{7657:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var i=s(4848),t=s(8453);const r={sidebar_position:4,title:"React App"},a=void 0,c={id:"react",title:"React App",description:"[//]: # (Copyright Jiaqi Liu)",source:"@site/docs/react.md",sourceDirName:".",slug:"/react",permalink:"/hashicorp-aws/docs/react",draft:!1,unlisted:!1,editUrl:"https://github.com/QubitPi/hashicorp-aws/tree/master/docs/docs/react.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"React App"},sidebar:"tutorialSidebar",previous:{title:"Machine Learning Model in REST API",permalink:"/hashicorp-aws/docs/machine-learning"},next:{title:"Jersey-Jetty Based Webservice",permalink:"/hashicorp-aws/docs/webservice"}},o={},l=[{value:"Manual Deployment",id:"manual-deployment",level:2},{value:"GitHub Action Automatic Deployment",id:"github-action-automatic-deployment",level:2},{value:"General Template in Downstream Repo",id:"general-template-in-downstream-repo",level:3},{value:"Auxiliary Actions",id:"auxiliary-actions",level:3},{value:"Code Style Checks",id:"code-style-checks",level:4},{value:"Unit Tests",id:"unit-tests",level:4},{value:"Cypress E2E Tests",id:"cypress-e2e-tests",level:4},{value:"Auto Version",id:"auto-version",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["EBS volumes during build time will ",(0,i.jsx)(n.a,{href:"https://qubitpi.github.io/hashicorp-packer/packer/integrations/hashicorp/amazon/latest/components/builder/ebs#:~:text=Optional%3A-,delete_on_termination,-(bool)%20%2D%20Indicates%20whether",children:"automatically be removed"})]}),"\n"]})}),"\n",(0,i.jsx)(n.h2,{id:"manual-deployment",children:"Manual Deployment"}),"\n",(0,i.jsx)(n.p,{children:"The following script variables need to be defined:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html",children:(0,i.jsx)(n.strong,{children:"AWS_ACCESS_KEY_ID"})})," & ",(0,i.jsx)(n.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html",children:(0,i.jsx)(n.strong,{children:"AWS_SECRET_ACCESS_KEY"})})]}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.em,{children:"IAM user"})," associated with the credentials above must have the following ",(0,i.jsx)(n.a,{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction_access-management.html",children:"AWS permissions policies"}),":"]}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"IAMFullAccess"}),"\n",(0,i.jsx)(n.li,{children:"AmazonEC2FullAccess"}),"\n",(0,i.jsx)(n.li,{children:"AmazonRoute53FullAccess"}),"\n"]})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"REACT_DIR"}),": The local absolute path to the React project repo"]}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsxs)(n.p,{children:["Should the React App be built with ",(0,i.jsx)(n.a,{href:"https://create-react-app.dev/docs/adding-custom-environment-variables/#adding-development-environment-variables-in-env",children:".env file"}),", this file MUST exist at ",(0,i.jsx)(n.code,{children:"$REACT_DIR/.env"})," at this moment. This .env\nfile is essentially the same one mentioned in the ",(0,i.jsx)(n.code,{children:"HC_CONFIG_DIR"})," part below"]})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"HC_DIR"}),": The local absolute path to the ",(0,i.jsx)(n.a,{href:"https://qubitpi.github.io/hashicorp-aws/",children:"hashicorp-aws"})," directory"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"HC_CONFIG_DIR"}),": The local absolute path to a directory containing the following deployment files:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["SSL cert file located (",(0,i.jsx)(n.code,{children:"/abs/path/to/hashicorp-aws-config-dir/server.crt"}),")"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["SSL cert key file (",(0,i.jsx)(n.code,{children:"/abs/path/to/hashicorp-aws-config-dir/server.key"}),")"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Nginx config file (",(0,i.jsx)(n.code,{children:"/abs/path/to/hashicorp-aws-config-dir/nginx.conf"}),")"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[".env file (",(0,i.jsx)(n.code,{children:"/abs/path/to/hashicorp-aws-config-dir/.env"}),")"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["A ",(0,i.jsx)(n.a,{href:"https://qubitpi.github.io/hashicorp-packer/packer/guides/hcl/variables#from-a-file",children:"HashiCorp Packer variable file"})," named ",(0,i.jsx)(n.strong,{children:"aws-react.pkrvars.hcl"})," with the following\nvariable values (",(0,i.jsx)(n.code,{children:"/abs/path/to/hashicorp-aws-config-dir/aws-react.pkrvars.hcl"}),"):"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-hcl",children:'aws_image_region                 = "my-aws-region"\nami_name                         = "my-react-app"\ninstance_type                    = "<one of t2.micro/t2.small/t2.medium/t2.large/t2.xlarge/t2.2xlarge>"\nreact_dist_path                  = "../../../../dist"\naws_react_ssl_cert_file_path     = "../../../../hashicorp-aws-config-dir/server.crt"\naws_react_ssl_cert_key_file_path = "../../../../hashicorp-aws-config-dir/server.key"\naws_react_nginx_config_file_path = "../../../../hashicorp-aws-config-dir/nginx.conf"\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["A ",(0,i.jsx)(n.a,{href:"https://qubitpi.github.io/hashicorp-terraform/terraform/language/values/variables#variable-definitions-tfvars-files",children:"HashiCorp Terraform variable file"})," named ",(0,i.jsx)(n.strong,{children:"aws-react.tfvars"})," with the\nfollowing variable values (",(0,i.jsx)(n.code,{children:"/abs/path/to/hashicorp-aws-config-dir/aws-react.tfvars"}),"):"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-hcl",children:'aws_deploy_region   = "my-aws-region"\nroute_53_zone_id    = "9DQXLTNSN7ZX9P8V2KZII"\nami_name            = "my-react-app"\ninstance_type       = "<one of t2.micro/t2.small/t2.medium/t2.large/t2.xlarge/t2.2xlarge>"\nec2_instance_name   = "My React App"\nec2_security_groups = ["My React App"]\nreact_domain        = "myreactapp.mycompany.com"\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"github-action-automatic-deployment",children:"GitHub Action Automatic Deployment"}),"\n",(0,i.jsx)(n.h3,{id:"general-template-in-downstream-repo",children:"General Template in Downstream Repo"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"env:\n  NODE_VERSION: 16\n\njobs:\n  hashicorp:\n    name: Generated React dist in GitHub Action, publish its AMI and deploy the AMI to EC2 through HashiCorp\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout\n        uses: actions/checkout@v3\n      - name: Set node version to ${{ env.NODE_VERSION }}\n        uses: actions/setup-node@v3\n        with:\n          node-version: ${{ env.NODE_VERSION }}\n      - name: Checkout HashiCorp deployment tool\n        run: git clone https://github.com/QubitPi/hashicorp-aws.git ../hashicorp-aws\n      - name: Load hashicorp-aws-config-dir and put it in the same directory as hashicorp-aws\n        run: ...\n      - name: Load Packer variable file\n        run: cp ../hashicorp-aws-config-dir/aws-react.pkrvars.hcl ../hashicorp-aws/hashicorp/react/images/aws-react.auto.pkrvars.hcl\n      - name: Load Terraform variable file\n        run: cp ../hashicorp-aws-config-dir/aws-react.tfvars ../hashicorp-aws/hashicorp/react/instances/aws-react.auto.tfvars\n      - name: Generate dist\n        run: cp ../hashicorp-aws-config-dir/.env . && yarn && yarn build\n      - name: Move dist to a location for HashiCorp deployment to pickup\n        run: mv dist ../\n      - name: QubitPi/hashicorp-aws\n        uses: QubitPi/hashicorp-aws@master\n        with:\n          hashicorp-dir: ../hashicorp-aws/hashicorp/react\n          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}\n          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}\n          aws-region: ${{ secrets.AWS_REGION }}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"auxiliary-actions",children:"Auxiliary Actions"}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsx)(n.p,{children:"The following auxiliary actions assumes a yarn-based project"})}),"\n",(0,i.jsx)(n.h4,{id:"code-style-checks",children:"Code Style Checks"}),"\n",(0,i.jsxs)(n.p,{children:["This action assume ",(0,i.jsx)(n.a,{href:"https://eslint.org/",children:"ESLint"}),", ",(0,i.jsx)(n.a,{href:"https://typescript-eslint.io/",children:"typescript-eslint"}),", and ",(0,i.jsx)(n.a,{href:"https://qubitpi.github.io/prettier/docs/en/install.html",children:"Prettier"})," have been installed"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"yarn add --dev @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint typescript\nyarn add --dev --exact prettier\n"})}),"\n",(0,i.jsxs)(n.admonition,{title:"ESLint Configuration",type:"info",children:[(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"yarn run eslint --init # https://dev.to/maithanhdanh/configuration-for-eslint-b47\n"})}),(0,i.jsxs)(n.p,{children:["Edit the auto-generated ",(0,i.jsx)(n.strong,{children:".eslintrc.json"})," to make it look like the following:"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title=".eslintrc.json"',children:'{\n  "env": {\n    "browser": true,\n    "es2021": true\n  },\n  "extends": [\n    "standard-with-typescript",\n    "plugin:react/recommended",\n    "eslint:recommended",\n    "plugin:@typescript-eslint/recommended",\n    "prettier"\n  ],\n  "parser": "@typescript-eslint/parser",\n  "parserOptions": {\n    "ecmaVersion": "latest",\n    "sourceType": "module"\n  },\n  "plugins": ["react", "@typescript-eslint"],\n  "rules": {\n    "react/react-in-jsx-scope": "off"\n  }\n}\n'})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ignore",children:"docs/**\ndist/**\nconfig/**\nscripts/**\n"})})]}),"\n",(0,i.jsxs)(n.admonition,{title:"Prettier Configuration",type:"info",children:[(0,i.jsxs)(n.p,{children:["Linters usually contain not only code quality rules, but also stylistic rules. Most stylistic rules are unnecessary\nwhen using Prettier, but worse - they might conflict with Prettier! Use Prettier for code formatting concerns, and\nlinters for code-quality concerns, as outlined in\n",(0,i.jsx)(n.a,{href:"https://qubitpi.github.io/prettier/docs/en/comparison",children:"Prettier vs. Linters"}),"."]}),(0,i.jsx)(n.p,{children:"Luckily it's easy to turn off rules that conflict or are unnecessary with Prettier, by using these pre-made configs:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/prettier/eslint-config-prettier",children:"eslint-config-prettier"})}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"yarn add --dev eslint-config-prettier\n"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title=".prettierrc.json"',children:'{\n  "tabWidth": 2,\n  "useTabs": false,\n  "printWidth": 120\n}\n'})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ignore",metastring:".prettierignore",children:"*.md\nbuild\ncoverage\nnode_modules\ndocs\n"})})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"---\nname: My CI/CD\n\nenv:\n  NODE_VERSION: 16\n\njobs:\n  code-style:\n    name: Code Style Check\n    runs-on: ubuntu-latest\n    steps:\n      - uses: QubitPi/hashicorp-aws/auxiliary/github/actions/ui-code-style@master\n        with:\n          node-version: ${{ env.NODE_VERSION }}\n"})}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsx)(n.p,{children:"We can fix it by formatting all files at the root of project with:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"yarn prettier . --write\n"})})]}),"\n",(0,i.jsx)(n.h4,{id:"unit-tests",children:"Unit Tests"}),"\n",(0,i.jsxs)(n.p,{children:["Our ",(0,i.jsx)(n.strong,{children:"package.json"})," should have an entry that defines the command ",(0,i.jsx)(n.code,{children:"yarn test"}),", for example, when our unit tests is\nwritten with ",(0,i.jsx)(n.a,{href:"https://qubitpi.github.io/jest/",children:"Jest"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "scripts": {\n    "test": "jest"\n  }\n}\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"---\nname: My CI/CD\n\nenv:\n  NODE_VERSION: 16\n\njobs:\n  unit-tests:\n    name: Unit Tests\n    needs: [yml-md-style, code-style]\n    runs-on: ubuntu-latest\n    steps:\n      - uses: QubitPi/hashicorp-aws/auxiliary/github/actions/ui-unit-test@master\n        with:\n          node-version: ${{ env.NODE_VERSION }}\n"})}),"\n",(0,i.jsx)(n.h4,{id:"cypress-e2e-tests",children:"Cypress E2E Tests"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Cypress E2E Tests"})," offers developers Actions that provide an easy way to automate, customize, and execute\n",(0,i.jsx)(n.strong,{children:"parallel"})," end-to-end tests within a GitHub project.  The action provides"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["dependency installation via ",(0,i.jsx)(n.strong,{children:"yarn"}),","]}),"\n",(0,i.jsx)(n.li,{children:"scanning of test specs,"}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"running each spec in parallel"}),", and"]}),"\n",(0,i.jsx)(n.li,{children:"upload test screenshots and video on test failure."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The example below is a very simple setup:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Install Cypress with ",(0,i.jsx)(n.code,{children:"yarn add cypress --dev"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Initialize Cypress with ",(0,i.jsx)(n.code,{children:"yarn run cypress open"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://qubitpi.github.io/cypress-documentation/guides/tooling/typescript-support/",children:"Support TypeScript"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Put all ",(0,i.jsx)(n.strong,{children:".spec.cy.ts"}),' test files under "cypress/e2e" directory']}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Install ",(0,i.jsx)(n.a,{href:"https://github.com/jeffbski/wait-on",children:"wait-on"}),": ",(0,i.jsx)(n.code,{children:"yarn add -D wait-on"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Add the following script command to ",(0,i.jsx)(n.code,{children:"package.json"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  ...\n\n  "scripts": {\n    "e2e": "cypress run --browser chrome",\n    "wait-on-dev": "wait-on http-get://localhost:3000/",\n    "wait-on-prod": "wait-on http-get://localhost:3000/"\n  },\n\n  ...\n}\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Use Cypress E2E Tests workflow:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'---\nname: My GitHub Workflow\n\n"on":\n   pull_request:\n   push:\n      branches:\n         - master\n\njobs:\n  list-e2e-specs:\n    runs-on: ubuntu-latest\n    outputs:\n      paths: ${{ steps.list-e2e-specs.outputs.paths }}\n    steps:\n      - name: List Files\n        id: list-e2e-specs\n        uses: mirko-felice/list-files-action@v3.0.5\n        with:\n          repo: ${{ github.repository }}\n          ref: ${{ github.ref }}\n          path: "cypress/e2e"\n          ext: ".ts"\n\n  e2e-tests:\n    name: E2E Tests\n    needs: list-e2e-specs\n    runs-on: ubuntu-latest\n    strategy:\n      fail-fast: false\n      matrix:\n        node_version: [18]\n        start_strategy: ["yarn-start", "serve"]\n        test_spec: ${{ fromJson(needs.list-e2e-specs.outputs.paths) }}\n    steps:\n      - uses: actions/checkout@v3\n      - name: Set node version to ${{ inputs.node-version }}\n        uses: actions/setup-node@v3\n        with:\n          node-version: ${{ inputs.node-version }}\n      - name: Install dependencies\n        run: yarn\n      - uses: QubitPi/hashicorp-aws/auxiliary/github/actions/cypress-e2e@master\n        with:\n          node-version: ${{ env.NODE_VERSION }}\n          start-strategy: ${{ matrix.start_strategy }}\n          spec-relative-path: ${{ matrix.test_spec }}\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"auto-version",children:"Auto Version"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'git tag -a 0.0.1 -m "Version 0.0.1"\n'})}),"\n",(0,i.jsx)(n.p,{children:"NPM example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'---\nname: CI/CD\n\n"on":\n  pull_request:\n  push:\n    branches:\n      - master\n\nenv:\n  USER: QubitPi\n  EMAIL: jack20220723@gmail.com\n\njobs:\n  release:\n    name: Publish NPM Packages\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n        with:\n          fetch-depth: 0 # this is needed for feching tags for "tag-for-release.bash" below\n      - name: Set node version to 18\n        uses: actions/setup-node@v3\n        with:\n          node-version: 18\n          registry-url: "https://registry.npmjs.org"\n      - name: Download auto-version bump scripts\n        run: |\n          git clone https://github.com/QubitPi/hashicorp-aws.git ../hashicorp-aws\n          cp ../hashicorp-aws/auxiliary/github/tag-for-release.bash .github/\n          cp ../hashicorp-aws/auxiliary/github/upversion.py .github/\n      - name: Tag for release\n        run: |\n          git config --global user.name \'$USER\'\n          git config --global user.email \'$EMAIL\'\n          .github/tag-for-release.bash\n      - name: Set release version\n        run: |\n          VERSION=$(git describe)\n          npm version $VERSION\n      - name: Publish to NPM Packages\n        run: |\n          npm config set \'//registry.npmjs.org/:_authToken\' "${NPM_TOKEN}"\n          npm publish --access public\n        env:\n          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}\n'})})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>c});var i=s(6540);const t={},r=i.createContext(t);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);