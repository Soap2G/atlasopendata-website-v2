"use strict";(self.webpackChunkintiface_docs=self.webpackChunkintiface_docs||[]).push([[3542],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var c=n.createContext({}),d=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=d(a),m=s,f=l["".concat(c,".").concat(m)]||l[m]||u[m]||r;return a?n.createElement(f,o(o({ref:t},p),{},{components:a})):n.createElement(f,o({ref:t},p))}));function f(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,o=new Array(r);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[l]="string"==typeof e?e:s,o[1]=i;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7597:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var n=a(7462),s=(a(7294),a(3905));const r={},o="Overview of the MC samples released in the 13 TeV ATLAS Open Data",i={unversionedId:"datasets/mc",id:"datasets/mc",title:"Overview of the MC samples released in the 13 TeV ATLAS Open Data",description:"The ATLAS simulation chain, whose main task is to provide a realistic estimate of the ATLAS detector material properties and response to the produced events, is a chain of four well-defined steps, presented below. The chain also simulates a wide range of signal and background physics processes expected at the LHC.",source:"@site/docs/datasets/mc.md",sourceDirName:"datasets",slug:"/datasets/mc",permalink:"/atlasopendata-website-v2/docs/datasets/mc",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"data13",previous:{title:"Description of the 13 TeV ATLAS Open Data branches and variables",permalink:"/atlasopendata-website-v2/docs/datasets/dataset13"},next:{title:"Datasets in ROOT format",permalink:"/atlasopendata-website-v2/docs/datasets/files"}},c={},d=[],p={toc:d},l="wrapper";function u(e){let{components:t,...r}=e;return(0,s.kt)(l,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"overview-of-the-mc-samples-released-in-the-13-tev-atlas-open-data"},"Overview of the MC samples released in the 13 TeV ATLAS Open Data"),(0,s.kt)("p",null,"The ",(0,s.kt)("strong",{parentName:"p"},"ATLAS simulation chain"),", whose main task is to provide a realistic estimate of the ATLAS detector material properties and response to the produced events, is a chain of four well-defined steps, presented below. The chain also simulates a wide range of signal and background physics processes expected at the LHC."),(0,s.kt)("p",null,"The event generation using a Monte Carlo (MC) generator, which mimics the initial pp collision and encompasses its fragmentation and hadronisation stages, is followed by the simulation of the ATLAS detector geometry and material properties. Both for data and MC generated events, the digitisation step converts the currents and voltages into a response of the read-out system of the ATLAS detector, and finally the collisions are reconstructed."),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(6782).Z,width:"1737",height:"207"})),(0,s.kt)("hr",null),(0,s.kt)("p",null,"The 13 TeV ATLAS Open Data set is comprised not only of pp collision data recorded with the ATLAS detector in 2016. It is accompanied by MC simulation samples describing several SM processes, which are used to model the expected distributions of different signal and background events. All simulated samples were processed through the same reconstruction algorithms and analysis chain as the data and subjected to a loose event preselection to reduce processing time. "),(0,s.kt)("p",null,"MC simulation samples describing several Standard Model (SM) and beyond the Standard Model (BSM) processes, which are used to model the expected distributions of ",(0,s.kt)("strong",{parentName:"p"},"different signal and background processes"),", are included in the release. "),(0,s.kt)("p",null,"A set of simulated SM processes includes ",(0,s.kt)("strong",{parentName:"p"},"top-quark-pair production, single-top production, production of weak bosons in association with jets (W+jets, Z+jets), production of a pair of bosons (diboson WW, WZ, ZZ) and SM Higgs production"),". The basic set of SM processes is complemented by simulations of BSM processes (",(0,s.kt)("strong",{parentName:"p"},"heavy Z' and SUSY production"),"). The description of the MC samples released in the 13 TeV ATLAS Open Data is presented below:\n",(0,s.kt)("img",{src:a(9626).Z,width:"1715",height:"1156"})))}u.isMDXComponent=!0},6782:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/steps-1abac40f6210df1aa7a28e8d09b77843.png"},9626:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tab_06-8483edc669c6043a0d8c470f58dc85ad.png"}}]);