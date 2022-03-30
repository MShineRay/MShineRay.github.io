"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
var serverRenderer = require("vue/server-renderer");
var vue = require("vue");
var pluginVue_exportHelper = require("./assets/plugin-vue_export-helper.db096aab.js");
const data = JSON.parse("[]");
var ApiIndex_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const query = vue.ref("");
    const normalize = (s) => s.toLowerCase().replace(/-/g, " ");
    const filtered = vue.computed(() => {
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
          if (q.includes("ssr") && item.text.startsWith("Server")) {
            return item;
          }
          const matchedHeaders = item.headers.filter(matches);
          return matchedHeaders.length ? { text: item.text, link: item.link, headers: matchedHeaders } : null;
        }).filter((i) => i);
        return matchedGroups.length ? { text: section.text, items: matchedGroups } : null;
      }).filter((i) => i);
    });
    function slugify(text) {
      return text.replace(/[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'<>,.?/]+/g, "-").replace(/\-{2,}/g, "-").replace(/^\-+|\-+$/g, "").replace(/^(\d)/, "_$1").toLowerCase();
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ id: "api-index" }, _attrs))} data-v-ff6eadd4><div class="header" data-v-ff6eadd4><h1 data-v-ff6eadd4>WWW Notes</h1><div class="api-filter" data-v-ff6eadd4><label for="api-filter" data-v-ff6eadd4>Filter</label><input type="search" placeholder="Enter keyword" id="api-filter"${serverRenderer.ssrRenderAttr("value", query.value)} data-v-ff6eadd4></div></div><!--[-->`);
      serverRenderer.ssrRenderList(vue.unref(filtered), (section) => {
        _push(`<div class="api-section" data-v-ff6eadd4><h2${serverRenderer.ssrRenderAttr("id", slugify(section.text))} data-v-ff6eadd4>${serverRenderer.ssrInterpolate(section.text)}</h2><div class="api-groups" data-v-ff6eadd4><!--[-->`);
        serverRenderer.ssrRenderList(section.items, (item) => {
          _push(`<div class="api-group" data-v-ff6eadd4><h3 data-v-ff6eadd4>${serverRenderer.ssrInterpolate(item.text)}</h3><ul data-v-ff6eadd4><!--[-->`);
          serverRenderer.ssrRenderList(item.headers, (h) => {
            _push(`<li data-v-ff6eadd4><a${serverRenderer.ssrRenderAttr("href", item.link + ".html#" + slugify(h))} data-v-ff6eadd4>${serverRenderer.ssrInterpolate(h)}</a></li>`);
          });
          _push(`<!--]--></ul></div>`);
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]-->`);
      if (!vue.unref(filtered).length) {
        _push(`<div class="no-match" data-v-ff6eadd4> No API matching &quot;${serverRenderer.ssrInterpolate(query.value)}&quot; found. </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("www-notes/ApiIndex.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var ApiIndex = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main$1, [["__scopeId", "data-v-ff6eadd4"]]);
const __pageData = '{"title":"API Reference","description":"","frontmatter":{"title":"API Reference","page":true,"footer":false},"relativePath":"www-notes/index.md","lastUpdated":1648606790913}';
const __default__ = {};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}>`);
      _push(serverRenderer.ssrRenderComponent(ApiIndex, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("www-notes/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
exports.__pageData = __pageData;
exports["default"] = _sfc_main;
