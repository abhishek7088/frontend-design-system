import{j as b}from"./jsx-runtime-D_zvdyIk.js";import{g as v}from"./_commonjsHelpers-CqkleIqs.js";var u={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var l;function h(){return l||(l=1,function(n){(function(){var c={}.hasOwnProperty;function s(){for(var r="",e=0;e<arguments.length;e++){var t=arguments[e];t&&(r=o(r,p(t)))}return r}function p(r){if(typeof r=="string"||typeof r=="number")return r;if(typeof r!="object")return"";if(Array.isArray(r))return s.apply(null,r);if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]"))return r.toString();var e="";for(var t in r)c.call(r,t)&&r[t]&&(e=o(e,t));return e}function o(r,e){return e?r?r+" "+e:r+e:r}n.exports?(s.default=s,n.exports=s):window.classNames=s})()}(u)),u.exports}var S=h();const C=v(S),j=({variant:n="primary",size:c="md",children:s,onClick:p})=>{const o="rounded font-semibold focus:outline-none transition",r={primary:"bg-blue-600 text-white hover:bg-blue-700",secondary:"bg-gray-600 text-white hover:bg-gray-700",outline:"border border-gray-600 text-gray-600 hover:bg-gray-100"},e={sm:"px-3 py-1 text-sm",md:"px-4 py-2 text-base",lg:"px-5 py-3 text-lg"},t=C(o,r[n],e[c]);return b.jsx("button",{onClick:p,className:t,children:s})},M={title:"Components/Button",component:j},a={args:{children:"Click Me",variant:"primary"}},i={args:{children:"Click Me",variant:"secondary"}};var m,d,f;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'Click Me',
    variant: 'primary'
  }
}`,...(f=(d=a.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};var y,x,g;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: 'Click Me',
    variant: 'secondary'
  }
}`,...(g=(x=i.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const N=["Primary","Secondary"];export{a as Primary,i as Secondary,N as __namedExportsOrder,M as default};
