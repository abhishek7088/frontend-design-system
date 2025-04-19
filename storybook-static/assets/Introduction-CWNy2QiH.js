import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as o}from"./index-7_urXZbD.js";import"./preview-BRHi_fT2.js";import"./DocsRenderer-CFRXHY34-eNJ4W_69.js";import{c as i}from"./index-CKcEy8Jn.js";import"./index-CdUicJsP.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Cef8ex3u.js";import"./react-18-DroeUvO3.js";import"./index-PxHYSiC3.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";const{definePreview:f}=__STORYBOOK_MODULE_PREVIEW_API__;function r(e){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Introduction"}),`
`,n.jsx(t.h1,{id:"design-system-documentation",children:"Design System Documentation"}),`
`,n.jsx(t.p,{children:"Welcome to our design system documentation. This system is built with:"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsx(t.li,{children:"React"}),`
`,n.jsx(t.li,{children:"TypeScript"}),`
`,n.jsx(t.li,{children:"TailwindCSS"}),`
`,n.jsx(t.li,{children:"Storybook"}),`
`]}),`
`,n.jsx(t.hr,{}),`
`,n.jsx(t.h2,{id:"-getting-started",children:"🚀 Getting Started"}),`
`,n.jsx(t.p,{children:"To use components from this system:"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-tsx",children:`import { Button } from '../components/Button';\r
import { Badge } from '../components/Badge';\r
import { Navigation } from '../components/Navigation';\r
\r
function Example() {\r
  return (\r
    <div>\r
      <Navigation\r
        items={[\r
          { label: 'Home', href: '/' },\r
          { label: 'About', href: '/about' },\r
          { label: 'Contact', href: '/contact' }\r
        ]}\r
        orientation="horizontal"\r
      />\r
      <Button variant="primary">Click me</Button>\r
      <Badge variant="success">New</Badge>\r
    </div>\r
  );\r
}
`})})]})}function y(e={}){const{wrapper:t}={...o(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(r,{...e})}):r(e)}export{y as default};
