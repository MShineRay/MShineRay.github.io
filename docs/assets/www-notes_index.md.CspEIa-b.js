import{d as w,p as k,h as f,o as n,c as o,j as l,a2 as g,a3 as _,F as d,C as m,t as r,e as h,_ as v,G as N}from"./chunks/framework.D7c5mGHq.js";const y=JSON.parse('[{"text":"Vue相关","items":[{"text":"Vue3.0中文","link":"https://v3.cn.vuejs.org/","label":"前端","labelEN":"fe"},{"text":"vant-ui 4.0 中文","link":"https://youzan.github.io/vant/v4/#/zh-CN","label":"前端","labelEN":"fe"},{"text":"element plus 中文","link":"https://element-plus.gitee.io/zh-CN/component/button.html","label":"前端","labelEN":"fe"},{"text":"element ui 2.0 中文","link":"https://element.eleme.cn/#/zh-CN/component/installation","label":"前端","labelEN":"fe"}]},{"text":"打包工具","items":[{"text":"rspack","link":"https://rspack.dev/zh"},{"text":"rolldown","link":"https://rolldown.rs/guide/"},{"text":"webpack","link":"https://www.webpackjs.com/guides/getting-started"},{"text":"vite","link":"https://vitejs.cn/"},{"text":"rollup","link":"https://www.rollupjs.com/"}]},{"text":"埋点相关","items":[{"text":"Google analytic","link":"https://analytics.google.com/analytics/","label":"前端","labelEN":"fe"}]},{"text":"github相关","items":[{"text":"vuejs","link":"https://github.com/vuejs/","label":"前端","labelEN":"fe"},{"text":"element-plus","link":"https://github.com/element-plus/element-plus","label":"前端","labelEN":"fe"},{"text":"element 2x","link":"https://github.com/ElemeFE/element"},{"text":"depcheck 检查依赖","link":"https://www.npmjs.com/package/depcheck"},{"text":"GSAP","desc":"JavaScript 动画库","link":"https://github.com/greensock/GSAP"}]},{"text":"常用工具","items":[{"text":"webstorm 前端开发","link":"https://www.jetbrains.com.cn/webstorm/promo/?utm_source=baidu&utm_medium=cpc&utm_campaign=cn-bai-br-webstorm-ph-pc&utm_content=webstorm-pure&utm_term=webstorm","label":"工具","labelEN":"tools"},{"text":"SwitchHosts host管理","link":"https://note.youdao.com/s/YUlz2FuP","label":"工具","labelEN":"tools"},{"text":"beyond compare文件对比","link":"https://www.beyondcomparepro.com/download","label":"工具","labelEN":"tools"},{"text":"sourcetree git管理","link":"https://www.sourcetreeapp.com/","label":"工具","labelEN":"tools"},{"text":"postman 接口请求","link":"https://www.postman.com/","label":"工具","labelEN":"tools"},{"text":"tinify 图片压缩","link":"https://tinify.cn/","label":"工具","labelEN":"tools"},{"text":"微信开发者工具","link":"https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html","label":"工具","labelEN":"tools"},{"text":"xmind 思维导图","link":"https://xmind.cn/","label":"工具","labelEN":"tools"},{"text":"processon 在线流程图","link":"https://www.processon.com/","label":"工具","labelEN":"tools"}]},{"text":"建站","items":[{"text":"wordpress","link":"https://wordpress.org/"},{"text":"Shopify","link":"https://www.shopify.com/"},{"text":"wix","link":"https://www.wix.com"},{"text":"Strikingly","link":"https://cn.strikingly.com/"},{"text":"又快又好自助建站","link":"https://www.ykyh.com/"}]},{"text":"其他","items":[{"text":"vitepress","link":"https://vitepress.dev/zh/guide/what-is-vitepress","label":"前端","labelEN":"fe"},{"text":"npmjs","link":"https://www.npmjs.com/","label":"前端","labelEN":"fe"},{"text":"sass文档","link":"https://sass.nodejs.cn/documentation","label":"前端","labelEN":"fe"},{"text":"域名公共后缀","link":"https://publicsuffix.org/list/","label":"前端","labelEN":"fe"},{"text":"vite-plugin-inspect","link":"https://github.com/antfu-collective/vite-plugin-inspect","desc":"检查 Vite 插件的中间状态。 可用于调试和编写插件"},{"text":"p5.js 在线编程工具","link":"https://p5js.org/zh-Hans/"},{"text":"mitt (event bus)","link":"https://www.npmjs.com/package/mitt","desc":"Tiny (~200b) functional event emitter / pubsub."}]}]'),E={id:"api-index"},j={class:"header"},z={class:"api-filter"},S=["id"],C={class:"api-groups"},G={key:0},V=["href"],F={key:0},P={key:1},q={key:0,class:"no-match"},L=w({__name:"index",setup(x){const a=k(""),c=i=>i.toLowerCase().replace(/-/g," "),u=f(()=>{const i=c(a.value),e=t=>c(t).includes(i);return y.map(t=>{if(e(t.text))return t;const s=t.items.map(p=>{if(e(p.text)||e(p.desc||""))return p}).filter(p=>p);return s.length?{text:t.text,items:s}:null}).filter(t=>t)});function b(i){return i.replace(/[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'<>,.?/]+/g,"-").replace(/-{2,}/g,"-").replace(/^-+|-+$/g,"").replace(/^(\d)/,"_$1").toLowerCase()}return typeof initGitalk<"u"&&setTimeout(function(){initGitalk("网站评论")},300),(i,e)=>(n(),o("div",E,[l("div",j,[e[2]||(e[2]=l("h1",null,"WWW List",-1)),l("div",z,[e[1]||(e[1]=l("label",{for:"api-filter"},"Filter",-1)),g(l("input",{type:"search",placeholder:"Enter keyword",id:"api-filter","onUpdate:modelValue":e[0]||(e[0]=t=>a.value=t)},null,512),[[_,a.value]])])]),(n(!0),o(d,null,m(u.value,t=>(n(),o("div",{key:t.text,class:"api-section"},[l("h2",{id:b(t.text)},r(t.text),9,S),l("div",C,[(n(!0),o(d,null,m(t.items,s=>(n(),o("div",{key:s.text,class:"api-group"},[l("ul",null,[l("li",null,[s.desc?(n(),o("h3",G,r(s.text),1)):h("",!0),l("a",{href:s.link},[s.desc?(n(),o("span",F,r(s.desc),1)):(n(),o("span",P,r(s.text),1))],8,V)])])]))),128))])]))),128)),u.value.length?h("",!0):(n(),o("div",q,' No book matching "'+r(a.value)+'" found. ',1)),e[3]||(e[3]=l("div",{id:"gitalk-container"},null,-1))]))}}),W=v(L,[["__scopeId","data-v-25f8ac5b"]]),D=JSON.parse('{"title":"","description":"","frontmatter":{"page":true,"footer":false},"headers":[],"relativePath":"www-notes/index.md","filePath":"www-notes/index.md"}'),$={name:"www-notes/index.md"},J=Object.assign($,{setup(x){return(a,c)=>(n(),o("div",null,[N(W)]))}});export{D as __pageData,J as default};
