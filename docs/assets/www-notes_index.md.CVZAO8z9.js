import{d as x,p as w,h as k,o as s,c as n,j as l,a2 as f,a3 as g,F as u,C as d,t as c,e as _,_ as v,G as N}from"./chunks/framework.D7c5mGHq.js";const E=JSON.parse('[{"text":"Vue相关","items":[{"text":"Vue3.0中文","link":"https://v3.cn.vuejs.org/","label":"前端","labelEN":"fe"},{"text":"vant-ui 4.0 中文","link":"https://youzan.github.io/vant/v4/#/zh-CN","label":"前端","labelEN":"fe"},{"text":"element plus 中文","link":"https://element-plus.gitee.io/zh-CN/component/button.html","label":"前端","labelEN":"fe"},{"text":"element ui 2.0 中文","link":"https://element.eleme.cn/#/zh-CN/component/installation","label":"前端","labelEN":"fe"}]},{"text":"打包工具","items":[{"text":"rspack","link":"https://rspack.dev/zh"},{"text":"rolldown","link":"https://rolldown.rs/guide/"},{"text":"webpack","link":"https://www.webpackjs.com/guides/getting-started"},{"text":"vite","link":"https://vitejs.cn/"},{"text":"rollup","link":"https://www.rollupjs.com/"}]},{"text":"埋点相关","items":[{"text":"Google analytic","link":"https://analytics.google.com/analytics/","label":"前端","labelEN":"fe"}]},{"text":"github相关","items":[{"text":"vuejs","link":"https://github.com/vuejs/","label":"前端","labelEN":"fe"},{"text":"element-plus","link":"https://github.com/element-plus/element-plus","label":"前端","labelEN":"fe"},{"text":"element 2x","link":"https://github.com/ElemeFE/element"},{"text":"depcheck 检查依赖","link":"https://www.npmjs.com/package/depcheck"},{"text":"GSAP JavaScript 动画库","link":"https://github.com/greensock/GSAP"}]},{"text":"常用工具","items":[{"text":"webstorm 前端开发","link":"https://www.jetbrains.com.cn/webstorm/promo/?utm_source=baidu&utm_medium=cpc&utm_campaign=cn-bai-br-webstorm-ph-pc&utm_content=webstorm-pure&utm_term=webstorm","label":"工具","labelEN":"tools"},{"text":"SwitchHosts host管理","link":"https://note.youdao.com/s/YUlz2FuP","label":"工具","labelEN":"tools"},{"text":"beyond compare文件对比","link":"https://www.beyondcomparepro.com/download","label":"工具","labelEN":"tools"},{"text":"sourcetree git管理","link":"https://www.sourcetreeapp.com/","label":"工具","labelEN":"tools"},{"text":"postman 接口请求","link":"https://www.postman.com/","label":"工具","labelEN":"tools"},{"text":"tinify 图片压缩","link":"https://tinify.cn/","label":"工具","labelEN":"tools"},{"text":"微信开发者工具","link":"https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html","label":"工具","labelEN":"tools"},{"text":"xmind 思维导图","link":"https://xmind.cn/","label":"工具","labelEN":"tools"},{"text":"processon 在线流程图","link":"https://www.processon.com/","label":"工具","labelEN":"tools"}]},{"text":"其他","items":[{"text":"vitepress","link":"https://vitepress.dev/zh/guide/what-is-vitepress","label":"前端","labelEN":"fe"},{"text":"npmjs","link":"https://www.npmjs.com/","label":"前端","labelEN":"fe"},{"text":"sass文档","link":"https://sass.nodejs.cn/documentation","label":"前端","labelEN":"fe"},{"text":"域名公共后缀","link":"https://publicsuffix.org/list/","label":"前端","labelEN":"fe"},{"text":"","link":"https://element-plus.gitee.io/zh-CN/component/button.html","label":"前端","labelEN":"fe"},{"text":"p5.js 在线编程工具","link":"https://p5js.org/zh-Hans/"}]}]'),y={id:"api-index"},j={class:"header"},z={class:"api-filter"},C=["id"],G={class:"api-groups"},S=["href"],V={key:0,class:"no-match"},F=x({__name:"index",setup(h){const i=w(""),p=o=>o.toLowerCase().replace(/-/g," "),m=k(()=>{const o=p(i.value),e=t=>p(t).includes(o);return E.map(t=>{if(e(t.text))return t;const a=t.items.map(r=>{if(e(r.text))return r}).filter(r=>r);return a.length?{text:t.text,items:a}:null}).filter(t=>t)});function b(o){return o.replace(/[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'<>,.?/]+/g,"-").replace(/-{2,}/g,"-").replace(/^-+|-+$/g,"").replace(/^(\d)/,"_$1").toLowerCase()}return typeof initGitalk<"u"&&setTimeout(function(){initGitalk("网站评论")},300),(o,e)=>(s(),n("div",y,[l("div",j,[e[2]||(e[2]=l("h1",null,"WWW List",-1)),l("div",z,[e[1]||(e[1]=l("label",{for:"api-filter"},"Filter",-1)),f(l("input",{type:"search",placeholder:"Enter keyword",id:"api-filter","onUpdate:modelValue":e[0]||(e[0]=t=>i.value=t)},null,512),[[g,i.value]])])]),(s(!0),n(u,null,d(m.value,t=>(s(),n("div",{key:t.text,class:"api-section"},[l("h2",{id:b(t.text)},c(t.text),9,C),l("div",G,[(s(!0),n(u,null,d(t.items,a=>(s(),n("div",{key:a.text,class:"api-group"},[l("ul",null,[l("li",null,[l("a",{href:a.link},c(a.text),9,S)])])]))),128))])]))),128)),m.value.length?_("",!0):(s(),n("div",V,' No book matching "'+c(i.value)+'" found. ',1)),e[3]||(e[3]=l("div",{id:"gitalk-container"},null,-1))]))}}),P=v(F,[["__scopeId","data-v-a951b4ee"]]),W=JSON.parse('{"title":"","description":"","frontmatter":{"page":true,"footer":false},"headers":[],"relativePath":"www-notes/index.md","filePath":"www-notes/index.md"}'),q={name:"www-notes/index.md"},$=Object.assign(q,{setup(h){return(i,p)=>(s(),n("div",null,[N(P)]))}});export{W as __pageData,$ as default};
