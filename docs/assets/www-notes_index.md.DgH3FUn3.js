import{d as x,p as f,h as w,o as s,c as o,j as l,a2 as _,a3 as k,F as c,C as d,t as u,e as v,_ as g,G as N}from"./chunks/framework.D7c5mGHq.js";const E=JSON.parse('[{"text":"Vue相关","items":[{"text":"Vue3.0中文","link":"https://v3.cn.vuejs.org/","label":"前端","labelEN":"fe"},{"text":"vant-ui 4.0 中文","link":"https://youzan.github.io/vant/v4/#/zh-CN","label":"前端","labelEN":"fe"},{"text":"element plus 中文","link":"https://element-plus.gitee.io/zh-CN/component/button.html","label":"前端","labelEN":"fe"},{"text":"element ui 2.0 中文","link":"https://element.eleme.cn/#/zh-CN/component/installation","label":"前端","labelEN":"fe"}]},{"text":"埋点相关","items":[{"text":"Google analytic","link":"https://analytics.google.com/analytics/","label":"前端","labelEN":"fe"}]},{"text":"github相关","items":[{"text":"vuejs","link":"https://github.com/vuejs/","label":"前端","labelEN":"fe"},{"text":"element-plus","link":"https://github.com/element-plus/element-plus","label":"前端","labelEN":"fe"},{"text":"element 2x","link":"https://github.com/ElemeFE/element"}]},{"text":"常用工具","items":[{"text":"webstorm 前端开发","link":"https://www.jetbrains.com.cn/webstorm/promo/?utm_source=baidu&utm_medium=cpc&utm_campaign=cn-bai-br-webstorm-ph-pc&utm_content=webstorm-pure&utm_term=webstorm","label":"工具","labelEN":"tools"},{"text":"SwitchHosts host管理","link":"https://note.youdao.com/s/YUlz2FuP","label":"工具","labelEN":"tools"},{"text":"beyond compare文件对比","link":"https://www.beyondcomparepro.com/download","label":"工具","labelEN":"tools"},{"text":"sourcetree git管理","link":"https://www.sourcetreeapp.com/","label":"工具","labelEN":"tools"},{"text":"postman 接口请求","link":"https://www.postman.com/","label":"工具","labelEN":"tools"},{"text":"tinify 图片压缩","link":"https://tinify.cn/","label":"工具","labelEN":"tools"},{"text":"微信开发者工具","link":"https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html","label":"工具","labelEN":"tools"},{"text":"xmind 思维导图","link":"https://xmind.cn/","label":"工具","labelEN":"tools"},{"text":"processon 在线流程图","link":"https://www.processon.com/","label":"工具","labelEN":"tools"}]},{"text":"其他","items":[{"text":"vitepress","link":"https://vitepress.dev/zh/guide/what-is-vitepress","label":"前端","labelEN":"fe"},{"text":"npmjs","link":"https://www.npmjs.com/","label":"前端","labelEN":"fe"},{"text":"sass文档","link":"https://sass.nodejs.cn/documentation","label":"前端","labelEN":"fe"},{"text":"域名公共后缀","link":"https://publicsuffix.org/list/","label":"前端","labelEN":"fe"}]}]'),y={id:"api-index"},j={class:"header"},C={class:"api-filter"},z=["id"],V={class:"api-groups"},F=["href"],G={key:0,class:"no-match"},q=x({__name:"index",setup(b){const i=f(""),p=a=>a.toLowerCase().replace(/-/g," "),m=w(()=>{const a=p(i.value),t=e=>p(e).includes(a);return E.map(e=>{if(t(e.text))return e;const n=e.items.map(r=>{if(t(r.text))return r}).filter(r=>r);return n.length?{text:e.text,items:n}:null}).filter(e=>e)});function h(a){return a.replace(/[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'<>,.?/]+/g,"-").replace(/-{2,}/g,"-").replace(/^-+|-+$/g,"").replace(/^(\d)/,"_$1").toLowerCase()}return typeof initGitalk<"u"&&setTimeout(function(){initGitalk("网站评论")},300),(a,t)=>(s(),o("div",y,[l("div",j,[t[2]||(t[2]=l("h1",null,"WWW List",-1)),l("div",C,[t[1]||(t[1]=l("label",{for:"api-filter"},"Filter",-1)),_(l("input",{type:"search",placeholder:"Enter keyword",id:"api-filter","onUpdate:modelValue":t[0]||(t[0]=e=>i.value=e)},null,512),[[k,i.value]])])]),(s(!0),o(c,null,d(m.value,e=>(s(),o("div",{key:e.text,class:"api-section"},[l("h2",{id:h(e.text)},u(e.text),9,z),l("div",V,[(s(!0),o(c,null,d(e.items,n=>(s(),o("div",{key:n.text,class:"api-group"},[l("ul",null,[l("li",null,[l("a",{href:n.link},u(n.text),9,F)])])]))),128))])]))),128)),m.value.length?v("",!0):(s(),o("div",G,' No book matching "'+u(i.value)+'" found. ',1)),t[3]||(t[3]=l("div",{id:"gitalk-container"},null,-1))]))}}),L=g(q,[["__scopeId","data-v-a951b4ee"]]),$=JSON.parse('{"title":"","description":"","frontmatter":{"page":true,"footer":false},"headers":[],"relativePath":"www-notes/index.md","filePath":"www-notes/index.md"}'),S={name:"www-notes/index.md"},B=Object.assign(S,{setup(b){return(i,p)=>(s(),o("div",null,[N(L)]))}});export{$ as __pageData,B as default};
