import{d as x,p as _,h as b,o as s,c as a,j as l,a2 as v,a3 as g,F as c,C as m,t as p,e as k,_ as N,G as w}from"./chunks/framework.D7c5mGHq.js";const E=JSON.parse('[{"text":"Vue相关","items":[{"text":"Vue3.0中文","link":"https://v3.cn.vuejs.org/","label":"前端","labelEN":"fe"},{"text":"vant-ui 4.0 中文","link":"https://youzan.github.io/vant/v4/#/zh-CN","label":"前端","labelEN":"fe"},{"text":"element plus 中文","link":"https://element-plus.gitee.io/zh-CN/component/button.html","label":"前端","labelEN":"fe"},{"text":"element ui 2.0 中文","link":"https://element.eleme.cn/#/zh-CN/component/installation","label":"前端","labelEN":"fe"}]},{"text":"埋点相关","items":[{"text":"Google analytic","link":"https://analytics.google.com/analytics/","label":"前端","labelEN":"fe"}]},{"text":"github相关","items":[{"text":"vuejs","link":"https://github.com/vuejs/","label":"前端","labelEN":"fe"},{"text":"element-plus","link":"https://github.com/element-plus/element-plus","label":"前端","labelEN":"fe"},{"text":"element 2x","link":"https://github.com/ElemeFE/element"}]},{"text":"其他","items":[{"text":"vitepress","link":"https://vitepress.dev/zh/guide/what-is-vitepress","label":"前端","labelEN":"fe"},{"text":"npmjs","link":"https://www.npmjs.com/","label":"前端","labelEN":"fe"},{"text":"sass文档","link":"https://sass.nodejs.cn/documentation","label":"前端","labelEN":"fe"}]}]'),y={id:"api-index"},j={class:"header"},C={class:"api-filter"},z=["id"],V={class:"api-groups"},G=["href"],F={key:0,class:"no-match"},L=x({__name:"index",setup(h){const o=_(""),u=n=>n.toLowerCase().replace(/-/g," "),d=b(()=>{const n=u(o.value),t=e=>u(e).includes(n);return E.map(e=>{if(t(e.text))return e;const i=e.items.map(r=>{if(t(r.text))return r}).filter(r=>r);return i.length?{text:e.text,items:i}:null}).filter(e=>e)});function f(n){return n.replace(/[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'<>,.?/]+/g,"-").replace(/-{2,}/g,"-").replace(/^-+|-+$/g,"").replace(/^(\d)/,"_$1").toLowerCase()}return typeof initGitalk<"u"&&setTimeout(function(){initGitalk("网站评论")},300),(n,t)=>(s(),a("div",y,[l("div",j,[t[2]||(t[2]=l("h1",null,"WWW List",-1)),l("div",C,[t[1]||(t[1]=l("label",{for:"api-filter"},"Filter",-1)),v(l("input",{type:"search",placeholder:"Enter keyword",id:"api-filter","onUpdate:modelValue":t[0]||(t[0]=e=>o.value=e)},null,512),[[g,o.value]])])]),(s(!0),a(c,null,m(d.value,e=>(s(),a("div",{key:e.text,class:"api-section"},[l("h2",{id:f(e.text)},p(e.text),9,z),l("div",V,[(s(!0),a(c,null,m(e.items,i=>(s(),a("div",{key:i.text,class:"api-group"},[l("ul",null,[l("li",null,[l("a",{href:i.link},p(i.text),9,G)])])]))),128))])]))),128)),d.value.length?k("",!0):(s(),a("div",F,' No book matching "'+p(o.value)+'" found. ',1)),t[3]||(t[3]=l("div",{id:"gitalk-container"},null,-1))]))}}),W=N(L,[["__scopeId","data-v-a951b4ee"]]),D=JSON.parse('{"title":"","description":"","frontmatter":{"page":true,"footer":false},"headers":[],"relativePath":"www-notes/index.md","filePath":"www-notes/index.md"}'),$={name:"www-notes/index.md"},O=Object.assign($,{setup(h){return(o,u)=>(s(),a("div",null,[w(W)]))}});export{D as __pageData,O as default};
