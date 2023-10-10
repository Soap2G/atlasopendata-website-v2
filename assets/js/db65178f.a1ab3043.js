"use strict";(self.webpackChunkintiface_docs=self.webpackChunkintiface_docs||[]).push([[2367],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(a),d=o,f=c["".concat(l,".").concat(d)]||c[d]||h[d]||r;return a?n.createElement(f,i(i({ref:t},u),{},{components:a})):n.createElement(f,i({ref:t},u))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5102:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(7462),o=(a(7294),a(3905));const r={},i="Take a closer look",s={unversionedId:"8TeVDoc/take_a_closer_look",id:"8TeVDoc/take_a_closer_look",title:"Take a closer look",description:"The first thing to say is that you cannot break it !",source:"@site/docs/8TeVDoc/take_a_closer_look.md",sourceDirName:"8TeVDoc",slug:"/8TeVDoc/take_a_closer_look",permalink:"/atlasopendata-website-v2/docs/8TeVDoc/take_a_closer_look",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"data8",previous:{title:"Take a look at the data",permalink:"/atlasopendata-website-v2/docs/8TeVDoc/take_a_look_at_the_data"},next:{title:"Plots explained",permalink:"/atlasopendata-website-v2/docs/8TeVDoc/histograms"}},l={},p=[{value:"Configuration files",id:"configuration-files",level:2},{value:"<strong>Step 1: Run an Analysis</strong>",id:"step-1-run-an-analysis",level:3},{value:"<strong>Step 2: Plot the results</strong>",id:"step-2-plot-the-results",level:3},{value:"Definition of Depictions and Paintables.",id:"definition-of-depictions-and-paintables",level:2}],u={toc:p},c="wrapper";function h(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"take-a-closer-look"},"Take a closer look"),(0,o.kt)("p",null,"The first thing to say is that ",(0,o.kt)("strong",{parentName:"p"},"you cannot break it !")),(0,o.kt)("p",null,"Change the code, do whatever you like."),(0,o.kt)("p",null,"You have a local copy.  If for some reason it all goes horribly wrong, just delete what you have and start again."),(0,o.kt)("p",null,"No-one will know.  No-one will care."),(0,o.kt)("p",null,"It is much better to work out things for yourself.  Go on, make a change to the code and see if it does what you intend."),(0,o.kt)("h2",{id:"configuration-files"},"Configuration files"),(0,o.kt)("p",null,"The Configurations folder contains the configuration files.  The configuration files contain information about what analysis should run and how the results should be plotted."),(0,o.kt)("h3",{id:"step-1-run-an-analysis"},(0,o.kt)("strong",{parentName:"h3"},"Step 1: Run an Analysis")),(0,o.kt)("p",null,"Now let's take a closer look at what is going on when you run the analysis."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"python RunScript.py -a TTbarAnalysis\n\n")),(0,o.kt)("p",null,"The Configuration.py file specifies how an analysis should behave.  You can look at the code directly here: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/atlas-outreach-data-tools/atlas-outreach-data-tools-framework/blob/master/Configurations/Configuration.py"},"Configuration.py")),(0,o.kt)("p",null,"The preconfigured analysis is a top pair analysis called TTbarAnalaysis.  This can be changed later if you wish to look at another analysis, or just use the -a option such as "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"python RunScript -a WAnalysis\n\n")),(0,o.kt)("p",null,"The first portion of the configuration file defines the ",(0,o.kt)("strong",{parentName:"p"},"Job")," and looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Job = {\n     "Batch"           : True,              (switches progress bar on and off, forced to be off when running in parallel mode)\n     "Analysis"        : "TTbarAnalysis",   (names the default analysis to be executed)\n     "Fraction"        : 1,                 (determines the fraction of events per file to be analysed)\n     "MaxEvents"       : 1234567890,        (determines the maximum number of events per file to be analysed)\n     "OutputDirectory" : "results/"         (specifies the directory where the output root files should be saved)\n }\n')),(0,o.kt)("p",null,"The default analysis is TTbarAnalysis, so if an analysis is not defined with the -a option, TTbarAnalysis will run."),(0,o.kt)("p",null,"By default, the analysis will run over all events in a file.  If you want to run just half the events, then change the fraction to 0.5"),(0,o.kt)("p",null,"The results of running RunScript.py will be written to the OutputDirectory, which is set to be called results."),(0,o.kt)("p",null,"The second portion of the configuration file specifies which ",(0,o.kt)("strong",{parentName:"p"},"Processes")," to include. The locations of the individual files that are to be used for the different processes are defined:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Processes = {\n    # Diboson processes\n    "WW"                    : "Input/MC/mc_105985.WW.root",  (single file)\n    ...\n    "data_Egamma"           : "Input/Data/DataEgamma*.root", (potentially many files)\n}\n')),(0,o.kt)("p",null,"Whilst the analysis is running you will see the analysis name ","(","circled in orange below",")"," and the process you are running over ","(","circled in blue below",")","."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(2602).Z,width:"1068",height:"233"})),(0,o.kt)("p",null,"The names chosen for the processes are important as they are the keys used in the infofile.py to determine the necessary scaling factors for correct plotting."),(0,o.kt)("h3",{id:"step-2-plot-the-results"},(0,o.kt)("strong",{parentName:"h3"},"Step 2: Plot the results")),(0,o.kt)("p",null,"Now let's take a closer look at what is going on when you plot the results of your analysis."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"python PlotResults.py Configurations/PlotConf_TTbarAnalysis.py\n")),(0,o.kt)("p",null,"The plotting configuration file allows you to steer the plotting process. Each analysis has its own plotting configuration file to accommodate changes in background composition or histograms required."),(0,o.kt)("p",null,"Look at the code directly here: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/atlas-outreach-data-tools/atlas-outreach-data-tools-framework/blob/master/Configurations/PlotConf_TTbarAnalysis.py"},"PlotConf","_","TTbarAnalysis.py")),(0,o.kt)("p",null,"General information for plotting include the ",(0,o.kt)("strong",{parentName:"p"},"Luminosity")," and ",(0,o.kt)("strong",{parentName:"p"},"InputDirectory")," located at the top of the file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'config = {\n      "Luminosity"     : 1000,\n      "InputDirectory" : "results",\n      ...\n')),(0,o.kt)("p",null,"If you remember, the output directory of step 1 was results.  So the input directory for step 2 must have the same name."),(0,o.kt)("p",null,"The names of the histograms to be drawn can be specified like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'"Histograms" : {\n      "WtMass"          : {},\n      "etmiss"          : {rebin : 4, log_y : True},\n      "lep_phi"         : {"y_margin" : 0.6},\n      ...\n')),(0,o.kt)("p",null,"Note that it is possible to supply additional information via a dictionary-like structure to further detail the histogram options. Currently available options are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"rebin: integer      "),"used to merge X bins into one.  Useful in low statistics situation."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"log","_","y : bool"),"          if True is set as the bool the main depiction will be drawn in logarithmic scale."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"y","_","margin : float"),"   sets the fraction of whitespace above the largest contribution in the plot. Default value is 0.1")),(0,o.kt)("h2",{id:"definition-of-depictions-and-paintables"},"Definition of Depictions and Paintables."),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"depiction")," is a way of visualising information. Available depictions include simple plots, ratios and agreement plots."),(0,o.kt)("p",null,"Each plot consists of several depictions of paintables.",(0,o.kt)("br",{parentName:"p"}),"\n","A ",(0,o.kt)("strong",{parentName:"p"},"paintable")," is a histogram or stack plot, with added information such as colours and which physics processes to be included."),(0,o.kt)("p",null,"A simple definition of paintables may look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'\'Paintables\': {\n    "Stack": {\n        "Order"     : ["Diboson", "DrellYan", "W", "Z", "stop", "ttbar"],\n        "Processes" : {\n            "Diboson" : {\n                "Color"         : "#fa7921",\n                "Contributions" : ["WW", "WZ", "ZZ"]},\n\n            "DrellYan": {\n                "Color"         : "#5bc0eb",\n                "Contributions" : ["DYeeM08to15", "DYeeM15to40", "DYmumuM08to15", "DYmumuM15to40", "DYtautauM08to15", "DYtautauM15to40"]},\n            ...\n    },\n\n    \'Higgs\': {\n        \'Color\': \'#0000ff\',\n        \'Contributions\': [\'ggH125_WW2lep\']},\n\n    "data" : {\n        "Contributions": ["data_Egamma", "data_Muons"]}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Stack")," and ",(0,o.kt)("strong",{parentName:"p"},"data")," are specialised names for paintables. This ensures that only one stack of simulated Monte Carlo data and one data representation are present in the final plot."),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"Stack")," shows the different processes specified in ",(0,o.kt)("strong",{parentName:"p"},"Order.  "),"The processes are stacked upon each other to give an idea of the composition of the simulated Monte Carlo data.  Notice that the processes specified in the code above (Diboson, DrellYan, W, Z, stop, ttbar) appear in the plot legend below."),(0,o.kt)("p",null,"The individual processes are defined under ",(0,o.kt)("strong",{parentName:"p"},"Processes"),". Each process has a certain colour (using hex color codes) and a list of ",(0,o.kt)("strong",{parentName:"p"},"Contributions"),". These contributing processes are defined in both ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/atlas-outreach-data-tools/atlas-outreach-data-tools-framework/blob/master/Configurations/Configuration.py"},"Configuration.py")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/atlas-outreach-data-tools/atlas-outreach-data-tools-framework/blob/master/Plotting/infofile.py"},"infofile.py"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"data "),"is a special paintable. Since the data does not need to be scaled there is no need for it to be defined in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/atlas-outreach-data-tools/atlas-outreach-data-tools-framework/blob/master/Plotting/infofile.py"},"infofile.py"),". However, it still has to be included in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/atlas-outreach-data-tools/atlas-outreach-data-tools-framework/blob/master/Configurations/Configuration.py"},"Configuration.py"),"."),(0,o.kt)("p",null,"Other paintables not defined in the stack (e.g. ",(0,o.kt)("strong",{parentName:"p"},"Higgs")," in the above example) are considered as ",(0,o.kt)("strong",{parentName:"p"},"overlays"),". Overlays are used to show possible signals or to compare shapes between multiple overlays (see also ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/atlas-outreach-data-tools/atlas-outreach-data-tools-framework/blob/master/Configurations/PlotConf_ZPrimeAnalysis.py"},"PlotConf","_","ZPrimeAnalysis.py")," for the ZPrime Analysis)."),(0,o.kt)("p",null,"There are currently three types of depictions available:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Main"),": simply show the paintables in a simple plot fashion."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Agreement"),": typically used to evaluate the agreement between two paintables (usually the stack of simulated data and the real data)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Ratio"),": show the ratio of the first paintable w.r.t. the second paintable (e.g. ",(0,o.kt)("strong",{parentName:"li"},"Data/MC")," to show how well the simulated data and real data agree).  ")),(0,o.kt)("p",null,"The order of the depictions is determined in line 2 of the code example above."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(4997).Z,width:"916",height:"894"})),(0,o.kt)("p",null,"Here we can see an agreement plot above and ratio plot below for lepton ","(","p_T",")","."))}h.isMDXComponent=!0},4997:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/lepPT-f8d47be7545932c809a7d523ebe3c85f.png"},2602:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/TTbar-2edd729309d9f144e2866d8328a2348d.png"}}]);