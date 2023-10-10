"use strict";(self.webpackChunkintiface_docs=self.webpackChunkintiface_docs||[]).push([[8755],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>y});var n=a(7294);function s(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){s(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,s=function(t,e){if(null==t)return{};var a,n,s={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(s[a]=t[a]);return s}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(s[a]=t[a])}return s}var r=n.createContext({}),p=function(t){var e=n.useContext(r),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=p(t.components);return n.createElement(r.Provider,{value:e},t.children)},u="mdxType",h={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,s=t.mdxType,l=t.originalType,r=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),u=p(a),c=s,y=u["".concat(r,".").concat(c)]||u[c]||h[c]||l;return a?n.createElement(y,i(i({ref:e},d),{},{components:a})):n.createElement(y,i({ref:e},d))}));function y(t,e){var a=arguments,s=e&&e.mdxType;if("string"==typeof t||s){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var r in e)hasOwnProperty.call(e,r)&&(o[r]=e[r]);o.originalType=t,o[u]="string"==typeof t?t:s,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9698:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>r,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(7462),s=(a(7294),a(3905));const l={},i="Create a new plot",o={unversionedId:"8TeVDoc/create-a-new-plot",id:"8TeVDoc/create-a-new-plot",title:"Create a new plot",description:"You can create some new plots, but you need to run over all the datasets.",source:"@site/docs/8TeVDoc/create-a-new-plot.md",sourceDirName:"8TeVDoc",slug:"/8TeVDoc/create-a-new-plot",permalink:"/atlasopendata-website-v2/docs/8TeVDoc/create-a-new-plot",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"data8",previous:{title:"More plots",permalink:"/atlasopendata-website-v2/docs/8TeVDoc/more_histograms"},next:{title:"Event selection",permalink:"/atlasopendata-website-v2/docs/8TeVDoc/event_selection"}},r={},p=[{value:"Let&#39;s get plotting",id:"lets-get-plotting",level:3},{value:"Modify TTbarAnalysis",id:"modify-ttbaranalysis",level:2},{value:"1. Analysis/TTbarAnalysis.py",id:"1-analysisttbaranalysispy",level:3},{value:"2. Analysis/StandardHistograms.py",id:"2-analysisstandardhistogramspy",level:3},{value:"3. Configurations/PlotConf_TTbarAnalysis.py",id:"3-configurationsplotconf_ttbaranalysispy",level:3},{value:"1. Analysis/TTbarAnalysis.py",id:"1-analysisttbaranalysispy-1",level:3},{value:"2. Analysis/StandardHistograms.py",id:"2-analysisstandardhistogramspy-1",level:3},{value:"3. Configurations/PlotConf_TTbarAnalysis.py",id:"3-configurationsplotconf_ttbaranalysispy-1",level:3},{value:"Run the analysis and plot the results.",id:"run-the-analysis-and-plot-the-results",level:2},{value:"Another way to create a new histogram.",id:"another-way-to-create-a-new-histogram",level:2}],d={toc:p},u="wrapper";function h(t){let{components:e,...l}=t;return(0,s.kt)(u,(0,n.Z)({},d,l,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"create-a-new-plot"},"Create a new plot"),(0,s.kt)("p",null,"You can create some new plots, but you need to run over all the datasets.  "),(0,s.kt)("p",null,"If you are running the small VM, you need to transfer the complete dataset you have downloaded into your input directory."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"python DownloadScript.py -a 'unzip, replace'\n")),(0,s.kt)("p",null,"This command unzips ",(0,s.kt)("inlineCode",{parentName:"p"},"complete_set_of_ATLAS_open_data_samples_July_2016.zip"),"  and replaces the data samples that are currently in your input directory."),(0,s.kt)("p",null,"Now you have all the data, it could take a long time to produce plots.  So we suggest you just run over a fraction of the data initially - so all the datasets, just a fraction of the events within each one."),(0,s.kt)("p",null,"This might sound abit crazy, you have just downloaded all the data, but then you only run over a fraction of it.  Well, you need to know what your new variable looks like in all the samples.  Just a fraction of the events will give you a good idea.  You do not have to run over all the data, just all the datasets. "),(0,s.kt)("p",null,"Modify the file ",(0,s.kt)("inlineCode",{parentName:"p"},"Configurations/Configuration.py")," and change fraction from 1 to 0.1 "),(0,s.kt)("h3",{id:"lets-get-plotting"},"Let's get plotting"),(0,s.kt)("p",null,"One of the standard plots produced in an analysis is jet pseudorapidity, ","(","\\eta_{\\rm{jet}}",")",".  Let's use that to help us create a new plot that is not currently in the standard plots."),(0,s.kt)("div",{align:"center",class:"quickstart-small-image"},(0,s.kt)("p",null,(0,s.kt)("img",{alt:"alt_image",src:a(918).Z,width:"1181",height:"1150"}))),(0,s.kt)("p",null,"Look in the chapter Variable names.  You will see that jet","_","eta is defined as a branch name in the data samples or tuples.  There is another branch name jet","_","phi, which we have not yet plotted.  So let's plot that."),(0,s.kt)("p",null,"You can also launch root and take a look at a datafile, to see that the branch exists."),(0,s.kt)("p",null,"In the main directory, ATLAS-DataAndTools, look at the muon data file: "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"root Input/Data/DataMuons.root\nTBrowser m\n")),(0,s.kt)("p",null,"Select the file and then you will see the branch names.  Scroll down to find the branch called jet_phi. "),(0,s.kt)("p",null," ",(0,s.kt)("img",{src:a(1532).Z,width:"1065",height:"586"})," "),(0,s.kt)("p",null," To quit root"),(0,s.kt)("p",null," ",(0,s.kt)("inlineCode",{parentName:"p"},".q")),(0,s.kt)("h2",{id:"modify-ttbaranalysis"},"Modify TTbarAnalysis"),(0,s.kt)("p",null," To create a new plot in the TTbarAnalysis we have to make changes to 3 files"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/atlas-outreach-data-tools/atlas-outreach-data-tools-framework/blob/master/Analysis/TTbarAnalysis.py"},"Analysis/TTbarAnalysis.py")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/atlas-outreach-data-tools/atlas-outreach-data-tools-framework/blob/master/Analysis/StandardHistograms.py"},"Analysis/StandardHistograms.py")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/atlas-outreach-data-tools/atlas-outreach-data-tools-framework/blob/master/Configurations/PlotConf_TTbarAnalysis.py"},"Configurations/PlotConf","_","TTbarAnalysis.py")," ")),(0,s.kt)("p",null,"Then run the analysis again and plot the results using RunScript.py and PlotResults.py"),(0,s.kt)("p",null,"See if you can work out to do yourself, without reading the instructions below.  Use what is done for jet_eta, but change it to jet_phi."),(0,s.kt)("p",null,"The editors available to you to make changes to files are different in the large and small VM, so there are separate instructions below. "),(0,s.kt)("h1",{id:"if-you-are-using-the-large-vm-or-have-downloaded-the-software-and-all-datsets"},"If you are using the large VM or have downloaded the software and all datsets"),(0,s.kt)("h3",{id:"1-analysisttbaranalysispy"},"1. Analysis/TTbarAnalysis.py"),(0,s.kt)("p",null," Using the vim editor"),(0,s.kt)("p",null," ",(0,s.kt)("inlineCode",{parentName:"p"},"vim Analysis/TTbarAnalysis.py")),(0,s.kt)("p",null," Type 'i' to enter insert mode.\nAdd a line initialising the histogram jet","_","phi, copying what was done for jet_eta. "),(0,s.kt)("p",null," ",(0,s.kt)("img",{src:a(4816).Z,width:"844",height:"577"})),(0,s.kt)("p",null," Then add a line to fill your new histogram.  "),(0,s.kt)("p",null," ",(0,s.kt)("img",{src:a(9849).Z,width:"767",height:"546"})),(0,s.kt)("p",null,"To save your changes, write and quit the Vim editor, by typing the escape key then "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},":wq \n")),(0,s.kt)("h3",{id:"2-analysisstandardhistogramspy"},"2. Analysis/StandardHistograms.py"),(0,s.kt)("p",null,"Add a line to define your new histogram jet","_","phi."),(0,s.kt)("p",null,"TH1D is a one-dimensional histogram in ROOT."),(0,s.kt)("p",null,'Define your histogram name as "jet_phi" with number of bins = 30, x-axis minimum = -3, x-axis maximum = 3.'),(0,s.kt)("p",null,"So there will be 30 bins in the x-axis ranging from -3 to +3.  This range is reasonable if you remember from plotting the variable, at the start of this chapter, using root."),(0,s.kt)("p",null,'Your histogram title "Jet phi; #phi^{jet}; Jets"\nsets the main title as "Jet phi",\nthe x-axis label as ',"(","\\phi^{jet}",")",'\nand the y-axis label as "Jets".'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"vim Analysis/StandardHistograms.py\n")),(0,s.kt)("p",null,"Don't forget to type i to enter insert mode."),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(9187).Z,width:"845",height:"391"})),(0,s.kt)("p",null,"write and quit"),(0,s.kt)("p",null,"by typing the escape key then "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},":wq \n")),(0,s.kt)("h3",{id:"3-configurationsplotconf_ttbaranalysispy"},"3. Configurations/PlotConf_TTbarAnalysis.py"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"vim Configurations/PlotConf_TTbarAnalysis.py\n")),(0,s.kt)("p",null,"Add your histogram jet_phi to the list of histograms."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'"jet_phi" : {};\n')),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(5632).Z,width:"616",height:"431"})),(0,s.kt)("p",null,"Write your changes and quit the file "),(0,s.kt)("p",null,"by typing the escape key then "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},":wq \n")),(0,s.kt)("h1",{id:"if-you-are-using-the-small-vm"},"If you are using the small VM"),(0,s.kt)("h3",{id:"1-analysisttbaranalysispy-1"},"1. Analysis/TTbarAnalysis.py"),(0,s.kt)("p",null," If you are using the small VM, select File/Open File..."),(0,s.kt)("p",null," ",(0,s.kt)("img",{src:a(5031).Z,width:"895",height:"489"})),(0,s.kt)("p",null," Select the Analysis folder and Open"),(0,s.kt)("p",null," ",(0,s.kt)("img",{src:a(5741).Z,width:"849",height:"509"})),(0,s.kt)("p",null," Select TTbarAnalysis.py and Open"),(0,s.kt)("p",null," ",(0,s.kt)("img",{src:a(4341).Z,width:"770",height:"508"})),(0,s.kt)("p",null,"Add a line initialising the histogram jet","_","phi, copying what was done for jet","_","eta."),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(6577).Z,width:"919",height:"604"})),(0,s.kt)("p",null,"Then add a line to fill your new histogram"),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(1547).Z,width:"835",height:"606"})),(0,s.kt)("p",null,"Save your changes"),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(2982).Z,width:"861",height:"622"})),(0,s.kt)("h3",{id:"2-analysisstandardhistogramspy-1"},"2. Analysis/StandardHistograms.py"),(0,s.kt)("p",null,"Open StandardHistograms.py in the Analysis folder.\nAdd a line to define your new histogram jet","_","phi."),(0,s.kt)("p",null,"TH1D is a one-dimensional histogram in ROOT."),(0,s.kt)("p",null,'Define your histogram name as "jet_phi" with number of bins = 30, x-axis minimum = -3, x-axis maximum = 3.'),(0,s.kt)("p",null,"So there will be 30 bins in the x-axis ranging from -3 to +3.  This range is reasonable if you remember from plotting the variable, at the start of this chapter, using root."),(0,s.kt)("p",null,'Your histogram title "Jet phi; #phi^{jet}; Jets"\nsets the main title as "Jet phi",\nthe x-axis label as ',"(","\\phi^{jet}",")",'\nand the y-axis label as "Jets".'),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(8217).Z,width:"890",height:"468"})),(0,s.kt)("p",null,"Save your changes"),(0,s.kt)("h3",{id:"3-configurationsplotconf_ttbaranalysispy-1"},"3. Configurations/PlotConf_TTbarAnalysis.py"),(0,s.kt)("p",null,"Add jet_phi to the list of Histograms to be plotted"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'"jet_phi" : {};\n')),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(7426).Z,width:"762",height:"604"})),(0,s.kt)("p",null,"Save your changes"),(0,s.kt)("h2",{id:"run-the-analysis-and-plot-the-results"},"Run the analysis and plot the results."),(0,s.kt)("p",null,"Can you remember what you need to do here?"),(0,s.kt)("p",null,"You need to do this in 2 steps.\nYou need to run over all datasets (maybe a fraction of them) since you are creating new histograms and a new plot."),(0,s.kt)("p",null,"Step 1: Run the TTbarAnalysis"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"python RunScript.py -a TTbarAnalysis \n")),(0,s.kt)("p",null,"Step 2: Plot the results"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"python PlotResults.py Configurations/PlotConf_TTbarAnalysis.py\n")),(0,s.kt)("p",null,"You will that your new plot has been created in the Output folder."),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(9196).Z,width:"482",height:"31"})),(0,s.kt)("p",null,"Then take a look"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"evince Output/jet_phi.pdf\n")),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(8332).Z,width:"658",height:"496"})),(0,s.kt)("h2",{id:"another-way-to-create-a-new-histogram"},"Another way to create a new histogram."),(0,s.kt)("p",null,"Take a look in ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/atlas-outreach-data-tools/atlas-outreach-data-tools-framework/blob/master/Analysis/ZZAnalysis.py"},"Analysis/ZZAnalysis.py"),"\nand see if you can spot another method of creating a new histogram."),(0,s.kt)("p",null,"See if you can create jet_phi in the same way as invMass1 and invMass2 is done."),(0,s.kt)("p",null,"Have a go yourself before you look at the code below."),(0,s.kt)("p",null,"Run the analysis over all the data samples and plot your new histogram."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"python RunScript.py -a ZZbarAnalysis\npython PlotResults.py Configurations/PlotConf_ZZAnalysis.py\n\n")),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(8983).Z,width:"842",height:"567"})),(0,s.kt)("p",null,"Here is the code to plot jet_phi in the ZZAnalysis.py"),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(4530).Z,width:"841",height:"427"})),(0,s.kt)("p",null,"You also need to modify the configurations file Configurations/PlotConf_ZZAnalysis.py\nadding jet_phi to the list of histograms to be plotted."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'"jet_phi" : {}\n')))}h.isMDXComponent=!0},918:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/jet_eta-1d1e426e7290d11f055e31b85f477129.jpg"},8217:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/AnalysisStandardHistograms-5efaa914de11dfde324ceb905c9a6b8a.png"},7426:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/ConfigurationsPlotConf_TTbarAnalysis-67ca4047c5818e9f837554b6ea7f9307.png"},5741:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/OpenAnalysis-cedd9f9da03c8c2b064042011251953f.png"},5031:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/OpenFile-3edaddddb8209ba56f78feb80b647b3b.png"},4341:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/OpenTTbarAnalysis-698212379788183401cda2546a6522a1.png"},8332:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/PlotPhi-c934a093a95ac2f1198ef8f69a1c6ebc.png"},9196:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/PlotPhiCreated-d167cde11b9960dfac0db3b65f99c658.png"},6577:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/TTbarAnalysisPhi-6b9713c98244ed832ead13dba7316f76.png"},1547:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/TTbarAnalysisPhiFill-cda26247b7089373aafd8ef08141f4ee.png"},2982:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/TTbarAnalysisSave-b5dbaae654c0d0580c1613fa3a6db081.png"},9849:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/VimConfigurationFill-4a5a3abbb4b7accf352c8f606aad167a.png"},4816:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/VimConfigurationpy-325d642777c0641ef0bd6952d4f1a9bf.png"},5632:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/VimPlotConf_TTbarAnalysis-39ea26e007e9781e55aac7222d9ab000.png"},9187:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/VimStandardHistograms-3dd3320273edea6d84d5400527ce316d.png"},4530:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/ZZAnalysis-48f1ee4512c399235a993db8dbb8175c.png"},8983:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/ZZPlotPhi-e9e94aed5baa02ca97216db6c4879f04.png"},1532:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/root_jet_phi-22c762cddca83f6f625b5bd32821f849.png"}}]);