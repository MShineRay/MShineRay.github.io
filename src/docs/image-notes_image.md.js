"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
var serverRenderer = require("vue/server-renderer");
var vue = require("vue");
var pluginVue_exportHelper = require("./assets/plugin-vue_export-helper.db096aab.js");
var image_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    let params = getParam();
    function getParam() {
      var url = typeof window !== "undefined" ? window.location.search : "";
      var theRequest = {
        imgList: "",
        title: ""
      };
      if (url.indexOf("?") !== -1) {
        var str = url.substr(url.indexOf("?") + 1);
        var strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
          theRequest[strs[i].split("=")[0]] = decodeURIComponent(strs[i].split("=")[1]);
        }
      }
      return theRequest;
    }
    const title2 = vue.ref(params.title);
    const imgList = vue.ref(JSON.parse(params.imgList || "[]"));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "container" }, _attrs))} data-v-dc58e258><h1 class="title" data-v-dc58e258>${serverRenderer.ssrInterpolate(title2.value)}</h1><div class="row" data-v-dc58e258><!--[-->`);
      serverRenderer.ssrRenderList(imgList.value, (book, idx) => {
        _push(`<div style="${serverRenderer.ssrRenderStyle({ "margin-bottom": "20px" })}" class="image-list" data-v-dc58e258><div data-v-dc58e258>`);
        if (imgList.value.length > 1) {
          _push(`<h2 class="sub-title" data-v-dc58e258>${serverRenderer.ssrInterpolate(book.name)}</h2>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<img${serverRenderer.ssrRenderAttr("src", book.url)} width="250" height="600" alt="" data-v-dc58e258></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("image-notes/image.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var ImageShow = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main$1, [["__scopeId", "data-v-dc58e258"]]);
const __pageData = '{"title":"Image Notes","description":"","frontmatter":{"title":"Image Notes","page":true,"footer":false},"relativePath":"image-notes/image.md","lastUpdated":1648606789732}';
const __default__ = {};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}>`);
      _push(serverRenderer.ssrRenderComponent(ImageShow, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("image-notes/image.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
exports.__pageData = __pageData;
exports["default"] = _sfc_main;
