"use strict";(self.webpackChunksearch_party_lab=self.webpackChunksearch_party_lab||[]).push([[1523],{8804:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>h});var t=r(5893),i=r(1151);const s={},o="\ud83d\udcd8 Building the Hybrid Search Pipeline",a={id:"hybrid-search/implementing-hybrid-search",title:"\ud83d\udcd8 Building the Hybrid Search Pipeline",description:"In this section, we'll construct a hybrid search pipeline that combines the power of vector search for semantic similarity with the precision of full-text search. We'll use MongoDB's aggregation framework to create this pipeline.",source:"@site/docs/8-hybrid-search/2-implementing-hybrid-search.mdx",sourceDirName:"8-hybrid-search",slug:"/hybrid-search/implementing-hybrid-search",permalink:"/search-lab/docs/hybrid-search/implementing-hybrid-search",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/search-lab/blob/main/docs/8-hybrid-search/2-implementing-hybrid-search.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcd8 Introduction to Hybrid Search",permalink:"/search-lab/docs/hybrid-search/intro"},next:{title:"\ud83d\udcd8 Complete Code example",permalink:"/search-lab/docs/hybrid-search/complete-example"}},c={},h=[{value:"3.1 Vector Search Stage",id:"31-vector-search-stage",level:2},{value:"3.2 Text Search Stage",id:"32-text-search-stage",level:2},{value:"Key points:",id:"key-points",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"-building-the-hybrid-search-pipeline",children:"\ud83d\udcd8 Building the Hybrid Search Pipeline"})}),"\n",(0,t.jsx)(n.p,{children:"In this section, we'll construct a hybrid search pipeline that combines the power of vector search for semantic similarity with the precision of full-text search. We'll use MongoDB's aggregation framework to create this pipeline."}),"\n",(0,t.jsx)(n.h2,{id:"31-vector-search-stage",children:"3.1 Vector Search Stage"}),"\n",(0,t.jsx)(n.p,{children:"The first stage of our pipeline will be the vector search. This allows us to find books with synopses that are semantically similar to our query."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'\n{\n  $vectorSearch: {\n    index: "books_synopsis_vector",\n    path: "embeddings",\n    queryVector: [0.1, -0.2, 0.3, ...], // Your query vector here\n    numCandidates: 100,\n    limit: 20\n  }\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Let's break this down:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"index"}),": The name of your vector index."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"path"}),": The field containing your embeddings."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"queryVector"}),": The vector representation of your search query."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"numCandidates"}),": The number of initial candidates to consider."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"limit"}),": The maximum number of results to return from this stage."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"32-text-search-stage",children:"3.2 Text Search Stage"}),"\n",(0,t.jsx)(n.p,{children:"Next, we'll add a text search stage to find books based on title and author matches."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'{\n  $search: {\n    index: "books_text_index",\n    compound: {\n      should: [\n        {\n          text: {\n            query: "your search query",\n            path: "title",\n            score: { boost: { value: 3 } }\n          }\n        },\n        {\n          text: {\n            query: "your search query",\n            path: "authors.name",\n            score: { boost: { value: 2 } }\n          }\n        }\n      ]\n    }\n  }\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"key-points",children:"Key points:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'We\'re using a compound query with "should" clauses.'}),"\n",(0,t.jsxs)(n.li,{children:["We search in both ",(0,t.jsx)(n.code,{children:"title"})," and ",(0,t.jsx)(n.code,{children:"authors.name"})," fields."]}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"boost"})," values (3 for title, 2 for author) give more weight to title matches."]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>o});var t=r(7294);const i={},s=t.createContext(i);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);