"use strict";(self.webpackChunkintiface_docs=self.webpackChunkintiface_docs||[]).push([[9638],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>m});var n=a(7294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function r(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},u=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},h="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,i=t.originalType,s=t.parentName,u=r(t,["components","mdxType","originalType","parentName"]),h=p(a),d=o,m=h["".concat(s,".").concat(d)]||h[d]||c[d]||i;return a?n.createElement(m,l(l({ref:e},u),{},{components:a})):n.createElement(m,l({ref:e},u))}));function m(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=a.length,l=new Array(i);l[0]=d;var r={};for(var s in e)hasOwnProperty.call(e,s)&&(r[s]=e[s]);r.originalType=t,r[h]="string"==typeof t?t:o,l[1]=r;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5780:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var n=a(7462),o=(a(7294),a(3905));const i={},l="Setup Your Environment",r={unversionedId:"8TeVDoc/gettingstarted",id:"8TeVDoc/gettingstarted",title:"Setup Your Environment",description:"Watch the video 'Setup your environment' to give you an idea what you will have to do.",source:"@site/docs/8TeVDoc/gettingstarted.md",sourceDirName:"8TeVDoc",slug:"/8TeVDoc/gettingstarted",permalink:"/atlasopendata-website-v2/docs/8TeVDoc/gettingstarted",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"data8",previous:{title:"Analyses",permalink:"/atlasopendata-website-v2/docs/8TeVDoc/analyses"},next:{title:"Take a look at the data",permalink:"/atlasopendata-website-v2/docs/8TeVDoc/take_a_look_at_the_data"}},s={},p=[{value:"What is a virtual machine ?",id:"what-is-a-virtual-machine-",level:2},{value:"Step 3: Set up your Virtual Machine",id:"step-3-set-up-your-virtual-machine",level:2}],u={toc:p},h="wrapper";function c(t){let{components:e,...i}=t;return(0,o.kt)(h,(0,n.Z)({},u,i,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setup-your-environment"},"Setup Your Environment"),(0,o.kt)("p",null,"Watch the video ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=qy6s_CeBi5M"},"'Setup your environment'")," to give you an idea what you will have to do."),(0,o.kt)("p",null,"We have provided the datasets and software in a variety of formats.  You choose how you want to use them:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If you want to have a quick look at the data, not investing too much time, you can use the ",(0,o.kt)("strong",{parentName:"p"},"small virtual machine (06-Feb-2017)"),", which contains 10% of the data.  This takes about 15 minutes to download and setup.  Read on.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If you want to invest more time, or are setting up a lab for students, then we recommend you use the ",(0,o.kt)("strong",{parentName:"p"},"large virtual machine")," which contains all the data.  This takes 1-2 hours to download and setup.  ",(0,o.kt)("a",{parentName:"p",href:"https://cheatham1.gitbooks.io/atlasdatatools/content"},"Go to the Virtual Machine Book"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If you are a student in a lab and the virtual machine is already setup for you, go straight to the next chapter ",(0,o.kt)("a",{parentName:"p",href:"https://cheatham1.gitbooks.io/openatlasdatatools/content/take_a_look_at_the_data.html"},"Take a look at the data"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If you are a physicist, it is likely you already have ROOT installed, so you can download the ",(0,o.kt)("a",{parentName:"p",href:"http://atlas-opendata.web.cern.ch/atlas-opendata/extendedanalysis/software.php"},"software")," ",(0,o.kt)("strong",{parentName:"p"},"and")," ",(0,o.kt)("a",{parentName:"p",href:"http://atlas-opendata.web.cern.ch/atlas-opendata/extendedanalysis/datasets.php"},"datasets")," separately if you wish.\nPlease take into account that Python2 is recommended. Python 2.7 is the version distributed into the VMs. Python3 could give you some issues."))),(0,o.kt)("h2",{id:"what-is-a-virtual-machine-"},"What is a virtual machine ?"),(0,o.kt)("p",null,"A virtual machine will transform your computer into an analysis machine!"),(0,o.kt)("p",null,'Your physical computer will be the "host", while the virtual machine will be a "guest". Most of the guest code runs unmodified, directly on the host computer, and the guest operating system "thinks" it\'s running on a real machine.'),(0,o.kt)("p",null,"A virtual machine allows an unmodified operating system with all of its installed software to run in a special environment, on top of your existing operating system. "),(0,o.kt)("p",null,"There are five virtual machines available.\nWe suggest you start with the ",(0,o.kt)("strong",{parentName:"p"},"small")," version.  It contains everything you need to start looking at the data."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Now you will learn how to download and prepare a virtual machine to run on your computer"),".  This will then enable you to take a look at ATLAS data. "),(0,o.kt)("p",null,"You have to download and install VirtualBox ",(0,o.kt)("strong",{parentName:"p"},"and")," a virtual machine.  To save time, start downloading the  virtual machine.  This can then download whilst you are installing VirtualBox."),(0,o.kt)("p",null,"There are three steps to setup your environment:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download a virtual machine."),(0,o.kt)("li",{parentName:"ol"},"Download and install VirtualBox."),(0,o.kt)("li",{parentName:"ol"},"Setup your virtual machine.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"If your session goes to sleep and requires the atlas password, it is 'atlas'.")),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(5026).Z,width:"834",height:"520"})),(0,o.kt)("h1",{id:"step-1-download-the-small-virtual-machine-vm-version-s-06-feb-2017"},"Step 1: Download the Small Virtual Machine (VM Version S 06-Feb-2017)"),(0,o.kt)("p",null,"A small virtual machine using Lubuntu in conjunction with ROOT-5.34.14 and 10% of the data has been prepared. This is 1.7Gb in size so can be downloaded fairly quickly. "),(0,o.kt)("p",null,"Select ",(0,o.kt)("strong",{parentName:"p"},"Virtual Machines")),(0,o.kt)("div",{align:"center",width:"50"},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"http://atlas-opendata.web.cern.ch/atlas-opendata/extendedanalysis/vm-toolbox.php",src:a(702).Z,width:"574",height:"142"}))),(0,o.kt)("p",null,"Select ",(0,o.kt)("strong",{parentName:"p"},"VM Version S")," to download the ",(0,o.kt)("strong",{parentName:"p"},"small")," virtual machine.\nThis can then download whilst you are installing VirtualBox."),(0,o.kt)("p",null,"Make sure you choose ",(0,o.kt)("strong",{parentName:"p"},"Lubuntu_ATLAS_Outreach_DataAndTools_February_2017-size_S.ova ")),(0,o.kt)("h1",{id:"step-2-download-and-install-virtualbox"},"Step 2: Download and install VirtualBox"),(0,o.kt)("p",null,"Use the VirtualBox website to download the software"),(0,o.kt)("a",{href:"https://www.virtualbox.org/",target:"_blank"}," Go to the VirtualBox website"),(0,o.kt)("p",null,"Select ",(0,o.kt)("strong",{parentName:"p"},"Download VirtualBox")),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(8516).Z,width:"1001",height:"571"})),(0,o.kt)("p",null,"Take care to select the appropriate ",(0,o.kt)("strong",{parentName:"p"},"VirtualBox platform package"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(502).Z,width:"857",height:"321"})),(0,o.kt)("p",null,"Proceed with the installation of VirtualBox:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(7945).Z,width:"674",height:"388"})),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(8061).Z,width:"620",height:"438"})),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(5145).Z,width:"620",height:"439"})),(0,o.kt)("h2",{id:"step-3-set-up-your-virtual-machine"},"Step 3: Set up your Virtual Machine"),(0,o.kt)("p",null,"In this step the downloaded virtual machine is being imported to VirtualBox to give the virtual machine a platform to run on."),(0,o.kt)("p",null,"Look for the VirtualBox icon in your Applications (folder). Double click to get the main interface of VirtualBox:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(3360).Z,width:"1146",height:"780"})),(0,o.kt)("p",null,"Select ",(0,o.kt)("strong",{parentName:"p"},"File")," then ",(0,o.kt)("strong",{parentName:"p"},"Import Appliance")),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(5758).Z,width:"1148",height:"790"})),(0,o.kt)("p",null,"An empty text box will appear"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(300).Z,width:"1122",height:"914"})),(0,o.kt)("p",null,"Use the yellow folder icon on the right hand-side of the empty text box to select your virtual machine (the .ova file you downloaded at the start of this chapter).  "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Make sure you have downloaded the small virtual machine."),"  It will be called ",(0,o.kt)("strong",{parentName:"p"},"ATLASOpenDataSmall.ova")),(0,o.kt)("p",null,"Then press ",(0,o.kt)("strong",{parentName:"p"},"Continue"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(3880).Z,width:"1080",height:"882"})),(0,o.kt)("p",null,"The default settings are displayed.  We recommend you use these.  Press ",(0,o.kt)("strong",{parentName:"p"},"Import"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(4415).Z,width:"1126",height:"916"})),(0,o.kt)("p",null,"Import will take afew minutes"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(6687).Z,width:"1140",height:"924"})),(0,o.kt)("p",null,"Select your virtual machine ",(0,o.kt)("strong",{parentName:"p"},"ATLASOpenDataSmall")," (which is powered off)"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"If your VM is not called ATLASOpenDataSmall you have not downloaded the small virtual machine."),"  You need to be using the small VM for these instructions."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(9993).Z,width:"1144",height:"788"})),(0,o.kt)("p",null,"Your VM will be displayed as shown below"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Check that the name of your virtual machine displayed on the right is ATLASOpenDataSmall")),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(2763).Z,width:"1304",height:"1178"})),(0,o.kt)("p",null,"Press the green ",(0,o.kt)("strong",{parentName:"p"},"Start")," arrow."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"WAIT")," afew minutes whilst the virtual machine sets up.  "),(0,o.kt)("p",null,"When it has completed you will see\nthe terminal for using the code, with the Readme file opened using the atom editor."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(6390).Z,width:"1444",height:"830"})),(0,o.kt)("p",null,"In the menu on the left handside, you see the contents of the root directory."),(0,o.kt)("p",null,"In the root directory there are five directories (Analysis, Configurations, Input, Plotting and Output), the README file plus two python scripts. The python scripts are RunScript.py and PlotResults.py. "),(0,o.kt)("p",null,"At the bottom of your window, you will notice a tab labelled ",(0,o.kt)("strong",{parentName:"p"},"atlas@atlas-vm"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(4578).Z,width:"838",height:"627"})),(0,o.kt)("p",null,"Select this tab, circled in red in the screen-shot.  A terminal window will then be available. "),(0,o.kt)("p",null,"List the folders and files in your main directory by typing"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ls\n")),(0,o.kt)("p",null,"You will notice that these are the same names as you saw in the menu (screen-shot above).    "),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(6975).Z,width:"834",height:"609"})),(0,o.kt)("p",null,"You are now ready to start looking at the ATLAS data."))}c.isMDXComponent=!0},502:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/DownloadVB-b71c497ed00621f94f375d88a1b2763d.jpg"},8516:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/VB5.1-c7079312ef75d9fbe00d263fa6ef9781.jpg"},7945:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/VBinstall1-8f434a56687d92d54a74e434196024fa.png"},8061:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/VBinstall2-4f58d6865208ac2fa7316d37ce795ab2.png"},5145:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/VBinstall3-d17ce6dc68be225150e2e49d0b157a58.png"},4578:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/VM-atlas-fe76863c8aa6334c4f4783fb83554300.png"},2763:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/VMATLASopenDataSmall-c2c7de69aee87c0fe95eefe98f956be3.png"},4415:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/VMapplianceSettings-c2794ebb73b5b8de3a32750966624080.png"},702:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/VMbutton-2144e0f231b545cff4b8ff8d2b992661.jpg"},3360:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/VMempty-1ab57259d0b868bce095c5fecd24b2f8.png"},5758:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/VMimportAppliance-73e9bc48fae3c91d3223db89562e44ca.png"},300:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/VMimportApplianceSelect-0759c63eb02d421a413ccafc7d1918fe.png"},6687:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/VMimporting-74c8257099e880e0484aa604480c2fe4.png"},9993:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/VMpoweredOff-8a8f2acdce4344c6f982357e0b174596.png"},6390:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/VMrunningREADME-aee79a80923a2094c902a153409698de.png"},3880:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/VMselectOVA-b72306344b1f9723a4cdf85193b2f249.png"},6975:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/VMterminalWindow-d8d767db6fe568b488e7b7efce1566a0.png"},5026:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/atlasSaver-ab6a908f55fa8d386a8b09dc94b19497.png"}}]);