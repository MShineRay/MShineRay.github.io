import { d as defineComponent, r as ref, j as computed, o as openBlock, c as createElementBlock, a as createBaseVNode, N as withDirectives, Q as vModelText, F as Fragment, p as renderList, t as toDisplayString, f as createCommentVNode, _ as _export_sfc, q as createVNode } from "./chunks/framework.CR2k5WTl.js";
const data = JSON.parse('[{"text":"读书","type":"/read-notes/weread/","items":[{"text":"闭包","link":"/work-notes/front-end/js/bibao/"},{"text":"微信卡片分享","link":"/work-notes/front-end/wxshare"},{"text":"css知识点","link":"/work-notes/front-end/css/knowledge-point/"}]}]');
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
        initGitalk("工作笔记");
      }, 300);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _cache[2] || (_cache[2] = createBaseVNode("h1", null, "Work List", -1)),
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
const WorkNotesIndex = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-3a0dd855"]]);
const __pageData = JSON.parse('{"title":"Work Notes","description":"","frontmatter":{"title":"Work Notes","page":true,"footer":false},"headers":[],"relativePath":"work-notes/index.md","filePath":"work-notes/index.md"}');
const __default__ = { name: "work-notes/index.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(WorkNotesIndex)
      ]);
    };
  }
});
export {
  __pageData,
  _sfc_main as default
};
