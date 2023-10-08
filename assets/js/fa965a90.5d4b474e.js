"use strict";(self.webpackChunkintiface_docs=self.webpackChunkintiface_docs||[]).push([[4131],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=c(n),d=a,f=h["".concat(l,".").concat(d)]||h[d]||u[d]||o;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[h]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3594:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},s="Collision events seen by ATLAS",i={unversionedId:"atlas/atlas_events",id:"atlas/atlas_events",title:"Collision events seen by ATLAS",description:"Beams of protons are accelerated around the Large Hadron Collider (LHC) and are brought to collision at the centre of the ATLAS detector. The collisions produce debris in the form of new particles which fly out in all directions. Over a billion particle interactions take place in the ATLAS detector every second.",source:"@site/docs/atlas/atlas_events.md",sourceDirName:"atlas",slug:"/atlas/atlas_events",permalink:"/atlasopendata-website-v2/docs/atlas/atlas_events",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"intro",previous:{title:"ATLAS detector at the LHC",permalink:"/atlasopendata-website-v2/docs/atlas/experiment"}},l={},c=[],p={toc:c},h="wrapper";function u(e){let{components:t,...o}=e;return(0,a.kt)(h,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"collision-events-seen-by-atlas"},"Collision events seen by ATLAS"),(0,a.kt)("p",null,"Beams of ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Proton"},"protons")," are accelerated around the ",(0,a.kt)("a",{parentName:"p",href:"https://home.cern/resources/faqs/facts-and-figures-about-lhc"},"Large Hadron Collider (LHC)")," and are brought to collision at the centre of the ",(0,a.kt)("a",{parentName:"p",href:"http://home.cern/about/experiments/atlas"},"ATLAS")," detector. The collisions produce debris in the form of new particles which fly out in all directions. Over a billion particle interactions take place in the ATLAS detector every second."),(0,a.kt)("p",null,"The protons within the two beams are grouped in ",(0,a.kt)("a",{parentName:"p",href:"https://cerncourier.com/a/a-wealth-of-data-for-physics-from-the-lhc-1400-colliding-bunches-per-beam-and-counting/"},"bunches"),' which are squeezed down in size to increase the chances of a collision.\nIn the released data, the bunches crossed every 25 ns. The event reconstruction is affected by multiple inelastic pp collisions in a single bunch crossing and by collisions in neighbouring bunch crossings, referred to as "pile-up". The number of interactions per bunch crossing ranges from about 8 to 45.'),(0,a.kt)("p",null,"An event is the data resulting from a particular bunch-crossing. The 13 TeV ATLAS Open Data events belong to ",(0,a.kt)("strong",{parentName:"p"},"61 runs")," from the first four periods of the 2016 pp data-taking and contain approximately ",(0,a.kt)("strong",{parentName:"p"},"270 million")," of collision events."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://home.cern/topics/high-luminosity-lhc"},"Luminosity")," is one of the most important parameters of the LHC. The higher the luminosity, the more data the experiments can gather to allow them to observe rare processes. The released 13 TeV ATLAS Open Data collision events, after applying quality criteria for the beam, data and detector, correspond to an ",(0,a.kt)("strong",{parentName:"p"},"integrated luminosity of 10.06 \xb1 0.37 fb",(0,a.kt)("sup",null,"-1")," "),"."),(0,a.kt)("p",null,"In a typical collision event, several vertices along the beam are produced and the primary vertex is defined as the vertex with the largest sum of the squares of the transverse momenta of associated tracks. The reconstruction of vertices is important for many physics studies, which include: searches for new particles, identifying jets containing b-quarks or tau-leptons."),(0,a.kt)("p",null,"The event display below shows a Z-boson decaying to two muons candidate event from proton-proton collisions recorded by ATLAS with LHC stable beams at a collision energy of 13 TeV on the 29th of September 2017. The Z boson candidate is reconstructed in a beam crossing with 65 additionally reconstructed vertices. The upper left display presents a transverse view of the event (X-Y plane) where the yellow lines show the two muons' paths. The upper right display shows the 66 reconstructed vertices. The bottom display presents the event in longitudinal view (Z-Y plane). Tracks with transverse momenta large than 100 MeV are displayed."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(4389).Z,width:"5000",height:"5000"})))}u.isMDXComponent=!0},4389:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/zpileup_alltracks-fab38a0f341e59b88c7b94af7316c0c8.png"}}]);