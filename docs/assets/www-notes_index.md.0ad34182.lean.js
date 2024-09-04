import { a as vModelText } from "./framework.58df9776.js";
import { f as defineComponent, k as ref, c as computed, o as openBlock, b as createElementBlock, d as createBaseVNode, M as withDirectives, F as Fragment, y as renderList, x as toDisplayString, j as createCommentVNode, _ as _export_sfc, z as createVNode } from "./plugin-vue_export-helper.e5a60c03.js";
const data = JSON.parse('[{"text":"Vue\u76F8\u5173","items":[{"text":"Vue3.0\u4E2D\u6587","link":"https://v3.cn.vuejs.org/","label":"\u524D\u7AEF","labelEN":"fe"},{"text":"vant-ui 4.0 \u4E2D\u6587","link":"https://youzan.github.io/vant/v4/#/zh-CN","label":"\u524D\u7AEF","labelEN":"fe"},{"text":"element plus \u4E2D\u6587","link":"https://element-plus.gitee.io/zh-CN/component/button.html","label":"\u524D\u7AEF","labelEN":"fe"},{"text":"element ui 2.0 \u4E2D\u6587","link":"https://element.eleme.cn/#/zh-CN/component/installation","label":"\u524D\u7AEF","labelEN":"fe"}]},{"text":"\u57CB\u70B9\u76F8\u5173","items":[{"text":"Google analytic","link":"https://analytics.google.com/analytics/","label":"\u524D\u7AEF","labelEN":"fe"}]},{"text":"github\u76F8\u5173","items":[{"text":"vuejs","link":"https://github.com/vuejs/","label":"\u524D\u7AEF","labelEN":"fe"},{"text":"element-plus","link":"https://github.com/element-plus/element-plus","label":"\u524D\u7AEF","labelEN":"fe"},{"text":"element 2x","link":"https://github.com/ElemeFE/element"}]}]');
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
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
const _sfc_main$1 = defineComponent({
  __name: "index",
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
        initGitalk("\u7F51\u7AD9\u8BC4\u8BBA");
      }, 300);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _cache[2] || (_cache[2] = createBaseVNode("h1", null, "WWW List", -1)),
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
                  createBaseVNode("ul", null, [
                    createBaseVNode("li", null, [
                      createBaseVNode("a", {
                        href: item.link
                      }, toDisplayString(item.text), 9, _hoisted_6)
                    ])
                  ])
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
var WorkNotesIndex = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-4acc5c07"]]);
const __pageData = '{"title":"","description":"","frontmatter":{"page":true,"footer":false},"relativePath":"www-notes/index.md","lastUpdated":1725437502140}';
const __default__ = {};
const _sfc_main = Object.assign(__default__, {
  __name: "index",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(WorkNotesIndex)
      ]);
    };
  }
});
export { __pageData, _sfc_main as default };
