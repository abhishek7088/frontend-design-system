import{j as e}from"./jsx-runtime-D_zvdyIk.js";const h=({items:m,orientation:u="horizontal"})=>e.jsx("nav",{"aria-label":"Main Navigation",children:e.jsx("ul",{className:`flex ${u==="vertical"?"flex-col":"flex-row"} gap-4 flex-wrap`,children:m.map((t,p)=>e.jsx("li",{children:e.jsx("a",{href:t.href,className:"px-4 py-2 rounded-full bg-white text-blue-600 hover:bg-blue-500 hover:text-white shadow transition-all",children:t.label})},p))})});h.__docgenInfo={description:"",methods:[],displayName:"Navigation",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ label: string; href: string }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!0}}]}}],raw:"{ label: string; href: string }[]"},description:""},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}}}};const f={title:"Components/Navigation",component:h,tags:["autodocs"],argTypes:{orientation:{control:"radio",options:["horizontal","vertical"]}}},r={args:{items:[{label:"Home",href:"#"},{label:"About",href:"#"},{label:"Contact",href:"#"}],orientation:"horizontal"}},a={args:{items:[{label:"Dashboard",href:"#"},{label:"Settings",href:"#"},{label:"Profile",href:"#"}],orientation:"vertical"}};var n,o,l;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(l=(o=r.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var i,s,c;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(s=a.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const b=["Horizontal","Vertical"];export{r as Horizontal,a as Vertical,b as __namedExportsOrder,f as default};
