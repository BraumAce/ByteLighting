import{u as _,f as te,g as ae,h as U,i as se,P as le,t as re,j as ie,k as F,l as R,m as ue,w as Y,n as a,p as oe,R as P,q as ne,s as ce,v as ve,C as he,x as de,y as pe,z as me,A as ye,B as Ee,D as C,E as ge,F as Ae,G as fe,H as T,I as $,J as Be}from"./app-Ce7c51kH.js";const He=["/","/intro.html","/algorithm/for-offer/offer.html","/algorithm/ACM/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92.html","/algorithm/ACM/%E5%9F%BA%E7%A1%80%E7%AE%97%E6%B3%95.html","/algorithm/ACM/%E6%90%9C%E7%B4%A2%E4%B8%8E%E5%9B%BE%E8%AE%BA.html","/algorithm/ACM/%E6%95%B0%E5%AD%A6%E7%9F%A5%E8%AF%86.html","/algorithm/ACM/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84.html","/algorithm/ACM/%E8%B4%AA%E5%BF%83.html","/middleware/MinIO/SpringBoot%E6%95%B4%E5%90%88MinIO.html","/middleware/MinIO/%E5%AE%89%E8%A3%85%E4%B8%8E%E9%83%A8%E7%BD%B2.html","/middleware/MinIO/%E6%A6%82%E8%BF%B0.html","/404.html","/algorithm/for-offer/","/algorithm/","/algorithm/ACM/","/middleware/MinIO/","/middleware/","/category/","/category/algorithm/","/category/%E4%B8%AD%E9%97%B4%E4%BB%B6/","/tag/","/tag/acm/","/tag/minio/","/article/","/star/","/timeline/"],we="SEARCH_PRO_QUERY_HISTORY",E=_(we,[]),Re=()=>{const{queryHistoryCount:s}=C,l=s>0;return{enabled:l,queryHistory:E,addQueryHistory:r=>{l&&(E.value=Array.from(new Set([r,...E.value.slice(0,s-1)])))},removeQueryHistory:r=>{E.value=[...E.value.slice(0,r),...E.value.slice(r+1)]}}},O=s=>He[s.id]+("anchor"in s?`#${s.anchor}`:""),Ce="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:j}=C,g=_(Ce,[]),ke=()=>{const s=j>0;return{enabled:s,resultHistory:g,addResultHistory:l=>{if(s){const r={link:O(l),display:l.display};"header"in l&&(r.header=l.header),g.value=[r,...g.value.slice(0,j-1)]}},removeResultHistory:l=>{g.value=[...g.value.slice(0,l),...g.value.slice(l+1)]}}},Qe=s=>{const l=he(),r=U(),k=de(),u=F(0),B=R(()=>u.value>0),p=pe([]);return me(()=>{const{search:m,terminate:Q}=ye(),A=Ee(c=>{const f=c.join(" "),{searchFilter:q=d=>d,splitWord:x,suggestionsFilter:I,...y}=l.value;f?(u.value+=1,m(c.join(" "),r.value,y).then(d=>q(d,f,r.value,k.value)).then(d=>{u.value-=1,p.value=d}).catch(d=>{console.warn(d),u.value-=1,u.value||(p.value=[])})):p.value=[]},C.searchDelay-C.suggestDelay);Y([s,r],([c])=>A(c),{immediate:!0}),ge(()=>{Q()})}),{isSearching:B,results:p}};var xe=te({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(s,{emit:l}){const r=ae(),k=U(),u=se(le),{enabled:B,addQueryHistory:p,queryHistory:m,removeQueryHistory:Q}=Re(),{enabled:A,resultHistory:c,addResultHistory:f,removeResultHistory:q}=ke(),x=B||A,I=re(s,"queries"),{results:y,isSearching:d}=Qe(I),i=ie({isQuery:!0,index:0}),v=F(0),h=F(0),L=R(()=>x&&(m.value.length>0||c.value.length>0)),D=R(()=>y.value.length>0),M=R(()=>y.value[v.value]||null),z=()=>{const{isQuery:e,index:t}=i;t===0?(i.isQuery=!e,i.index=e?c.value.length-1:m.value.length-1):i.index=t-1},G=()=>{const{isQuery:e,index:t}=i;t===(e?m.value.length-1:c.value.length-1)?(i.isQuery=!e,i.index=0):i.index=t+1},J=()=>{v.value=v.value>0?v.value-1:y.value.length-1,h.value=M.value.contents.length-1},V=()=>{v.value=v.value<y.value.length-1?v.value+1:0,h.value=0},K=()=>{h.value<M.value.contents.length-1?h.value+=1:V()},N=()=>{h.value>0?h.value-=1:J()},S=e=>e.map(t=>Be(t)?t:a(t[0],t[1])),W=e=>{if(e.type==="customField"){const t=Ae[e.index]||"$content",[o,w=""]=fe(t)?t[k.value].split("$content"):t.split("$content");return e.display.map(n=>a("div",S([o,...n,w])))}return e.display.map(t=>a("div",S(t)))},H=()=>{v.value=0,h.value=0,l("updateQuery",""),l("close")},X=()=>B?a("ul",{class:"search-pro-result-list"},a("li",{class:"search-pro-result-list-item"},[a("div",{class:"search-pro-result-title"},u.value.queryHistory),m.value.map((e,t)=>a("div",{class:["search-pro-result-item",{active:i.isQuery&&i.index===t}],onClick:()=>{l("updateQuery",e)}},[a(T,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},e),a("button",{class:"search-pro-remove-icon",innerHTML:$,onClick:o=>{o.preventDefault(),o.stopPropagation(),Q(t)}})]))])):null,Z=()=>A?a("ul",{class:"search-pro-result-list"},a("li",{class:"search-pro-result-list-item"},[a("div",{class:"search-pro-result-title"},u.value.resultHistory),c.value.map((e,t)=>a(P,{to:e.link,class:["search-pro-result-item",{active:!i.isQuery&&i.index===t}],onClick:()=>{H()}},()=>[a(T,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[e.header?a("div",{class:"content-header"},e.header):null,a("div",e.display.map(o=>S(o)).flat())]),a("button",{class:"search-pro-remove-icon",innerHTML:$,onClick:o=>{o.preventDefault(),o.stopPropagation(),q(t)}})]))])):null;return ue("keydown",e=>{if(s.isFocusing){if(D.value){if(e.key==="ArrowUp")N();else if(e.key==="ArrowDown")K();else if(e.key==="Enter"){const t=M.value.contents[h.value];p(s.queries.join(" ")),f(t),r.push(O(t)),H()}}else if(A){if(e.key==="ArrowUp")z();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const{index:t}=i;i.isQuery?(l("updateQuery",m.value[t]),e.preventDefault()):(r.push(c.value[t].link),H())}}}}),Y([v,h],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>a("div",{class:["search-pro-result-wrapper",{empty:s.queries.length?!D.value:!L.value}],id:"search-pro-results"},s.queries.length?d.value?a(oe,{hint:u.value.searching}):D.value?a("ul",{class:"search-pro-result-list"},y.value.map(({title:e,contents:t},o)=>{const w=v.value===o;return a("li",{class:["search-pro-result-list-item",{active:w}]},[a("div",{class:"search-pro-result-title"},e||u.value.defaultTitle),t.map((n,ee)=>{const b=w&&h.value===ee;return a(P,{to:O(n),class:["search-pro-result-item",{active:b,"aria-selected":b}],onClick:()=>{p(s.queries.join(" ")),f(n),H()}},()=>[n.type==="text"?null:a(n.type==="title"?ne:n.type==="heading"?ce:ve,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[n.type==="text"&&n.header?a("div",{class:"content-header"},n.header):null,a("div",W(n))])])})])})):u.value.emptyResult:x?L.value?[X(),Z()]:u.value.emptyHistory:u.value.emptyResult)}});export{xe as default};
