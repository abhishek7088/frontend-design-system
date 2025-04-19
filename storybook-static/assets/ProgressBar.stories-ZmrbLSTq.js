import{j as r}from"./jsx-runtime-D_zvdyIk.js";const a=({value:e,max:s=100,size:v="md",color:f="primary"})=>{const x=Math.min(e/s*100,100);return r.jsx("div",{className:`progress-wrapper ${v}`,role:"progressbar","aria-valuenow":e,"aria-valuemin":0,"aria-valuemax":s,children:r.jsx("div",{className:`progress-bar ${f}`,style:{width:`${x}%`}})})};a.__docgenInfo={description:"",methods:[],displayName:"ProgressBar",props:{value:{required:!0,tsType:{name:"number"},description:""},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},color:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "success" | "warning" | "error"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}}}};const z={title:"Components/Data Display/ProgressBar",component:a,tags:["autodocs"],args:{value:45,max:100,size:"md",color:"primary"}},o={},n={render:e=>r.jsxs("div",{style:{display:"grid",gap:"1rem"},children:[r.jsx(a,{...e,size:"sm"}),r.jsx(a,{...e,size:"md"}),r.jsx(a,{...e,size:"lg"})]})},i={render:e=>r.jsx("div",{style:{display:"grid",gap:"1rem"},children:["primary","secondary","success","warning","error"].map(s=>r.jsx(a,{...e,color:s},s))})};var l,t,m;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(m=(t=o.parameters)==null?void 0:t.docs)==null?void 0:m.source}}};var d,c,p;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "grid",
    gap: "1rem"
  }}>\r
      <ProgressBar {...args} size="sm" />\r
      <ProgressBar {...args} size="md" />\r
      <ProgressBar {...args} size="lg" />\r
    </div>
}`,...(p=(c=n.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,g,y;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "grid",
    gap: "1rem"
  }}>\r
      {["primary", "secondary", "success", "warning", "error"].map(color => <ProgressBar key={color} {...args} color={color as ProgressBarProps["color"]} />)}\r
    </div>
}`,...(y=(g=i.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const w=["Default","Sizes","Colors"];export{i as Colors,o as Default,n as Sizes,w as __namedExportsOrder,z as default};
