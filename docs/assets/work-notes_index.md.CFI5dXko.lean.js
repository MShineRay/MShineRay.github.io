import{d as h,p as x,h as v,o as a,c as r,j as s,a2 as k,a3 as g,F as c,C as _,t as u,e as y,_ as N,G as w}from"./chunks/framework.D7c5mGHq.js";const C=JSON.parse("[]"),G={id:"api-index"},L={class:"header"},V={class:"api-filter"},W=["id"],$={class:"api-groups"},b=["href"],B={key:0,class:"no-match"},D=h({__name:"index",setup(f){const i=x(""),d=o=>o.toLowerCase().replace(/-/g," "),p=v(()=>{const o=d(i.value),t=e=>d(e).includes(o);return C.map(e=>{if(t(e.text))return e;const n=e.items.map(l=>{if(t(l.text))return l}).filter(l=>l);return n.length?{text:e.text,items:n}:null}).filter(e=>e)});function m(o){return o.replace(/[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'<>,.?/]+/g,"-").replace(/-{2,}/g,"-").replace(/^-+|-+$/g,"").replace(/^(\d)/,"_$1").toLowerCase()}return typeof initGitalk<"u"&&setTimeout(function(){initGitalk("工作笔记")},1e3),(o,t)=>(a(),r("div",G,[s("div",L,[t[2]||(t[2]=s("h1",null,"Work List",-1)),s("div",V,[t[1]||(t[1]=s("label",{for:"api-filter"},"Filter",-1)),k(s("input",{type:"search",placeholder:"Enter keyword",id:"api-filter","onUpdate:modelValue":t[0]||(t[0]=e=>i.value=e)},null,512),[[g,i.value]])])]),(a(!0),r(c,null,_(p.value,e=>(a(),r("div",{key:e.text,class:"api-section"},[s("h2",{id:m(e.text)},u(e.text),9,W),s("div",$,[(a(!0),r(c,null,_(e.items,n=>(a(),r("div",{key:n.text,class:"api-group"},[s("a",{href:n.link+".html"},[s("h3",null,u(n.text),1)],8,b)]))),128))])]))),128)),p.value.length?y("",!0):(a(),r("div",B,' No book matching "'+u(i.value)+'" found. ',1)),t[3]||(t[3]=s("div",{id:"gitalk-container"},null,-1))]))}}),F=N(D,[["__scopeId","data-v-61040df1"]]),j=JSON.parse('{"title":"Work Notes","description":"","frontmatter":{"title":"Work Notes","page":true,"footer":false},"headers":[],"relativePath":"work-notes/index.md","filePath":"work-notes/index.md"}'),O={name:"work-notes/index.md"},q=Object.assign(O,{setup(f){return(i,d)=>(a(),r("div",null,[w(F)]))}});export{j as __pageData,q as default};