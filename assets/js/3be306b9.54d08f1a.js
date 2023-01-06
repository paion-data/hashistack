"use strict";(self.webpackChunkaergia=self.webpackChunkaergia||[]).push([[9098],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(i,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=c;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<l;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9244:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={slug:"ruby",title:"Ruby Essentials",authors:["jiaqi"],tags:["Chef","Ruby"]},s=void 0,o={permalink:"/aergia/blog/ruby",editUrl:"https://github.com/QubitPi/aergia/tree/gh-pages/blog/2022-11-05-ruby/index.md",source:"@site/blog/2022-11-05-ruby/index.md",title:"Ruby Essentials",description:"Ruby is a simple programming language. Chef uses Ruby as its reference language to define the patterns that are found in",date:"2022-11-05T00:00:00.000Z",formattedDate:"November 5, 2022",tags:[{label:"Chef",permalink:"/aergia/blog/tags/chef"},{label:"Ruby",permalink:"/aergia/blog/tags/ruby"}],readingTime:16.415,hasTruncateMarker:!0,authors:[{name:"Jiaqi Liu",title:"Maintainer of Aergia",url:"https://github.com/QubitPi",imageURL:"https://avatars.githubusercontent.com/u/16126939?v=4",key:"jiaqi"}],frontMatter:{slug:"ruby",title:"Ruby Essentials",authors:["jiaqi"],tags:["Chef","Ruby"]},prevItem:{title:"Chef Intro",permalink:"/aergia/blog/chef-intro"},nextItem:{title:"Deploying Jenkins to AWS",permalink:"/aergia/blog/jenkins-on-aws"}},i={authorsImageUrls:[void 0]},p=[{value:"Instally Ruby",id:"instally-ruby",level:2},{value:"Mac OS",id:"mac-os",level:3},{value:"Linux",id:"linux",level:3},{value:"Ruby Syntax",id:"ruby-syntax",level:2},{value:"Control Flow",id:"control-flow",level:3},{value:"Logical Operators",id:"logical-operators",level:3},{value:"Loops",id:"loops",level:3},{value:"Arrays",id:"arrays",level:3},{value:"Hash",id:"hash",level:3},{value:"Sets",id:"sets",level:3},{value:"Function",id:"function",level:3},{value:"Yield",id:"yield",level:4},{value:"Classes",id:"classes",level:3},{value:"Instance Methods and Class Methods",id:"instance-methods-and-class-methods",level:4},{value:"Instance Variables and Class Variables",id:"instance-variables-and-class-variables",level:4},{value:"Mixins",id:"mixins",level:4},{value:"Reading from the Console",id:"reading-from-the-console",level:3},{value:"Creating a File",id:"creating-a-file",level:3},{value:"Sending HTTP Requests",id:"sending-http-requests",level:3},{value:"Parsing HTTP Response",id:"parsing-http-response",level:3},{value:"Receiving HTTP Requests",id:"receiving-http-requests",level:3}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Ruby is a simple programming language. Chef uses Ruby as its reference language to define the patterns that are found in\nresources, recipes, and cookbooks. Chef also uses these patterns to configure, deploy, and manage nodes across the\nnetwork."),(0,r.kt)("h2",{id:"instally-ruby"},"Instally Ruby"),(0,r.kt)("h3",{id:"mac-os"},"Mac OS"),(0,r.kt)("p",null,"Ruby comes pre-installed on macOS. However, pre-installed Ruby might be a few versions behind. The latest version can be\ninstalled using a package manager like Homebrew, making it easy to install Ruby. Just run the following command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brew install ruby\n")),(0,r.kt)("h3",{id:"linux"},"Linux"),(0,r.kt)("p",null,"Linux and Ubuntu use the apt package manager for installation. Run the following command in the terminal to install\nRuby."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install ruby-full\n")),(0,r.kt)("h2",{id:"ruby-syntax"},"Ruby Syntax"),(0,r.kt)("h3",{id:"control-flow"},"Control Flow"),(0,r.kt)("p",null,"Ruby's ",(0,r.kt)("inlineCode",{parentName:"p"},"if")," statement takes an expression and executes the code based on the evaluation of that expression. If the\nexpression evaluates to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", Ruby executes the block of code following the ",(0,r.kt)("inlineCode",{parentName:"p"},"if")," statement. If the expression\nevaluates to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", then it doesn't execute the code. For example,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'x = 10\nif x > 7\n puts "x is greater than 7"\nend\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"else")," statement is the partner of the ",(0,r.kt)("inlineCode",{parentName:"p"},"if")," statement. If the expression evaluates to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", then the statement\nfollowing the condition is executed. If the expression evaluates to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", then the statement following the else\nstatement is executed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'x = 10\n\nif x < 7\n puts "x is less than 7"\nelse\n puts "x is greater than 7"\nend\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"if\u2026else")," structure keeps us restricted to two options. What if we want to have more options in our program? Here,\n",(0,r.kt)("inlineCode",{parentName:"p"},"elsif")," comes to the rescue and allows us to add alternatives to the traditional ",(0,r.kt)("inlineCode",{parentName:"p"},"if\u2026else"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'x = 10\n\nif x < 7\n puts "x is less than 7"\nelsif x > 7\n puts "x is greater than 7"\nelse\n puts "x is equal to 7"\nend\n')),(0,r.kt)("p",null,"Sometimes, instead of checking whether an expression is true, we are more interested in knowing if a condition is false\nand executing a block of code. Ruby allows us such program control using ",(0,r.kt)("strong",{parentName:"p"},"unless"),". For example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'playing = false\n\nunless playing\n puts "We\'re busy learning Ruby"\nelse\n puts "It\'s time to play games"\nend\n')),(0,r.kt)("p",null,"The switch statement is a selective control flow statement. It allows us to easily control the flow of the code when an\nexpression will result in one of a few anticipated values. Observe the following example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'num = 0\n\ncase num\nwhen 0\n puts "Zero"\nwhen 1\n puts "One"\nwhen 2\n puts "Two"\nelse\n puts "The entered number is greater than 2"\nend\n')),(0,r.kt)("h3",{id:"logical-operators"},"Logical Operators"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"}),(0,r.kt)("th",{parentName:"tr",align:"center"}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"&&")," (and)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"A condition using the ",(0,r.kt)("inlineCode",{parentName:"td"},"&&")," operator evaluates to ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," if both operands are ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"`"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"!")," (not)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"!")," operator reverses the state of a single operand.")))),(0,r.kt)("h3",{id:"loops"},"Loops"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"while")," loop checks to see if the specified condition is ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", and while it is, the loop keeps running. As soon as\nthe condition resolves to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", the loop stops."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"count = 1\n\nwhile count < 10\n puts count\n count = count + 1\nend\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"until")," loop works similarly to the ",(0,r.kt)("inlineCode",{parentName:"p"},"while")," loop, except it will run while the condition is ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," and stop if\nthe condition evaluates to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),". For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"count = 6\n\nuntil count > 10\n puts count\n count = count + 1\nend\n")),(0,r.kt)("p",null,"When we already know the number of times we want the loop to execute, we use a ",(0,r.kt)("inlineCode",{parentName:"p"},"for")," loop:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"for count in 1...10\n puts count\nend\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f The example above uses ",(0,r.kt)("strong",{parentName:"p"},"three-dot form")," which creates a range that excludes the specified high value. For\nexample,"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"for count in 1...10\n puts count\nend\n")),(0,r.kt)("p",{parentName:"blockquote"},"The snippet above produces the sequence 1 to 9."),(0,r.kt)("p",{parentName:"blockquote"},"The ",(0,r.kt)("strong",{parentName:"p"},"double-dot form")," includes the specified high value. The following example prints 1 to 10 on the screen:"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"for count in 1..10\n puts count\nend\n"))),(0,r.kt)("p",null,"Like loops, iterators are methods that loop over a given set of data and perform a specified operation on each item. For\nexample, let's say we want to print the string \u201cI am Learning Ruby\u201d on the screen five times. Sure, we can use a for\nloop, but we can also achieve the same functionality using the ",(0,r.kt)("strong",{parentName:"p"},"times iterator"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'5.times { puts "I am Learning Ruby!" }\n')),(0,r.kt)("p",null,"Along with the times iterator, we also have the ",(0,r.kt)("strong",{parentName:"p"},"each iterator"),". Let's say that we have an array containing the days of\nthe week and we want to print them to the screen. In order to do that, we can use an each iterator."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"Terminal: ~ - irb\ndays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']\n\ndays.each { |day| puts day }\n")),(0,r.kt)("h3",{id:"arrays"},"Arrays"),(0,r.kt)("p",null,"We can declare items of the array by enclosing them in square brackets while separating the items using commas. For\nexample:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'months = ["January", "February", "March", "April", "May", "June", "July"]\n')),(0,r.kt)("p",null,"We can refer to each item by referring to its zero-based index."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"puts months[6]\n")),(0,r.kt)("p",null,"To ",(0,r.kt)("strong",{parentName:"p"},"add")," more items to the array, we can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"<<")," operator or ",(0,r.kt)("inlineCode",{parentName:"p"},"push"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'months << "August"\nmonths.push("September")\n')),(0,r.kt)("p",null,"To inset an element at a desired position, we can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"insert")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'months.insert(2, "October")\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"pop")," method will remove the last item from the array."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"months.pop\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"delete_at")," method will remove the item at the specified index position."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"months.delete_at(2)\n")),(0,r.kt)("p",null,"To create nested arrays:"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"include?")," method checks to see if the given argument is an element of the array. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"my_array = [5, 9, 8, 2, 6]\nputs my_array.include?(0) # returns false\nputs my_array.include?(2) # returns true\n")),(0,r.kt)("p",null,"When called on an array, the ",(0,r.kt)("strong",{parentName:"p"},"sort")," method will return a sorted array. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"my_array = [5, 9, 8, 2, 6]\nprint my_array.sort\n# results in my_array = [2, 5, 6, 8, 9]\n")),(0,r.kt)("p",null,"The flatten method takes nested arrays and returns a single dimensional array."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"my_array = [5, 9, [8, 2, 6], [1, 0]]\nprint my_array.flatten\n# results in my_array = [5, 9, 8, 2, 6, 1, 0]\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"map")," method invokes the code inside the block once for each element in the array and will create and return a new\narray that contains the values returned by the block. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"my_array = [5, 9, 8, 2, 6]\nprint my_array.map { |item| item*2}\n# results in my_array = [10, 18, 16, 4, 12]\n")),(0,r.kt)("h3",{id:"hash"},"Hash"),(0,r.kt)("p",null,"In a hash, each item is stored with an associated key, which can be any object, and we can refer to the item as a\nkey-value pair."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'person_hash = {\n  "name" => "Jonathan",\n  "age" => 25\n }\nputs person_hash\n')),(0,r.kt)("p",null,"Another way of creating a hash is using the keyword ",(0,r.kt)("inlineCode",{parentName:"p"},"new"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"Person_hash = Hash.new\n")),(0,r.kt)("p",null,"This will create an empty hash to which we can add values later on."),(0,r.kt)("p",null,"We can easily access hash values. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'puts person_hash["name"]\nputs person_hash["age"]\n')),(0,r.kt)("p",null,"We can easily add to an existing hash by specifying a key-value pair."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"person_hash[\"gender\"] = 'male'\n")),(0,r.kt)("p",null,"We can use the ",(0,r.kt)("strong",{parentName:"p"},"delete")," function to remove items from hash."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'person_hash.delete("gender")\nputs person_hash\n')),(0,r.kt)("p",null,"To iterate over hashes"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'person_hash.each do |key, value|\n puts "#{key} is #{value}"\nend\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"has_key?")," method is used to check if a hash contains a specific key and returns true if found. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'puts person_hash.has_key?("name")\nputs person_hash.has_key?("height")\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"select")," method is usually used with a block and returns any key-value pairs that satisfy the condition in the\nblock"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'puts person_hash.select{ |key, value| key == "name"}\n')),(0,r.kt)("h3",{id:"sets"},"Sets"),(0,r.kt)("p",null,"In Ruby, sets are collections of unique elements. The order of the elements doesn't matter, so they can't be reliably\nreferenced by an index. Sets are useful when we want to ensure there are no duplicate items."),(0,r.kt)("p",null,"Unlike any other collection, we need to add a ",(0,r.kt)("inlineCode",{parentName:"p"},"require")," statement before making use of the Set class. The ",(0,r.kt)("inlineCode",{parentName:"p"},"require"),"\nmethod is used to import all class and method definitions of the class. After that, we can create a set instance simply\nusing the ",(0,r.kt)("inlineCode",{parentName:"p"},"new")," keyword. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"require 'set'\nmy_set = Set.new\n")),(0,r.kt)("p",null,"You can also pass an array to the new method to create a set."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"my_set = Set.new([5, 2, 9, 3, 1])\n")),(0,r.kt)("p",null,"We can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"<<")," operator to add values to the set. Unlike arrays, we use the ",(0,r.kt)("inlineCode",{parentName:"p"},"add")," method instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"push"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"my_set = Set.new\nmy_set << 5\nmy_set.add 1\n")),(0,r.kt)("h3",{id:"function"},"Function"),(0,r.kt)("p",null,"A function is a set of statements that achieves a specific goal or performs a specific task. Ruby allows us to define\nour own functions using the keyword ",(0,r.kt)("inlineCode",{parentName:"p"},"def"),". For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'def greetings_with_name(name="Emily")\n puts "Hello #{name}!"\nend\n')),(0,r.kt)("p",null,"You can define methods that take any number of arguments."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'def optional_arguments(*a)\n puts a\nend\n\noptional_arguments("Hello", "World", 2021)\n')),(0,r.kt)("p",null,"To define a function that will return the product of two variables:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"def prod(x, y)\n return x * y\nend\n")),(0,r.kt)("p",null,"Ruby also allows ",(0,r.kt)("strong",{parentName:"p"},"implicit returns"),". If a function lacks an explicit return statement, then Ruby will return the value\nof the ",(0,r.kt)("strong",{parentName:"p"},"last")," executed instruction. For example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"def prod(x, y)\n x*y\nend\n\nputs prod(2, 5)\n")),(0,r.kt)("h4",{id:"yield"},"Yield"),(0,r.kt)("p",null,"Using ",(0,r.kt)("strong",{parentName:"p"},"yield")," inside a method will allow us to call the method with a block of code that will be inserted in place of\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"yield")," keyword. In other words, when the method gets to the ",(0,r.kt)("inlineCode",{parentName:"p"},"yield")," keyword, it executes the block passed to the\nmethod, then continues with any code after the yield keyword. Once the block is finished executing, it will return to\nthe code in the method. The following example will make the idea clear."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'# defining a method using yield\ndef yielding_test\n puts "We\'re now in the method!"\n yield\n puts "We\'re back in the method!"\nend\n\n# calling the method with the block\nyielding_test { puts "The method has yielded to the block and We\'re in the block now!" }\n')),(0,r.kt)("p",null,"When the above code executes, you will see the following on the screen."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"We're now in the method!\nThe method has yielded to the block and We're in the block now!\nWe're back in the method!\n")),(0,r.kt)("p",null,"We can also pass parameters to yield. Let's see another example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'def yield_greetings(name)\n puts "We\'re now in the method!"\n yield("Emily")\n puts "In between the yields!"\n yield(name)\n puts "We\'re back in method."\nend\n\nyield_greetings("Erick") { |n| puts "Hello #{n}." }\n')),(0,r.kt)("h3",{id:"classes"},"Classes"),(0,r.kt)("p",null,"Just like objects in the real world, objects in programming are independent units with their own identity. For example,\nan apple is an object that has its own unique identity. There could be multiple objects belonging to the same category.\nFor example, apples could be green or red, but they still belong to the same apple category. This category could be\nreferred to as a class."),(0,r.kt)("p",null,"A class contains the data and actions associated with the object. In simple words, a class is like a blueprint for an\nobject. Just like we can use blueprints to construct multiple buildings in the real world, we can use classes as a\nblueprint to create multiple objects in programming."),(0,r.kt)("p",null,"We can define classes in Ruby by using the keyword ",(0,r.kt)("strong",{parentName:"p"},"class")," followed by the name of the class. Convention is that the\nname of the class should start with a capital letter. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'class Car\n def initialize\n  puts "The object is now created"\n end\nend\n')),(0,r.kt)("p",null,"You can now create objects from class ",(0,r.kt)("inlineCode",{parentName:"p"},"Car")," using the keyword ",(0,r.kt)("inlineCode",{parentName:"p"},"new")," as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"car = Car.new\n")),(0,r.kt)("p",null,"We can also initialize the objects with some attributes. These attributes can also be called instance variables. Each\nobject of the class will have a separate copy of the instance variable."),(0,r.kt)("p",null,"Instance variables are preceded by ",(0,r.kt)("strong",{parentName:"p"},"@"),". For example, we can pass a parameter to the previously created initialize\nmethod and assign its value to an instance variable as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"class Car\n def initialize(brand)\n  @brand = brand\n end\nend\n")),(0,r.kt)("p",null,"We can now create objects of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Car")," class by using the same ",(0,r.kt)("inlineCode",{parentName:"p"},"new")," method, with the small difference of passing an\nargument to it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'car = Car.new("Audi")\n')),(0,r.kt)("h4",{id:"instance-methods-and-class-methods"},"Instance Methods and Class Methods"),(0,r.kt)("p",null,"Ruby has two types of methods"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"instance methods, and"),(0,r.kt)("li",{parentName:"ol"},"class methods")),(0,r.kt)("p",null,"A class method is supposed to provide functionality to the class itself and cannot be called directly on an instance,\nwhereas an instance method provides functionality to the instance of the class and cannot be called on the class itself."),(0,r.kt)("p",null,"For example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'class Greetings\n def self.class_greetings\n  puts "Hello, I\'m a class method"\n end\n\n def instance_greetings\n  puts "Hello, I\'m an instance method"\n end\nend\n')),(0,r.kt)("p",null,"The Greetings class defines a class method, ",(0,r.kt)("inlineCode",{parentName:"p"},"self.class_greetings"),", and an instance method, ",(0,r.kt)("inlineCode",{parentName:"p"},"instance_greetings"),"."),(0,r.kt)("h4",{id:"instance-variables-and-class-variables"},"Instance Variables and Class Variables"),(0,r.kt)("p",null,"Instance variables belong to the objects of the class and each object will have a separate copy of the instance\nvariables. On the other hand, class variables are accessible to all the objects of the class since it belongs to the\nclass and not a particular object."),(0,r.kt)("p",null,"We can declare a class variable with the prefix ",(0,r.kt)("strong",{parentName:"p"},"@@"),". For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"class Car\n @@count = 0\n def initialize\n  @@count += 1\n end\n def self.get_instance_count\n  @@count\n end\nend\n")),(0,r.kt)("h4",{id:"mixins"},"Mixins"),(0,r.kt)("p",null,"It would be advantageous if we could inherit functionality from multiple places. Ruby provides this functionality using\n",(0,r.kt)("strong",{parentName:"p"},"mixins"),". A mixin is simply a set of code wrapped in a module that can be added to one or more classes to add to its\nfunctionality. Once we 'mixin' a module into a class, the class can access all the methods of the module. For example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'module Greetings\n def say_hello\n  puts "Hello!"\n end\nend\n')),(0,r.kt)("p",null,"Here we defined a simple module called ",(0,r.kt)("inlineCode",{parentName:"p"},"Greetings"),'. The module contains a single method which outputs "Hello!" to the\nscreen. Let\'s include this module in a class.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"class Person\n include Greetings\nend\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Person")," class will now access the module's method as if it were its own instance method, as made clear from the\nfollowing."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"p1 = Person.new\np1.say_hello\n# outputs Hello!\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f In the example above, we can only access the module method as an ",(0,r.kt)("em",{parentName:"p"},"instance method"),". If we try to call the method as\na class method then we will get an error.")),(0,r.kt)("p",null,"In order to access module methods as ",(0,r.kt)("em",{parentName:"p"},"class methods"),", we would use ",(0,r.kt)("strong",{parentName:"p"},"extend")," keyword:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"class Person\n extend Greetings\nend\n")),(0,r.kt)("p",null,"Now we can call the module method as a class method. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"Person.say_hello\n# outputs Hello!\n")),(0,r.kt)("h3",{id:"reading-from-the-console"},"Reading from the Console"),(0,r.kt)("p",null,"Reading from the console is a way to get user input. Ruby has a ",(0,r.kt)("strong",{parentName:"p"},"gets")," method as a companion of puts and is used to\nread data from the console. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'puts "what is your name?"\n# getting user input and storing it into a variable i.e. name\nname = gets\nputs "Hello #{name}"\n')),(0,r.kt)("p",null,"The code above will first prompt the user for their name. It then stores the entered string into a variable called\n",(0,r.kt)("inlineCode",{parentName:"p"},"name"),", which can be used later to print a simple message to the console."),(0,r.kt)("h3",{id:"creating-a-file"},"Creating a File"),(0,r.kt)("p",null,"Ruby allows us to create and work with files using its built-in ",(0,r.kt)("strong",{parentName:"p"},"File")," class. Here's an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'test_file = File.new("test.txt", "w+")\n')),(0,r.kt)("p",null,'The code above will create a text file named "test.txt". Specifying ',(0,r.kt)("inlineCode",{parentName:"p"},"w+")," mode will give us read and write access. Before\nmoving forward, let's take a look at different file modes."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"r"),(0,r.kt)("td",{parentName:"tr",align:null},"This is the default mode for files in Ruby. It provides read-only access and starts reading the file at the beginning")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"r+"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifying this mode provides read and write access and it also starts at the beginning of the file")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"w"),(0,r.kt)("td",{parentName:"tr",align:null},"This mode provides write-only access and specifying this mode will truncate the existing file and create a new file for writing")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"w+"),(0,r.kt)("td",{parentName:"tr",align:null},"This mode provides both read and write access but it truncates the existing file and overwrites the existing file for reading and writing")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"a"),(0,r.kt)("td",{parentName:"tr",align:null},"This mode is write only and specifying this mode will append to the end of the file for writing")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"a+"),(0,r.kt)("td",{parentName:"tr",align:null},"This mode also provides both read and write access but it appends or reads from the end of the file")))),(0,r.kt)("p",null,"To open an existing file, use the ",(0,r.kt)("strong",{parentName:"p"},"open")," method of ",(0,r.kt)("inlineCode",{parentName:"p"},"File")," class:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'test_file = File.open("test.txt", "w+")\n')),(0,r.kt)("p",null,"Reading from the file is also as simple as a method call."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'File.read("test.txt")\n')),(0,r.kt)("p",null,"Ruby allows us to write to files using either ",(0,r.kt)("strong",{parentName:"p"},"puts")," or ",(0,r.kt)("strong",{parentName:"p"},"write"),". The only difference between them is that ",(0,r.kt)("em",{parentName:"p"},"puts"),"\nadds a line break to the end of the string to be added while ",(0,r.kt)("inlineCode",{parentName:"p"},"write")," does not."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'test_file = File.open("test.txt", "w+")\ntest_file.puts("We\'re writing some text to file")\ntest_file.close\n')),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'File.open("test.txt", "w+") {\n |file| file.puts("This text was added using code block")\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83d\udca1 We don't need to worry about closing the file here since Ruby will automatically close the file for us.")),(0,r.kt)("h3",{id:"sending-http-requests"},"Sending HTTP Requests"),(0,r.kt)("p",null,"Ruby comes with a built-in HTTP client ",(0,r.kt)("strong",{parentName:"p"},"net/http")," that can be used to send any kind of HTTP request we may need. We\nneed to require the net/http client to work with it. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"require 'net/http'\nhttp_response = Net::HTTP.get_response('www.example.com' , '/')\n")),(0,r.kt)("p",null,"The code above will return a string with the HTML content of the specified URL. Most of the time we aren't interested in\nHTML content, but rather something simpler, such as whether the connection was successful. This can be done by checking\nthe HTTP response status. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"require 'net/http'\nhttp_response = Net::HTTP.get_response('www.google.com', '/')\nputs http_response.code\n# 200\n")),(0,r.kt)("p",null,"We can also get the body of the response using the ",(0,r.kt)("strong",{parentName:"p"},"body")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"puts http_response.body\n")),(0,r.kt)("h3",{id:"parsing-http-response"},"Parsing HTTP Response"),(0,r.kt)("p",null,"To parse received data to JSON or XML format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"require 'net/http'\n\nrequire 'uri'\nrequire 'json'\n\nuri = URI('http://www.example.com/sample.json')\nresponse = Net::HTTP.get(uri)\njson_response = JSON(response)\n")),(0,r.kt)("p",null,"Here, we are requiring two other modules, ",(0,r.kt)("strong",{parentName:"p"},"uri")," and ",(0,r.kt)("strong",{parentName:"p"},"json"),". The uri module provides classes to handle Uniform\nResource Identifiers (a string of characters that unambiguously identifies a particular resource, like a URL). The json\nmodule is used to parse a JSON string received by another application or generated within your existing application."),(0,r.kt)("p",null,"There are no less than 25 HTTP clients that ",(0,r.kt)("a",{parentName:"p",href:"https://www.ruby-toolbox.com/"},"Ruby Toolbox")," offers. We just barely\nscratched the surface. We would encourage you to experiment with other HTTP clients as well and pick the one that suits\nyou best."),(0,r.kt)("h3",{id:"receiving-http-requests"},"Receiving HTTP Requests"),(0,r.kt)("p",null,"To receive HTTP requests, we need a way to listen to HTTP requests on a network port. For this purpose, we can write our\nown HTTP server or choose one from Ruby Toolbox. To keep it simple, let's use ",(0,r.kt)("strong",{parentName:"p"},"WEBrick"),", which is included in the\nstandard Ruby library and doesn't require any extra installation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"require 'webrick'\n\n# specifying port to listen to HTTP requests\nhttp_server = WEBrick::HTTPServer.new(:Port => 3000)\n\n# inheriting the functionality of WEBrick HTTPServlet\nclass MyHTTPServlet < WEBrick::HTTPServlet::AbstractServlet\n  # outputs the requested path\n def do_GET(http_request, http_response)\n  http_response.body = \"You requested '#{http_request.path}'\"\n end\nend\n\nhttp_server.mount('', MyHTTPServlet)\n# stop the server using Ctrl-C\ntrap('INT') {http_server.shutdown}\nhttp_server.start\n")),(0,r.kt)("p",null,"Once the server starts running, we can make requests to the server. For instance,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl localhost:3000\n# You requested '/'\n")))}d.isMDXComponent=!0}}]);