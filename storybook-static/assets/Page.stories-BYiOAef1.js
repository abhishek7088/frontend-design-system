import{j as e}from"./jsx-runtime-D_zvdyIk.js";const p=({title:h,description:s,children:m})=>e.jsxs("div",{style:{padding:"2rem",backgroundColor:"#f9f9f9",minHeight:"100vh"},children:[e.jsxs("header",{style:{borderBottom:"1px solid #ddd",paddingBottom:"1rem"},children:[e.jsx("h1",{children:h}),s&&e.jsx("p",{style:{color:"#777"},children:s})]}),e.jsx("main",{children:m})]});p.__docgenInfo={description:"",methods:[],displayName:"Page",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},title:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""}}};const g={title:"Components/Page",component:p},t={args:{title:"Welcome to the Page Component",description:"This is a simple Page component to contain content.",children:e.jsx("p",{children:"This is some content inside the page."})}},n={args:{title:"Custom Page Content",description:"This page has custom content within it.",children:e.jsxs("div",{children:[e.jsx("h2",{children:"Subheading"}),e.jsx("p",{children:"This is a paragraph inside the page component."}),e.jsx("button",{children:"Click Me"})]})}};var i,o,r;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    title: 'Welcome to the Page Component',
    description: 'This is a simple Page component to contain content.',
    children: <p>This is some content inside the page.</p>
  }
}`,...(r=(o=t.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};var a,c,d;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    title: 'Custom Page Content',
    description: 'This page has custom content within it.',
    children: <div>\r
        <h2>Subheading</h2>\r
        <p>This is a paragraph inside the page component.</p>\r
        <button>Click Me</button>\r
      </div>
  }
}`,...(d=(c=n.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const u=["Default","WithCustomContent"];export{t as Default,n as WithCustomContent,u as __namedExportsOrder,g as default};
