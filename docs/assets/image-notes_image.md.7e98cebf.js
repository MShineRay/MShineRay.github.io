import { f as defineComponent, k as ref, o as openBlock, b as createElementBlock, d as createBaseVNode, x as toDisplayString, F as Fragment, y as renderList, _ as _export_sfc, j as createCommentVNode, z as createVNode } from "./plugin-vue_export-helper.e5a60c03.js";
var image_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1 = { class: "container" };
const _hoisted_2 = { class: "title" };
const _hoisted_3 = { class: "row" };
const _hoisted_4 = {
  key: 0,
  class: "sub-title"
};
const _hoisted_5 = ["src"];
const _sfc_main$1 = defineComponent({
  __name: "image",
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
    const title2 = ref(params.title);
    const imgList = ref(JSON.parse(params.imgList || "[]"));
    if (typeof initGitalk !== "undefined") {
      setTimeout(function() {
        initGitalk();
      }, 3e3);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("h1", _hoisted_2, toDisplayString(title2.value), 1),
        createBaseVNode("div", _hoisted_3, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(imgList.value, (book, idx) => {
            return openBlock(), createElementBlock("div", {
              key: book.name,
              style: { "margin-bottom": "20px" },
              class: "image-list"
            }, [
              createBaseVNode("div", null, [
                imgList.value.length > 1 ? (openBlock(), createElementBlock("h2", _hoisted_4, toDisplayString(book.name), 1)) : createCommentVNode("", true),
                createBaseVNode("img", {
                  src: book.url,
                  width: "250",
                  height: "600",
                  alt: ""
                }, null, 8, _hoisted_5)
              ])
            ]);
          }), 128))
        ]),
        _cache[0] || (_cache[0] = createBaseVNode("div", { id: "gitalk-container" }, null, -1))
      ]);
    };
  }
});
var ImageShow = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b6bfeff0"]]);
const __pageData = '{"title":"Image Notes","description":"","frontmatter":{"title":"Image Notes","page":true,"footer":false},"relativePath":"image-notes/image.md","lastUpdated":1725437500803}';
const __default__ = {};
const _sfc_main = Object.assign(__default__, {
  __name: "image",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(ImageShow)
      ]);
    };
  }
});
export { __pageData, _sfc_main as default };
