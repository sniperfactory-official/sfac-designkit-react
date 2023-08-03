!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"));else if("function"==typeof define&&define.amd)define(["react"],t);else{var r="object"==typeof exports?t(require("react")):t(e.react);for(var a in r)("object"==typeof exports?exports:e)[a]=r[a]}}(this,(e=>(()=>{"use strict";var t={156:t=>{t.exports=e}},r={};function a(e){var o=r[e];if(void 0!==o)return o.exports;var n=r[e]={exports:{}};return t[e](n,n.exports,a),n.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return(()=>{a.r(o),a.d(o,{Badge:()=>r,Button:()=>d,Tab:()=>u,Text:()=>n,Title:()=>m,Toast:()=>y,default:()=>f});var e=a(156),t=a.n(e);const r=function({children:e,color:r="Primary"}){let a="bg-Primary-80 text-white";switch(r){case"Secondary":a="bg-Grayscale-5 text-Grayscale-60";break;case"Outline":a="bg-Primary-5 text-Primary-40 border border-Primary-40";break;case"Destructive":a="bg-[#ff5757] text-white"}return t().createElement("span",{className:`W-14 h-5 rounded pt-1 pr-2.5 pl-2.5 pb-1 gap-2 font-semibold text-[10px] ${a}`},e)};function n({className:e="",size:r,weight:a,children:o}){return t().createElement("span",{className:`${{xl:"text-xl",xs:"text-xs",lg:"text-lg",sm:"text-sm",base:"text-base"}[r]} ${{bold:"font-bold",semibold:"font-semibold",medium:"medium"}[a]} ${e}`},o)}const i={primary:"bg-Primary-80 text-white",secondary:"bg-Grayscale-5 text-Grayscale-60",destructive:"bg-[#FF5757] text-white",outline:"bg-Primary-5 border border-Primary-40 text-Primary-80",link:"text-Primary-60 hover:underline underline-offset-4 decoration-2",ghost:"text-Primary-60 hover:bg-Primary-5"},l="rounded-[10px] w-[35rem] py-4 justify-center",s="text-Grayscale-20 bg-Grayscale-5",c="h-[35px] px-8 rounded-lg rounded-[7px] text-Grayscale-20 bg-Grayscale-5";var x=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(r[a[o]]=e[a[o]])}return r};function b(e,t,r){return t&&r?`${c} ${s}`:t?`${l} ${s}`:r?`${c} ${i[e]}`:`${l} ${i[e]}`}function d(e){var{className:r="",variant:a="primary",disabled:o=!1,asChild:i=!1,textSize:l="base",textWeight:s="bold",text:c}=e,d=x(e,["className","variant","disabled","asChild","textSize","textWeight","text"]);return t().createElement("button",Object.assign({type:"button",className:`${b(a,o,i)} ${r}`,disabled:o},d),t().createElement(n,{size:l,weight:s},c))}var p=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(r[a[o]]=e[a[o]])}return r};function u(e){var{text:r,textSize:a="base",textWeight:o="semibold",active:i=!1}=e,l=p(e,["text","textSize","textWeight","active"]);return t().createElement("button",Object.assign({type:"button",className:`border-b-4 transition-colors duration-300 ${i?"border-Primary-100 text-Primary-100":"border-transparent"} w-[347px] text-center pt-[14px] pb-[17px]`},l),t().createElement(n,{size:a,weight:o},r))}function m({className:e="",size:r,children:a}){return t().createElement("p",{className:`font-bold ${{sm:"text-sm",xl:"text-xl","2xl":"text-2xl","3xl":"text-3xl","4xl":"text-4xl"}[r]} ${e}`},a)}function y({title:e,text:r,type:a="Simple",textSize:o="xs",textWeight:i="medium",titleSize:l="sm",button:s=!1}){let c="border-Grayscale-10 text-Grayscale-60",x="",b="";switch(a){case"Success":c="text-Meaningful-green bg-[#F4FBF5] border-Meaningful-green";break;case"Error":c="text-Meaningful-red bg-[#FCF5F5] border-Meaningful-red";break;case"With Action":x="text-Primary-40 absolute right-5 top-[30px]",b="block text-Grayscale-80";break;case"With Title":b="block text-Grayscale-80"}return t().createElement("div",{className:`relative w-[360px] shadow-toast rounded-[10px] border px-5 py-6 ${c}`},e&&t().createElement(m,{size:l,className:b},e),t().createElement(n,{size:o,weight:i},r),s&&t().createElement(d,{text:"확인",variant:"outline",asChild:!0,className:x,textSize:"sm",textWeight:"semibold"}))}const f={}})(),o})()));