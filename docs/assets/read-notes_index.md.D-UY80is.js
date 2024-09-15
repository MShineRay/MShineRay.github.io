import { d as defineComponent, r as ref, j as computed, o as openBlock, c as createElementBlock, a as createBaseVNode, N as withDirectives, Q as vModelText, F as Fragment, p as renderList, t as toDisplayString, f as createCommentVNode, _ as _export_sfc, q as createVNode } from "./chunks/framework.BDXM7Ixg.js";
const data = JSON.parse('[{"text":"读书","type":"/read-notes/weread/","items":[{"text":"平均分","link":"/read-notes/weread/pingjunfen"},{"text":"永久记录","link":"/read-notes/weread/yongjiujilu"},{"text":"人生如我","link":"/read-notes/weread/renshengyouwo"},{"text":"富兰克林自传","link":"/read-notes/weread/fulankelinzichuan"},{"text":"韭菜的自我修养","link":"/read-notes/weread/jiucaideziwoxiuyang"},{"text":"大型网站性能优化实战：从前端、网络、CDN到后端、大促的全链路性能优化详解","link":"/read-notes/weread/daxingwangzhanxingnengyouhuashizhan"},{"text":"保持饥渴：不断获取新知识，升级底层操作能力","link":"/read-notes/weread/baochijike"},{"text":"小狗钱钱2","link":"/read-notes/weread/xiaogouqianqian2"},{"text":"三十岁，一切刚刚开始","link":"/read-notes/weread/sanshisuiyiqieganggangkaishi"},{"text":"德米安：彷徨少年时","link":"/read-notes/weread/demianpanghuangshaonianshi"},{"text":"影响世界的中国植物","link":"/read-notes/weread/yingxiangshijiedezhongguozhiwu"},{"text":"闭环思维","link":"/read-notes/weread/bihuansiwei"},{"text":"我是怎么割韭菜的：一个骗子的悔过与自白","link":"/read-notes/weread/woshizenmogejiucaide"},{"text":"宋氏三姐妹","link":"/read-notes/weread/songshisanjiemei"},{"text":"好点子都是偷来的：史上最感性的60堂创新课","link":"/read-notes/weread/haodianzidushitoulaide"},{"text":"王永庆全传","link":"/read-notes/weread/wangyongqingquanchuan"},{"text":"Web全栈工程师的自我修养","link":"/read-notes/weread/Webquanzhangongchengshideziwoxiuyang"},{"text":"写给所有人的编程思维","link":"/read-notes/weread/xiegeisuoyourendebianchengsiwei"},{"text":"前端工程化：体系设计与实践","link":"/read-notes/weread/qianduangongchenghuatixishejiyushijian"},{"text":"代码精进之路：从码农到工匠","link":"/read-notes/weread/daimajingjinzhilucongmanongdaogongjiang"},{"text":"一往无前：小米十周年 雷军公开演讲全文","link":"/read-notes/weread/yiwangwuqianxiaomishizhounian"},{"text":"半小时漫画中国哲学史","link":"/read-notes/weread/banxiaoshimanhuazhongguozhexueshi"},{"text":"图说世界格局","link":"/read-notes/weread/tushuoshijiegeju"},{"text":"富人的逻辑：如何创造财富，如何保有财富","link":"/read-notes/weread/furendeluojiruhechuangzaocaifu"},{"text":"半小时漫画经济学系列（共4册）（独家定制版）","link":"/read-notes/weread/banxiaoshimanhuajingjixuexilie"},{"text":"我不要你死于一事无成：给女儿的17封告别信","link":"/read-notes/weread/wobuyaonisiyuyishiwuchenggeinverde17fenggaobiexin"},{"text":"扛住就是本事","link":"/read-notes/weread/kangzhujiushibenshi"},{"text":"GitHub入门与实践","link":"/read-notes/weread/githubrumenyushijian"},{"text":"断舍离","link":"/read-notes/weread/duansheli"},{"text":"富爸爸21世纪的生意","link":"/read-notes/weread/fubaba21shijideshengyi"},{"text":"智能主义：未来商业与社会的新生态","link":"/read-notes/weread/zhinengzhuyiweilaishangyeyushehuidexinshengtai"},{"text":"幸福了吗？","link":"/read-notes/weread/xingfulema"},{"text":"流血的股市","link":"/read-notes/weread/liuxiedegushi"},{"text":"智能化浪潮：正在爆发的第四次工业革命","link":"/read-notes/weread/zhinenghualangchaozhengzaibaofadedisicigongyegeming"},{"text":"让时间陪你慢慢变富","link":"/read-notes/weread/rangshijianpeinimanmanbianfu"},{"text":"输赢","link":"/read-notes/weread/shuying"},{"text":"谷歌的故事","link":"/read-notes/weread/gugedegushi"},{"text":"沃兹传：与苹果一起疯狂","link":"/read-notes/weread/wozichuanyupingguoyiqifengkuang"},{"text":"总裁的66条商业思维","link":"/read-notes/weread/zongcaide66tiaoshangyesiwei"},{"text":"Web测试囧事","link":"/read-notes/weread/Webceshijiongshi"},{"text":"UI设计精品必修课","link":"/read-notes/weread/UIshejijingpinbixiuke"}]},{"text":"知群","items":[{"text":"及时准确的传达需求","link":"/read-notes/zhiqun/jishizhunquedechuandaxuqiu"},{"text":"数据分析4步走","link":"/read-notes/zhiqun/shujufenxisibuzou"},{"text":"简历提升面试邀约率","link":"/read-notes/zhiqun/jianlitishengyaoyuelv"},{"text":"作品集","link":"/read-notes/zhiqun/zuopinji"}]}]');
const _hoisted_1 = { id: "api-index" };
const _hoisted_2 = { class: "header" };
const _hoisted_3 = { class: "api-filter" };
const _hoisted_4 = ["id"];
const _hoisted_5 = { class: "api-groups" };
const _hoisted_6 = ["href"];
const _hoisted_7 = {
  key: 0,
  class: "no-match"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ReadNotesIndex",
  setup(__props) {
    const query = ref("");
    const normalize = (s) => s.toLowerCase().replace(/-/g, " ");
    const filtered = computed(() => {
      const q = normalize(query.value);
      const matches = (text) => normalize(text).includes(q);
      return data.map((section) => {
        if (matches(section.text)) {
          return section;
        }
        const matchedGroups = section.items.map((item) => {
          if (matches(item.text)) {
            return item;
          }
        }).filter((i) => i);
        return matchedGroups.length ? { text: section.text, items: matchedGroups } : null;
      }).filter((i) => i);
    });
    function slugify(text) {
      return text.replace(/[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'<>,.?/]+/g, "-").replace(/-{2,}/g, "-").replace(/^-+|-+$/g, "").replace(/^(\d)/, "_$1").toLowerCase();
    }
    if (typeof initGitalk !== "undefined") {
      setTimeout(function() {
        initGitalk("读书笔记");
      }, 300);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _cache[2] || (_cache[2] = createBaseVNode("h1", null, "Book List", -1)),
          createBaseVNode("div", _hoisted_3, [
            _cache[1] || (_cache[1] = createBaseVNode("label", { for: "api-filter" }, "Filter", -1)),
            withDirectives(createBaseVNode("input", {
              type: "search",
              placeholder: "Enter keyword",
              id: "api-filter",
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => query.value = $event)
            }, null, 512), [
              [vModelText, query.value]
            ])
          ])
        ]),
        (openBlock(true), createElementBlock(Fragment, null, renderList(filtered.value, (section) => {
          return openBlock(), createElementBlock("div", {
            key: section.text,
            class: "api-section"
          }, [
            createBaseVNode("h2", {
              id: slugify(section.text)
            }, toDisplayString(section.text), 9, _hoisted_4),
            createBaseVNode("div", _hoisted_5, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(section.items, (item) => {
                return openBlock(), createElementBlock("div", {
                  key: item.text,
                  class: "api-group"
                }, [
                  createBaseVNode("a", {
                    href: item.link + ".html"
                  }, [
                    createBaseVNode("h3", null, toDisplayString(item.text), 1)
                  ], 8, _hoisted_6)
                ]);
              }), 128))
            ])
          ]);
        }), 128)),
        !filtered.value.length ? (openBlock(), createElementBlock("div", _hoisted_7, ' No book matching "' + toDisplayString(query.value) + '" found. ', 1)) : createCommentVNode("", true),
        _cache[3] || (_cache[3] = createBaseVNode("div", { id: "gitalk-container" }, null, -1))
      ]);
    };
  }
});
const ReadNotesIndex = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-429012bd"]]);
const __pageData = JSON.parse('{"title":"Read Notes","description":"","frontmatter":{"title":"Read Notes","page":true,"footer":false},"headers":[],"relativePath":"read-notes/index.md","filePath":"read-notes/index.md"}');
const __default__ = { name: "read-notes/index.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(ReadNotesIndex)
      ]);
    };
  }
});
export {
  __pageData,
  _sfc_main as default
};
