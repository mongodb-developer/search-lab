"use strict";(self.webpackChunksearch_party_lab=self.webpackChunksearch_party_lab||[]).push([[6438],{7617:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var t=n(4848),a=n(8453),s=n(1470),o=n(9365);const l={sidebar_position:76},c="\ud83d\udc50 \u521b\u5efa\u5411\u91cf\u641c\u7d22\u7d22\u5f15",i={id:"vector-search/create-index",title:"\ud83d\udc50 \u521b\u5efa\u5411\u91cf\u641c\u7d22\u7d22\u5f15",description:"\u8981\u5f00\u59cb\u4f7f\u7528\u5411\u91cf\u641c\u7d22\uff0c\u4f60\u5fc5\u987b\u5728\u6570\u636e\u5e93\u4e0a\u914d\u7f6e\u53e6\u4e00\u4e2a\u641c\u7d22\u7d22\u5f15\u3002\u8fd9\u4e2a\u8fc7\u7a0b\u4e0e\u4e0a\u4e00\u8282\u4e2d\u6240\u505a\u7684\u7c7b\u4f3c\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/7-vector-search/6-create-index.mdx",sourceDirName:"7-vector-search",slug:"/vector-search/create-index",permalink:"/search-lab/zh/docs/vector-search/create-index",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/search-lab/blob/main/docs/7-vector-search/6-create-index.mdx",tags:[],version:"current",sidebarPosition:76,frontMatter:{sidebar_position:76},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc50 \u5bfc\u5165\u5411\u91cf\u5316\u6570\u636e",permalink:"/search-lab/zh/docs/vector-search/import-data"},next:{title:"\ud83d\udc50 \u5c06\u8bed\u4e49\u641c\u7d22\u6dfb\u52a0\u5230\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f",permalink:"/search-lab/zh/docs/vector-search/add-to-app"}},u={},d=[{value:"\u521b\u5efa\u5411\u91cf\u641c\u7d22\u7d22\u5f15\u7684\u5206\u6b65\u6307\u5357",id:"\u521b\u5efa\u5411\u91cf\u641c\u7d22\u7d22\u5f15\u7684\u5206\u6b65\u6307\u5357",level:2}];function h(e){const r={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components},{Screenshot:n}=r;return n||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Screenshot",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"-\u521b\u5efa\u5411\u91cf\u641c\u7d22\u7d22\u5f15",children:"\ud83d\udc50 \u521b\u5efa\u5411\u91cf\u641c\u7d22\u7d22\u5f15"})}),"\n",(0,t.jsx)(r.p,{children:"\u8981\u5f00\u59cb\u4f7f\u7528\u5411\u91cf\u641c\u7d22\uff0c\u4f60\u5fc5\u987b\u5728\u6570\u636e\u5e93\u4e0a\u914d\u7f6e\u53e6\u4e00\u4e2a\u641c\u7d22\u7d22\u5f15\u3002\u8fd9\u4e2a\u8fc7\u7a0b\u4e0e\u4e0a\u4e00\u8282\u4e2d\u6240\u505a\u7684\u7c7b\u4f3c\u3002"}),"\n",(0,t.jsx)(r.h2,{id:"\u521b\u5efa\u5411\u91cf\u641c\u7d22\u7d22\u5f15\u7684\u5206\u6b65\u6307\u5357",children:"\u521b\u5efa\u5411\u91cf\u641c\u7d22\u7d22\u5f15\u7684\u5206\u6b65\u6307\u5357"}),"\n",(0,t.jsxs)(r.p,{children:["\u6253\u5f00 MongoDB Atlas \u4e2d\u7684 ",(0,t.jsx)(r.strong,{children:"Clusters"})," \u9875\u9762\uff0c\u5e76\u5728\u53f3\u4e0b\u89d2\u9009\u62e9 ",(0,t.jsx)(r.strong,{children:"Create Index"}),"\u3002"]}),"\n",(0,t.jsx)(n,{src:"img/screenshots/7-vector-search/6-create-index/1-create-index.png",alt:"\u5728 'Clusters' \u9875\u9762\u4e2d\u7a81\u51fa\u663e\u793a\u7684 'Create Index' \u94fe\u63a5",url:"https://cloud.mongodb.com"}),"\n",(0,t.jsxs)(r.p,{children:["\u70b9\u51fb ",(0,t.jsx)(r.strong,{children:"Create Search Index"})," \u6309\u94ae\u3002"]}),"\n",(0,t.jsx)(n,{src:"img/screenshots/7-vector-search/6-create-index/2-create-search-index.png",alt:"\u5728 'Create Index' \u9875\u9762\u4e2d\u7a81\u51fa\u663e\u793a\u7684 'Create Search Index' \u6309\u94ae",url:"https://cloud.mongodb.com"}),"\n",(0,t.jsxs)(r.p,{children:["\u8fd9\u6b21\uff0c\u4f60\u5c06\u4f7f\u7528 ",(0,t.jsx)(r.strong,{children:"JSON Editor"})," \u6765\u521b\u5efa\u7d22\u5f15\u3002"]}),"\n",(0,t.jsx)(n,{src:"img/screenshots/7-vector-search/6-create-index/3-json-editor.png",alt:"\u5728 'Create Index' \u9875\u9762\u4e2d\u7a81\u51fa\u663e\u793a\u7684 'JSON Editor' \u6807\u7b7e",url:"https://cloud.mongodb.com"}),"\n",(0,t.jsxs)(r.p,{children:["\u9009\u62e9\u4f60\u7684\u6570\u636e\u5e93\u548c ",(0,t.jsx)(r.code,{children:"books"})," \u96c6\u5408\uff0c\u5c06\u7d22\u5f15\u540d\u79f0\u66f4\u6539\u4e3a ",(0,t.jsx)(r.code,{children:"vectorsearch"}),"\uff0c\u5e76\u5728 JSON \u7f16\u8f91\u5668\u4e2d\u6dfb\u52a0\u4ee5\u4e0b\u4ee3\u7801\uff1a"]}),"\n",(0,t.jsxs)(s.A,{groupId:"aiproviders",children:[(0,t.jsx)(o.A,{value:"serverless",label:"Serverless Endpoint",default:!0,children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:'{\n  "fields":[\n    {\n      "type": "vector",\n      "path": "embeddings",\n      "numDimensions": 1408,\n      "similarity": "cosine"\n    }\n  ]\n}\n'})})}),(0,t.jsx)(o.A,{value:"openai",label:"OpenAI",default:!0,children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:'{\n  "fields":[\n    {\n      "type": "vector",\n      "path": "embeddings",\n      "numDimensions": 1536,\n      "similarity": "cosine"\n    }\n  ]\n}\n'})})}),(0,t.jsx)(o.A,{value:"googleVertex",label:"Google Cloud Vertex AI",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:'{\n  "fields":[\n    {\n      "type": "vector",\n      "path": "embeddings",\n      "numDimensions": 1408,\n      "similarity": "cosine"\n    }\n  ]\n}\n'})})})]}),"\n",(0,t.jsxs)(r.p,{children:["\u6700\u540e\u4e00\u6b65\u5141\u8bb8\u4f60\u67e5\u770b\u7d22\u5f15\u914d\u7f6e\u5e76\u5728\u9700\u8981\u65f6\u8fdb\u884c\u4f18\u5316\u3002\u7ee7\u7eed\u70b9\u51fb ",(0,t.jsx)(r.strong,{children:"Create Search Index"}),"\u3002"]})]})}function p(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},9365:(e,r,n)=>{n.d(r,{A:()=>o});n(6540);var t=n(8215);const a={tabItem:"tabItem_Ymn6"};var s=n(4848);function o(e){let{children:r,hidden:n,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,o),hidden:n,children:r})}},1470:(e,r,n)=>{n.d(r,{A:()=>I});var t=n(6540),a=n(8215),s=n(3104),o=n(6347),l=n(205),c=n(7485),i=n(1682),u=n(679);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:n}=e;return(0,t.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:n,attributes:t,default:a}}=e;return{value:r,label:n,attributes:t,default:a}}))}(n);return function(e){const r=(0,i.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function p(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function m(e){let{queryString:r=!1,groupId:n}=e;const a=(0,o.W6)(),s=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,c.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const r=new URLSearchParams(a.location.search);r.set(s,e),a.replace({...a.location,search:r.toString()})}),[s,a])]}function b(e){const{defaultValue:r,queryString:n=!1,groupId:a}=e,s=h(e),[o,c]=(0,t.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:s}))),[i,d]=m({queryString:n,groupId:a}),[b,f]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,s]=(0,u.Dv)(n);return[a,(0,t.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),x=(()=>{const e=i??b;return p({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{x&&c(x)}),[x]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=n(2303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(4848);function g(e){let{className:r,block:n,selectedValue:t,selectValue:o,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:i}=(0,s.a_)(),u=e=>{const r=e.currentTarget,n=c.indexOf(r),a=l[n].value;a!==t&&(i(r),o(a))},d=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;r=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;r=c[n]??c[c.length-1];break}}r?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},r),children:l.map((e=>{let{value:r,label:n,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>c.push(e),onKeyDown:d,onClick:u,...s,className:(0,a.A)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":t===r}),children:n??r},r)}))})}function j(e){let{lazy:r,children:n,selectedValue:s}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=o.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==s})))})}function y(e){const r=b(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",x.tabList),children:[(0,v.jsx)(g,{...r,...e}),(0,v.jsx)(j,{...r,...e})]})}function I(e){const r=(0,f.A)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(r))}},8453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>l});var t=n(6540);const a={},s=t.createContext(a);function o(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);