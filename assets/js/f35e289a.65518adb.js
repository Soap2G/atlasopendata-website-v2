"use strict";(self.webpackChunkintiface_docs=self.webpackChunkintiface_docs||[]).push([[2064],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(n),m=r,g=h["".concat(l,".").concat(m)]||h[m]||p[m]||i;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},576:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={},o="Example: Find the Higgs",s={unversionedId:"visualization/find_the_higgs_2_13TeV",id:"visualization/find_the_higgs_2_13TeV",title:"Example: Find the Higgs",description:"Follow the steps of a real ATLAS analysis using Histogram Analyser",source:"@site/docs/visualization/find_the_higgs_2_13TeV.md",sourceDirName:"visualization",slug:"/visualization/find_the_higgs_2_13TeV",permalink:"/atlasopendata-website-v2/docs/visualization/find_the_higgs_2_13TeV",draft:!1,tags:[],version:"current",frontMatter:{}},l={},c=[{value:"Recap: What is the Higgs Boson?",id:"recap-what-is-the-higgs-boson",level:2},{value:"Higgs Decay:",id:"higgs-decay",level:2},{value:"Curriculum learning objective: Particle physics",id:"curriculum-learning-objective-particle-physics",level:2},{value:"Curriculum Learning Objective: Introduction to quarks",id:"curriculum-learning-objective-introduction-to-quarks",level:2},{value:"Curriculum Learning Objective: Charged particles in an electric/magnetic field",id:"curriculum-learning-objective-charged-particles-in-an-electricmagnetic-field",level:2},{value:"Curriculum Learning Objective: Conservation of momentum",id:"curriculum-learning-objective-conservation-of-momentum",level:2},{value:"Higgs boson + 0 jet",id:"higgs-boson--0-jet",level:2},{value:"Higgs boson + 1 jet",id:"higgs-boson--1-jet",level:2},{value:"Have a go yourself!",id:"have-a-go-yourself",level:2},{value:"Recap: What (H\rightarrow W^+W^-) decay are we looking for?",id:"recap-what-hrightarrow-ww--decay-are-we-looking-for",level:2},{value:"Glossary:",id:"glossary",level:2}],u=(h="CENTER",function(e){return console.warn("Component "+h+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var h;const p={toc:c},m="wrapper";function g(e){let{components:t,...i}=e;return(0,r.kt)(m,(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"example-find-the-higgs"},"Example: Find the Higgs"),(0,r.kt)("p",null,"Follow the steps of a real ATLAS analysis using Histogram Analyser"),(0,r.kt)("h2",{id:"recap-what-is-the-higgs-boson"},"Recap: What is the Higgs Boson?"),(0,r.kt)("p",null,"The Higgs boson is a fundamental particle that is the carrier for the Higgs field \u2013 a field that gives particles their mass. The more a particle interacts with the Higgs field, the heavier it is."),(0,r.kt)("h2",{id:"higgs-decay"},"Higgs Decay:"),(0,r.kt)("p",null,"(","H\\rightarrow W^+W^- \\rightarrow \\ell^+ \\ell^-\\nu  \\bar \\nu",")"," "),(0,r.kt)("p",null,"(","(","\\ell",")"," = lepton = electron or muon)"),(0,r.kt)("p",null,"We are looking for a Higgs boson which ",(0,r.kt)("a",{parentName:"p",href:"http://opendata.atlas.cern/release/2020/documentation/atlas/GLOSSARY.html"},"decays")," into two ","(","W",")"," bosons which subsequently decay into leptons and neutrinos."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Electrons leave a track in the Pixel/SCT detector and Transition radiation detector, and deposit their energy in the electromagnetic calorimeter."),(0,r.kt)("li",{parentName:"ul"},"Neutrinos don\u2019t leave a trace in the detector but can be found using Missing Transverse Momentum (by adding up the energies and momentum after the collision we can see that any momentum that is not in the right plane doesn\u2019t conserve momentum so this must be attributed to a neutrino or new particle.)")),(0,r.kt)("p",null,"The major background contributions to the search in this decay mode are top (top quark pair and W+top quark), ","(","WW",")"," and ","(","Z",")","+",(0,r.kt)("a",{parentName:"p",href:"http://opendata.atlas.cern/release/2020/documentation/atlas/GLOSSARY.html"},"jets")," ",(0,r.kt)("a",{parentName:"p",href:"http://opendata.atlas.cern/release/2020/documentation/atlas/GLOSSARY.html"},"events"),". So we need to adjust our cuts to reduce the significance of these background events. These cuts help us find the Higgs due to the laws of conservation. As spin, charge, mass and momentum all need to be conserved, we can reconstruct particles from their decays."),(0,r.kt)("h2",{id:"curriculum-learning-objective-particle-physics"},"Curriculum learning objective: Particle physics"),(0,r.kt)("p",null,"Rules of conservation (spin, lepton number, charge...) must be taken into account for particle decays."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Use the cursor to implement the following cuts, one by one.",(0,r.kt)("br",{parentName:"strong"}),"As you apply the cuts, you should see the distributions changing.")),(0,r.kt)("p",null,"Try to understand why each of the distributions change.  Think of the physics motivating the cuts."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"To clear your selection on a specific histogram click on the white background within the histogram area. ")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"To clear all your selections, reload the webpage where you're using the Histogram Analyser")),(0,r.kt)("p",null,"Now let's try to separate the ",(0,r.kt)("a",{parentName:"p",href:"http://opendata.atlas.cern/release/2020/documentation/atlas/GLOSSARY.html"},"signal from the background")," using Histogram Analyser"),(0,r.kt)("h2",{id:"curriculum-learning-objective-introduction-to-quarks"},"Curriculum Learning Objective: Introduction to quarks"),(0,r.kt)("p",null,"Jets are produced by quarks."),(0,r.kt)("h2",{id:"curriculum-learning-objective-charged-particles-in-an-electricmagnetic-field"},"Curriculum Learning Objective: Charged particles in an electric/magnetic field"),(0,r.kt)("p",null,"Magnetic fields are used to bend the tracks in order to measure charge and momentum of particles."),(0,r.kt)("h2",{id:"curriculum-learning-objective-conservation-of-momentum"},"Curriculum Learning Objective: Conservation of momentum"),(0,r.kt)("p",null,"By adding up the energies and momentum after the collision any momentum that is not in the right plane doesn\u2019t conserve momentum so this must be attributed to a neutrino or new particle."),(0,r.kt)("h2",{id:"higgs-boson--0-jet"},"Higgs boson + 0 jet"),(0,r.kt)("p",null,"We want to select events which contain two leptons, high missing ",(0,r.kt)("a",{parentName:"p",href:"http://opendata.atlas.cern/release/2020/documentation/atlas/GLOSSARY.html"},"transverse momentum")," and no jets."),(0,r.kt)("p",null,"Select:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Number of Jets = 0 : We have decided this analysis is specifically with zero jets.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Reconstructed Dilepton Mass ","<"," 75 ",(0,r.kt)("a",{parentName:"p",href:"http://opendata.atlas.cern/release/2020/documentation/atlas/GLOSSARY.html"},"GeV")," : The ","(","Z",")"," events are the major background in this analysis.  The ","(","Z",")"," boson has a mass of 91 GeV, which is reconstructed from the mass of the two leptons.  Requiring Reconstructed Dilepton Mass to be less than 75 GeV removes over 90 % of the Z events. GeV represents Giga electron volt. The electron volt is the unit of energy used at a subatomic scale. 1eV is equal to the energy transferred to/from an electron when it moves through a potential difference of 1V.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Total Lepton Transverse Momentum ",">"," 30 GeV : For ","(","Z",")"," boson events, the total lepton transverse momentum peaks at zero since the transverse momenta of both leptons cancel each other.  For ","(","H\\rightarrow WW",")",", the opening angle between leptons tends to be small, so the total lepton transverse momentum tends to be greater than zero as the momenta do not cancel out. Therefore, by cutting out the small transverse momentum, we reduce the Z events but keep most Higgs events.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Missing Transverse Momentum ",">"," 40 GeV : This cut should remove ","(","Z",")"," background since there tends to be little missing transverse in ","(","Z",")"," events.  ","(","Z",")"," boson decays to charged leptons do not have any neutrinos in the final state while the other processes do. This is because of the conservation of charge. Momentum is measured by using magnetic and electric fields. As leptons are charged, their path is bent by the magnetic field. A high momentum particle is bent a small amount, and a low momentum particle will be bent a large amount"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Opening Angle between Leptons ","<"," 80 : We know that the opening angle between leptons for ","(","H\\rightarrow WW",")"," tends to be small whereas for Z events the opening angle tends to be large. So cutting the large lepton angles removes some Z. This is due to the spin (an angular momentum of elementary particles ",(0,r.kt)("em",{parentName:"li"},"definition could be included in a hover-over box"),") on the Higgs Boson and its decay particles. A Higgs Boson has 0 spin and a W Boson has a spin of 1. The directions of W Boson spins should be opposite in order to cancel out to produce a spin of 0 for the Higgs. The decay particles for these W Bosons will be electrons/muons and neutrinos, which all have a spin of \xbd and will all be travelling practically parallel to each other, as matter prefers to have spin in the same direction as the direction of travel, and antimatter in the opposite direction. This means there will be a small opening angle.",(0,r.kt)(u,{mdxType:"CENTER"},(0,r.kt)("img",{src:"./pictures/HWW_spin.png",width:"275"})))),(0,r.kt)("p",null,"The dominant background after all these cuts in the",(0,r.kt)("br",{parentName:"p"}),"\n","Higgs boson + 0 jet channel comes from ","(","WW",")"," and ","(","Z",")","+jets."),(0,r.kt)("p",null,"22 Higgs events are identified, yielding a significance of 0.536"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(3987).Z,width:"719",height:"587"})),(0,r.kt)("h2",{id:"higgs-boson--1-jet"},"Higgs boson + 1 jet"),(0,r.kt)("p",null,"Select:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Number of Jets = 1 "),(0,r.kt)("li",{parentName:"ul"},"no b-tagged jets. (This is to remove the top quark into two bottom quark decay)"),(0,r.kt)("li",{parentName:"ul"},"electron-muon channel only"),(0,r.kt)("li",{parentName:"ul"},"Reconstructed Dilepton Mass ","<"," 70 GeV"),(0,r.kt)("li",{parentName:"ul"},"Total Lepton Transverse Momentum ",">"," 30 GeV"),(0,r.kt)("li",{parentName:"ul"},"Opening angle between leptons ","<"," 80")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(3744).Z,width:"716",height:"588"})),(0,r.kt)("p",null,"The dominant background after all these cuts in the",(0,r.kt)("br",{parentName:"p"}),"\n","Higgs boson + 1 jet channel comes from ","(","WW",")"," and top pair",(0,r.kt)("br",{parentName:"p"}),"\n","production."),(0,r.kt)("p",null,"18 Higgs events are identified, yielding a significance of 0.543."),(0,r.kt)("h2",{id:"have-a-go-yourself"},"Have a go yourself!"),(0,r.kt)("p",null,"Perhaps try the ","(","H\\rightarrow W^+W^-",")"," + 0 jet, but separate it into leptonic channels and tune the cuts to maximise the number of ","(","H\\rightarrow W^+W^-",")"," events with maximum significance."),(0,r.kt)("p",null,"Or try something completely different..."),(0,r.kt)("h2",{id:"recap-what-hrightarrow-ww--decay-are-we-looking-for"},"Recap: What ","(","H\\rightarrow W^+W^-",")"," decay are we looking for?"),(0,r.kt)("p",null,"Lepton, anti-lepton, neutrino, anti-neutrino."),(0,r.kt)("h2",{id:"glossary"},"Glossary:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Channel: The leptonic decay channels are shown here: dielectron (ee), dimuon (\u03bc\u03bc), and electron-muon (e\u03bc)"),(0,r.kt)("li",{parentName:"ul"},"Reconstructed Dilepton Mass (M(ll)): the mass reconstructed from the two leptons in the final state."),(0,r.kt)("li",{parentName:"ul"},"Number of Jets (N(Jets)): number of jets in the event."),(0,r.kt)("li",{parentName:"ul"},"Are Jets b-tagged? (BTag) : jets originating from b-quarks are identified and labelled, or tagged, using so-called b-tagging algorithms."),(0,r.kt)("li",{parentName:"ul"},"Total Lepton Transverse Momentum (PT(ll)): this is the vectorial sum of the transverse momenta of the observed charged leptons."),(0,r.kt)("li",{parentName:"ul"},"Missing Transverse Momentum (MET): MET is used to infer the presence of non-detectable particles such as the neutrino."),(0,r.kt)("li",{parentName:"ul"},"Opening Angle Between MET and Leptons (DeltaPhi(MET, ll)): This is the opening angle, measured in phi (\u03c6), between the missing transverse momentum (MET) and the two leptons."),(0,r.kt)("li",{parentName:"ul"},"Opening Angle Between Leptons (DeltaPhi(l,l)): this is the angle, measured in phi (\u03c6), between the two leptons. The azimuthal angle \u03c6 is measured from the x-axis, around the beam."),(0,r.kt)("li",{parentName:"ul"},"Number of Expected Events: the number of events expected to be detected, reconstructed and recorded by ATLAS for 10 inverse femtobarn of data.  Numbers taken from simulation. The significance of the H \u2192 WW events quantifies how 'significant' the Higgs sample is with respect to the background. (Number of H \u2192 WW events)/Number of background events. The larger the significance value is, the better job you have done extracting the Higgs signal.")))}g.isMDXComponent=!0},3987:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/HWW0jet_13TeV-9b8955b1f1ceb9a6e243bbe6bc002a03.png"},3744:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/HWW1jet_13TeV-0ee7e872ac8bfd9ef2a8c63bb50f368c.png"}}]);