import{i as u,F as m,T as c,j as p,_ as d,r as f,o as _,U as b,f as v,a as y}from"./app-Cx1E3VEa.js";const h=u({__name:"TopNavBeautify",setup(i,{expose:o}){o();const t=()=>{const s=document.getElementsByClassName("theme-container");if(s.length<1)return null;const e=s[0],l=document.getElementsByClassName("vp-blog-hero");let n=null;l.length>0&&(n=l[0]),n?e.classList.add("byte-blog-hero"):e.classList.remove("byte-blog-hero");const a=document.documentElement.scrollTop;a<60?e.classList.add("byte-scroll-top"):e.classList.remove("byte-scroll-top"),n&&(a<n.clientHeight-30?e.classList.add("byte-scroll-blog-hero-inner"):e.classList.remove("byte-scroll-blog-hero-inner"))};m(()=>{c(()=>{t(),window.removeEventListener("scroll",()=>{}),window.addEventListener("scroll",()=>{t()})}),p().afterEach(()=>{c(()=>{setTimeout(()=>{t()},50)})})});const r={CheckScrollTopClass:t};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}});function g(i,o,t,r,s,e){const l=f("ClientOnly");return _(),b(l,null,{default:v(()=>o[0]||(o[0]=[y("div",{class:"none"},"导航栏美化",-1)])),_:1})}const C=d(h,[["render",g],["__file","TopNavBeautify.vue"]]);export{C as default};