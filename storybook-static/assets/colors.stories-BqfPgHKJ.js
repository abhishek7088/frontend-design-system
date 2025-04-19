import{j as e}from"./jsx-runtime-D_zvdyIk.js";const c={primary:{50:"#e0f7ff",100:"#b8eaff",200:"#8ddcff",300:"#60ceff",400:"#3bc3ff",500:"#0fb8ff",600:"#00a8f0",700:"#0095d8",800:"#0083c0",900:"#006399"},success:"#4CAF50",error:"#F44336",warning:"#FF9800",info:"#2196F3",gray:{50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121"}},p={title:"Foundations/Colors",parameters:{controls:{hideNoControlsWarning:!0}}},a=()=>e.jsx("div",{style:{display:"grid",gap:"1rem"},children:Object.entries(c).map(([r,s])=>e.jsxs("div",{children:[e.jsx("h3",{children:r}),typeof s=="string"?e.jsx(n,{name:r,value:s}):e.jsx("div",{style:{display:"flex",gap:"0.5rem",flexWrap:"wrap"},children:Object.entries(s).map(([d,l])=>e.jsx(n,{name:`${r}-${d}`,value:l},`${r}-${d}`))})]},r))}),n=({name:r,value:s})=>e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"0.5rem"},children:[e.jsx("div",{style:{width:"3rem",height:"3rem",backgroundColor:s,border:"1px solid #ddd",borderRadius:"4px"}}),e.jsxs("div",{children:[e.jsx("div",{children:r}),e.jsx("div",{style:{fontSize:"0.8rem",color:"#666"},children:s})]})]});var i,t,o;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`() => <div style={{
  display: 'grid',
  gap: '1rem'
}}>\r
    {Object.entries(colors).map(([name, value]) => <div key={name}>\r
        <h3>{name}</h3>\r
        {typeof value === 'string' ? <ColorSwatch name={name} value={value} /> : <div style={{
      display: 'flex',
      gap: '0.5rem',
      flexWrap: 'wrap'
    }}>\r
            {Object.entries(value).map(([shade, shadeValue]) => <ColorSwatch key={\`\${name}-\${shade}\`} name={\`\${name}-\${shade}\`} value={shadeValue} />)}\r
          </div>}\r
      </div>)}\r
  </div>`,...(o=(t=a.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const m=["ColorPalette"];export{a as ColorPalette,m as __namedExportsOrder,p as default};
