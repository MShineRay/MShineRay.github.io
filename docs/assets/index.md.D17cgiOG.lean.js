import { d as defineComponent, o as openBlock, c as createElementBlock, b as createStaticVNode, _ as _export_sfc, q as createVNode } from "./chunks/framework.BDXM7Ixg.js";
const _hoisted_1 = { id: "hero" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Home",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", _hoisted_1, _cache[0] || (_cache[0] = [
        createStaticVNode('<h1 class="tagline" data-v-21e4eb8e><span class="accent" data-v-21e4eb8e>ToBetter</span></h1><p class="description" data-v-21e4eb8e> For better, do better </p><p data-v-21e4eb8e></p><p class="actions" data-v-21e4eb8e><a class="setup" href="/read-notes/" data-v-21e4eb8e>Read Notes</a><a class="setup" href="/image-notes/" data-v-21e4eb8e>Image Notes</a><a class="setup" href="/work-notes/" data-v-21e4eb8e>Work Notes</a></p>', 4)
      ]));
    };
  }
});
const Home = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-21e4eb8e"]]);
const __pageData = JSON.parse('{"title":"Home","description":"","frontmatter":{"page":true,"title":"Home"},"headers":[],"relativePath":"index.md","filePath":"index.md"}');
const __default__ = { name: "index.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(Home)
      ]);
    };
  }
});
export {
  __pageData,
  _sfc_main as default
};
