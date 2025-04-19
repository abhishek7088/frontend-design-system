import{j as e}from"./jsx-runtime-D_zvdyIk.js";const m=({items:h,orientation:u="horizontal"})=>e.jsx("nav",{className:"navigation","aria-label":"Main Navigation",children:e.jsx("ul",{className:`nav-list ${u==="vertical"?"flex-col":""}`,children:h.map((n,d)=>e.jsx("li",{className:"nav-item",children:e.jsx("a",{href:n.href,className:"nav-link",children:n.label})},d))})});m.__docgenInfo={description:"",methods:[],displayName:"Navigation",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ label: string; href: string }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!0}}]}}],raw:"{ label: string; href: string }[]"},description:""},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}}}};const f={title:"Components/Navigation",component:m,tags:["autodocs"],argTypes:{orientation:{control:"radio",options:["horizontal","vertical"]}}},a={args:{items:[{label:"Home",href:"#"},{label:"About",href:"#"},{label:"Contact",href:"#"}],orientation:"horizontal"}},r={args:{items:[{label:"Dashboard",href:"#"},{label:"Settings",href:"#"},{label:"Profile",href:"#"}],orientation:"vertical"}};var t,o,i;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    items: [{
      label: "Home",
      href: "#"
    }, {
      label: "About",
      href: "#"
    }, {
      label: "Contact",
      href: "#"
    }],
    orientation: "horizontal"
  }
}`,...(i=(o=a.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var l,s,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    items: [{
      label: "Dashboard",
      href: "#"
    }, {
      label: "Settings",
      href: "#"
    }, {
      label: "Profile",
      href: "#"
    }],
    orientation: "vertical"
  }
}`,...(c=(s=r.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const g=["Horizontal","Vertical"];export{a as Horizontal,r as Vertical,g as __namedExportsOrder,f as default};
