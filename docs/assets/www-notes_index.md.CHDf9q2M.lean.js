import{d as f,p as x,h as g,o as t,c as l,F as d,C as m,t as c,e as b,j as s,_ as v,G as k}from"./chunks/framework.2QKbOPFn.js";const N=JSON.parse('[{"text":"Vue相关","items":[{"text":"Vue3.0中文","link":"https://v3.cn.vuejs.org/","label":"前端","labelEN":"fe"},{"text":"vant-ui 4.0 中文","link":"https://youzan.github.io/vant/v4/#/zh-CN","label":"前端","labelEN":"fe"},{"text":"element plus 中文","link":"https://element-plus.gitee.io/zh-CN/component/button.html","label":"前端","labelEN":"fe"},{"text":"element ui 2.0 中文","link":"https://element.eleme.cn/#/zh-CN/component/installation","label":"前端","labelEN":"fe"}]},{"text":"埋点相关","items":[{"text":"Google analytic","link":"https://analytics.google.com/analytics/","label":"前端","labelEN":"fe"}]},{"text":"github相关","items":[{"text":"vuejs","link":"https://github.com/vuejs/","label":"前端","labelEN":"fe"},{"text":"element-plus","link":"https://github.com/element-plus/element-plus","label":"前端","labelEN":"fe"},{"text":"element 2x","link":"https://github.com/ElemeFE/element"}]}]'),w={id:"api-index"},y=["id"],E={class:"api-groups"},C=["href"],j={key:0,class:"no-match"},z=f({__name:"index",setup(h){const r=x(""),u=n=>n.toLowerCase().replace(/-/g," "),p=g(()=>{const n=u(r.value),i=e=>u(e).includes(n);return N.map(e=>{if(i(e.text))return e;const a=e.items.map(o=>{if(i(o.text))return o}).filter(o=>o);return a.length?{text:e.text,items:a}:null}).filter(e=>e)});function _(n){return n.replace(/[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'<>,.?/]+/g,"-").replace(/-{2,}/g,"-").replace(/^-+|-+$/g,"").replace(/^(\d)/,"_$1").toLowerCase()}return typeof initGitalk<"u"&&setTimeout(function(){initGitalk("网站评论")},300),(n,i)=>(t(),l("div",w,[(t(!0),l(d,null,m(p.value,e=>(t(),l("div",{key:e.text,class:"api-section"},[s("h2",{id:_(e.text)},c(e.text),9,y),s("div",E,[(t(!0),l(d,null,m(e.items,a=>(t(),l("div",{key:a.text,class:"api-group"},[s("ul",null,[s("li",null,[s("a",{href:a.link},c(a.text),9,C)])])]))),128))])]))),128)),p.value.length?b("",!0):(t(),l("div",j,' No book matching "'+c(r.value)+'" found. ',1)),i[0]||(i[0]=s("div",{id:"gitalk-container"},null,-1))]))}}),G=v(z,[["__scopeId","data-v-8adf7d07"]]),B=JSON.parse('{"title":"","description":"","frontmatter":{"page":true,"footer":false},"headers":[],"relativePath":"www-notes/index.md","filePath":"www-notes/index.md"}'),V={name:"www-notes/index.md"},F=Object.assign(V,{setup(h){return(r,u)=>(t(),l("div",null,[k(G)]))}});export{B as __pageData,F as default};
