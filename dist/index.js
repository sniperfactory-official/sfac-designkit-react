!function(e,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r(require("react"));else if("function"==typeof define&&define.amd)define(["react"],r);else{var t="object"==typeof exports?r(require("react")):r(e.react);for(var o in t)("object"==typeof exports?exports:e)[o]=t[o]}}(this,(e=>(()=>{"use strict";var r={156:r=>{r.exports=e}},t={};function o(e){var a=t[e];if(void 0!==a)return a.exports;var i=t[e]={exports:{}};return r[e](i,i.exports,o),i.exports}o.d=(e,r)=>{for(var t in r)o.o(r,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};return(()=>{o.r(a),o.d(a,{getButtonStyles:()=>n}),o(156);const e={primary:"bg-Primary-80 text-white",secondary:"bg-Grayscale-5 text-Grayscale-60",destructive:"bg-[#FF5757] text-white",outline:"bg-Primary-5 border border-Primary-40 text-Primary-80",link:"text-Primary-60 hover:underline underline-offset-4 decoration-2",ghost:"text-Primary-60 hover:bg-Primary-5"},r="rounded-[10px] w-[35rem] py-4 justify-center",t="text-Grayscale-20 bg-Grayscale-5",i="h-[35px] px-8 rounded-lg rounded-[7px] text-Grayscale-20 bg-Grayscale-5";function n(o,a,n){return a&&n?`${i} ${t}`:a?`${r} ${t}`:n?`${i} ${e[o]}`:`${r} ${e[o]}`}})(),a})()));