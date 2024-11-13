import{r as d,a as j}from"./vendor-YsBxPMQB.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();var h={exports:{}},x={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y=d,N=Symbol.for("react.element"),w=Symbol.for("react.fragment"),S=Object.prototype.hasOwnProperty,C=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,O={key:!0,ref:!0,__self:!0,__source:!0};function f(l,t,o){var i,s={},n=null,r=null;o!==void 0&&(n=""+o),t.key!==void 0&&(n=""+t.key),t.ref!==void 0&&(r=t.ref);for(i in t)S.call(t,i)&&!O.hasOwnProperty(i)&&(s[i]=t[i]);if(l&&l.defaultProps)for(i in t=l.defaultProps,t)s[i]===void 0&&(s[i]=t[i]);return{$$typeof:N,type:l,key:n,ref:r,props:s,_owner:C.current}}x.Fragment=w;x.jsx=f;x.jsxs=f;h.exports=x;var e=h.exports,g,p=j;g=p.createRoot,p.hydrateRoot;/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=l=>l.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),b=(...l)=>l.filter((t,o,i)=>!!t&&t.trim()!==""&&i.indexOf(t)===o).join(" ").trim();/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var L={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=d.forwardRef(({color:l="currentColor",size:t=24,strokeWidth:o=2,absoluteStrokeWidth:i,className:s="",children:n,iconNode:r,...a},c)=>d.createElement("svg",{ref:c,...L,width:t,height:t,stroke:l,strokeWidth:i?Number(o)*24/Number(t):o,className:b("lucide",s),...a},[...r.map(([m,u])=>d.createElement(m,u)),...Array.isArray(n)?n:[n]]));/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=(l,t)=>{const o=d.forwardRef(({className:i,...s},n)=>d.createElement(k,{ref:n,iconNode:t,className:b(`lucide-${R(l)}`,i),...s}));return o.displayName=`${l}`,o};/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=v("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=v("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),E=()=>{const[l,t]=d.useState(0),o=[{title:"Breaking Language Barriers",subtitle:"A Multi-Method Investigation at The New School",stats:[{number:"3,750+",label:"International Students"},{number:"100+",label:"Countries"},{number:"57%",label:"Report Barriers"},{number:"20",label:"Study Participants"}]},{title:"Current Challenges",points:["Language Barriers - Significant impact on healthcare access","Medical Terminology - Complex terminology creates hurdles","Cultural Differences - Affect interpretation of healthcare"]},{title:"Methodology",sections:[{title:"User Observation",points:["Lab Setup","Data Collection","Response Tracking"]},{title:"Survey Design",points:["Pre/Post Observation","Likert Scale Ratings","Open Feedback"]},{title:"GOMS Analysis",points:["Task Completion","Decision Mapping","Cognitive Assessment"]}]},{title:"Timeline",phases:[{title:"Month One: Foundation",tasks:["IRB Approval","Team Assembly","Protocol Setup"]},{title:"Month Two: Data Collection",tasks:["User Observations","Survey Administration","Initial Analysis"]},{title:"Month Three: Analysis",tasks:["Data Synthesis","Report Preparation","Final Presentation"]}]},{title:"Expected Outcomes",sections:[{title:"Service Improvements",points:["Multi-language Support","Cultural Guidelines","Protocol Updates"]},{title:"Long-term Impact",points:["Improved Access","Enhanced Satisfaction","Better Outcomes"]}]}],i=()=>{t(r=>(r+1)%o.length)},s=()=>{t(r=>(r-1+o.length)%o.length)},n=r=>{switch(l){case 0:return e.jsxs("div",{className:"space-y-8",children:[e.jsx("h1",{className:"text-4xl font-bold text-center mb-4",children:r.title}),e.jsx("h2",{className:"text-xl text-center text-gray-300",children:r.subtitle}),e.jsx("div",{className:"grid grid-cols-2 gap-6 mt-8",children:r.stats.map((a,c)=>e.jsxs("div",{className:"text-center p-4 bg-indigo-900/30 rounded-lg",children:[e.jsx("div",{className:"text-3xl font-bold text-indigo-400",children:a.number}),e.jsx("div",{className:"text-sm mt-2 text-gray-300",children:a.label})]},c))})]});case 1:return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-3xl font-bold text-center mb-8",children:r.title}),e.jsx("ul",{className:"space-y-4",children:r.points.map((a,c)=>e.jsxs("li",{className:"flex items-center space-x-3 bg-indigo-900/30 p-4 rounded-lg",children:[e.jsx("div",{className:"h-2 w-2 bg-indigo-400 rounded-full"}),e.jsx("span",{children:a})]},c))})]});case 2:return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-3xl font-bold text-center mb-8",children:r.title}),e.jsx("div",{className:"grid grid-cols-3 gap-6",children:r.sections.map((a,c)=>e.jsxs("div",{className:"bg-indigo-900/30 p-4 rounded-lg",children:[e.jsx("h3",{className:"text-xl font-semibold mb-4 text-indigo-400",children:a.title}),e.jsx("ul",{className:"space-y-2",children:a.points.map((m,u)=>e.jsx("li",{className:"text-sm",children:m},u))})]},c))})]});case 3:return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-3xl font-bold text-center mb-8",children:r.title}),e.jsx("div",{className:"space-y-6",children:r.phases.map((a,c)=>e.jsxs("div",{className:"bg-indigo-900/30 p-4 rounded-lg",children:[e.jsx("h3",{className:"text-xl font-semibold mb-2 text-indigo-400",children:a.title}),e.jsx("div",{className:"flex gap-4",children:a.tasks.map((m,u)=>e.jsx("span",{className:"text-sm px-3 py-1 bg-indigo-800/30 rounded-full",children:m},u))})]},c))})]});case 4:return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-3xl font-bold text-center mb-8",children:r.title}),e.jsx("div",{className:"grid grid-cols-2 gap-6",children:r.sections.map((a,c)=>e.jsxs("div",{className:"bg-indigo-900/30 p-4 rounded-lg",children:[e.jsx("h3",{className:"text-xl font-semibold mb-4 text-indigo-400",children:a.title}),e.jsx("ul",{className:"space-y-2",children:a.points.map((m,u)=>e.jsx("li",{className:"text-sm",children:m},u))})]},c))})]});default:return null}};return e.jsx("div",{className:"w-full h-screen bg-gray-900 text-white p-8",children:e.jsxs("div",{className:"max-w-4xl mx-auto h-full flex flex-col",children:[e.jsx("div",{className:"flex-1 relative",children:e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:n(o[l])})}),e.jsxs("div",{className:"flex justify-between items-center mt-8",children:[e.jsx("button",{onClick:s,className:"p-2 rounded-full bg-indigo-600 hover:bg-indigo-700 transition-colors",children:e.jsx(_,{className:"w-6 h-6"})}),e.jsxs("div",{className:"text-sm",children:["Slide ",l+1," of ",o.length]}),e.jsx("button",{onClick:i,className:"p-2 rounded-full bg-indigo-600 hover:bg-indigo-700 transition-colors",children:e.jsx(A,{className:"w-6 h-6"})})]})]})})};function P(){return e.jsx("div",{className:"w-full h-screen",children:e.jsx(E,{})})}g(document.getElementById("root")).render(e.jsx(d.StrictMode,{children:e.jsx(P,{})}));
//# sourceMappingURL=index-BpUgRskF.js.map