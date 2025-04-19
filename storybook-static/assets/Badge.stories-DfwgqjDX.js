import{j as a}from"./jsx-runtime-D_zvdyIk.js";const r=({variant:s="primary",size:p="md",children:g})=>a.jsx("span",{className:`badge badge-${s} badge-${p}`,children:g});try{r.displayName="Badge",r.__docgenInfo={description:"",displayName:"Badge",props:{variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"BadgeVariant"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:'"sm" | "md" | "lg"'}}}}}catch{}const y={title:"Components/Badge",component:r,tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary","success","error","warning","info"]},size:{control:{type:"radio"},options:["sm","md","lg"]}}},e={args:{variant:"primary",children:"Primary Badge"}},n={render:()=>a.jsxs("div",{className:"flex gap-2",children:[a.jsx(r,{variant:"primary",children:"Primary"}),a.jsx(r,{variant:"secondary",children:"Secondary"}),a.jsx(r,{variant:"success",children:"Success"}),a.jsx(r,{variant:"error",children:"Error"}),a.jsx(r,{variant:"warning",children:"Warning"}),a.jsx(r,{variant:"info",children:"Info"})]})};var i,d,t;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Primary Badge'
  }
}`,...(t=(d=e.parameters)==null?void 0:d.docs)==null?void 0:t.source}}};var o,c,m;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2">\r
      <Badge variant="primary">Primary</Badge>\r
      <Badge variant="secondary">Secondary</Badge>\r
      <Badge variant="success">Success</Badge>\r
      <Badge variant="error">Error</Badge>\r
      <Badge variant="warning">Warning</Badge>\r
      <Badge variant="info">Info</Badge>\r
    </div>
}`,...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const u=["Primary","AllVariants"];export{n as AllVariants,e as Primary,u as __namedExportsOrder,y as default};
