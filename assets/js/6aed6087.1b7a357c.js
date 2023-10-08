"use strict";(self.webpackChunkintiface_docs=self.webpackChunkintiface_docs||[]).push([[3469],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(a),h=r,f=p["".concat(l,".").concat(h)]||p[h]||d[h]||i;return a?n.createElement(f,o(o({ref:t},u),{},{components:a})):n.createElement(f,o({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},4083:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const i={},o="Get started with data visualisation",s={unversionedId:"visualization/index",id:"visualization/index",title:"Get started with data visualisation",description:"Here we present two methods of online data visualisation.  Both are easy to use, but still very powerful.",source:"@site/docs/visualization/index.md",sourceDirName:"visualization",slug:"/visualization/",permalink:"/docs/visualization/",draft:!1,tags:[],version:"current",frontMatter:{}},l={},c=[{value:"Why data visualisation?",id:"why-data-visualisation",level:2},{value:"Histogram Analyser",id:"histogram-analyser",level:2},{value:"Analysis browser (coming soon):",id:"analysis-browser-coming-soon",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"get-started-with-data-visualisation"},"Get started with data visualisation"),(0,r.kt)("p",null,"Here we present two methods of online data visualisation.  Both are easy to use, but still very powerful."),(0,r.kt)("h2",{id:"why-data-visualisation"},"Why data visualisation?"),(0,r.kt)("p",null,"Graphical representations can make pattern spotting easier and interacting with data can be more intuitive."),(0,r.kt)("h2",{id:"histogram-analyser"},"Histogram Analyser"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A web based tool for fast, cut-based analysis of data. Visualise the data using online histograms.")),(0,r.kt)("p",null,"This tool shows how physicists differentiate between physics processes. The signatures of different physics processes can look very different from one another. By applying cuts (tightening the range of data on each graph) to data, specific physics processes (signal) can be isolated from the background."),(0,r.kt)("p",null,"The webpage displays nine histograms of variables which can be used to isolate Higgs boson events. The Histogram Analyser will develop your skills in interpreting diagrams for single-variable data, including understanding that area in a histogram represents frequency. If you need a refresher on Histograms, refer to Histograms & Cumulative Frequency from the Edexcel Maths A Level curriculum, e.g. ",(0,r.kt)("a",{parentName:"p",href:"https://alevelmaths.co.uk/statistics/histograms-cumulative-frequency/"},"Paper 3, 2.1"),". Use your mouse to apply selections to a particular variable. The effect on the other variables will be shown immediately."),(0,r.kt)("p",null,"The Histogram Analyser will help you understand the data and the relationship between the signal and background processes. It can simplify and speed-up the selection of cuts, before coding an analysis. Usually, a complex computer algorithm - a deep learning \u201cAI\u201d - will perform this process thousands of times at once, ",(0,r.kt)("a",{parentName:"p",href:"https://arxiv.org/pdf/1806.11484.pdf"},"see e.g. this paper"),"."),(0,r.kt)("p",null,"By applying cuts to one histogram, you will change the amount of data available in the neighbouring histograms. Remember: By lowering the significance of one graph may result in a higher overall significance! As you\u2019ll soon find out, a drastic change to one graph may produce better results for all graphs in the end, so keep an eye out!"),(0,r.kt)("h2",{id:"analysis-browser-coming-soon"},"Analysis browser (coming soon):"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A web based tool for the more advanced user, allowing the user to inspect the datasets more thoroughly"),"."))}d.isMDXComponent=!0}}]);