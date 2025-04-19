import{j as a}from"./jsx-runtime-D_zvdyIk.js";const e=({variant:c="primary",size:m="md",children:p})=>a.jsx("span",{className:`badge badge-${c} badge-${m}`,children:p});e.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const g={title:"Components/Badge",component:e,tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary","success","error","warning","info"]},size:{control:{type:"radio"},options:["sm","md","lg"]}}},r={args:{variant:"primary",children:"Primary Badge"}},n={render:()=>a.jsxs("div",{className:"flex gap-2",children:[a.jsx(e,{variant:"primary",children:"Primary"}),a.jsx(e,{variant:"secondary",children:"Secondary"}),a.jsx(e,{variant:"success",children:"Success"}),a.jsx(e,{variant:"error",children:"Error"}),a.jsx(e,{variant:"warning",children:"Warning"}),a.jsx(e,{variant:"info",children:"Info"})]})};var s,i,t;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Primary Badge'
  }
}`,...(t=(i=r.parameters)==null?void 0:i.docs)==null?void 0:t.source}}};var d,o,l;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2">\r
      <Badge variant="primary">Primary</Badge>\r
      <Badge variant="secondary">Secondary</Badge>\r
      <Badge variant="success">Success</Badge>\r
      <Badge variant="error">Error</Badge>\r
      <Badge variant="warning">Warning</Badge>\r
      <Badge variant="info">Info</Badge>\r
    </div>
}`,...(l=(o=n.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const v=["Primary","AllVariants"];export{n as AllVariants,r as Primary,v as __namedExportsOrder,g as default};
