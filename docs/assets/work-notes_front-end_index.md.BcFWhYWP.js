import { l as logCreated } from "./chunks/log-created.B7DwZh_S.js";
import { _ as _export_sfc, o as openBlock, c as createElementBlock, q as createVNode } from "./chunks/framework.BDXM7Ixg.js";
const _sfc_main$1 = {
  name: "FontEnd",
  mixins: [logCreated]
};
const _hoisted_1 = { class: "container" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, " 工作笔记 ");
}
const ApiIndex = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__scopeId", "data-v-de977308"]]);
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"work-notes/front-end/index.md","filePath":"work-notes/front-end/index.md"}');
const __default__ = { name: "work-notes/front-end/index.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(ApiIndex)
      ]);
    };
  }
});
export {
  __pageData,
  _sfc_main as default
};
