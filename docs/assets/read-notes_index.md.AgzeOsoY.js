import{d as c,p,h as f,o as i,c as a,j as t,a2 as m,a3 as y,F as g,C as x,t as l,e as _,_ as j,G as z}from"./chunks/framework.D7c5mGHq.js";const b=JSON.parse('[{"text":"读书","type":"/read-notes/weread/","items":[{"text":"平均分","link":"/read-notes/weread/pingjunfen"},{"text":"永久记录","link":"/read-notes/weread/yongjiujilu"},{"text":"人生如我","link":"/read-notes/weread/renshengyouwo"},{"text":"富兰克林自传","link":"/read-notes/weread/fulankelinzichuan"},{"text":"韭菜的自我修养","link":"/read-notes/weread/jiucaideziwoxiuyang"},{"text":"大型网站性能优化实战：从前端、网络、CDN到后端、大促的全链路性能优化详解","link":"/read-notes/weread/daxingwangzhanxingnengyouhuashizhan"},{"text":"保持饥渴：不断获取新知识，升级底层操作能力","link":"/read-notes/weread/baochijike"},{"text":"小狗钱钱2","link":"/read-notes/weread/xiaogouqianqian2"},{"text":"三十岁，一切刚刚开始","link":"/read-notes/weread/sanshisuiyiqieganggangkaishi"},{"text":"德米安：彷徨少年时","link":"/read-notes/weread/demianpanghuangshaonianshi"},{"text":"影响世界的中国植物","link":"/read-notes/weread/yingxiangshijiedezhongguozhiwu"},{"text":"闭环思维","link":"/read-notes/weread/bihuansiwei"},{"text":"我是怎么割韭菜的：一个骗子的悔过与自白","link":"/read-notes/weread/woshizenmogejiucaide"},{"text":"宋氏三姐妹","link":"/read-notes/weread/songshisanjiemei"},{"text":"好点子都是偷来的：史上最感性的60堂创新课","link":"/read-notes/weread/haodianzidushitoulaide"},{"text":"王永庆全传","link":"/read-notes/weread/wangyongqingquanchuan"},{"text":"Web全栈工程师的自我修养","link":"/read-notes/weread/Webquanzhangongchengshideziwoxiuyang"},{"text":"写给所有人的编程思维","link":"/read-notes/weread/xiegeisuoyourendebianchengsiwei"},{"text":"前端工程化：体系设计与实践","link":"/read-notes/weread/qianduangongchenghuatixishejiyushijian"},{"text":"代码精进之路：从码农到工匠","link":"/read-notes/weread/daimajingjinzhilucongmanongdaogongjiang"},{"text":"一往无前：小米十周年 雷军公开演讲全文","link":"/read-notes/weread/yiwangwuqianxiaomishizhounian"},{"text":"半小时漫画中国哲学史","link":"/read-notes/weread/banxiaoshimanhuazhongguozhexueshi"},{"text":"图说世界格局","link":"/read-notes/weread/tushuoshijiegeju"},{"text":"富人的逻辑：如何创造财富，如何保有财富","link":"/read-notes/weread/furendeluojiruhechuangzaocaifu"},{"text":"半小时漫画经济学系列（共4册）（独家定制版）","link":"/read-notes/weread/banxiaoshimanhuajingjixuexilie"},{"text":"我不要你死于一事无成：给女儿的17封告别信","link":"/read-notes/weread/wobuyaonisiyuyishiwuchenggeinverde17fenggaobiexin"},{"text":"扛住就是本事","link":"/read-notes/weread/kangzhujiushibenshi"},{"text":"GitHub入门与实践","link":"/read-notes/weread/githubrumenyushijian"},{"text":"断舍离","link":"/read-notes/weread/duansheli"},{"text":"富爸爸21世纪的生意","link":"/read-notes/weread/fubaba21shijideshengyi"},{"text":"智能主义：未来商业与社会的新生态","link":"/read-notes/weread/zhinengzhuyiweilaishangyeyushehuidexinshengtai"},{"text":"幸福了吗？","link":"/read-notes/weread/xingfulema"},{"text":"流血的股市","link":"/read-notes/weread/liuxiedegushi"},{"text":"智能化浪潮：正在爆发的第四次工业革命","link":"/read-notes/weread/zhinenghualangchaozhengzaibaofadedisicigongyegeming"},{"text":"让时间陪你慢慢变富","link":"/read-notes/weread/rangshijianpeinimanmanbianfu"},{"text":"输赢","link":"/read-notes/weread/shuying"},{"text":"谷歌的故事","link":"/read-notes/weread/gugedegushi"},{"text":"沃兹传：与苹果一起疯狂","link":"/read-notes/weread/wozichuanyupingguoyiqifengkuang"},{"text":"总裁的66条商业思维","link":"/read-notes/weread/zongcaide66tiaoshangyesiwei"},{"text":"Web测试囧事","link":"/read-notes/weread/Webceshijiongshi"},{"text":"UI设计精品必修课","link":"/read-notes/weread/UIshejijingpinbixiuke"}]},{"text":"知群","items":[{"text":"及时准确的传达需求","link":"/read-notes/zhiqun/jishizhunquedechuandaxuqiu"},{"text":"数据分析4步走","link":"/read-notes/zhiqun/shujufenxisibuzou"},{"text":"简历提升面试邀约率","link":"/read-notes/zhiqun/jianlitishengyaoyuelv"},{"text":"作品集","link":"/read-notes/zhiqun/zuopinji"}]}]'),v={id:"api-index"},q={class:"header"},N={class:"api-filter"},C=["id"],G={class:"api-groups"},I=["href"],B={key:0,class:"no-match"},D=c({__name:"ReadNotesIndex",setup(k){const r=p(""),u=s=>s.toLowerCase().replace(/-/g," "),h=f(()=>{const s=u(r.value),n=e=>u(e).includes(s);return b.map(e=>{if(n(e.text))return e;const d=e.items.map(o=>{if(n(o.text))return o}).filter(o=>o);return d.length?{text:e.text,items:d}:null}).filter(e=>e)});function w(s){return s.replace(/[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'<>,.?/]+/g,"-").replace(/-{2,}/g,"-").replace(/^-+|-+$/g,"").replace(/^(\d)/,"_$1").toLowerCase()}return typeof initGitalk<"u"&&setTimeout(function(){initGitalk("读书笔记")},300),(s,n)=>(i(),a("div",v,[t("div",q,[n[2]||(n[2]=t("h1",null,"Book List",-1)),t("div",N,[n[1]||(n[1]=t("label",{for:"api-filter"},"Filter",-1)),m(t("input",{type:"search",placeholder:"Enter keyword",id:"api-filter","onUpdate:modelValue":n[0]||(n[0]=e=>r.value=e)},null,512),[[y,r.value]])])]),(i(!0),a(g,null,x(h.value,e=>(i(),a("div",{key:e.text,class:"api-section"},[t("h2",{id:w(e.text)},l(e.text),9,C),t("div",G,[(i(!0),a(g,null,x(e.items,d=>(i(),a("div",{key:d.text,class:"api-group"},[t("a",{href:d.link+".html"},[t("h3",null,l(d.text),1)],8,I)]))),128))])]))),128)),h.value.length?_("",!0):(i(),a("div",B,' No book matching "'+l(r.value)+'" found. ',1)),n[3]||(n[3]=t("div",{id:"gitalk-container"},null,-1))]))}}),L=j(D,[["__scopeId","data-v-429012bd"]]),W=JSON.parse('{"title":"Read Notes","description":"","frontmatter":{"title":"Read Notes","page":true,"footer":false},"headers":[],"relativePath":"read-notes/index.md","filePath":"read-notes/index.md"}'),R={name:"read-notes/index.md"},$=Object.assign(R,{setup(k){return(r,u)=>(i(),a("div",null,[z(L)]))}});export{W as __pageData,$ as default};
