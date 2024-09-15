import { f as defineComponent, o as openBlock, b as createElementBlock, e as createStaticVNode, _ as _export_sfc, z as createVNode } from "./plugin-vue_export-helper.e5a60c03.js";
var Home_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1 = { id: "hero" };
const _sfc_main$1 = defineComponent({
  __name: "Home",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", _hoisted_1, _cache[0] || (_cache[0] = [
        createStaticVNode('<h1 class="tagline" data-v-5ea9e338><span class="accent" data-v-5ea9e338>ToBetter</span></h1><p class="description" data-v-5ea9e338> For better, do better </p><p data-v-5ea9e338></p><p class="actions" data-v-5ea9e338><a class="setup" href="/read-notes/" data-v-5ea9e338>Read Notes</a><a class="setup" href="/image-notes/" data-v-5ea9e338>Image Notes</a><a class="setup" href="/work-notes/" data-v-5ea9e338>Work Notes</a></p>', 4)
      ]));
    };
  }
});
var Home = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-5ea9e338"]]);
const __pageData = '{"title":"Home","description":"","frontmatter":{"page":true,"title":"Home"},"relativePath":"index.md","lastUpdated":1726392310846}';
const __default__ = {};
const _sfc_main = Object.assign(__default__, {
  __name: "index",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(Home)
      ]);
    };
  }
});
export { __pageData, _sfc_main as default };
