import { _ as _export_sfc, d as defineComponent, r as ref, h as computed, o as openBlock, c as createElementBlock, a as createBaseVNode, w as withDirectives, v as vModelText, F as Fragment, b as renderList, u as unref, t as toDisplayString, f as createCommentVNode, p as pushScopeId, e as popScopeId, g as createVNode } from "./app.2b2dcef6.js";
const data = JSON.parse('[{"text":"\u8BFB\u4E66","type":"/read-notes/weread/","items":[{"link":"/read-notesundefined"},{"link":"/read-notesundefined"},{"link":"/read-notesundefined"},{"link":"/read-notesundefined"},{"link":"/read-notesundefined"},{"link":"/read-notesundefined"},{"link":"/read-notesundefined"},{"link":"/read-notesundefined"},{"link":"/read-notesundefined"},{"link":"/read-notesundefined"},{"link":"/read-notesundefined"},{"link":"/read-notesundefined"},{"link":"/read-notesundefined"},{"link":"/read-notesundefined"},{"link":"/read-notesundefined"},{"link":"/read-notesundefined"},{"link":"/read-notesundefined"},{"link":"/read-notesundefined"},{"link":"/read-notesundefined"},{"link":"/read-notesundefined"},{"link":"/read-notesundefined"},{"link":"/read-notesundefined"},{"link":"/read-notesundefined"},{"link":"/read-notesundefined"},{"link":"/read-notesundefined"},{"link":"/read-notesundefined"},{"link":"/read-notesundefined"},{"link":"/read-notesundefined"},{"link":"/read-notesundefined"},{"link":"/read-notesundefined"},{"link":"/read-notesundefined"},{"link":"/read-notesundefined"},{"link":"/read-notesundefined"},{"link":"/read-notesundefined"},{"link":"/read-notesundefined"},{"link":"/read-notesundefined"},{"link":"/read-notesundefined"},{"link":"/read-notesundefined"},{"link":"/read-notesundefined"},{"link":"/read-notesundefined"},{"link":"/read-notesundefined"}]}]');
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-8521257a"), n = n(), popScopeId(), n);
const _hoisted_1 = { id: "api-index" };
const _hoisted_2 = { class: "header" };
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h1", null, "Work List", -1));
const _hoisted_4 = { class: "api-filter" };
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", { for: "api-filter" }, "Filter", -1));
const _hoisted_6 = ["id"];
const _hoisted_7 = { class: "api-groups" };
const _hoisted_8 = ["href"];
const _hoisted_9 = {
  key: 0,
  class: "no-match"
};
const _hoisted_10 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { id: "gitalk-container" }, null, -1));
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
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
        initGitalk("\u5DE5\u4F5C\u7B14\u8BB0");
      }, 300);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _hoisted_3,
          createBaseVNode("div", _hoisted_4, [
            _hoisted_5,
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
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(filtered), (section) => {
          return openBlock(), createElementBlock("div", {
            key: section.text,
            class: "api-section"
          }, [
            createBaseVNode("h2", {
              id: slugify(section.text)
            }, toDisplayString(section.text), 9, _hoisted_6),
            createBaseVNode("div", _hoisted_7, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(section.items, (item) => {
                return openBlock(), createElementBlock("div", {
                  key: item.text,
                  class: "api-group"
                }, [
                  createBaseVNode("a", {
                    href: item.link + ".html"
                  }, [
                    createBaseVNode("h3", null, toDisplayString(item.text), 1)
                  ], 8, _hoisted_8)
                ]);
              }), 128))
            ])
          ]);
        }), 128)),
        !unref(filtered).length ? (openBlock(), createElementBlock("div", _hoisted_9, ' No book matching "' + toDisplayString(query.value) + '" found. ', 1)) : createCommentVNode("", true),
        _hoisted_10
      ]);
    };
  }
});
var WorkNotesIndex = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-8521257a"]]);
const __pageData = '{"title":"Work Notes","description":"","frontmatter":{"title":"Work Notes","page":true,"footer":false},"relativePath":"work-notes/index.md","lastUpdated":1648894935441}';
const __default__ = {};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(WorkNotesIndex)
      ]);
    };
  }
});
export { __pageData, _sfc_main as default };
