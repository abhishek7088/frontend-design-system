import{j as b}from"./jsx-runtime-D_zvdyIk.js";import{g as h}from"./_commonjsHelpers-CqkleIqs.js";var u={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var m;function S(){return m||(m=1,function(n){(function(){var l={}.hasOwnProperty;function a(){for(var e="",r=0;r<arguments.length;r++){var t=arguments[r];t&&(e=s(e,c(t)))}return e}function c(e){if(typeof e=="string"||typeof e=="number")return e;if(typeof e!="object")return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var r="";for(var t in e)l.call(e,t)&&e[t]&&(r=s(r,t));return r}function s(e,r){return r?e?e+" "+r:e+r:e}n.exports?(a.default=a,n.exports=a):window.classNames=a})()}(u)),u.exports}var w=S();const C=h(w),x=({variant:n="primary",size:l="md",children:a,onClick:c})=>{const s="rounded font-semibold focus:outline-none transition",e={primary:"bg-blue-600 text-white hover:bg-blue-700",secondary:"bg-gray-600 text-white hover:bg-gray-700",outline:"border border-gray-600 text-gray-600 hover:bg-gray-100"},r={sm:"px-3 py-1 text-sm",md:"px-4 py-2 text-base",lg:"px-5 py-3 text-lg"},t=C(s,e[n],r[l]);return b.jsx("button",{onClick:c,className:t,children:a})};x.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'outline'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'outline'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const q={title:"Components/Button",component:x},o={args:{children:"Click Me",variant:"primary"}},i={args:{children:"Click Me",variant:"secondary"}};var p,d,y;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'Click Me',
    variant: 'primary'
  }
}`,...(y=(d=o.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var f,v,g;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: 'Click Me',
    variant: 'secondary'
  }
}`,...(g=(v=i.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};const R=["Primary","Secondary"];export{o as Primary,i as Secondary,R as __namedExportsOrder,q as default};
