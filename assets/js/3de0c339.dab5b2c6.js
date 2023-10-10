"use strict";(self.webpackChunkintiface_docs=self.webpackChunkintiface_docs||[]).push([[8948],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),h=p(a),u=s,m=h["".concat(l,".").concat(u)]||h[u]||c[u]||i;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function m(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=a.length,o=new Array(i);o[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[h]="string"==typeof e?e:s,o[1]=r;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7428:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var n=a(7462),s=(a(7294),a(3905));const i={},o="Analyses",r={unversionedId:"8TeVDoc/analyses",id:"8TeVDoc/analyses",title:"Analyses",description:"We have prepared seven analyses for you. Ranging from measuring Standard Model particles including a Higgs analysis and a search for a Beyond the Standard Model particle.  Let's take a look at these processes.",source:"@site/docs/8TeVDoc/analyses.md",sourceDirName:"8TeVDoc",slug:"/8TeVDoc/analyses",permalink:"/atlasopendata-website-v2/docs/8TeVDoc/analyses",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"data8",previous:{title:"Histogram animation",permalink:"/atlasopendata-website-v2/docs/8TeVDoc/atlas_higgs_animations"},next:{title:"Setup Your Environment",permalink:"/atlasopendata-website-v2/docs/8TeVDoc/gettingstarted"}},l={},p=[{value:"(W) Boson Analysis",id:"w-boson-analysis",level:2},{value:"(Z) Boson Analysis",id:"z-boson-analysis",level:2},{value:"(WZ) Analysis",id:"wz-analysis",level:2},{value:"(ZZ) Analysis",id:"zz-analysis",level:2},{value:"(H\rightarrow W^+W^-)Analysis",id:"hrightarrow-ww-analysis",level:2},{value:"(WW) Analysis",id:"ww-analysis",level:2},{value:"(t\bar t) Analysis",id:"tbar-t-analysis",level:2},{value:"(Z&#39;) Analysis",id:"z-analysis",level:2},{value:"Further Information",id:"further-information",level:2},{value:"Suggested activity",id:"suggested-activity",level:3}],d={toc:p},h="wrapper";function c(e){let{components:t,...i}=e;return(0,s.kt)(h,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"analyses"},"Analyses"),(0,s.kt)("p",null,"We have prepared seven analyses for you. Ranging from measuring Standard Model particles including a Higgs analysis and a search for a Beyond the Standard Model particle.  Let's take a look at these processes."),(0,s.kt)("h2",{id:"w-boson-analysis"},"(","W",")"," Boson Analysis"),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"http://home.cern/about/physics/w-boson-sunshine-and-stardust"},"(","W",")")," and ",(0,s.kt)("a",{parentName:"p",href:"http://home.cern/about/physics/z-boson"},"(","Z",")")," bosons are together known as the weak or the intermediate vector bosons. These Standard Model elementary particles mediate the weak interaction."),(0,s.kt)("p",null,"The ","(","W",")"," boson analysis is intended to provide an example for a high statistics analysis using the ATLAS open data dataset. Furthermore it tests the description of the real data by the simulated ","(","W",")"," boson data which represents the most extensive dataset in terms of luminosity."),(0,s.kt)("p",null,"The ","(","W",")"," analysis is potentially prone to QCD contributions as there is only one lepton present which may come from non-prompt sources mimicking the desired final state. Therefore, potential disagreements must always be understood as a sign that the QCD contributions are not taken into account."),(0,s.kt)("p",null,"An interesting variable to study would be the ratio ","(","W^+/W^\u2212 ",")","with respect to the pseudorapidity of the selected lepton."),(0,s.kt)("h2",{id:"z-boson-analysis"},"(","Z",")"," Boson Analysis"),(0,s.kt)("p",null,"Many analyses selecting leptons suffer from ","(","Z",")"," boson plus jets as a contributing background due to its large production cross section. It is therefore vital to check the correct modeling of this process by the Monte Carlo simulated data."),(0,s.kt)("p",null,"It is important to measure well known Standard Model particles, to confirm that we understand properly the detector and software. We are then ready to search for new physics."),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(229).Z,width:"510",height:"390"})),(0,s.kt)("h2",{id:"wz-analysis"},"(","WZ",")"," Analysis"),(0,s.kt)("p",null,"This analysis looks for both a ","(","W",")"," boson and a ","(","Z",")"," boson.",(0,s.kt)("br",{parentName:"p"}),"\n","Diboson physics is an important part of the physics programme of ATLAS as it is a probe for electroweak physics. The ","(","WZ",")"," analysis was chosen as it is one of the most abundantly produced diboson processes and has a clean final state consisting of three charged leptons and a neutrino."),(0,s.kt)("p",null,"Reconstructing the ","(","WZ",")"," system and studying its properties is possible but introduces a slight challenge due to the neutrino which is present. The available statistics in the ATLAS open data dataset allows for a rediscovery of the ","(","WZ",")"," process in a lab course."),(0,s.kt)("h2",{id:"zz-analysis"},"(","ZZ",")"," Analysis"),(0,s.kt)("p",null,"The production of a ","(","Z",")","-boson pair with subsequent decay to leptons is the only Standard Model process with four prompt leptons in the final state.  Its low production cross section results in very low yield for the ATLAS open data dataset and highlights the limitations of the dataset.  Some events can be selected but the low yield prohibits detailed analysis and conclusions drawn are of a more qualitative nature."),(0,s.kt)("h2",{id:"hrightarrow-ww-analysis"},"(","H\\rightarrow W^+W^-",")","Analysis"),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"https://home.cern/topics/higgs-boson"},"Higgs boson")," is an excitation of the quantum field responsible for the breaking of ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Electroweak_interaction"},"electroweak symmetry"),".",(0,s.kt)("br",{parentName:"p"}),"\n","This field is responsible for giving masses to fundamental particles."),(0,s.kt)("p",null,"The Higgs boson interacts with all Standard Model elementary particles having mass. Thus, there are different ways to produce a Higgs boson, and different ways for a Higgs boson to decay to other particles."),(0,s.kt)("p",null,"One of the most likely ways a Higgs boson will decay is into a pair of ","(","W",")"," bosons.",(0,s.kt)("br",{parentName:"p"}),"\n","This happens about 21% of the time for a Higgs boson with a mass of 125 GeV.",(0,s.kt)("br",{parentName:"p"}),"\n","The ","(","W",")"," bosons can subsequently decay either into a quark-antiquark, a ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Lepton"},"lepton"),"-",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Neutrino"},"antineutrino"),", or an antilepton-neutrino pair."),(0,s.kt)("p",null,"Physicists refer to a particle and its ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Antiparticle"},"antiparticle")," collectively by just the particle's name.",(0,s.kt)("br",{parentName:"p"}),"\n","So, when we talk about quarks we mean quarks and antiquarks.",(0,s.kt)("br",{parentName:"p"}),"\n","It is a shorthand that physicists adopt for brevity."),(0,s.kt)("p",null,"The Higgs boson decays into two ","(","W",")"," bosons which subsequently decay into leptons and neutrinos:"),(0,s.kt)("p",null,"(",")","H\\rightarrow W^+W^-\\rightarrow \u2113^+ \u2113^-\\nu \\bar\\nu","(",")","   ","(","\u2113=electron or muon",")","."),(0,s.kt)("p",null,"A signature of this decay process is an isolated high-","(","p_T",")"," lepton. The term ","(","p_T",")"," stands for transverse momentum, the component of momentum perpendicular to the beam line. Unfortunately, the main background processes also contain isolated high-","(","p_T",")"," leptons from ","(","W",")"," or ","(","Z",")"," boson decays."),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(6160).Z,width:"511",height:"526"})),(0,s.kt)("h2",{id:"ww-analysis"},"(","WW",")"," Analysis"),(0,s.kt)("p",null,"(","W",")"," boson pair production occurs via"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"quark\u2013antiquark annihilation"),": ","(","q\\bar q \\rightarrow W^+W^-",")")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"diphoton process"),":  ","(","\\gamma\\gamma\\rightarrow W^+W^-",")")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"gluon fusion"),": ","(","gg\\rightarrow W^+W^-",")"))),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Vector_boson"},"Vector boson")," pair production is an important process for checks of the ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Gauge_theory"},"gauge structure")," of the Standard Model and the search for ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Physics_beyond_the_Standard_Model"},"new physics"),".",(0,s.kt)("br",{parentName:"p"}),"\n","It is an irreducible background for many Higgs and new physics searches."),(0,s.kt)("p",null,"(","W",")"," bosons can decay either"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Lepton"},"leptonically"),": into an ",(0,s.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Electron"},"electron")," or ",(0,s.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Muon"},"muon")," and ",(0,s.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Neutrino"},"neutrino"),". "),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Hadron"},"hadronically"),": into an ",(0,s.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Quark"},"up-type quark")," and a ",(0,s.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Quark"},"down-type quark"),".")),(0,s.kt)("p",null,"Leptonic ","(","W",")"," boson decays are characterised by the presence of a highly energetic isolated lepton and large missing transverse momentum due to the neutrino escaping detection."),(0,s.kt)("p",null,"Hadronic ","(","W",")"," boson decays lead to the presence of two jets due to the two quarks."),(0,s.kt)("p",null,"Final states with leptons and missing transverse momentum are typical for many new physics models ","(",(0,s.kt)("a",{parentName:"p",href:"https://home.cern/about/physics/supersymmetry"},"supersymmetry")," is a classic example",")"," but also for many Standard Model processes."),(0,s.kt)("p",null,"Understanding the Standard Model processes possessing multiple leptons and missing transverse momentum is crucial in the quest to discover or rule out these models."),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(8702).Z,width:"511",height:"434"})),(0,s.kt)("h2",{id:"tbar-t-analysis"},"(","t\\bar t",")"," Analysis"),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"https://press.cern/backgrounders/top-quark"},"top quark")," is the only quark that can be studied in isolation, due to its high mass and short lifetime.",(0,s.kt)("br",{parentName:"p"}),"\n","All other quarks are only accessible as constituents of hadrons."),(0,s.kt)("p",null,"Top quark processes can be used to optimise simulated data generators,  ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Quantum_chromodynamics"},"QCD")," models and parton distribution functions."),(0,s.kt)("p",null,"In addition, top pair production is an important background in various Higgs boson analyses and beyond the Standard Model searches.",(0,s.kt)("br",{parentName:"p"}),"\n","It is therefore crucial to understand this process in detail."),(0,s.kt)("p",null,"In the Standard Model, the top-quark generally decays into a ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/W_and_Z_bosons"},"(","W",")"," boson")," and a",(0,s.kt)("br",{parentName:"p"}),"\n",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Bottom_quark"},"(","b",")","-quark"),"."),(0,s.kt)("p",null,"As we said before, ","(","W",")"," bosons can decay either"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Lepton"},"leptonically"),": into an ",(0,s.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Electron"},"electron")," or ",(0,s.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Muon"},"muon")," and ",(0,s.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Neutrino"},"neutrino"),". "),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Hadron"},"hadronically"),": into an ",(0,s.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Quark"},"up-type quark")," and a ",(0,s.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Quark"},"down-type quark"),".")),(0,s.kt)("p",null,"The two ","(","b",")","-quarks from the top-quark decays will be seen as two jets in the final state.",(0,s.kt)("br",{parentName:"p"}),"\n","Algorithms are used to identify these jets.",(0,s.kt)("br",{parentName:"p"}),"\n","Jets thought to originate from ","(","b",")","-quarks are called b-tagged jets.",(0,s.kt)("br",{parentName:"p"}),"\n","Additional jets in ","(","t \\bar t ",")"," events can originate from gluon radiation."),(0,s.kt)("p",null,"Three channels are possible depending on the decays of the ","(","W",")"," bosons:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"If both ","(","W",")"," bosons decay leptonically two jets are seen, originating from the ","(","b",")","-quarks."),(0,s.kt)("li",{parentName:"ul"},"If both ","(","W",")"," bosons decay hadronically, six jets are seen, two from each ","(","W",")"," and two from the ","(","b",")","-quarks."),(0,s.kt)("li",{parentName:"ul"},"If the decay is semi-leptonic, one ","(","W",")"," boson decays leptonically and the other hadronically; four jets are seen, two of them are from ","(","b",")","-quarks.")),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(3168).Z,width:"511",height:"458"})),(0,s.kt)("h2",{id:"z-analysis"},"(","Z'",")"," Analysis"),(0,s.kt)("p",null,"The ","(","Z'",")"," ","(","(","Z",")"," prime",")"," boson is a hypothetical gauge boson that arises from extensions of the electroweak symmetry of the Standard Model. The ","(","Z'",")"," boson is named in analogy with the Standard Model ","(","Z",")"," boson."),(0,s.kt)("p",null,"The ATLAS open data Monte Carlo allows you to search for a Beyond the Standard Model particle and set exclusion limits on new physics."),(0,s.kt)("h2",{id:"further-information"},"Further Information"),(0,s.kt)("p",null,"The purpose of these example analyses is to showcase the abilities and limitations of the measured and",(0,s.kt)("br",{parentName:"p"}),"\n","simulated data included in this data release."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Three high statistics Standard Model analyses"),": a selection of events with",(0,s.kt)("br",{parentName:"p"}),"\n","one leptonically decaying ","(","W",")",(0,s.kt)("br",{parentName:"p"}),"\n","boson, a selection of leptonically decaying ","(","Z",")"," boson and a selection of",(0,s.kt)("br",{parentName:"p"}),"\n","semileptonic top pair production. These analyses are intended to show that the general description",(0,s.kt)("br",{parentName:"p"}),"\n","of the data for these important background processes is sound. They also pose the possibility to",(0,s.kt)("br",{parentName:"p"}),"\n","study Standard Model observables like the mass of the ","(","Z",")"," boson. Observable discrepancies are due to the simplified nature of the used ntuples."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Three low statistics Standard Model analyses:")," these analyses show the limitations of this dataset with respect to rare processes. They are a ","(","WZ",")"," analysis, a ","(","ZZ",")"," analysis as well as a ","(","H\\rightarrow WW",")"," analysis. It is possible to obtain results in these analyses and achieve educational",(0,s.kt)("br",{parentName:"p"}),"\n","objectives.  However the statistical limitations prohibit more meaningful analyses. This point is particularly",(0,s.kt)("br",{parentName:"p"}),"\n","important as it demonstrates that the proposed datasets are intended for educational purposes only."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"A beyond the Standard Model analysis:")," multiple samples of simulated data containing ","(","Z'",")"," signal events are provided to implement a simplified analysis setting exclusion limits on new physics."),(0,s.kt)("p",null,"This list should not be seen as an exhaustive list of all possible analyses. Further processes that may be explored include ","(","WW",")"," production, dileptonic top pair production, single top production or many others."),(0,s.kt)("h3",{id:"suggested-activity"},"Suggested activity"),(0,s.kt)("p",null,"In theoretical physics, ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Feynman_diagram"},"Feynman diagrams")," are pictorial representations of the mathematical expressions describing the behaviour of subatomic particles.  Feynman diagrams are a valuable tool for understanding physics processes."),(0,s.kt)("p",null,"Have a go at drawing / finding the Feynman diagram for each of the above seven analyses."))}c.isMDXComponent=!0},6160:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/HWW2plusCaption-670d69a18dba2cb4f8e3b44843f3efc0.png"},3168:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ToppairPlusCaption-24be9572a0864291af29516d5a9f1549.png"},8702:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/WWplusCaption-865fdb23bc7d498facfa64a6a64fe5be.png"},229:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ZmumuPlusCaption-1599e41ef909938cb867e7f651531431.png"}}]);