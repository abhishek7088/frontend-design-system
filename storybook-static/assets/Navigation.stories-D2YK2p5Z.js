import{j as e}from"./jsx-runtime-D_zvdyIk.js";const f=({items:m})=>e.jsx("nav",{className:"navigation",children:e.jsx("ul",{className:"nav-list",children:m.map((n,h)=>e.jsx("li",{className:"nav-item",children:e.jsx("a",{href:n.href,className:"nav-link",children:n.label})},h))})}),d={title:"Components/Navigation",component:f,tags:["autodocs"],argTypes:{orientation:{control:"radio",options:["horizontal","vertical"]}}},a={args:{items:[{label:"Home",href:"#"},{label:"About",href:"#"},{label:"Contact",href:"#"}],orientation:"horizontal"}},r={args:{items:[{label:"Dashboard",href:"#"},{label:"Settings",href:"#"},{label:"Profile",href:"#"}],orientation:"vertical"}};var o,t,s;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(s=(t=a.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};var l,i,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const p=["Horizontal","Vertical"];export{a as Horizontal,r as Vertical,p as __namedExportsOrder,d as default};
