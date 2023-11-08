"use strict";(self.webpackChunkswiftui_realm_app=self.webpackChunkswiftui_realm_app||[]).push([[6941],{4137:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>h});var o=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,o,n=function(e,a){if(null==e)return{};var t,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=o.createContext({}),c=function(e){var a=o.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},m=function(e){var a=c(e.components);return o.createElement(l.Provider,{value:a},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},d=o.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=c(t),d=n,h=p["".concat(l,".").concat(d)]||p[d]||u[d]||r;return t?o.createElement(h,s(s({ref:a},m),{},{components:t})):o.createElement(h,s({ref:a},m))}));function h(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,s=new Array(r);s[0]=d;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i[p]="string"==typeof e?e:n,s[1]=i;for(var c=2;c<r;c++)s[c]=t[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8821:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var o=t(7462),n=(t(7294),t(4137));const r={},s="Using Amazon SageMaker",i={unversionedId:"vector-search/create-vectors/aws-sagemaker",id:"vector-search/create-vectors/aws-sagemaker",title:"Using Amazon SageMaker",description:"Amazon SageMaker is a cloud based machine-learning platform that enables developers to build, train, and deploy machine learning (ML) models for any use case with fully managed infrastructure, tools, and workflows.",source:"@site/docs/7-vector-search/5-create-vectors/5-aws-sagemaker.mdx",sourceDirName:"7-vector-search/5-create-vectors",slug:"/vector-search/create-vectors/aws-sagemaker",permalink:"/search-lab/docs/vector-search/create-vectors/aws-sagemaker",draft:!1,editUrl:"https://github.com/mongodb-developer/search-lab/blob/main/docs/7-vector-search/5-create-vectors/5-aws-sagemaker.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Using Google Vertex",permalink:"/search-lab/docs/vector-search/create-vectors/google-vertex"},next:{title:"Import Vectorized Data",permalink:"/search-lab/docs/vector-search/import-data"}},l={},c=[{value:"Getting Started with Amazon SageMaker",id:"getting-started-with-amazon-sagemaker",level:2},{value:"Let&#39;s set up a playground for you to try it out!",id:"lets-set-up-a-playground-for-you-to-try-it-out",level:2}],m=(p="Screenshot",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var p;const u={toc:c},d="wrapper";function h(e){let{components:a,...t}=e;return(0,n.kt)(d,(0,o.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"using-amazon-sagemaker"},"Using Amazon SageMaker"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://aws.amazon.com/pm/sagemaker/"},"Amazon SageMaker")," is a cloud based machine-learning platform that enables developers to build, train, and deploy machine learning (ML) models for any use case with fully managed infrastructure, tools, and workflows.\nIt also enables developers to deploy ML models on embedded systems and edge-devices. SageMaker was launched in November 2017 and has been improved ever since, especially since the increased popularity and demand of ML and AI systems in recent years."),(0,n.kt)("p",null,"To make it easier to get started, Amazon SageMaker JumpStart provides a set of solutions for the most common use cases that can be deployed readily with just a few clicks."),(0,n.kt)("p",null,"Amazon SageMaker is available for free, for 2 months, as part of the AWS Free Tier program. Users can get access to 250 hours per month of ",(0,n.kt)("inlineCode",{parentName:"p"},"ml.t3.medium")," notebooks usage with the Free Tier."),(0,n.kt)(m,{src:"img/screenshots/7-vector-search/5-aws-sagemaker/0-pricing.png",url:"https://aws.amazon.com/pm/sagemaker/",alt:"AWS SageMaker",mdxType:"Screenshot"}),(0,n.kt)("h2",{id:"getting-started-with-amazon-sagemaker"},"Getting Started with Amazon SageMaker"),(0,n.kt)("p",null,"Amazon SageMaker JumpStart helps you quickly and easily get started with machine learning. The solutions are fully customizable and supports one-click deployment and fine-tuning of more than 150 popular open source models such as natural language processing, object detection, and image classification models."),(0,n.kt)("p",null,"Popular solutions include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Extract & Analyze Data: Automatically extract, process, and analyze documents for more accurate investigation and faster decision-making."),(0,n.kt)("li",{parentName:"ul"},"Fraud Detection: Automate detection of suspicious transactions faster and alert your customers to reduce potential financial loss."),(0,n.kt)("li",{parentName:"ul"},"Churn Prediction: Predict likelihood of customer churn and improve retention by honing in on likely abandoners and taking remedial actions such as promotional offers."),(0,n.kt)("li",{parentName:"ul"},"Personalized Recommendations: Deliver customized, unique experiences to customers to improve customer satisfaction and grow your business rapidly.")),(0,n.kt)("h2",{id:"lets-set-up-a-playground-for-you-to-try-it-out"},"Let's set up a playground for you to try it out!"),(0,n.kt)("p",null,"On the main page of SageMaker you'll find the option to ",(0,n.kt)("inlineCode",{parentName:"p"},"Set up for single user")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"Set up for organization"),". These will set up a domain and a quick start user."),(0,n.kt)(m,{src:"img/screenshots/7-vector-search/5-aws-sagemaker/1-main-page.png",url:"https://aws.amazon.com/pm/sagemaker/",alt:"AWS SageMaker",mdxType:"Screenshot"}),(0,n.kt)(m,{src:"img/screenshots/7-vector-search/5-aws-sagemaker/2-setup-started.png",url:"https://aws.amazon.com/pm/sagemaker/",alt:"AWS SageMaker",mdxType:"Screenshot"}),(0,n.kt)(m,{src:"img/screenshots/7-vector-search/5-aws-sagemaker/3-preparing-domain.png",url:"https://aws.amazon.com/pm/sagemaker/",alt:"AWS SageMaker",mdxType:"Screenshot"}),(0,n.kt)("p",null,"The initial setup only has to be done once, but it might take several minutes. When finished, SageMaker will notify you about the new domain being ready."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/sagemaker/latest/dg/sm-domain.html"},"Amazon SageMaker Domain")," supports SageMaker machine learning (ML) environments. A SageMaker Domain is composed of the following entities:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Domain"),": An Amazon SageMaker Domain consists of an associated Amazon Elastic File System (Amazon EFS) volume; a list of authorized users; and a variety of security, application, policy, and Amazon Virtual Private Cloud (Amazon VPC) configurations. Users within a Domain can share notebook files and other artifacts with each other. An account can have multiple Domains. For more information about multiple Domains, see Multiple Domains Overview."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"UserProfile"),": A user profile represents a single user within a Domain. It is the main way to reference a user for the purposes of sharing, reporting, and other user-oriented features. This entity is created when a user onboards to the Amazon SageMaker Domain. For more information about user profiles, see Domain User Profiles."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"shared space"),": A shared space consists of a shared JupyterServer application and shared directory. All users within the Domain have access to the shared space. All user profiles in a Domain have access to all shared spaces in the Domain. For more information about shared spaces, see Collaborate with shared spaces."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"App"),": An app represents an application that supports the reading and execution experience of the user\u2019s notebooks, terminals, and consoles. The type of app can be JupyterServer, KernelGateway, RStudioServerPro, or RSession. A user may have multiple apps active simultaneously.")),(0,n.kt)(m,{src:"img/screenshots/7-vector-search/5-aws-sagemaker/4-domain-ready.png",url:"https://aws.amazon.com/pm/sagemaker/",alt:"AWS SageMaker",mdxType:"Screenshot"}),(0,n.kt)("p",null,"Now that the domain is set up, you want to open one of the built-in apps to actually work on your environment."),(0,n.kt)("p",null,"Amazon SageMaker supports the following ",(0,n.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/sagemaker/latest/dg/machine-learning-environments.html"},"machine learning environments"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Amazon SageMaker Studio: Lets you build, train, debug, deploy, and monitor your machine learning models."),(0,n.kt)("li",{parentName:"ul"},"Amazon SageMaker Notebook Instances: Lets you prepare and process data, and train and deploy machine learning models from a compute instance running the Jupyter Notebook application."),(0,n.kt)("li",{parentName:"ul"},"Amazon SageMaker Studio Lab: Studio Lab is a free service that gives you access to AWS compute resources, in an environment based on open-source JupyterLab, without requiring an AWS account."),(0,n.kt)("li",{parentName:"ul"},"Amazon SageMaker Canvas: Gives you the ability to use machine learning to generate predictions without needing to code."),(0,n.kt)("li",{parentName:"ul"},"Amazon SageMaker geospatial: Gives you the ability to build, train, and deploy geospatial models."),(0,n.kt)("li",{parentName:"ul"},"RStudio on Amazon SageMaker: RStudio is an IDE for R, with a console, syntax-highlighting editor that supports direct code execution, and tools for plotting, history, debugging and workspace management.")),(0,n.kt)("p",null,"For this workshop we will use the Studio, which can be opened by clicking on ",(0,n.kt)("inlineCode",{parentName:"p"},"Launch"),"."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/sagemaker/latest/dg/studio.html"},"Amazon SageMaker Studio")," is a web-based, integrated development environment (IDE) for machine learning that lets you build, train, debug, deploy, and monitor your machine learning models. SageMaker Studio provides all the tools you need to take your models from data preparation to experimentation to production while boosting your productivity. In a single unified visual interface, customers can perform the following tasks:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Write and execute code in Jupyter notebooks"),(0,n.kt)("li",{parentName:"ul"},"Prepare data for machine learning"),(0,n.kt)("li",{parentName:"ul"},"Build and train machine learning models"),(0,n.kt)("li",{parentName:"ul"},"Deploy the models and monitor the performance of their predictions"),(0,n.kt)("li",{parentName:"ul"},"Track and debug the machine learning experiments")),(0,n.kt)(m,{src:"img/screenshots/7-vector-search/5-aws-sagemaker/5-open-studio.png",url:"https://aws.amazon.com/pm/sagemaker/",alt:"AWS SageMaker",mdxType:"Screenshot"}),(0,n.kt)("p",null,"When opening the studio, you will be redirected to your domain."),(0,n.kt)(m,{src:"img/screenshots/7-vector-search/5-aws-sagemaker/6-domain-redirect.png",url:"https://aws.amazon.com/pm/sagemaker/",alt:"AWS SageMaker",mdxType:"Screenshot"}),(0,n.kt)("p",null,"When opening Amazon SageMaker Studio for the first time, a JupyterServer application will be created at your domain."),(0,n.kt)("p",null,"An ",(0,n.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/sagemaker/latest/dg/nbi.html"},"Amazon SageMaker notebook instance")," is a machine learning (ML) compute instance running the Jupyter Notebook App. SageMaker manages creating the instance and related resources. Use Jupyter notebooks in your notebook instance to prepare and process data, write code to train models, deploy models to SageMaker hosting, and test or validate your models."),(0,n.kt)(m,{src:"img/screenshots/7-vector-search/5-aws-sagemaker/7-creating-JupyterServer-app.png",url:"https://aws.amazon.com/pm/sagemaker/",alt:"AWS SageMaker",mdxType:"Screenshot"}),(0,n.kt)("p",null,"In some cases the loading can take a while and SageMaker will offer you to clear the workspace. Just click ",(0,n.kt)("inlineCode",{parentName:"p"},"Keep Waiting")," for now."),(0,n.kt)(m,{src:"img/screenshots/7-vector-search/5-aws-sagemaker/8-notebook-loading-screen.png",url:"https://aws.amazon.com/pm/sagemaker/",alt:"AWS SageMaker",mdxType:"Screenshot"}),(0,n.kt)("p",null,"Once the Studio is loaded you will be presented with the following. This is your domains workspace in which you can adjust anything around it."),(0,n.kt)(m,{src:"img/screenshots/7-vector-search/5-aws-sagemaker/9-studio-homepage.png",url:"https://aws.amazon.com/pm/sagemaker/",alt:"AWS SageMaker",mdxType:"Screenshot"}),(0,n.kt)("p",null,"As a first step, we want to choose a model that we want to work with. You can find the models in the SageMaker JumpStart section. We will start with a simple text generation at first. Choose ",(0,n.kt)("inlineCode",{parentName:"p"},"Flan-T5 Xl"),".\nThis is a decently complex model that offers a good starting point. There are more complex models available for which you'd need bigger AWS EC2 instances to run them on, so choosing a smaller model to get started is a good choice."),(0,n.kt)(m,{src:"img/screenshots/7-vector-search/5-aws-sagemaker/10-sagemaker-jumpstart.png",url:"https://aws.amazon.com/pm/sagemaker/",alt:"AWS SageMaker",mdxType:"Screenshot"}),(0,n.kt)("p",null,"You'll find option to deploy your model or train it."),(0,n.kt)(m,{src:"img/screenshots/7-vector-search/5-aws-sagemaker/11-flan-t5-xl-deploy.png",url:"https://aws.amazon.com/pm/sagemaker/",alt:"AWS SageMaker",mdxType:"Screenshot"}),(0,n.kt)("p",null,"Everything we need to get started can be found inside the ",(0,n.kt)("inlineCode",{parentName:"p"},"Notebook")," section."),(0,n.kt)(m,{src:"img/screenshots/7-vector-search/5-aws-sagemaker/12-flan-t5-xl-notebook.png",url:"https://aws.amazon.com/pm/sagemaker/",alt:"AWS SageMaker",mdxType:"Screenshot"}),(0,n.kt)("p",null,"When opening a notebook, we can use the default settings for now."),(0,n.kt)(m,{src:"img/screenshots/7-vector-search/5-aws-sagemaker/13-notebook-environment.png",url:"https://aws.amazon.com/pm/sagemaker/",alt:"AWS SageMaker",mdxType:"Screenshot"}),(0,n.kt)("p",null,"The notebook is already prepared with everything you need to play around. Deploying the model and even some examples to see it in action. When opening the notebook, the kernel will be started automatically."),(0,n.kt)(m,{src:"img/screenshots/7-vector-search/5-aws-sagemaker/14-notebook-starting.png",url:"https://aws.amazon.com/pm/sagemaker/",alt:"AWS SageMaker",mdxType:"Screenshot"}),(0,n.kt)("p",null,"After this has been successfully happened you can ",(0,n.kt)("inlineCode",{parentName:"p"},"Run All Cells"),"."),(0,n.kt)(m,{src:"img/screenshots/7-vector-search/5-aws-sagemaker/15-notebook-ready.png",url:"https://aws.amazon.com/pm/sagemaker/",alt:"AWS SageMaker",mdxType:"Screenshot"}),(0,n.kt)("p",null,"Cells that have been run show a number in brackets to the left of them. The number is the order in which they got executed. When using the ",(0,n.kt)("inlineCode",{parentName:"p"},"Run All Cells")," option they get executed from top to bottom.\nBut you can execute (and re-execute) any cell at any time out of order. As you can see in the following screenshot, the result will be printed right below the cell."),(0,n.kt)(m,{src:"img/screenshots/7-vector-search/5-aws-sagemaker/16-inference-code-example.png",url:"https://aws.amazon.com/pm/sagemaker/",alt:"AWS SageMaker",mdxType:"Screenshot"}),(0,n.kt)("p",null,"Go ahead and adjust the text input, see how the results change. The SageMaker JumpStart notebook also provides documentation for each cell to explain what happens.\nThis will provide you with a good starting point to your journey into Amazon SageMaker."))}h.isMDXComponent=!0}}]);