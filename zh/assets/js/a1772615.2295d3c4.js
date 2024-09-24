"use strict";(self.webpackChunksearch_party_lab=self.webpackChunksearch_party_lab||[]).push([[8598],{4483:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var t=r(5893),c=r(1151);const s={sidebar_position:79},a="\ud83e\uddb8\u200d\u2642\ufe0f \u9884\u8fc7\u6ee4\u6570\u636e",i={id:"vector-search/filtering",title:"\ud83e\uddb8\u200d\u2642\ufe0f \u9884\u8fc7\u6ee4\u6570\u636e",description:"\u989d\u5916\u6d3b\u52a8\uff1a\u5982\u679c\u4f60\u6709\u591a\u4f59\u65f6\u95f4\u6216\u8005\u5728\u5bb6\u8fdb\u884c\uff0c\u4e0d\u4f1a\u5728\u52a8\u624b\u5b9e\u9a8c\u4e2d\u8986\u76d6\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/7-vector-search/9-filtering.mdx",sourceDirName:"7-vector-search",slug:"/vector-search/filtering",permalink:"/search-lab/zh/docs/vector-search/filtering",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/search-lab/blob/main/docs/7-vector-search/9-filtering.mdx",tags:[],version:"current",sidebarPosition:79,frontMatter:{sidebar_position:79},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc50 \u5c06\u8bed\u4e49\u641c\u7d22\u6dfb\u52a0\u5230\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f",permalink:"/search-lab/zh/docs/vector-search/add-to-app"},next:{title:"\ud83c\udfe1 Create Vectors",permalink:"/search-lab/zh/docs/category/-create-vectors"}},o={},d=[{value:"\u4f7f\u7528\u6570\u503c\u5b57\u6bb5\u8fdb\u884c\u9884\u8fc7\u6ee4",id:"\u4f7f\u7528\u6570\u503c\u5b57\u6bb5\u8fdb\u884c\u9884\u8fc7\u6ee4",level:2},{value:"\u4f7f\u7528\u5b57\u7b26\u4e32\u5b57\u6bb5\u8fdb\u884c\u9884\u8fc7\u6ee4",id:"\u4f7f\u7528\u5b57\u7b26\u4e32\u5b57\u6bb5\u8fdb\u884c\u9884\u8fc7\u6ee4",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"\ufe0f-\u9884\u8fc7\u6ee4\u6570\u636e",children:"\ud83e\uddb8\u200d\u2642\ufe0f \u9884\u8fc7\u6ee4\u6570\u636e"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"\u989d\u5916\u6d3b\u52a8\uff1a\u5982\u679c\u4f60\u6709\u591a\u4f59\u65f6\u95f4\u6216\u8005\u5728\u5bb6\u8fdb\u884c\uff0c\u4e0d\u4f1a\u5728\u52a8\u624b\u5b9e\u9a8c\u4e2d\u8986\u76d6\u3002"})}),"\n",(0,t.jsxs)(n.p,{children:["Atlas \u4e2d\u7684\u5411\u91cf\u641c\u7d22\u4e0e MongoDB \u751f\u6001\u7cfb\u7edf\u65e0\u7f1d\u96c6\u6210\u662f\u5176\u4e2d\u4e00\u4e2a\u4f18\u70b9\u3002\u4f8b\u5982\uff0c\u8981\u8fdb\u884c\u5411\u91cf\u641c\u7d22\uff0c\u6211\u4eec\u4f7f\u7528\u805a\u5408\u7ba1\u9053\u9636\u6bb5\uff0c\u641c\u7d22\u540e\u6211\u4eec\u53ef\u4ee5$project\u3001\u9650\u5236\u6570\u636e\u7b49\u3002\u4f46\u6709\u65f6\u6211\u4eec\u5e0c\u671b\u5728\u8fd0\u884c\u8bed\u4e49\u641c\u7d22\u4e4b\u524d\u8fdb\u884c\u8fc7\u6ee4\u3002\u4e3a\u6b64\uff0c\u6211\u4eec\u53ef\u4ee5\u5728 ",(0,t.jsx)(n.code,{children:"$vectorSearch"})," \u4e2d\u4f7f\u7528\u53ef\u9009\u7684 ",(0,t.jsx)(n.code,{children:"filter"})," \u5c5e\u6027\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u4f7f\u7528\u6570\u503c\u5b57\u6bb5\u8fdb\u884c\u9884\u8fc7\u6ee4",children:"\u4f7f\u7528\u6570\u503c\u5b57\u6bb5\u8fdb\u884c\u9884\u8fc7\u6ee4"}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u679c\u6211\u4eec\u60f3\u9884\u5148\u8fc7\u6ee4\u6240\u6709 2001 \u5e74\u7684\u4e66\u7c4d\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u4ee5\u4e0b\uff08\u4f46\u76ee\u524d\u4e0d\u4f1a\u751f\u6548\uff09\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'[\n    {$vectorSearch: {\n        queryVector: vector,\n        path: "embeddings",\n        numCandidates: 100,\n        index: "vectorsearch",\n        limit: 100,\n        filter: {year: {$eq: 2001}}\n    }\n    }\n]\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u4f7f\u7528\u5b57\u7b26\u4e32\u5b57\u6bb5\u8fdb\u884c\u9884\u8fc7\u6ee4",children:"\u4f7f\u7528\u5b57\u7b26\u4e32\u5b57\u6bb5\u8fdb\u884c\u9884\u8fc7\u6ee4"}),"\n",(0,t.jsx)(n.p,{children:"\u6211\u4eec\u53ef\u4ee5\u5c1d\u8bd5\u4ee5\u4e0b\uff0c\u540c\u6837\u4e0d\u4f1a\u751f\u6548\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'[\n    {$vectorSearch: {\n        queryVector: vector,\n        path: "embeddings",\n        numCandidates: 100,\n        index: "vectorsearch",\n        limit: 100,\n        filter: {language: {$eq: "es"}}\n    }\n    }\n]\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u95ee\u9898\u51fa\u5728 ",(0,t.jsx)(n.code,{children:"vectorsearch"})," \u7d22\u5f15\uff0c\u800c\u4e0d\u662f\u8fd9\u6bb5\u4ee3\u7801\u3002\u8981\u5bf9\u5b57\u7b26\u4e32\u5b57\u6bb5\u8fdb\u884c\u9884\u8fc7\u6ee4\uff0c\u9700\u8981\u5728\u6211\u4eec\u7684\u641c\u7d22\u7d22\u5f15\u5b9a\u4e49\u4e2d\u6dfb\u52a0\u5bf9\u8fd9\u4e9b\u5b57\u6bb5\u7684\u6620\u5c04\u3002\u4e3a\u6b64\uff0c\u8fdb\u5165 MongoDB Atlas\uff0c\u8fdb\u5165\u4f60\u7684\u96c6\u5408\u5e76\u518d\u6b21\u6253\u5f00\u641c\u7d22\u7d22\u5f15\u9009\u9879\u5361\uff0c\u6b63\u5982\u4f60\u5728 ",(0,t.jsx)(n.a,{href:"/docs/vector-search/create-index",children:"\u521b\u5efa\u7d22\u5f15"})," \u65f6\u6240\u505a\u7684\u90a3\u6837\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u5df2\u7ecf\u6709\u4e86\u7d22\u5f15\uff0c\u6211\u4eec\u5c06\u8981\u5728 JSON \u7f16\u8f91\u5668\u4e2d\u7f16\u8f91\u5b83\u3002\u53ea\u9700\u5728\u7d22\u5f15\u4e2d\u6dfb\u52a0 ",(0,t.jsx)(n.code,{children:"year"})," \u5b57\u6bb5\u548c ",(0,t.jsx)(n.code,{children:"language"})," \u5b57\u6bb5\u7684\u6620\u5c04\u3002\u7d22\u5f15\u5e94\u5982\u4e0b\u6240\u793a\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'{\n  "fields": [\n    {\n      "type": "vector",\n      "path": "embeddings",\n      "numDimensions": 1536,\n      "similarity": "cosine"\n    },\n    {\n      "type": "filter",\n      "path": "year"\n    },\n    {\n      "type": "filter",\n      "path": "language"\n    }\n  ]\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u552f\u4e00\u7684\u533a\u522b\u662f\u6211\u4eec\u6dfb\u52a0\u4e86\u4ee5\u4e0b\u90e8\u5206\uff0c\u58f0\u660e ",(0,t.jsx)(n.code,{children:"year"})," \u548c ",(0,t.jsx)(n.code,{children:"language"})," \u5e94\u4f5c\u4e3a ",(0,t.jsx)(n.a,{href:"https://www.mongodb.com/docs/atlas/atlas-vector-search/vector-search-type/#about-the-filter-type",children:"filter"})," \u8fdb\u884c\u7d22\u5f15\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'    {\n      "type": "filter",\n      "path": "year"\n    },\n    {\n      "type": "filter",\n      "path": "language"\n    }\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u5728\u4ee3\u7801\u4e2d\u6dfb\u52a0\u65b0\u7684\u805a\u5408\u7ba1\u9053\uff08",(0,t.jsx)(n.code,{children:"server/src/controllers/books.ts"})," \u4e2d\u719f\u6089\u7684 ",(0,t.jsx)(n.code,{children:"searchBooks"})," \u65b9\u6cd5\uff09\uff0c\u8fdb\u884c\u641c\u7d22\u65f6\uff0c\u4f60\u4f1a\u5f97\u5230\u7528\u897f\u73ed\u7259\u8bed\u7f16\u5199\u7684\u8bed\u4e49\u7ed3\u679c\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>a});var t=r(7294);const c={},s=t.createContext(c);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);