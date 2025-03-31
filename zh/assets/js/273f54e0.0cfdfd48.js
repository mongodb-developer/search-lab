"use strict";(self.webpackChunksearch_party_lab=self.webpackChunksearch_party_lab||[]).push([[597],{1187:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var o=n(4848),i=n(8453);const r={},a="\ud83e\uddb8\u200d\u2642\ufe0f Vector quantization",s={id:"vector-search/quantization",title:"\ud83e\uddb8\u200d\u2642\ufe0f Vector quantization",description:"Vector quantization is a technique to reduce the number of bits required to represent a vector. This can help vastly improve vector search performance.",source:"@site/docs/7-vector-search/10-quantization.mdx",sourceDirName:"7-vector-search",slug:"/vector-search/quantization",permalink:"/search-lab/zh/docs/vector-search/quantization",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/search-lab/blob/main/docs/7-vector-search/10-quantization.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Vector Search",permalink:"/search-lab/zh/docs/category/vector-search"},next:{title:"\ud83d\udcd8 \u8bed\u4e49\u641c\u7d22",permalink:"/search-lab/zh/docs/vector-search/semantic-search"}},c={},d=[{value:"Enabling quantization",id:"enabling-quantization",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"\ufe0f-vector-quantization",children:"\ud83e\uddb8\u200d\u2642\ufe0f Vector quantization"})}),"\n",(0,o.jsx)(t.p,{children:"Vector quantization is a technique to reduce the number of bits required to represent a vector. This can help vastly improve vector search performance."}),"\n",(0,o.jsx)(t.p,{children:"However, before you enable quantization, note the current vector search index size. You may do so via the Atlas UI."}),"\n",(0,o.jsx)(t.h2,{id:"enabling-quantization",children:"Enabling quantization"}),"\n",(0,o.jsxs)(t.p,{children:["To enable vector auto-quantization on your embeddings, simply set the ",(0,o.jsx)(t.code,{children:"quantization"})," field to one of the supported quantization types (",(0,o.jsx)(t.code,{children:"scalar"})," or ",(0,o.jsx)(t.code,{children:"binary"}),") in the vector search index definition."]}),"\n",(0,o.jsx)(t.p,{children:"You can edit your vector search index definition to the following:"}),"\n",(0,o.jsxs)(n,{children:[(0,o.jsx)("summary",{children:"Click to expand"}),(0,o.jsx)("div",{children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",children:'{\n  "fields": [\n    {\n      "numDimensions": 1408,\n      "path": "embeddings",\n      "quantization": "scalar",\n      "similarity": "cosine",\n      "type": "vector"\n    }\n    //...\n  ]\n}\n'})})})]}),"\n",(0,o.jsxs)(t.admonition,{type:"info",children:[(0,o.jsx)(t.p,{children:"Notice the slight increase in the size of the vector search index upon enabling automatic-quantization. This is because full-fidelity vectors are also stored on disk for re-scoring and/or exact nearest neighbors (ENN) search."}),(0,o.jsx)(t.p,{children:"In the Atlas UI, the entire index size is displayed, which might be larger than the original index size, since Atlas does not show a break down of the data structures within an index that are stored in RAM and on disk."}),(0,o.jsxs)(t.p,{children:["The Atlas Search metrics however will show a much smaller index that is held in memory when you enable automatic quantization. Refer to our ",(0,o.jsx)(t.a,{href:"https://www.mongodb.com/docs/atlas/atlas-vector-search/deployment-options/#storage-requirements-for-vectors",children:"documentation"})," to learn more about these considerations."]}),(0,o.jsxs)(t.p,{children:["If storage and index size is a concern, you may also consider ",(0,o.jsx)(t.a,{href:"https://www.mongodb.com/docs/atlas/atlas-vector-search/vector-quantization/#how-to-ingest-pre-quantized-vectors",children:"pre-quantized vectors"}),"."]})]})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>s});var o=n(6540);const i={},r=o.createContext(i);function a(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);