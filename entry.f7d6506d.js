import{h as o,m as c,y as d}from"./chunks/chunk.42e04898.js";import{e as t}from"./chunks/chunk.d5883151.js";import{d as h}from"./chunks/chunk.a453a8c7.js";const p=({headers:n=[]})=>{const s=o([]),[i,a]=c(void 0);return d(()=>{const e=()=>{const l=document.querySelectorAll("article :is(h1, h2, h3, h4)");s.current=Array.from(l).map(r=>({id:r.id,topOffset:r.getBoundingClientRect().top+window.scrollY}))};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),t(h,{children:[t("h2",{class:"heading",children:"On this page"}),t("ul",{children:[t("li",{class:`header-link depth-2 ${i==="overview"?"active":""}`.trim(),children:t("a",{href:"#overview",children:"Overview"})}),n.filter(({depth:e})=>e>1&&e<4).map(e=>t("li",{class:`header-link depth-${e.depth} ${i===e.slug?"active":""}`.trim(),children:t("a",{href:`#${e.slug}`,children:e.text})}))]})]})};export{p as default};
