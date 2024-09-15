import { T as Transition, w as withModifiers, v as vShow, c as createSSRApp } from "./framework.58df9776.js";
import { s as shallowRef, r as readonly, c as computed, i as inject, a as reactive, m as markRaw, n as nextTick, w as watchEffect, _ as _export_sfc, o as openBlock, b as createElementBlock, d as createBaseVNode, e as createStaticVNode, f as defineComponent, g as createBlock, h as withCtx, j as createCommentVNode, k as ref, l as watch, p as onUnmounted, q as normalizeClass, t as resolveDynamicComponent, u as renderSlot, v as createTextVNode, x as toDisplayString, F as Fragment, y as renderList, z as createVNode, A as unref, B as h, C as provide, D as defineAsyncComponent, E as onMounted, G as watchPostEffect, H as resolveComponent, I as getCurrentInstance, J as getCurrentScope, K as onScopeDispose, L as onUpdated, M as withDirectives } from "./plugin-vue_export-helper.e5a60c03.js";
const scriptRel = "modulepreload";
const seen = {};
const base = "/";
const __vitePreload = function preload(baseModule, deps) {
  if (!deps || deps.length === 0) {
    return baseModule();
  }
  return Promise.all(deps.map((dep) => {
    dep = `${base}${dep}`;
    if (dep in seen)
      return;
    seen[dep] = true;
    const isCss = dep.endsWith(".css");
    const cssSelector = isCss ? '[rel="stylesheet"]' : "";
    if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
      return;
    }
    const link2 = document.createElement("link");
    link2.rel = isCss ? "stylesheet" : scriptRel;
    if (!isCss) {
      link2.as = "script";
      link2.crossOrigin = "";
    }
    link2.href = dep;
    document.head.appendChild(link2);
    if (isCss) {
      return new Promise((res, rej) => {
        link2.addEventListener("load", res);
        link2.addEventListener("error", () => rej(new Error(`Unable to preload CSS for ${dep}`)));
      });
    }
  })).then(() => baseModule());
};
var serializedSiteData = `{"lang":"en-US","title":"ToBetter","description":"For better, do better","base":"/","head":[["link",{"href":"/css/readnotes.css","rel":"stylesheet","type":"text/css"}],["link",{"href":"/css/weread.css","rel":"stylesheet","type":"text/css"}],["link",{"href":"/favicon.ico","rel":"icon"}],["meta",{"name":"app-build-time","value":1726392352990}],["script",{"src":"https://www.googletagmanager.com/gtag/js?id=G-R31NB6KKBC","async":"async"}],["link",{"href":"//cdn.bootcss.com/gitalk/1.5.0/gitalk.min.css","rel":"stylesheet"}],["script",{"src":"//cdn.bootcss.com/gitalk/1.7.2/gitalk.min.js","async":"async"}],["script",{},"window.dataLayer = window.dataLayer || [];\\nfunction gtag(){dataLayer.push(arguments);}\\ngtag('js', new Date());\\ngtag('config', 'G-R31NB6KKBC');\\nfunction gtag_event(eventName, data) {\\n  gtag(\\"event\\", eventName, data || {\\n    // send_to: __opay_tracking_id,\\n    // 'debug_mode':true\\n  });\\n  return false;\\n}\\nwindow.onload = function (){\\n  console.log('onload...')\\n  window.gtag_event && window.gtag_event(location.pathname)\\n}\\n"],["script",{},"var initGitalk = function(id) {\\n  var gitalk = new Gitalk({\\n    clientID: \\"187ca77e9ef602c818de\\",\\n    clientSecret: \\"f6e67959ddba9c12d2cf1f0b2f229febb61e4422\\",\\n    repo: \\"MShineRay.github.io\\",\\n    owner: \\"MShineRay\\",\\n    admin: [\\"MShineRay\\"],\\n    id: id || \\"\u8BC4\u8BBA\\",\\n    language: \\"zh-CN\\",\\n    perPage: 10,\\n    distractionFreeMode: false,\\n    pagerDirection: \\"last\\",\\n    createIssueManually: false\\n    // updateCountCallback: commentCount\\n  });\\n\\n  gitalk.render(\\"gitalk-container\\");\\n};\\n"],["script",{"src":"/scripts/felogsdk.iife.min.js"}],["script",{"src":"/scripts/felogsdk.init.js"}]],"themeConfig":{"logo":"/img/logo-share-dark.svg","logoDark":"/img/logo-share.svg","logoText":"ToBetter","algolia":{"indexName":"search","appId":"0E4UM292MA","apiKey":"1d5e30f5de7b1b9655cbd8fd89088ca1"},"socialLinks":[{"icon":"github","link":"https://github.com/mshineray/"}],"nav":[{"text":"Space","activeMatch":"^/(image-notes|www-notes|read-notes|guide|style-guide|cookbook|examples)/","items":[{"text":"Read Notes","link":"/read-notes/"},{"text":"Image Notes","link":"/image-notes/"},{"text":"WWW Notes","link":"/www-notes/"},{"text":"fecli","link":"https://www.npmjs.com/package/@a0znpm/fecli"},{"text":"Work Notes","link":"/work-notes/"}]}],"sidebar":{"/read-notes/":[{"text":"Read Notes","items":[{"text":"Book List","link":"/read-notes/"},{"text":"\u5E73\u5747\u5206","link":"/read-notes/weread/pingjunfen"},{"text":"\u6C38\u4E45\u8BB0\u5F55","link":"/read-notes/weread/yongjiujilu"},{"text":"\u4EBA\u751F\u5982\u6211","link":"/read-notes/weread/renshengyouwo"},{"text":"\u5BCC\u5170\u514B\u6797\u81EA\u4F20","link":"/read-notes/weread/fulankelinzichuan"},{"text":"\u97ED\u83DC\u7684\u81EA\u6211\u4FEE\u517B","link":"/read-notes/weread/jiucaideziwoxiuyang"},{"text":"\u5927\u578B\u7F51\u7AD9\u6027\u80FD\u4F18\u5316\u5B9E\u6218\uFF1A\u4ECE\u524D\u7AEF\u3001\u7F51\u7EDC\u3001CDN\u5230\u540E\u7AEF\u3001\u5927\u4FC3\u7684\u5168\u94FE\u8DEF\u6027\u80FD\u4F18\u5316\u8BE6\u89E3","link":"/read-notes/weread/daxingwangzhanxingnengyouhuashizhan"},{"text":"\u4FDD\u6301\u9965\u6E34\uFF1A\u4E0D\u65AD\u83B7\u53D6\u65B0\u77E5\u8BC6\uFF0C\u5347\u7EA7\u5E95\u5C42\u64CD\u4F5C\u80FD\u529B","link":"/read-notes/weread/baochijike"},{"text":"\u5C0F\u72D7\u94B1\u94B12","link":"/read-notes/weread/xiaogouqianqian2"},{"text":"\u4E09\u5341\u5C81\uFF0C\u4E00\u5207\u521A\u521A\u5F00\u59CB","link":"/read-notes/weread/sanshisuiyiqieganggangkaishi"},{"text":"\u5FB7\u7C73\u5B89\uFF1A\u5F77\u5FA8\u5C11\u5E74\u65F6","link":"/read-notes/weread/demianpanghuangshaonianshi"},{"text":"\u5F71\u54CD\u4E16\u754C\u7684\u4E2D\u56FD\u690D\u7269","link":"/read-notes/weread/yingxiangshijiedezhongguozhiwu"},{"text":"\u95ED\u73AF\u601D\u7EF4","link":"/read-notes/weread/bihuansiwei"},{"text":"\u6211\u662F\u600E\u4E48\u5272\u97ED\u83DC\u7684\uFF1A\u4E00\u4E2A\u9A97\u5B50\u7684\u6094\u8FC7\u4E0E\u81EA\u767D","link":"/read-notes/weread/woshizenmogejiucaide"},{"text":"\u5B8B\u6C0F\u4E09\u59D0\u59B9","link":"/read-notes/weread/songshisanjiemei"},{"text":"\u597D\u70B9\u5B50\u90FD\u662F\u5077\u6765\u7684\uFF1A\u53F2\u4E0A\u6700\u611F\u6027\u768460\u5802\u521B\u65B0\u8BFE","link":"/read-notes/weread/haodianzidushitoulaide"},{"text":"\u738B\u6C38\u5E86\u5168\u4F20","link":"/read-notes/weread/wangyongqingquanchuan"},{"text":"Web\u5168\u6808\u5DE5\u7A0B\u5E08\u7684\u81EA\u6211\u4FEE\u517B","link":"/read-notes/weread/Webquanzhangongchengshideziwoxiuyang"},{"text":"\u5199\u7ED9\u6240\u6709\u4EBA\u7684\u7F16\u7A0B\u601D\u7EF4","link":"/read-notes/weread/xiegeisuoyourendebianchengsiwei"},{"text":"\u524D\u7AEF\u5DE5\u7A0B\u5316\uFF1A\u4F53\u7CFB\u8BBE\u8BA1\u4E0E\u5B9E\u8DF5","link":"/read-notes/weread/qianduangongchenghuatixishejiyushijian"},{"text":"\u4EE3\u7801\u7CBE\u8FDB\u4E4B\u8DEF\uFF1A\u4ECE\u7801\u519C\u5230\u5DE5\u5320","link":"/read-notes/weread/daimajingjinzhilucongmanongdaogongjiang"},{"text":"\u4E00\u5F80\u65E0\u524D\uFF1A\u5C0F\u7C73\u5341\u5468\u5E74 \u96F7\u519B\u516C\u5F00\u6F14\u8BB2\u5168\u6587","link":"/read-notes/weread/yiwangwuqianxiaomishizhounian"},{"text":"\u534A\u5C0F\u65F6\u6F2B\u753B\u4E2D\u56FD\u54F2\u5B66\u53F2","link":"/read-notes/weread/banxiaoshimanhuazhongguozhexueshi"},{"text":"\u56FE\u8BF4\u4E16\u754C\u683C\u5C40","link":"/read-notes/weread/tushuoshijiegeju"},{"text":"\u5BCC\u4EBA\u7684\u903B\u8F91\uFF1A\u5982\u4F55\u521B\u9020\u8D22\u5BCC\uFF0C\u5982\u4F55\u4FDD\u6709\u8D22\u5BCC","link":"/read-notes/weread/furendeluojiruhechuangzaocaifu"},{"text":"\u534A\u5C0F\u65F6\u6F2B\u753B\u7ECF\u6D4E\u5B66\u7CFB\u5217\uFF08\u51714\u518C\uFF09\uFF08\u72EC\u5BB6\u5B9A\u5236\u7248\uFF09","link":"/read-notes/weread/banxiaoshimanhuajingjixuexilie"},{"text":"\u6211\u4E0D\u8981\u4F60\u6B7B\u4E8E\u4E00\u4E8B\u65E0\u6210\uFF1A\u7ED9\u5973\u513F\u768417\u5C01\u544A\u522B\u4FE1","link":"/read-notes/weread/wobuyaonisiyuyishiwuchenggeinverde17fenggaobiexin"},{"text":"\u625B\u4F4F\u5C31\u662F\u672C\u4E8B","link":"/read-notes/weread/kangzhujiushibenshi"},{"text":"GitHub\u5165\u95E8\u4E0E\u5B9E\u8DF5","link":"/read-notes/weread/githubrumenyushijian"},{"text":"\u65AD\u820D\u79BB","link":"/read-notes/weread/duansheli"},{"text":"\u5BCC\u7238\u723821\u4E16\u7EAA\u7684\u751F\u610F","link":"/read-notes/weread/fubaba21shijideshengyi"},{"text":"\u667A\u80FD\u4E3B\u4E49\uFF1A\u672A\u6765\u5546\u4E1A\u4E0E\u793E\u4F1A\u7684\u65B0\u751F\u6001","link":"/read-notes/weread/zhinengzhuyiweilaishangyeyushehuidexinshengtai"},{"text":"\u5E78\u798F\u4E86\u5417\uFF1F","link":"/read-notes/weread/xingfulema"},{"text":"\u6D41\u8840\u7684\u80A1\u5E02","link":"/read-notes/weread/liuxiedegushi"},{"text":"\u667A\u80FD\u5316\u6D6A\u6F6E\uFF1A\u6B63\u5728\u7206\u53D1\u7684\u7B2C\u56DB\u6B21\u5DE5\u4E1A\u9769\u547D","link":"/read-notes/weread/zhinenghualangchaozhengzaibaofadedisicigongyegeming"},{"text":"\u8BA9\u65F6\u95F4\u966A\u4F60\u6162\u6162\u53D8\u5BCC","link":"/read-notes/weread/rangshijianpeinimanmanbianfu"},{"text":"\u8F93\u8D62","link":"/read-notes/weread/shuying"},{"text":"\u8C37\u6B4C\u7684\u6545\u4E8B","link":"/read-notes/weread/gugedegushi"},{"text":"\u6C83\u5179\u4F20\uFF1A\u4E0E\u82F9\u679C\u4E00\u8D77\u75AF\u72C2","link":"/read-notes/weread/wozichuanyupingguoyiqifengkuang"},{"text":"\u603B\u88C1\u768466\u6761\u5546\u4E1A\u601D\u7EF4","link":"/read-notes/weread/zongcaide66tiaoshangyesiwei"},{"text":"Web\u6D4B\u8BD5\u56E7\u4E8B","link":"/read-notes/weread/Webceshijiongshi"},{"text":"UI\u8BBE\u8BA1\u7CBE\u54C1\u5FC5\u4FEE\u8BFE","link":"/read-notes/weread/UIshejijingpinbixiuke"}]},{"text":"\u77E5\u7FA4","items":[{"text":"\u53CA\u65F6\u51C6\u786E\u7684\u4F20\u8FBE\u9700\u6C42","link":"/read-notes/zhiqun/jishizhunquedechuandaxuqiu"},{"text":"\u6570\u636E\u5206\u67904\u6B65\u8D70","link":"/read-notes/zhiqun/shujufenxisibuzou"},{"text":"\u7B80\u5386\u63D0\u5347\u9762\u8BD5\u9080\u7EA6\u7387","link":"/read-notes/zhiqun/jianlitishengyaoyuelv"},{"text":"\u4F5C\u54C1\u96C6","link":"/read-notes/zhiqun/zuopinji"}]},{"text":"\u94FE\u63A5","items":[{"text":"Image Notes","link":"/image-notes/"},{"text":"WWW Notes","link":"/www-notes/"},{"text":"Work Notes","link":"/work-notes/"}]}],"/image-notes/":[{"text":"\u77E5\u7FA4","items":[{"text":"Image List","link":"/image-notes/"}]},{"text":"\u94FE\u63A5","items":[{"text":"Read Notes","link":"/read-notes/"},{"text":"WWW Notes","link":"/www-notes/"},{"text":"Work Notes","link":"/work-notes/"}]}],"/work-notes/":[{"text":"Work Notes","items":[{"text":"\u5DE5\u4F5C\u7B14\u8BB0","link":"/work-notes/"},{"text":"\u95ED\u5305","link":"/work-notes/front-end/js/bibao"}]},{"text":"\u57CB\u70B9","items":[{"text":"Log List","link":"/work-notes/log"}]},{"text":"\u94FE\u63A5","items":[{"text":"Read Notes","link":"/read-notes/"},{"text":"WWW Notes","link":"/www-notes/"},{"text":"Image Notes","link":"/image-notes/"}]}],"/www-notes/":[{"text":"WWW Notes","items":[{"text":"www list","link":"/www-notes/"}]},{"text":"\u94FE\u63A5","items":[{"text":"Read Notes","link":"/read-notes/"},{"text":"Work Notes","link":"/work-notes/"},{"text":"Image Notes","link":"/image-notes/"}]}]},"editLink":{"repo":"MShineRay/MShineRay.github.io","text":"Edit this page on GitHub"},"footer":{"license":{"text":"MIT License","link":"https://opensource.org/licenses/MIT"},"copyright":"Copyright \xA9 2022-now MShineRay"},"appearance":false},"locales":{},"langs":{}}`;
const EXTERNAL_URL_RE = /^https?:/i;
const inBrowser$1 = typeof window !== "undefined";
function findMatchRoot(route, roots) {
  roots.sort((a, b) => {
    const levelDelta = b.split("/").length - a.split("/").length;
    if (levelDelta !== 0) {
      return levelDelta;
    } else {
      return b.length - a.length;
    }
  });
  for (const r of roots) {
    if (route.startsWith(r))
      return r;
  }
}
function resolveLocales(locales, route) {
  const localeRoot = findMatchRoot(route, Object.keys(locales));
  return localeRoot ? locales[localeRoot] : void 0;
}
function createLangDictionary(siteData) {
  const { locales } = siteData.themeConfig || {};
  const siteLocales = siteData.locales;
  return locales && siteLocales ? Object.keys(locales).reduce((langs, path) => {
    langs[path] = {
      label: locales[path].label,
      lang: siteLocales[path].lang
    };
    return langs;
  }, {}) : {};
}
function resolveSiteDataByRoute(siteData, route) {
  route = cleanRoute(siteData, route);
  const localeData = resolveLocales(siteData.locales || {}, route);
  const localeThemeConfig = resolveLocales(siteData.themeConfig.locales || {}, route);
  return Object.assign({}, siteData, localeData, {
    themeConfig: Object.assign({}, siteData.themeConfig, localeThemeConfig, {
      locales: {}
    }),
    lang: (localeData || siteData).lang,
    locales: {},
    langs: createLangDictionary(siteData)
  });
}
function cleanRoute(siteData, route) {
  if (!inBrowser$1) {
    return route;
  }
  const base2 = siteData.base;
  const baseWithoutSuffix = base2.endsWith("/") ? base2.slice(0, -1) : base2;
  return route.slice(baseWithoutSuffix.length);
}
const dataSymbol = Symbol();
const siteDataRef = shallowRef(parse(serializedSiteData));
function parse(data) {
  return readonly(JSON.parse(data));
}
function initData(route) {
  const site = computed(() => resolveSiteDataByRoute(siteDataRef.value, route.path));
  return {
    site,
    theme: computed(() => site.value.themeConfig),
    page: computed(() => route.data),
    frontmatter: computed(() => route.data.frontmatter),
    lang: computed(() => site.value.lang),
    localePath: computed(() => {
      const { langs, lang } = site.value;
      const path = Object.keys(langs).find((langPath) => langs[langPath].lang === lang);
      return withBase(path || "/");
    }),
    title: computed(() => {
      return route.data.title ? route.data.title + " | " + site.value.title : site.value.title;
    }),
    description: computed(() => {
      return route.data.description || site.value.description;
    })
  };
}
function useData() {
  const data = inject(dataSymbol);
  if (!data) {
    throw new Error("vitepress data not properly injected in app");
  }
  return data;
}
function joinPath(base2, path) {
  return `${base2}${path}`.replace(/\/+/g, "/");
}
function withBase(path) {
  return EXTERNAL_URL_RE.test(path) ? path : joinPath(siteDataRef.value.base, path);
}
function pathToFile(path) {
  let pagePath = path.replace(/\.html$/, "");
  pagePath = decodeURIComponent(pagePath);
  if (pagePath.endsWith("/")) {
    pagePath += "index";
  }
  {
    if (inBrowser$1) {
      const base2 = "/";
      pagePath = pagePath.slice(base2.length).replace(/\//g, "_") + ".md";
      const pageHash = __VP_HASH_MAP__[pagePath.toLowerCase()];
      pagePath = `${base2}assets/${pagePath}.${pageHash}.js`;
    } else {
      pagePath = `./${pagePath.slice(1).replace(/\//g, "_")}.md.js`;
    }
  }
  return pagePath;
}
const RouterSymbol = Symbol();
const fakeHost = `http://a.com`;
const getDefaultRoute = () => ({
  path: "/",
  component: null,
  data: null
});
function createRouter(loadPageModule, fallbackComponent) {
  const route = reactive(getDefaultRoute());
  function go(href = inBrowser$1 ? location.href : "/") {
    const url = new URL(href, fakeHost);
    if (!url.pathname.endsWith("/") && !url.pathname.endsWith(".html")) {
      url.pathname += ".html";
      href = url.pathname + url.search + url.hash;
    }
    if (inBrowser$1) {
      history.replaceState({ scrollPosition: window.scrollY }, document.title);
      history.pushState(null, "", href);
    }
    return loadPage(href);
  }
  let latestPendingPath = null;
  async function loadPage(href, scrollPosition = 0) {
    const targetLoc = new URL(href, fakeHost);
    const pendingPath = latestPendingPath = targetLoc.pathname;
    try {
      let page = loadPageModule(pendingPath);
      if ("then" in page && typeof page.then === "function") {
        page = await page;
      }
      if (latestPendingPath === pendingPath) {
        latestPendingPath = null;
        const { default: comp, __pageData } = page;
        if (!comp) {
          throw new Error(`Invalid route component: ${comp}`);
        }
        route.path = pendingPath;
        route.component = markRaw(comp);
        route.data = true ? markRaw(JSON.parse(__pageData)) : readonly(JSON.parse(__pageData));
        if (inBrowser$1) {
          nextTick(() => {
            if (targetLoc.hash && !scrollPosition) {
              let target = null;
              try {
                target = document.querySelector(decodeURIComponent(targetLoc.hash));
              } catch (e) {
                console.warn(e);
              }
              if (target) {
                scrollTo(target, targetLoc.hash);
                return;
              }
            }
            window.scrollTo(0, scrollPosition);
          });
        }
      }
    } catch (err) {
      if (!err.message.match(/fetch/)) {
        console.error(err);
      }
      if (latestPendingPath === pendingPath) {
        latestPendingPath = null;
        route.path = pendingPath;
        route.component = fallbackComponent ? markRaw(fallbackComponent) : null;
      }
    }
  }
  if (inBrowser$1) {
    window.addEventListener("click", (e) => {
      const link2 = e.target.closest("a");
      if (link2) {
        const { href, protocol, hostname, pathname, hash, target } = link2;
        const currentUrl = window.location;
        const extMatch = pathname.match(/\.\w+$/);
        if (!e.ctrlKey && !e.shiftKey && !e.altKey && !e.metaKey && target !== `_blank` && protocol === currentUrl.protocol && hostname === currentUrl.hostname && !(extMatch && extMatch[0] !== ".html")) {
          e.preventDefault();
          if (pathname === currentUrl.pathname) {
            if (hash && hash !== currentUrl.hash) {
              history.pushState(null, "", hash);
              window.dispatchEvent(new Event("hashchange"));
              scrollTo(link2, hash, link2.classList.contains("header-anchor"));
            }
          } else {
            go(href);
          }
        }
      }
    }, { capture: true });
    window.addEventListener("popstate", (e) => {
      loadPage(location.href, e.state && e.state.scrollPosition || 0);
    });
    window.addEventListener("hashchange", (e) => {
      e.preventDefault();
    });
  }
  return {
    route,
    go
  };
}
function useRouter() {
  const router = inject(RouterSymbol);
  if (!router) {
    throw new Error("useRouter() is called without provider.");
  }
  return router;
}
function useRoute() {
  return useRouter().route;
}
function scrollTo(el, hash, smooth = false) {
  let target = null;
  try {
    target = el.classList.contains(".header-anchor") ? el : document.querySelector(decodeURIComponent(hash));
  } catch (e) {
    console.warn(e);
  }
  if (target) {
    const targetTop = target.offsetTop;
    if (!smooth || Math.abs(targetTop - window.scrollY) > window.innerHeight) {
      window.scrollTo(0, targetTop);
    } else {
      window.scrollTo({
        left: 0,
        top: targetTop,
        behavior: "smooth"
      });
    }
  }
}
function useUpdateHead(route, siteDataByRouteRef) {
  let managedHeadTags = [];
  let isFirstUpdate = true;
  const updateHeadTags = (newTags) => {
    if (isFirstUpdate) {
      isFirstUpdate = false;
      return;
    }
    const newEls = [];
    const commonLength = Math.min(managedHeadTags.length, newTags.length);
    for (let i = 0; i < commonLength; i++) {
      let el = managedHeadTags[i];
      const [tag, attrs, innerHTML = ""] = newTags[i];
      if (el.tagName.toLocaleLowerCase() === tag) {
        for (const key in attrs) {
          if (el.getAttribute(key) !== attrs[key]) {
            el.setAttribute(key, attrs[key]);
          }
        }
        for (let i2 = 0; i2 < el.attributes.length; i2++) {
          const name = el.attributes[i2].name;
          if (!(name in attrs)) {
            el.removeAttribute(name);
          }
        }
        if (el.innerHTML !== innerHTML) {
          el.innerHTML = innerHTML;
        }
      } else {
        document.head.removeChild(el);
        el = createHeadElement(newTags[i]);
        document.head.append(el);
      }
      newEls.push(el);
    }
    managedHeadTags.slice(commonLength).forEach((el) => document.head.removeChild(el));
    newTags.slice(commonLength).forEach((headConfig) => {
      const el = createHeadElement(headConfig);
      document.head.appendChild(el);
      newEls.push(el);
    });
    managedHeadTags = newEls;
  };
  watchEffect(() => {
    const pageData = route.data;
    const siteData = siteDataByRouteRef.value;
    const pageTitle = pageData && pageData.title;
    const pageDescription = pageData && pageData.description;
    const frontmatterHead = pageData && pageData.frontmatter.head;
    document.title = (pageTitle ? pageTitle + ` | ` : ``) + siteData.title;
    document.querySelector(`meta[name=description]`).setAttribute("content", pageDescription || siteData.description);
    updateHeadTags([
      ...[],
      ...frontmatterHead ? filterOutHeadDescription(frontmatterHead) : []
    ]);
  });
}
function createHeadElement([tag, attrs, innerHTML]) {
  const el = document.createElement(tag);
  for (const key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
  if (innerHTML) {
    el.innerHTML = innerHTML;
  }
  return el;
}
function isMetaDescription(headConfig) {
  return headConfig[0] === "meta" && headConfig[1] && headConfig[1].name === "description";
}
function filterOutHeadDescription(head) {
  return head.filter((h2) => !isMetaDescription(h2));
}
const _sfc_main$Z = {};
const _hoisted_1$M = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
};
function _sfc_render$h(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$M, _cache[0] || (_cache[0] = [
    createBaseVNode("path", { d: "M17,11H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,11,17,11z" }, null, -1),
    createBaseVNode("path", { d: "M21,7H3C2.4,7,2,6.6,2,6s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,7,21,7z" }, null, -1),
    createBaseVNode("path", { d: "M21,15H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,15,21,15z" }, null, -1),
    createBaseVNode("path", { d: "M17,19H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,19,17,19z" }, null, -1)
  ]));
}
var VTIconAlignLeft = /* @__PURE__ */ _export_sfc(_sfc_main$Z, [["render", _sfc_render$h]]);
const _sfc_main$Y = {};
const _hoisted_1$L = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
};
function _sfc_render$g(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$L, _cache[0] || (_cache[0] = [
    createBaseVNode("path", { d: "M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z" }, null, -1)
  ]));
}
var VTIconChevronDown = /* @__PURE__ */ _export_sfc(_sfc_main$Y, [["render", _sfc_render$g]]);
const _sfc_main$X = {};
const _hoisted_1$K = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
};
function _sfc_render$f(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$K, _cache[0] || (_cache[0] = [
    createBaseVNode("path", { d: "M15,19c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4l6-6c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4L10.4,12l5.3,5.3c0.4,0.4,0.4,1,0,1.4C15.5,18.9,15.3,19,15,19z" }, null, -1)
  ]));
}
var VTIconChevronLeft = /* @__PURE__ */ _export_sfc(_sfc_main$X, [["render", _sfc_render$f]]);
const _sfc_main$W = {};
const _hoisted_1$J = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
};
function _sfc_render$e(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$J, _cache[0] || (_cache[0] = [
    createBaseVNode("path", { d: "M9,19c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l5.3-5.3L8.3,6.7c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l6,6c0.4,0.4,0.4,1,0,1.4l-6,6C9.5,18.9,9.3,19,9,19z" }, null, -1)
  ]));
}
var VTIconChevronRight = /* @__PURE__ */ _export_sfc(_sfc_main$W, [["render", _sfc_render$e]]);
const _sfc_main$V = {};
const _hoisted_1$I = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
};
function _sfc_render$d(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$I, _cache[0] || (_cache[0] = [
    createBaseVNode("path", { d: "M20.222 0c1.406 0 2.54 1.137 2.607 2.475V24l-2.677-2.273-1.47-1.338-1.604-1.398.67 2.205H3.71c-1.402 0-2.54-1.065-2.54-2.476V2.48C1.17 1.142 2.31.003 3.715.003h16.5L20.222 0zm-6.118 5.683h-.03l-.202.2c2.073.6 3.076 1.537 3.076 1.537-1.336-.668-2.54-1.002-3.744-1.137-.87-.135-1.74-.064-2.475 0h-.2c-.47 0-1.47.2-2.81.735-.467.203-.735.336-.735.336s1.002-1.002 3.21-1.537l-.135-.135s-1.672-.064-3.477 1.27c0 0-1.805 3.144-1.805 7.02 0 0 1 1.74 3.743 1.806 0 0 .4-.533.805-1.002-1.54-.468-2.14-1.404-2.14-1.404s.134.066.335.2h.06c.03 0 .044.015.06.03v.006c.016.016.03.03.06.03.33.136.66.27.93.4.466.202 1.065.403 1.8.536.93.135 1.996.2 3.21 0 .6-.135 1.2-.267 1.8-.535.39-.2.87-.4 1.397-.737 0 0-.6.936-2.205 1.404.33.466.795 1 .795 1 2.744-.06 3.81-1.8 3.87-1.726 0-3.87-1.815-7.02-1.815-7.02-1.635-1.214-3.165-1.26-3.435-1.26l.056-.02zm.168 4.413c.703 0 1.27.6 1.27 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334.002-.74.573-1.338 1.27-1.338zm-4.543 0c.7 0 1.266.6 1.266 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334 0-.74.57-1.338 1.27-1.338z" }, null, -1)
  ]));
}
var VTIconDiscord = /* @__PURE__ */ _export_sfc(_sfc_main$V, [["render", _sfc_render$d]]);
const _sfc_main$U = {};
const _hoisted_1$H = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  height: "24px",
  viewBox: "0 0 24 24",
  width: "24px"
};
function _sfc_render$c(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$H, _cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      d: "M0 0h24v24H0V0z",
      fill: "none"
    }, null, -1),
    createBaseVNode("path", { d: "M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z" }, null, -1)
  ]));
}
var VTIconExternalLink = /* @__PURE__ */ _export_sfc(_sfc_main$U, [["render", _sfc_render$c]]);
const _sfc_main$T = {};
const _hoisted_1$G = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
};
function _sfc_render$b(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$G, _cache[0] || (_cache[0] = [
    createBaseVNode("path", { d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" }, null, -1)
  ]));
}
var VTIconFacebook = /* @__PURE__ */ _export_sfc(_sfc_main$T, [["render", _sfc_render$b]]);
const _sfc_main$S = {};
const _hoisted_1$F = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
};
function _sfc_render$a(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$F, _cache[0] || (_cache[0] = [
    createBaseVNode("path", { d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" }, null, -1)
  ]));
}
var VTIconGitHub = /* @__PURE__ */ _export_sfc(_sfc_main$S, [["render", _sfc_render$a]]);
const _sfc_main$R = {};
const _hoisted_1$E = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
};
function _sfc_render$9(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$E, _cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    createBaseVNode("path", {
      d: " M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z ",
      class: "css-c4d79v"
    }, null, -1)
  ]));
}
var VTIconLanguages = /* @__PURE__ */ _export_sfc(_sfc_main$R, [["render", _sfc_render$9]]);
const _sfc_main$Q = {};
const _hoisted_1$D = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
};
function _sfc_render$8(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$D, _cache[0] || (_cache[0] = [
    createBaseVNode("path", { d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" }, null, -1)
  ]));
}
var VTIconLinkedIn = /* @__PURE__ */ _export_sfc(_sfc_main$Q, [["render", _sfc_render$8]]);
const _sfc_main$P = {};
const _hoisted_1$C = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
};
function _sfc_render$7(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$C, _cache[0] || (_cache[0] = [
    createBaseVNode("circle", {
      cx: "12",
      cy: "12",
      r: "2"
    }, null, -1),
    createBaseVNode("circle", {
      cx: "19",
      cy: "12",
      r: "2"
    }, null, -1),
    createBaseVNode("circle", {
      cx: "5",
      cy: "12",
      r: "2"
    }, null, -1)
  ]));
}
var VTIconMoreHorizontal = /* @__PURE__ */ _export_sfc(_sfc_main$P, [["render", _sfc_render$7]]);
const _sfc_main$O = {};
const _hoisted_1$B = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
};
function _sfc_render$6(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$B, _cache[0] || (_cache[0] = [
    createBaseVNode("path", { d: "M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z" }, null, -1)
  ]));
}
var VTIconMoon = /* @__PURE__ */ _export_sfc(_sfc_main$O, [["render", _sfc_render$6]]);
const _sfc_main$N = {};
const _hoisted_1$A = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
};
function _sfc_render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$A, _cache[0] || (_cache[0] = [
    createBaseVNode("path", { d: "M18.9,10.9h-6v-6c0-0.6-0.4-1-1-1s-1,0.4-1,1v6h-6c-0.6,0-1,0.4-1,1s0.4,1,1,1h6v6c0,0.6,0.4,1,1,1s1-0.4,1-1v-6h6c0.6,0,1-0.4,1-1S19.5,10.9,18.9,10.9z" }, null, -1)
  ]));
}
var VTIconPlus = /* @__PURE__ */ _export_sfc(_sfc_main$N, [["render", _sfc_render$5]]);
const _sfc_main$M = {};
const _hoisted_1$z = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
};
function _sfc_render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$z, _cache[0] || (_cache[0] = [
    createBaseVNode("path", { d: "M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" }, null, -1)
  ]));
}
var VTIconSlack = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["render", _sfc_render$4]]);
const _sfc_main$L = {};
const _hoisted_1$y = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
};
function _sfc_render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$y, _cache[0] || (_cache[0] = [
    createStaticVNode('<path d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"></path><path d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path><path d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path><path d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"></path><path d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"></path><path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path><path d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path><path d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"></path><path d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"></path>', 9)
  ]));
}
var VTIconSun = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["render", _sfc_render$3]]);
const _sfc_main$K = {};
const _hoisted_1$x = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
};
function _sfc_render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$x, _cache[0] || (_cache[0] = [
    createBaseVNode("path", { d: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" }, null, -1)
  ]));
}
var VTIconTwitter = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["render", _sfc_render$2]]);
const _sfc_main$J = {};
const _hoisted_1$w = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
};
function _sfc_render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$w, _cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
    }, null, -1)
  ]));
}
var VTIconEdit = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["render", _sfc_render$1]]);
const _hoisted_1$v = {
  key: 0,
  class: "vt-backdrop"
};
const _sfc_main$I = defineComponent({
  __name: "VTBackdrop",
  props: {
    show: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, { name: "fade" }, {
        default: withCtx(() => [
          _ctx.show ? (openBlock(), createElementBlock("div", _hoisted_1$v)) : createCommentVNode("", true)
        ]),
        _: 1
      });
    };
  }
});
const focusedElement = ref();
let active = false;
let listeners = 0;
function useFocusContainer(options) {
  const containsFocus = ref(false);
  if (typeof window !== "undefined") {
    !active && activateFocusTracking();
    listeners++;
    const unwatch = watch(focusedElement, (el) => {
      var _a2, _b2, _c;
      if (el === options.elRef.value || ((_a2 = options.elRef.value) == null ? void 0 : _a2.contains(el))) {
        containsFocus.value = true;
        (_b2 = options.onFocus) == null ? void 0 : _b2.call(options);
      } else {
        containsFocus.value = false;
        (_c = options.onBlur) == null ? void 0 : _c.call(options);
      }
    });
    onUnmounted(() => {
      unwatch();
      listeners--;
      if (!listeners) {
        deactivateFocusTracking();
      }
    });
  }
  return readonly(containsFocus);
}
function activateFocusTracking() {
  document.addEventListener("focusin", handleFocusIn);
  active = true;
  focusedElement.value = document.activeElement;
}
function deactivateFocusTracking() {
  document.removeEventListener("focusin", handleFocusIn);
}
function handleFocusIn() {
  focusedElement.value = document.activeElement;
}
const _sfc_main$H = defineComponent({
  __name: "VTLink",
  props: {
    href: {},
    noIcon: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const isExternal2 = computed(() => props.href && /^[a-z]+:/i.test(props.href));
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(_ctx.href ? "a" : "span"), {
        class: normalizeClass(["vt-link", { link: _ctx.href }]),
        href: _ctx.href,
        target: isExternal2.value ? "_blank" : void 0,
        rel: isExternal2.value ? "noopener noreferrer" : void 0
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default"),
          isExternal2.value && !_ctx.noIcon ? (openBlock(), createBlock(VTIconExternalLink, {
            key: 0,
            class: "vt-link-icon"
          })) : createCommentVNode("", true)
        ]),
        _: 3
      }, 8, ["class", "href", "target", "rel"]);
    };
  }
});
const _sfc_main$G = defineComponent({
  __name: "VTMenuLink",
  props: {
    item: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$H, {
        class: "vt-menu-link",
        href: _ctx.item.link
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(_ctx.item.text), 1)
        ]),
        _: 1
      }, 8, ["href"]);
    };
  }
});
const _hoisted_1$u = { class: "vt-menu-group" };
const _hoisted_2$i = {
  key: 0,
  class: "vt-menu-group-title"
};
const _sfc_main$F = defineComponent({
  __name: "VTMenuGroup",
  props: {
    text: {},
    items: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$u, [
        _ctx.text ? (openBlock(), createElementBlock("p", _hoisted_2$i, toDisplayString(_ctx.text), 1)) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.items, (item) => {
          return openBlock(), createElementBlock(Fragment, null, [
            "link" in item ? (openBlock(), createBlock(_sfc_main$G, {
              key: 0,
              item
            }, null, 8, ["item"])) : createCommentVNode("", true)
          ], 64);
        }), 256))
      ]);
    };
  }
});
const _hoisted_1$t = { class: "vt-menu" };
const _hoisted_2$h = {
  key: 0,
  class: "vt-menu-items"
};
const _sfc_main$E = defineComponent({
  __name: "VTMenu",
  props: {
    items: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$t, [
        _ctx.items ? (openBlock(), createElementBlock("div", _hoisted_2$h, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.items, (item) => {
            return openBlock(), createElementBlock(Fragment, {
              key: item.text
            }, [
              "link" in item ? (openBlock(), createBlock(_sfc_main$G, {
                key: 0,
                item
              }, null, 8, ["item"])) : (openBlock(), createBlock(_sfc_main$F, {
                key: 1,
                text: item.text,
                items: item.items
              }, null, 8, ["text", "items"]))
            ], 64);
          }), 128))
        ])) : createCommentVNode("", true),
        renderSlot(_ctx.$slots, "default")
      ]);
    };
  }
});
const _hoisted_1$s = ["aria-expanded", "aria-label"];
const _hoisted_2$g = {
  key: 0,
  class: "vt-flyout-button-text"
};
const _hoisted_3$b = { class: "vt-flyout-menu" };
const _sfc_main$D = defineComponent({
  __name: "VTFlyout",
  props: {
    button: {},
    items: {},
    label: {}
  },
  setup(__props) {
    const props = __props;
    const open = ref(false);
    const elRef = ref();
    const onBlur = () => {
      open.value = false;
    };
    useFocusContainer({
      elRef,
      onBlur
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "vt-flyout",
        ref_key: "elRef",
        ref: elRef,
        onMouseenter: _cache[1] || (_cache[1] = ($event) => open.value = true),
        onMouseleave: _cache[2] || (_cache[2] = ($event) => open.value = false)
      }, [
        createBaseVNode("button", {
          type: "button",
          class: "vt-flyout-button",
          "aria-haspopup": "true",
          "aria-expanded": open.value,
          "aria-label": _ctx.label,
          onClick: _cache[0] || (_cache[0] = ($event) => open.value = !open.value)
        }, [
          props.button ? (openBlock(), createElementBlock("span", _hoisted_2$g, [
            createTextVNode(toDisplayString(props.button) + " ", 1),
            createVNode(VTIconChevronDown, { class: "vt-flyout-button-text-icon" })
          ])) : (openBlock(), createBlock(VTIconMoreHorizontal, {
            key: 1,
            class: "vt-flyout-button-icon"
          }))
        ], 8, _hoisted_1$s),
        createBaseVNode("div", _hoisted_3$b, [
          createVNode(_sfc_main$E, { items: _ctx.items }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default")
            ]),
            _: 3
          }, 8, ["items"])
        ])
      ], 544);
    };
  }
});
const _hoisted_1$r = ["aria-expanded"];
const _sfc_main$C = defineComponent({
  __name: "VTHamburger",
  props: {
    active: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        type: "button",
        class: normalizeClass(["vt-hamburger", { "is-active": _ctx.active }]),
        "aria-label": "mobile navigation",
        "aria-expanded": _ctx.active,
        "aria-controls": "VPNavScreen"
      }, _cache[0] || (_cache[0] = [
        createBaseVNode("span", { class: "vt-hamburger-container" }, [
          createBaseVNode("span", { class: "vt-hamburger-top" }),
          createBaseVNode("span", { class: "vt-hamburger-middle" }),
          createBaseVNode("span", { class: "vt-hamburger-bottom" })
        ], -1)
      ]), 10, _hoisted_1$r);
    };
  }
});
const _hoisted_1$q = ["href", "title", "target"];
const _hoisted_2$f = { class: "visually-hidden" };
const _sfc_main$B = defineComponent({
  __name: "VTSocialLink",
  props: {
    size: {},
    icon: {},
    link: {}
  },
  setup(__props) {
    const props = __props;
    const target = /^[a-z]+:/i.test(props.link) ? `_blank` : void 0;
    const icons = {
      discord: VTIconDiscord,
      facebook: VTIconFacebook,
      github: VTIconGitHub,
      linkedin: VTIconLinkedIn,
      slack: VTIconSlack,
      twitter: VTIconTwitter,
      languages: VTIconLanguages
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("a", {
        class: normalizeClass(["vt-social-link", {
          "is-small": _ctx.size === "small",
          "is-medium": _ctx.size === "medium"
        }]),
        href: _ctx.link,
        title: _ctx.icon,
        target: unref(target),
        rel: "noopener noreferrer"
      }, [
        (openBlock(), createBlock(resolveDynamicComponent(icons[_ctx.icon]), { class: "vt-social-link-icon" })),
        createBaseVNode("span", _hoisted_2$f, toDisplayString(_ctx.icon), 1)
      ], 10, _hoisted_1$q);
    };
  }
});
const _hoisted_1$p = { class: "vt-social-links" };
const _sfc_main$A = defineComponent({
  __name: "VTSocialLinks",
  props: {
    size: {},
    links: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$p, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.links, ({ link: link2, icon }) => {
          return openBlock(), createBlock(_sfc_main$B, {
            key: link2,
            size: _ctx.size,
            icon,
            link: link2
          }, null, 8, ["size", "icon", "link"]);
        }), 128))
      ]);
    };
  }
});
const _sfc_main$z = {};
const _hoisted_1$o = {
  class: "vt-switch",
  type: "button",
  role: "switch"
};
const _hoisted_2$e = { class: "vt-switch-check" };
const _hoisted_3$a = {
  key: 0,
  class: "vt-switch-icon"
};
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("button", _hoisted_1$o, [
    createBaseVNode("span", _hoisted_2$e, [
      _ctx.$slots.default ? (openBlock(), createElementBlock("span", _hoisted_3$a, [
        renderSlot(_ctx.$slots, "default")
      ])) : createCommentVNode("", true)
    ])
  ]);
}
var VTSwitch = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["render", _sfc_render]]);
const storageKey$1 = "vue-theme-appearance";
const _sfc_main$y = defineComponent({
  __name: "VTSwitchAppearance",
  setup(__props) {
    const toggle = typeof localStorage !== "undefined" ? useAppearance() : () => {
    };
    function useAppearance() {
      let userPreference = localStorage.getItem(storageKey$1) || "auto";
      const query = window.matchMedia(`(prefers-color-scheme: dark)`);
      const classList = document.documentElement.classList;
      let isDark = userPreference === "auto" ? query.matches : userPreference === "dark";
      const setClass = (dark) => classList[dark ? "add" : "remove"]("dark");
      query.onchange = (e) => {
        if (userPreference === "auto") {
          setClass(isDark = e.matches);
        }
      };
      const toggle2 = () => {
        setClass(isDark = !isDark);
        localStorage.setItem(
          storageKey$1,
          userPreference = isDark ? query.matches ? "auto" : "dark" : query.matches ? "light" : "auto"
        );
      };
      return toggle2;
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(VTSwitch, {
        class: "vt-switch-appearance",
        "aria-label": "toggle dark mode",
        onClick: unref(toggle)
      }, {
        default: withCtx(() => [
          createVNode(VTIconSun, { class: "vt-switch-appearance-sun" }),
          createVNode(VTIconMoon, { class: "vt-switch-appearance-moon" })
        ]),
        _: 1
      }, 8, ["onClick"]);
    };
  }
});
var index = "";
const Content = defineComponent({
  name: "VitePressContent",
  setup() {
    const route = useRoute();
    return () => h("div", { style: { position: "relative" } }, [
      route.component ? h(route.component) : null
    ]);
  }
});
var Debug_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$n = { class: "block" };
defineComponent({
  __name: "Debug",
  setup(__props) {
    const data = useData();
    const el = ref(null);
    const open = ref(false);
    const tempData = reactive(data);
    watch(open, (value) => {
      if (!value) {
        el.value.scrollTop = 0;
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["debug", { open: open.value }]),
        ref_key: "el",
        ref: el,
        onClick: _cache[0] || (_cache[0] = ($event) => open.value = !open.value)
      }, [
        _cache[1] || (_cache[1] = createBaseVNode("p", { class: "title" }, "Debug", -1)),
        createBaseVNode("pre", _hoisted_1$n, toDisplayString(tempData), 1)
      ], 2);
    };
  }
});
const hashRE = /#.*$/;
const extRE = /(index)?\.(md|html)$/;
const outboundRE = /^[a-z]+:/i;
function isExternal(path) {
  return outboundRE.test(path);
}
function ensureStartingSlash(path) {
  return /^\//.test(path) ? path : `/${path}`;
}
function normalizeLink(url) {
  if (isExternal(url)) {
    return url;
  }
  const { pathname, search, hash } = new URL(url, "http://vuejs.org");
  return withBase(
    pathname.endsWith("/") || pathname.endsWith(".html") ? url : `${pathname.replace(/(\.md)?$/, ".html")}${search}${hash}`
  );
}
const inBrowser = typeof window !== "undefined";
const hashRef = ref(inBrowser ? location.hash : "");
if (inBrowser) {
  window.addEventListener("hashchange", () => {
    hashRef.value = location.hash;
  });
}
function isActive(currentPath, matchPath, asRegex = false) {
  if (matchPath === void 0) {
    return false;
  }
  currentPath = normalize(`/${currentPath}`);
  if (asRegex) {
    return new RegExp(matchPath).test(currentPath);
  } else {
    if (normalize(matchPath) !== currentPath) {
      return false;
    }
    const hashMatch = matchPath.match(hashRE);
    if (hashMatch) {
      return hashRef.value === hashMatch[0];
    }
    return true;
  }
}
function normalize(path) {
  return decodeURI(path).replace(hashRE, "").replace(extRE, "");
}
function getSidebar(sidebar, path) {
  if (Array.isArray(sidebar)) {
    return sidebar;
  }
  path = ensureStartingSlash(path);
  for (const dir in sidebar) {
    if (path.startsWith(ensureStartingSlash(dir))) {
      return sidebar[dir];
    }
  }
  return [];
}
const configSymbol = Symbol("config");
function withConfigProvider(App) {
  return defineComponent({
    name: "VPConfigProvider",
    setup(_, { slots }) {
      const { theme } = useData();
      const config = computed(() => resolveConfig(theme.value));
      provide(configSymbol, config);
      return () => h(App, null, slots);
    }
  });
}
function useConfig() {
  return {
    config: inject(configSymbol)
  };
}
function resolveConfig(config) {
  var _a2;
  return Object.assign(
    {
      appearance: true
    },
    config,
    {
      nav: (_a2 = config.nav) == null ? void 0 : _a2.map(normalizeMenuItem),
      sidebar: config.sidebar && normalizeSideBar(config.sidebar)
    }
  );
}
function normalizeMenuItem(item) {
  if ("link" in item) {
    return Object.assign({}, item, {
      link: normalizeLink(item.link)
    });
  } else {
    return Object.assign({}, item, { items: item.items.map(normalizeMenuItem) });
  }
}
function normalizeSideBar(sidebar) {
  if (Array.isArray(sidebar)) {
    return sidebar.map(normalizeMenuItem);
  } else {
    const ret = {};
    for (const key in sidebar) {
      ret[key] = normalizeSideBar(sidebar[key]);
    }
    return ret;
  }
}
function useSidebar() {
  const route = useRoute();
  const { config } = useConfig();
  const { frontmatter } = useData();
  const isOpen = ref(false);
  const sidebar = computed(() => {
    const sidebarConfig = config.value.sidebar;
    const relativePath = route.data.relativePath;
    return sidebarConfig ? getSidebar(sidebarConfig, relativePath) : [];
  });
  const hasSidebar = computed(
    () => frontmatter.value.sidebar !== false && sidebar.value.length > 0
  );
  function open() {
    isOpen.value = true;
  }
  function close() {
    isOpen.value = false;
  }
  function toggle() {
    isOpen.value ? close() : open();
  }
  return {
    isOpen,
    sidebar,
    hasSidebar,
    open,
    close,
    toggle
  };
}
function useNav() {
  const isScreenOpen = ref(false);
  function openScreen() {
    isScreenOpen.value = true;
    window.addEventListener("resize", closeScreenOnTabletWindow);
  }
  function closeScreen() {
    isScreenOpen.value = false;
    window.removeEventListener("resize", closeScreenOnTabletWindow);
  }
  function toggleScreen() {
    isScreenOpen.value ? closeScreen() : openScreen();
  }
  function closeScreenOnTabletWindow() {
    window.outerWidth >= 768 && closeScreen();
  }
  return {
    isScreenOpen,
    openScreen,
    closeScreen,
    toggleScreen
  };
}
var VPNavBarTitle_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$m = {
  class: "VPNavBarTitle",
  href: "/"
};
const _hoisted_2$d = ["src"];
const _hoisted_3$9 = ["src"];
const _hoisted_4$6 = {
  key: 2,
  class: "logo",
  viewBox: "0 0 128 128",
  width: "24",
  height: "24"
};
const _hoisted_5$4 = {
  key: 3,
  class: "text"
};
const _hoisted_6$1 = {
  key: 4,
  class: "text"
};
const storageKey = "vue-theme-appearance";
const _sfc_main$x = defineComponent({
  __name: "VPNavBarTitle",
  setup(__props) {
    const { theme } = useData();
    const isDark = typeof localStorage !== "undefined" ? isDarkFn() : () => {
    };
    function isDarkFn() {
      const fn = () => {
        let userPreference = localStorage.getItem(storageKey) || "auto";
        const query = window.matchMedia(`(prefers-color-scheme: dark)`);
        return userPreference === "auto" ? query.matches : userPreference === "dark";
      };
      return fn;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("a", _hoisted_1$m, [
        unref(theme).logo && !unref(isDark)() ? (openBlock(), createElementBlock("img", {
          key: 0,
          src: unref(theme).logo,
          alt: "logo",
          class: "logo",
          width: "24",
          height: "24"
        }, null, 8, _hoisted_2$d)) : unref(theme).logoDark && unref(isDark)() ? (openBlock(), createElementBlock("img", {
          key: 1,
          src: unref(theme).logoDark,
          alt: "logo",
          class: "logo",
          width: "24",
          height: "24"
        }, null, 8, _hoisted_3$9)) : (openBlock(), createElementBlock("svg", _hoisted_4$6, _cache[0] || (_cache[0] = [
          createBaseVNode("path", {
            fill: "#42b883",
            d: "M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"
          }, null, -1),
          createBaseVNode("path", {
            fill: "#35495e",
            d: "M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z"
          }, null, -1)
        ]))),
        unref(theme).logoText ? (openBlock(), createElementBlock("span", _hoisted_5$4, toDisplayString(unref(theme).logoText), 1)) : (openBlock(), createElementBlock("span", _hoisted_6$1, "Vue.js"))
      ]);
    };
  }
});
var VPNavBarTitle = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["__scopeId", "data-v-5974738b"]]);
var style = "";
var VPNavBarSearch_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$l = {
  key: 0,
  class: "VPNavBarSearch"
};
const _hoisted_2$c = {
  type: "button",
  class: "DocSearch DocSearch-Button",
  "aria-label": "Search"
};
const _hoisted_3$8 = { class: "DocSearch-Button-Keys" };
const _sfc_main$w = defineComponent({
  __name: "VPNavBarSearch",
  setup(__props) {
    const { theme } = useData();
    const VPAlgoliaSearchBox = defineAsyncComponent(
      () => __vitePreload(() => import("./VPAlgoliaSearchBox.0c6db1d4.js"), true ? ["assets/VPAlgoliaSearchBox.0c6db1d4.js","assets/plugin-vue_export-helper.e5a60c03.js","assets/framework.58df9776.js"] : void 0)
    );
    const loaded = ref(false);
    const metaKey = ref();
    onMounted(() => {
      if (metaKey.value) {
        metaKey.value.textContent = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? "\u2318" : "Ctrl";
      }
      const handleSearchHotKey = (e) => {
        if (e.key === "k" && (e.ctrlKey || e.metaKey)) {
          e.preventDefault();
          load();
          remove();
        }
      };
      const remove = () => {
        window.removeEventListener("keydown", handleSearchHotKey);
      };
      window.addEventListener("keydown", handleSearchHotKey);
      onUnmounted(remove);
    });
    function load() {
      if (!loaded.value) {
        loaded.value = true;
      }
    }
    return (_ctx, _cache) => {
      return unref(theme).algolia ? (openBlock(), createElementBlock("div", _hoisted_1$l, [
        loaded.value ? (openBlock(), createBlock(unref(VPAlgoliaSearchBox), { key: 0 })) : (openBlock(), createElementBlock("div", {
          key: 1,
          id: "docsearch",
          onClick: load
        }, [
          createBaseVNode("button", _hoisted_2$c, [
            _cache[1] || (_cache[1] = createBaseVNode("span", { class: "DocSearch-Button-Container" }, [
              createBaseVNode("svg", {
                width: "20",
                height: "20",
                class: "DocSearch-Search-Icon",
                viewBox: "0 0 20 20"
              }, [
                createBaseVNode("path", {
                  d: "M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",
                  stroke: "currentColor",
                  fill: "none",
                  "fill-rule": "evenodd",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                })
              ]),
              createBaseVNode("span", { class: "DocSearch-Button-Placeholder" }, "Search")
            ], -1)),
            createBaseVNode("span", _hoisted_3$8, [
              createBaseVNode("span", {
                class: "DocSearch-Button-Key",
                ref_key: "metaKey",
                ref: metaKey
              }, "Meta", 512),
              _cache[0] || (_cache[0] = createBaseVNode("span", { class: "DocSearch-Button-Key" }, "K", -1))
            ])
          ])
        ]))
      ])) : createCommentVNode("", true);
    };
  }
});
var VPNavBarMenuLink_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$v = defineComponent({
  __name: "VPNavBarMenuLink",
  props: {
    item: {}
  },
  setup(__props) {
    const { page } = useData();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(_sfc_main$H), {
        class: normalizeClass({
          VPNavBarMenuLink: true,
          active: unref(isActive)(
            unref(page).relativePath,
            _ctx.item.activeMatch || _ctx.item.link,
            !!_ctx.item.activeMatch
          )
        }),
        href: _ctx.item.link,
        noIcon: true
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(_ctx.item.text), 1)
        ]),
        _: 1
      }, 8, ["class", "href"]);
    };
  }
});
var VPNavBarMenuLink = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["__scopeId", "data-v-dc63fdd0"]]);
var VPNavBarMenuGroup_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$u = defineComponent({
  __name: "VPNavBarMenuGroup",
  props: {
    item: {}
  },
  setup(__props) {
    const { page } = useData();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(_sfc_main$D), {
        class: normalizeClass({
          VPNavBarMenuGroup: true,
          active: unref(isActive)(unref(page).relativePath, _ctx.item.activeMatch, true)
        }),
        button: _ctx.item.text,
        items: _ctx.item.items
      }, null, 8, ["class", "button", "items"]);
    };
  }
});
var VPNavBarMenuGroup = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["__scopeId", "data-v-7d508524"]]);
var VPNavBarMenu_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$k = {
  key: 0,
  "aria-labelledby": "main-nav-aria-label",
  class: "VPNavBarMenu"
};
const _sfc_main$t = defineComponent({
  __name: "VPNavBarMenu",
  setup(__props) {
    const { config } = useConfig();
    return (_ctx, _cache) => {
      return unref(config).nav ? (openBlock(), createElementBlock("nav", _hoisted_1$k, [
        _cache[0] || (_cache[0] = createBaseVNode("span", {
          id: "main-nav-aria-label",
          class: "visually-hidden"
        }, "Main Navigation", -1)),
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(config).nav, (item) => {
          return openBlock(), createElementBlock(Fragment, {
            key: item.text
          }, [
            "link" in item ? (openBlock(), createBlock(VPNavBarMenuLink, {
              key: 0,
              item
            }, null, 8, ["item"])) : (openBlock(), createBlock(VPNavBarMenuGroup, {
              key: 1,
              item
            }, null, 8, ["item"]))
          ], 64);
        }), 128))
      ])) : createCommentVNode("", true);
    };
  }
});
var VPNavBarMenu = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["__scopeId", "data-v-6a1e42bc"]]);
var VPNavBarAppearance_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$j = {
  key: 0,
  class: "VPNavBarAppearance"
};
const _sfc_main$s = defineComponent({
  __name: "VPNavBarAppearance",
  setup(__props) {
    const { config } = useConfig();
    return (_ctx, _cache) => {
      return unref(config).appearance ? (openBlock(), createElementBlock("div", _hoisted_1$j, [
        createVNode(unref(_sfc_main$y))
      ])) : createCommentVNode("", true);
    };
  }
});
var VPNavBarAppearance = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["__scopeId", "data-v-315c73f1"]]);
var VPNavBarSocialLinks_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$r = defineComponent({
  __name: "VPNavBarSocialLinks",
  setup(__props) {
    const { config } = useConfig();
    return (_ctx, _cache) => {
      return unref(config).socialLinks ? (openBlock(), createBlock(unref(_sfc_main$A), {
        key: 0,
        class: "VPNavBarSocialLinks",
        size: "small",
        links: unref(config).socialLinks
      }, null, 8, ["links"])) : createCommentVNode("", true);
    };
  }
});
var VPNavBarSocialLinks = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["__scopeId", "data-v-002cf527"]]);
var VPNavBarExtra_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$i = {
  key: 0,
  class: "vt-menu-group"
};
const _hoisted_2$b = { class: "vt-menu-item item" };
const _hoisted_3$7 = { class: "vt-menu-action action" };
const _hoisted_4$5 = {
  key: 1,
  class: "vt-menu-group"
};
const _hoisted_5$3 = { class: "vt-menu-item item" };
const _sfc_main$q = defineComponent({
  __name: "VPNavBarExtra",
  setup(__props) {
    const { config } = useConfig();
    const hasContent = computed(() => {
      return config.value.appearance || config.value.socialLinks;
    });
    return (_ctx, _cache) => {
      return hasContent.value ? (openBlock(), createBlock(unref(_sfc_main$D), {
        key: 0,
        class: "VPNavBarExtra",
        label: "extra navigation"
      }, {
        default: withCtx(() => [
          unref(config).appearance ? (openBlock(), createElementBlock("div", _hoisted_1$i, [
            createBaseVNode("div", _hoisted_2$b, [
              _cache[0] || (_cache[0] = createBaseVNode("p", { class: "vt-menu-label" }, "Appearance", -1)),
              createBaseVNode("div", _hoisted_3$7, [
                createVNode(unref(_sfc_main$y))
              ])
            ])
          ])) : createCommentVNode("", true),
          unref(config).socialLinks ? (openBlock(), createElementBlock("div", _hoisted_4$5, [
            createBaseVNode("div", _hoisted_5$3, [
              createVNode(unref(_sfc_main$A), {
                class: "social-links",
                size: "small",
                links: unref(config).socialLinks
              }, null, 8, ["links"])
            ])
          ])) : createCommentVNode("", true)
        ]),
        _: 1
      })) : createCommentVNode("", true);
    };
  }
});
var VPNavBarExtra = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["__scopeId", "data-v-8b8c786e"]]);
var VPNavBarHamburger_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$p = defineComponent({
  __name: "VPNavBarHamburger",
  props: {
    active: { type: Boolean }
  },
  setup(__props) {
    const { config } = useConfig();
    const hasContent = computed(() => {
      return config.value.appearance || config.value.socialLinks;
    });
    return (_ctx, _cache) => {
      return hasContent.value ? (openBlock(), createBlock(unref(_sfc_main$C), {
        key: 0,
        class: "VPNavBarHamburger",
        active: _ctx.active
      }, null, 8, ["active"])) : createCommentVNode("", true);
    };
  }
});
var VPNavBarHamburger = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["__scopeId", "data-v-737ae8bc"]]);
var VPNavBar_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$h = { class: "VPNavBar" };
const _hoisted_2$a = { class: "container" };
const _hoisted_3$6 = { class: "content" };
const _sfc_main$o = defineComponent({
  __name: "VPNavBar",
  props: {
    isScreenOpen: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$h, [
        createBaseVNode("div", _hoisted_2$a, [
          createVNode(VPNavBarTitle),
          createBaseVNode("div", _hoisted_3$6, [
            createVNode(_sfc_main$w, { class: "search" }),
            createVNode(VPNavBarMenu, { class: "menu" }),
            createVNode(VPNavBarAppearance, { class: "appearance" }),
            createVNode(VPNavBarSocialLinks, { class: "social-links" }),
            createVNode(VPNavBarExtra, { class: "extra" }),
            createVNode(VPNavBarHamburger, {
              class: "hamburger",
              active: _ctx.isScreenOpen,
              onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("toggle-screen"))
            }, null, 8, ["active"])
          ])
        ])
      ]);
    };
  }
});
var VPNavBar = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["__scopeId", "data-v-023241f2"]]);
function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  } else {
    return Array.from(arr);
  }
}
var hasPassiveEvents = false;
if (typeof window !== "undefined") {
  var passiveTestOptions = {
    get passive() {
      hasPassiveEvents = true;
      return void 0;
    }
  };
  window.addEventListener("testPassive", null, passiveTestOptions);
  window.removeEventListener("testPassive", null, passiveTestOptions);
}
var isIosDevice = typeof window !== "undefined" && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
var locks = [];
var documentListenerAdded = false;
var initialClientY = -1;
var previousBodyOverflowSetting = void 0;
var previousBodyPaddingRight = void 0;
var allowTouchMove = function allowTouchMove2(el) {
  return locks.some(function(lock) {
    if (lock.options.allowTouchMove && lock.options.allowTouchMove(el)) {
      return true;
    }
    return false;
  });
};
var preventDefault = function preventDefault2(rawEvent) {
  var e = rawEvent || window.event;
  if (allowTouchMove(e.target)) {
    return true;
  }
  if (e.touches.length > 1)
    return true;
  if (e.preventDefault)
    e.preventDefault();
  return false;
};
var setOverflowHidden = function setOverflowHidden2(options) {
  if (previousBodyPaddingRight === void 0) {
    var _reserveScrollBarGap = !!options && options.reserveScrollBarGap === true;
    var scrollBarGap = window.innerWidth - document.documentElement.clientWidth;
    if (_reserveScrollBarGap && scrollBarGap > 0) {
      previousBodyPaddingRight = document.body.style.paddingRight;
      document.body.style.paddingRight = scrollBarGap + "px";
    }
  }
  if (previousBodyOverflowSetting === void 0) {
    previousBodyOverflowSetting = document.body.style.overflow;
    document.body.style.overflow = "hidden";
  }
};
var restoreOverflowSetting = function restoreOverflowSetting2() {
  if (previousBodyPaddingRight !== void 0) {
    document.body.style.paddingRight = previousBodyPaddingRight;
    previousBodyPaddingRight = void 0;
  }
  if (previousBodyOverflowSetting !== void 0) {
    document.body.style.overflow = previousBodyOverflowSetting;
    previousBodyOverflowSetting = void 0;
  }
};
var isTargetElementTotallyScrolled = function isTargetElementTotallyScrolled2(targetElement) {
  return targetElement ? targetElement.scrollHeight - targetElement.scrollTop <= targetElement.clientHeight : false;
};
var handleScroll = function handleScroll2(event, targetElement) {
  var clientY = event.targetTouches[0].clientY - initialClientY;
  if (allowTouchMove(event.target)) {
    return false;
  }
  if (targetElement && targetElement.scrollTop === 0 && clientY > 0) {
    return preventDefault(event);
  }
  if (isTargetElementTotallyScrolled(targetElement) && clientY < 0) {
    return preventDefault(event);
  }
  event.stopPropagation();
  return true;
};
var disableBodyScroll = function disableBodyScroll2(targetElement, options) {
  if (!targetElement) {
    console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");
    return;
  }
  if (locks.some(function(lock2) {
    return lock2.targetElement === targetElement;
  })) {
    return;
  }
  var lock = {
    targetElement,
    options: options || {}
  };
  locks = [].concat(_toConsumableArray(locks), [lock]);
  if (isIosDevice) {
    targetElement.ontouchstart = function(event) {
      if (event.targetTouches.length === 1) {
        initialClientY = event.targetTouches[0].clientY;
      }
    };
    targetElement.ontouchmove = function(event) {
      if (event.targetTouches.length === 1) {
        handleScroll(event, targetElement);
      }
    };
    if (!documentListenerAdded) {
      document.addEventListener("touchmove", preventDefault, hasPassiveEvents ? { passive: false } : void 0);
      documentListenerAdded = true;
    }
  } else {
    setOverflowHidden(options);
  }
};
var clearAllBodyScrollLocks = function clearAllBodyScrollLocks2() {
  if (isIosDevice) {
    locks.forEach(function(lock) {
      lock.targetElement.ontouchstart = null;
      lock.targetElement.ontouchmove = null;
    });
    if (documentListenerAdded) {
      document.removeEventListener("touchmove", preventDefault, hasPassiveEvents ? { passive: false } : void 0);
      documentListenerAdded = false;
    }
    initialClientY = -1;
  } else {
    restoreOverflowSetting();
  }
  locks = [];
};
var VPNavScreenMenuLink_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$n = defineComponent({
  __name: "VPNavScreenMenuLink",
  props: {
    text: {},
    link: {}
  },
  setup(__props) {
    const closeScreen = inject("close-screen");
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(_sfc_main$H), {
        class: "VPNavScreenMenuLink",
        href: _ctx.link,
        onClick: unref(closeScreen)
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(_ctx.text), 1)
        ]),
        _: 1
      }, 8, ["href", "onClick"]);
    };
  }
});
var VPNavScreenMenuLink = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["__scopeId", "data-v-0a87216f"]]);
var VPNavScreenMenuGroupLink_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$m = defineComponent({
  __name: "VPNavScreenMenuGroupLink",
  props: {
    text: {},
    link: {}
  },
  setup(__props) {
    const closeScreen = inject("close-screen");
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(_sfc_main$H), {
        class: "VPNavScreenMenuGroupLink",
        href: _ctx.link,
        onClick: unref(closeScreen)
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(_ctx.text), 1)
        ]),
        _: 1
      }, 8, ["href", "onClick"]);
    };
  }
});
var VPNavScreenMenuGroupLink = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__scopeId", "data-v-cb59e258"]]);
var VPNavScreenMenuGroupSection_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$g = { class: "VPNavScreenMenuGroupSection" };
const _hoisted_2$9 = {
  key: 0,
  class: "title"
};
const _sfc_main$l = defineComponent({
  __name: "VPNavScreenMenuGroupSection",
  props: {
    text: {},
    items: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$g, [
        _ctx.text ? (openBlock(), createElementBlock("p", _hoisted_2$9, toDisplayString(_ctx.text), 1)) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.items, (item) => {
          return openBlock(), createBlock(VPNavScreenMenuGroupLink, {
            key: item.text,
            text: item.text,
            link: item.link
          }, null, 8, ["text", "link"]);
        }), 128))
      ]);
    };
  }
});
var VPNavScreenMenuGroupSection = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["__scopeId", "data-v-6faa7dda"]]);
var VPNavScreenMenuGroup_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$f = ["aria-controls", "aria-expanded"];
const _hoisted_2$8 = { class: "button-text" };
const _hoisted_3$5 = ["id"];
const _hoisted_4$4 = {
  key: 1,
  class: "group"
};
const _sfc_main$k = defineComponent({
  __name: "VPNavScreenMenuGroup",
  props: {
    text: {},
    items: {}
  },
  setup(__props) {
    const props = __props;
    const isOpen = ref(false);
    const groupId = computed(
      () => `NavScreenGroup-${props.text.replace(" ", "-").toLowerCase()}`
    );
    function toggle() {
      isOpen.value = !isOpen.value;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["VPNavScreenMenuGroup", { open: isOpen.value }])
      }, [
        createBaseVNode("button", {
          class: "button",
          "aria-controls": groupId.value,
          "aria-expanded": isOpen.value,
          onClick: toggle
        }, [
          createBaseVNode("span", _hoisted_2$8, toDisplayString(_ctx.text), 1),
          createVNode(unref(VTIconPlus), { class: "button-icon" })
        ], 8, _hoisted_1$f),
        createBaseVNode("div", {
          id: groupId.value,
          class: "items"
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.items, (item) => {
            return openBlock(), createElementBlock(Fragment, {
              key: item.text
            }, [
              "link" in item ? (openBlock(), createElementBlock("div", {
                key: item.text,
                class: "item"
              }, [
                createVNode(VPNavScreenMenuGroupLink, {
                  text: item.text,
                  link: item.link
                }, null, 8, ["text", "link"])
              ])) : (openBlock(), createElementBlock("div", _hoisted_4$4, [
                createVNode(VPNavScreenMenuGroupSection, {
                  text: item.text,
                  items: item.items
                }, null, 8, ["text", "items"])
              ]))
            ], 64);
          }), 128))
        ], 8, _hoisted_3$5)
      ], 2);
    };
  }
});
var VPNavScreenMenuGroup = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__scopeId", "data-v-351ae094"]]);
const _hoisted_1$e = {
  key: 0,
  class: "VPNavScreenMenu"
};
const _sfc_main$j = defineComponent({
  __name: "VPNavScreenMenu",
  setup(__props) {
    const { config } = useConfig();
    return (_ctx, _cache) => {
      return unref(config).nav ? (openBlock(), createElementBlock("nav", _hoisted_1$e, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(config).nav, (item) => {
          return openBlock(), createElementBlock(Fragment, {
            key: item.text
          }, [
            "link" in item ? (openBlock(), createBlock(VPNavScreenMenuLink, {
              key: 0,
              text: item.text,
              link: item.link
            }, null, 8, ["text", "link"])) : (openBlock(), createBlock(VPNavScreenMenuGroup, {
              key: 1,
              text: item.text || "",
              items: item.items
            }, null, 8, ["text", "items"]))
          ], 64);
        }), 128))
      ])) : createCommentVNode("", true);
    };
  }
});
var VPNavScreenAppearance_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$d = {
  key: 0,
  class: "VPNavScreenAppearance"
};
const _sfc_main$i = defineComponent({
  __name: "VPNavScreenAppearance",
  setup(__props) {
    const { config } = useConfig();
    return (_ctx, _cache) => {
      return unref(config).appearance ? (openBlock(), createElementBlock("div", _hoisted_1$d, [
        _cache[0] || (_cache[0] = createBaseVNode("p", { class: "text" }, "Appearance", -1)),
        createVNode(unref(_sfc_main$y))
      ])) : createCommentVNode("", true);
    };
  }
});
var VPNavScreenAppearance = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__scopeId", "data-v-0870c50a"]]);
const _sfc_main$h = defineComponent({
  __name: "VPNavScreenSocialLinks",
  setup(__props) {
    const { config } = useConfig();
    return (_ctx, _cache) => {
      return unref(config).socialLinks ? (openBlock(), createBlock(unref(_sfc_main$A), {
        key: 0,
        class: "VPNavScreenSocialLinks",
        size: "medium",
        links: unref(config).socialLinks
      }, null, 8, ["links"])) : createCommentVNode("", true);
    };
  }
});
var VPNavScreen_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$c = { class: "container" };
const _sfc_main$g = defineComponent({
  __name: "VPNavScreen",
  props: {
    open: { type: Boolean }
  },
  setup(__props) {
    const screen = ref(null);
    function lockBodyScroll() {
      disableBodyScroll(screen.value, { reserveScrollBarGap: true });
    }
    function unlockBodyScroll() {
      clearAllBodyScrollLocks();
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, {
        name: "fade",
        onEnter: lockBodyScroll,
        onAfterLeave: unlockBodyScroll
      }, {
        default: withCtx(() => [
          _ctx.open ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "VPNavScreen",
            ref_key: "screen",
            ref: screen
          }, [
            createBaseVNode("div", _hoisted_1$c, [
              createVNode(_sfc_main$j, { class: "menu" }),
              createVNode(VPNavScreenAppearance, { class: "appearance" }),
              createVNode(_sfc_main$h, { class: "social-links" })
            ])
          ], 512)) : createCommentVNode("", true)
        ]),
        _: 1
      });
    };
  }
});
var VPNavScreen = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-1f9a089b"]]);
var VPNav_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$f = defineComponent({
  __name: "VPNav",
  setup(__props) {
    const { isScreenOpen, closeScreen, toggleScreen } = useNav();
    const { hasSidebar } = useSidebar();
    provide("close-screen", closeScreen);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("header", {
        class: normalizeClass(["VPNav nav-bar", { stick: !unref(hasSidebar) }])
      }, [
        createVNode(VPNavBar, {
          "is-screen-open": unref(isScreenOpen),
          onToggleScreen: unref(toggleScreen)
        }, null, 8, ["is-screen-open", "onToggleScreen"]),
        createVNode(VPNavScreen, { open: unref(isScreenOpen) }, null, 8, ["open"])
      ], 2);
    };
  }
});
var VPNav = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-120da9e6"]]);
var VPLocalNav_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$b = {
  key: 0,
  class: "VPLocalNav"
};
const _hoisted_2$7 = ["aria-expanded"];
const _sfc_main$e = defineComponent({
  __name: "VPLocalNav",
  props: {
    open: { type: Boolean }
  },
  setup(__props) {
    const { hasSidebar } = useSidebar();
    const { frontmatter } = useData();
    function scrollToTop() {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
    return (_ctx, _cache) => {
      return unref(hasSidebar) ? (openBlock(), createElementBlock("div", _hoisted_1$b, [
        createBaseVNode("button", {
          class: "menu",
          "aria-expanded": _ctx.open,
          "aria-controls": "VPSidebarNav",
          onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("open-menu"))
        }, [
          createVNode(unref(VTIconAlignLeft), { class: "menu-icon" }),
          _cache[1] || (_cache[1] = createBaseVNode("span", { class: "menu-text" }, "Menu", -1))
        ], 8, _hoisted_2$7),
        unref(frontmatter).returnToTop !== false ? (openBlock(), createElementBlock("a", {
          key: 0,
          class: "top-link",
          href: "#",
          onClick: scrollToTop
        }, "Return to top")) : createCommentVNode("", true)
      ])) : createCommentVNode("", true);
    };
  }
});
var VPLocalNav = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-38885c70"]]);
var VPSkipLink_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$d = defineComponent({
  __name: "VPSkipLink",
  setup(__props) {
    const route = useRoute();
    const backToTop = ref();
    watch(
      () => route.path,
      () => backToTop.value.focus()
    );
    const focusOnTargetAnchor = ({ target }) => {
      const el = document.querySelector(
        target.hash
      );
      if (el) {
        const removeTabIndex = () => {
          el.removeAttribute("tabindex");
          el.removeEventListener("blur", removeTabIndex);
        };
        el.setAttribute("tabindex", "-1");
        el.addEventListener("blur", removeTabIndex);
        el.focus();
        window.scrollTo(0, 0);
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("span", {
          ref_key: "backToTop",
          ref: backToTop,
          tabindex: "-1"
        }, null, 512),
        createBaseVNode("a", {
          href: "#VPContent",
          class: "VPSkipLink visually-hidden",
          onClick: focusOnTargetAnchor
        }, " Skip to content ")
      ], 64);
    };
  }
});
var VPSkipLink = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-278575dc"]]);
const _hoisted_1$a = {
  class: "visually-hidden",
  "aria-live": "polite"
};
const _sfc_main$c = defineComponent({
  __name: "VPAnnouncer",
  setup(__props) {
    const { page } = useData();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$a, toDisplayString(unref(page).title) + " has loaded", 1);
    };
  }
});
var VPSidebarLink_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$9 = ["href"];
const _hoisted_2$6 = { class: "link-text" };
const _sfc_main$b = defineComponent({
  __name: "VPSidebarLink",
  props: {
    item: {}
  },
  setup(__props) {
    const { page } = useData();
    const closeSideBar = inject("close-sidebar");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("a", {
        class: normalizeClass({ link: true, active: unref(isActive)(unref(page).relativePath, _ctx.item.link) }),
        href: _ctx.item.link,
        onClick: _cache[0] || (_cache[0] = (...args) => unref(closeSideBar) && unref(closeSideBar)(...args))
      }, [
        createBaseVNode("p", _hoisted_2$6, toDisplayString(_ctx.item.text), 1)
      ], 10, _hoisted_1$9);
    };
  }
});
var VPSidebarLink = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-f9e145ee"]]);
var VPSidebarGroup_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$8 = { class: "VPSidebarGroup" };
const _hoisted_2$5 = { class: "title" };
const _sfc_main$a = defineComponent({
  __name: "VPSidebarGroup",
  props: {
    text: {},
    items: {}
  },
  setup(__props) {
    const props = __props;
    const { page } = useData();
    function hasActiveLink() {
      const { relativePath } = page.value;
      return props.items.some((item) => isActive(relativePath, item.link));
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", _hoisted_1$8, [
        createBaseVNode("div", _hoisted_2$5, [
          createBaseVNode("h2", {
            class: normalizeClass(["title-text", { active: hasActiveLink() }])
          }, toDisplayString(_ctx.text), 3)
        ]),
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.items, (item) => {
          return openBlock(), createBlock(VPSidebarLink, {
            key: item.link,
            item
          }, null, 8, ["item"]);
        }), 128))
      ]);
    };
  }
});
var VPSidebarGroup = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-8aa87b8a"]]);
var VPSidebar_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$7 = {
  id: "VPSidebarNav",
  "aria-labelledby": "sidebar-aria-label",
  tabindex: "-1"
};
const _sfc_main$9 = defineComponent({
  __name: "VPSidebar",
  props: {
    open: { type: Boolean }
  },
  setup(__props) {
    const { sidebar, hasSidebar } = useSidebar();
    const props = __props;
    let navEl = ref(null);
    watchPostEffect(async () => {
      var _a2;
      if (props.open) {
        await nextTick();
        (_a2 = navEl.value) == null ? void 0 : _a2.focus();
      }
    });
    return (_ctx, _cache) => {
      return unref(hasSidebar) ? (openBlock(), createElementBlock("aside", {
        key: 0,
        ref_key: "navEl",
        ref: navEl,
        class: normalizeClass(["VPSidebar", { open: _ctx.open }]),
        onClick: _cache[0] || (_cache[0] = withModifiers(() => {
        }, ["stop"]))
      }, [
        createBaseVNode("nav", _hoisted_1$7, [
          renderSlot(_ctx.$slots, "top", {}, void 0, true),
          _cache[1] || (_cache[1] = createBaseVNode("span", {
            id: "sidebar-aria-label",
            class: "visually-hidden"
          }, "Sidebar Navigation", -1)),
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(sidebar), (group) => {
            return openBlock(), createElementBlock("div", {
              key: group.text,
              class: "group"
            }, [
              createVNode(VPSidebarGroup, {
                text: group.text,
                items: group.items
              }, null, 8, ["text", "items"])
            ]);
          }), 128)),
          renderSlot(_ctx.$slots, "bottom", {}, void 0, true)
        ])
      ], 2)) : createCommentVNode("", true);
    };
  }
});
var VPSidebar = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-7c4cef86"]]);
var VPFooter_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$6 = { class: "VPFooter" };
const _hoisted_2$4 = {
  key: 0,
  class: "license"
};
const _hoisted_3$4 = {
  key: 1,
  class: "copyright"
};
const _sfc_main$8 = defineComponent({
  __name: "VPFooter",
  setup(__props) {
    const { theme } = useData();
    return (_ctx, _cache) => {
      var _a2, _b2;
      return openBlock(), createElementBlock("div", _hoisted_1$6, [
        ((_a2 = unref(theme).footer) == null ? void 0 : _a2.license) ? (openBlock(), createElementBlock("p", _hoisted_2$4, [
          _cache[0] || (_cache[0] = createTextVNode(" Released under the ")),
          createVNode(unref(_sfc_main$H), {
            class: "link",
            href: unref(theme).footer.license.link,
            "no-icon": ""
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(theme).footer.license.text), 1)
            ]),
            _: 1
          }, 8, ["href"]),
          _cache[1] || (_cache[1] = createTextVNode(". "))
        ])) : createCommentVNode("", true),
        ((_b2 = unref(theme).footer) == null ? void 0 : _b2.copyright) ? (openBlock(), createElementBlock("p", _hoisted_3$4, toDisplayString(unref(theme).footer.copyright), 1)) : createCommentVNode("", true)
      ]);
    };
  }
});
var VPFooter = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-2f067d01"]]);
const _hoisted_1$5 = { class: "VPContentPage" };
const _sfc_main$7 = defineComponent({
  __name: "VPContentPage",
  setup(__props) {
    const { frontmatter } = useData();
    return (_ctx, _cache) => {
      const _component_Content = resolveComponent("Content");
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
        createBaseVNode("main", null, [
          createVNode(_component_Content)
        ]),
        renderSlot(_ctx.$slots, "footer-before"),
        unref(frontmatter).footer !== false ? (openBlock(), createBlock(VPFooter, { key: 0 })) : createCommentVNode("", true),
        renderSlot(_ctx.$slots, "footer-after")
      ]);
    };
  }
});
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
const isClient = typeof window !== "undefined";
function tryOnMounted(fn, sync = true) {
  if (getCurrentInstance())
    onMounted(fn);
  else if (sync)
    fn();
  else
    nextTick(fn);
}
const defaultWindow = isClient ? window : void 0;
isClient ? window.document : void 0;
isClient ? window.navigator : void 0;
isClient ? window.location : void 0;
function useMediaQuery(query, options = {}) {
  const { window: window2 = defaultWindow } = options;
  let mediaQuery;
  const matches = ref(false);
  const update = () => {
    if (!window2)
      return;
    if (!mediaQuery)
      mediaQuery = window2.matchMedia(query);
    matches.value = mediaQuery.matches;
  };
  tryOnMounted(() => {
    update();
    if (!mediaQuery)
      return;
    if ("addEventListener" in mediaQuery)
      mediaQuery.addEventListener("change", update);
    else
      mediaQuery.addListener(update);
    tryOnScopeDispose(() => {
      if ("removeEventListener" in update)
        mediaQuery.removeEventListener("change", update);
      else
        mediaQuery.removeListener(update);
    });
  });
  return matches;
}
const _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey = "__vueuse_ssr_handlers__";
_global[globalKey] = _global[globalKey] || {};
_global[globalKey];
var _a, _b;
isClient && (window == null ? void 0 : window.navigator) && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.platform) && /iP(ad|hone|od)/.test((_b = window == null ? void 0 : window.navigator) == null ? void 0 : _b.platform);
var __defProp$3 = Object.defineProperty;
var __getOwnPropSymbols$3 = Object.getOwnPropertySymbols;
var __hasOwnProp$3 = Object.prototype.hasOwnProperty;
var __propIsEnum$3 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3 = (obj, key, value) => key in obj ? __defProp$3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3.call(b, prop))
      __defNormalProp$3(a, prop, b[prop]);
  if (__getOwnPropSymbols$3)
    for (var prop of __getOwnPropSymbols$3(b)) {
      if (__propIsEnum$3.call(b, prop))
        __defNormalProp$3(a, prop, b[prop]);
    }
  return a;
};
const initialRect = {
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  height: 0,
  width: 0
};
__spreadValues$3({
  text: ""
}, initialRect);
function resolveHeaders(headers) {
  return mapHeaders(groupHeaders(headers));
}
function groupHeaders(headers) {
  headers = headers.map((h2) => Object.assign({}, h2));
  let lastH2;
  for (const h2 of headers) {
    if (h2.level === 2) {
      lastH2 = h2;
    } else if (lastH2 && h2.level <= 3) {
      (lastH2.children || (lastH2.children = [])).push(h2);
    }
  }
  return headers.filter((h2) => h2.level === 2);
}
function mapHeaders(headers) {
  return headers.map((header) => ({
    text: header.title,
    link: `#${header.slug}`,
    children: header.children ? mapHeaders(header.children) : void 0,
    hidden: header.hidden
  }));
}
function useActiveAnchor(container, bg) {
  const isOutlineEnabled = useMediaQuery("(min-width: 1280px)");
  const onScroll = throttleAndDebounce(setActiveLink, 100);
  function setActiveLink() {
    if (!isOutlineEnabled.value) {
      return;
    }
    const links = [].slice.call(
      container.value.querySelectorAll(".outline-link")
    );
    const anchors = [].slice.call(document.querySelectorAll(".content .header-anchor")).filter(
      (anchor) => links.some((link2) => link2.hash === anchor.hash)
    );
    if (anchors.length && window.scrollY + window.innerHeight === document.body.offsetHeight) {
      activateLink(anchors[anchors.length - 1].hash);
      return;
    }
    for (let i = 0; i < anchors.length; i++) {
      const anchor = anchors[i];
      const nextAnchor = anchors[i + 1];
      const [isActive2, hash] = isAnchorActive(i, anchor, nextAnchor);
      if (isActive2) {
        history.replaceState(null, document.title, hash ? hash : " ");
        activateLink(hash);
        return;
      }
    }
  }
  let prevActiveLink = null;
  function activateLink(hash) {
    if (prevActiveLink) {
      prevActiveLink.classList.remove("active");
    }
    const activeLink = prevActiveLink = hash == null ? null : container.value.querySelector(
      `a[href="${decodeURIComponent(hash)}"]`
    );
    if (activeLink) {
      activeLink.classList.add("active");
      bg.value.style.opacity = "1";
      bg.value.style.top = activeLink.offsetTop + 33 + "px";
    } else {
      bg.value.style.opacity = "0";
      bg.value.style.top = "33px";
    }
  }
  onMounted(() => {
    requestAnimationFrame(setActiveLink);
    window.addEventListener("scroll", onScroll);
  });
  onUpdated(() => {
    activateLink(location.hash);
  });
  onUnmounted(() => {
    window.removeEventListener("scroll", onScroll);
  });
}
const pageOffset = 56;
function getAnchorTop(anchor) {
  return anchor.parentElement.offsetTop - pageOffset - 15;
}
function isAnchorActive(index2, anchor, nextAnchor) {
  const scrollTop = window.scrollY;
  if (index2 === 0 && scrollTop === 0) {
    return [true, null];
  }
  if (scrollTop < getAnchorTop(anchor)) {
    return [false, null];
  }
  if (!nextAnchor || scrollTop < getAnchorTop(nextAnchor)) {
    return [true, anchor.hash];
  }
  return [false, null];
}
function throttleAndDebounce(fn, delay) {
  let timeout;
  let called = false;
  return () => {
    if (timeout) {
      clearTimeout(timeout);
    }
    if (!called) {
      fn();
      called = true;
      setTimeout(() => {
        called = false;
      }, delay);
    } else {
      timeout = setTimeout(fn, delay);
    }
  };
}
var VPContentDocOutline_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$4 = { "aria-labelledby": "doc-outline-aria-label" };
const _hoisted_2$3 = { class: "root" };
const _hoisted_3$3 = ["href"];
const _hoisted_4$3 = { key: 0 };
const _hoisted_5$2 = ["href"];
const _sfc_main$6 = defineComponent({
  __name: "VPContentDocOutline",
  setup(__props) {
    const { page, frontmatter } = useData();
    const container = ref();
    const marker = ref();
    useActiveAnchor(container, marker);
    const filterHeaders = inject("filter-headers", null);
    const filteredHeaders = computed(() => {
      return filterHeaders ? page.value.headers.map((h2) => {
        return filterHeaders(h2) ? h2 : Object.assign({}, h2, { hidden: true });
      }) : page.value.headers;
    });
    const handleClick = ({ target: el }) => {
      const id = "#" + el.href.split("#")[1];
      const heading = document.querySelector(id);
      heading == null ? void 0 : heading.focus();
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "VPContentDocOutline",
        ref_key: "container",
        ref: container
      }, [
        createBaseVNode("div", {
          class: "outline-marker",
          ref_key: "marker",
          ref: marker
        }, null, 512),
        _cache[1] || (_cache[1] = createBaseVNode("div", { class: "outline-title" }, "On this page", -1)),
        createBaseVNode("nav", _hoisted_1$4, [
          _cache[0] || (_cache[0] = createBaseVNode("span", {
            id: "doc-outline-aria-label",
            class: "visually-hidden"
          }, "Table of Contents for current page", -1)),
          createBaseVNode("ul", _hoisted_2$3, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(resolveHeaders)(
              filteredHeaders.value
            ), ({ text, link: link2, children, hidden }) => {
              return withDirectives((openBlock(), createElementBlock("li", null, [
                createBaseVNode("a", {
                  class: "outline-link",
                  href: link2,
                  onClick: handleClick
                }, toDisplayString(text), 9, _hoisted_3$3),
                children && unref(frontmatter).outline === "deep" ? (openBlock(), createElementBlock("ul", _hoisted_4$3, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(children, ({ text: text2, link: link22, hidden: hidden2 }) => {
                    return withDirectives((openBlock(), createElementBlock("li", null, [
                      createBaseVNode("a", {
                        class: "outline-link nested",
                        href: link22,
                        onClick: handleClick
                      }, toDisplayString(text2), 9, _hoisted_5$2)
                    ], 512)), [
                      [vShow, !hidden2]
                    ]);
                  }), 256))
                ])) : createCommentVNode("", true)
              ], 512)), [
                [vShow, !hidden]
              ]);
            }), 256))
          ])
        ])
      ], 512);
    };
  }
});
var VPContentDocOutline = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-238a0d02"]]);
var VPContentDocFooter_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$3 = {
  key: 0,
  class: "VPContentDocFooter"
};
const _hoisted_2$2 = ["href"];
const _hoisted_3$2 = { class: "desc" };
const _hoisted_4$2 = { class: "title" };
const _hoisted_5$1 = ["href"];
const _hoisted_6 = { class: "desc" };
const _hoisted_7 = { class: "title" };
const _sfc_main$5 = defineComponent({
  __name: "VPContentDocFooter",
  setup(__props) {
    const { page, theme } = useData();
    const links = computed(() => {
      const sidebar = getSidebar(theme.value.sidebar, page.value.relativePath);
      const candidates = getFlatSideBarLinks(sidebar);
      const index2 = candidates.findIndex(
        (link2) => isActive(page.value.relativePath, link2.link)
      );
      return {
        prev: candidates[index2 - 1],
        next: candidates[index2 + 1]
      };
    });
    function getFlatSideBarLinks(sidebar) {
      const links2 = [];
      for (const group of sidebar) {
        for (const link2 of group.items) {
          links2.push(link2);
        }
      }
      return links2;
    }
    return (_ctx, _cache) => {
      return links.value.prev || links.value.next ? (openBlock(), createElementBlock("footer", _hoisted_1$3, [
        links.value.prev ? (openBlock(), createElementBlock("a", {
          key: 0,
          class: "prev-link",
          href: unref(normalizeLink)(links.value.prev.link)
        }, [
          createBaseVNode("span", _hoisted_3$2, [
            createVNode(unref(VTIconChevronLeft), { class: "vt-link-icon" }),
            _cache[0] || (_cache[0] = createTextVNode(" Previous"))
          ]),
          createBaseVNode("span", _hoisted_4$2, toDisplayString(links.value.prev.text), 1)
        ], 8, _hoisted_2$2)) : createCommentVNode("", true),
        links.value.next ? (openBlock(), createElementBlock("a", {
          key: 1,
          class: "next-link",
          href: unref(normalizeLink)(links.value.next.link)
        }, [
          createBaseVNode("span", _hoisted_6, [
            _cache[1] || (_cache[1] = createTextVNode("Next ")),
            createVNode(unref(VTIconChevronRight), { class: "vt-link-icon" })
          ]),
          createBaseVNode("span", _hoisted_7, toDisplayString(links.value.next.text), 1)
        ], 8, _hoisted_5$1)) : createCommentVNode("", true)
      ])) : createCommentVNode("", true);
    };
  }
});
var VPContentDocFooter = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-eed9d8b8"]]);
var VPCarbonAds_vue_vue_type_style_index_0_lang = "";
const _sfc_main$4 = defineComponent({
  __name: "VPCarbonAds",
  setup(__props) {
    const { theme } = useData();
    const carbonOptions = theme.value.carbonAds;
    const container = ref();
    const isWide = useMediaQuery("(min-width: 1280px)");
    let hasInitalized = false;
    function init() {
      if (!hasInitalized) {
        hasInitalized = true;
        const s = document.createElement("script");
        s.id = "_carbonads_js";
        s.src = `//cdn.carbonads.com/carbon.js?serve=${carbonOptions.code}&placement=${carbonOptions.placement}`;
        s.async = true;
        container.value.appendChild(s);
      }
    }
    if (carbonOptions) {
      onMounted(() => {
        if (isWide.value) {
          init();
        } else {
          watch(isWide, (wide) => wide && init());
        }
      });
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "VPCarbonAds",
        ref_key: "container",
        ref: container
      }, null, 512);
    };
  }
});
var VPContentDoc_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$2 = { class: "container" };
const _hoisted_2$1 = {
  key: 0,
  class: "aside"
};
const _hoisted_3$1 = { class: "aside-container" };
const _hoisted_4$1 = { class: "content" };
const _hoisted_5 = {
  key: 0,
  class: "edit-link"
};
const _sfc_main$3 = defineComponent({
  __name: "VPContentDoc",
  setup(__props) {
    const { page, frontmatter, theme } = useData();
    const hashMatch = /#(\w+)$/;
    const repoUrl = computed(() => {
      var _a2, _b2;
      const repo = ((_a2 = theme.value.editLink) == null ? void 0 : _a2.repo) || "vuejs/docs";
      const branch = ((_b2 = repo.match(hashMatch)) == null ? void 0 : _b2[1]) || "main";
      return `https://github.com/${repo}/edit/${branch}/src/${page.value.relativePath}`;
    });
    const pageClass = computed(() => {
      const { relativePath } = page.value;
      return relativePath.slice(0, relativePath.indexOf("/"));
    });
    return (_ctx, _cache) => {
      const _component_Content = resolveComponent("Content");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["VPContentDoc", { "has-aside": unref(frontmatter).aside !== false }])
      }, [
        createBaseVNode("div", _hoisted_1$2, [
          unref(frontmatter).aside !== false ? (openBlock(), createElementBlock("div", _hoisted_2$1, [
            createBaseVNode("div", _hoisted_3$1, [
              renderSlot(_ctx.$slots, "aside-top", {}, void 0, true),
              unref(page).headers && unref(frontmatter).outline !== false ? (openBlock(), createBlock(VPContentDocOutline, { key: 0 })) : createCommentVNode("", true),
              renderSlot(_ctx.$slots, "aside-mid", {}, void 0, true),
              unref(theme).carbonAds && unref(frontmatter).ads !== false ? (openBlock(), createBlock(_sfc_main$4, { key: 1 })) : createCommentVNode("", true),
              renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)
            ])
          ])) : createCommentVNode("", true),
          createBaseVNode("div", _hoisted_4$1, [
            renderSlot(_ctx.$slots, "content-top", {}, void 0, true),
            createBaseVNode("main", null, [
              createVNode(_component_Content, {
                class: normalizeClass(["vt-doc", pageClass.value])
              }, null, 8, ["class"]),
              unref(theme).editLink && unref(frontmatter).editLink !== false ? (openBlock(), createElementBlock("p", _hoisted_5, [
                createVNode(unref(VTIconEdit), { class: "vt-icon" }),
                createVNode(unref(_sfc_main$H), {
                  href: repoUrl.value,
                  "no-icon": true
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(theme).editLink.text), 1)
                  ]),
                  _: 1
                }, 8, ["href"])
              ])) : createCommentVNode("", true)
            ]),
            renderSlot(_ctx.$slots, "content-bottom", {}, void 0, true),
            unref(frontmatter).footer !== false ? (openBlock(), createBlock(VPContentDocFooter, { key: 0 })) : createCommentVNode("", true)
          ])
        ])
      ], 2);
    };
  }
});
var VPContentDoc = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-aa0654cc"]]);
var VPNotFound_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$1 = { class: "vt-doc" };
const _hoisted_2 = { class: "not-found-path" };
const _hoisted_3 = { key: 0 };
const _hoisted_4 = ["href"];
const _sfc_main$2 = defineComponent({
  __name: "VPNotFound",
  setup(__props) {
    const { theme } = useData();
    const route = useRoute();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        _cache[4] || (_cache[4] = createBaseVNode("h1", null, "Page Not Found", -1)),
        createBaseVNode("p", null, [
          _cache[2] || (_cache[2] = createTextVNode(" You found a dead link: ")),
          createBaseVNode("span", _hoisted_2, toDisplayString(unref(route).path), 1),
          _cache[3] || (_cache[3] = createBaseVNode("br", null, null, -1)),
          unref(theme).repo ? (openBlock(), createElementBlock("span", _hoisted_3, [
            _cache[0] || (_cache[0] = createTextVNode("Please ")),
            createBaseVNode("a", {
              href: `https://github.com/${unref(theme).repo}`,
              target: "_blank"
            }, "let us know", 8, _hoisted_4),
            _cache[1] || (_cache[1] = createTextVNode(" so we can fix it."))
          ])) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});
var VPNotFound = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-76df36cc"]]);
var VPContent_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$1 = defineComponent({
  __name: "VPContent",
  setup(__props) {
    const route = useRoute();
    const { frontmatter } = useData();
    const { hasSidebar } = useSidebar();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        id: "VPContent",
        class: normalizeClass(["VPContent", { "has-sidebar": unref(hasSidebar) }])
      }, [
        unref(route).component === VPNotFound ? (openBlock(), createBlock(VPNotFound, { key: 0 })) : !!unref(frontmatter).page ? (openBlock(), createBlock(_sfc_main$7, { key: 1 }, {
          "footer-before": withCtx(() => [
            renderSlot(_ctx.$slots, "footer-before", {}, void 0, true)
          ]),
          "footer-after": withCtx(() => [
            renderSlot(_ctx.$slots, "footer-after", {}, void 0, true)
          ]),
          _: 3
        })) : (openBlock(), createBlock(VPContentDoc, {
          key: 2,
          class: normalizeClass({ "has-sidebar": unref(hasSidebar) })
        }, {
          "content-top": withCtx(() => [
            renderSlot(_ctx.$slots, "content-top", {}, void 0, true)
          ]),
          "content-bottom": withCtx(() => [
            renderSlot(_ctx.$slots, "content-bottom", {}, void 0, true)
          ]),
          "aside-top": withCtx(() => [
            renderSlot(_ctx.$slots, "aside-top", {}, void 0, true)
          ]),
          "aside-mid": withCtx(() => [
            renderSlot(_ctx.$slots, "aside-mid", {}, void 0, true)
          ]),
          "aside-bottom": withCtx(() => [
            renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)
          ]),
          default: withCtx(() => [
            _cache[0] || (_cache[0] = createTextVNode("\\ "))
          ]),
          _: 3
        }, 8, ["class"]))
      ], 2);
    };
  }
});
var VPContent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-fae15e66"]]);
var VPApp_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1 = { class: "VPApp" };
const _sfc_main = defineComponent({
  __name: "VPApp",
  setup(__props) {
    const {
      isOpen: isSidebarOpen,
      open: openSidebar,
      close: closeSidebar
    } = useSidebar();
    let triggerElement;
    watchEffect(() => {
      triggerElement = isSidebarOpen.value ? document.activeElement : void 0;
    });
    const onEsacpe = (e) => {
      if (e.key === "Escape" && isSidebarOpen.value) {
        closeSidebar();
        triggerElement == null ? void 0 : triggerElement.focus();
      }
    };
    onMounted(() => {
      window.addEventListener("keyup", onEsacpe);
    });
    onUnmounted(() => {
      window.removeEventListener("keyup", onEsacpe);
    });
    provide("close-sidebar", closeSidebar);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(VPSkipLink),
        createVNode(unref(_sfc_main$I), {
          class: "backdrop",
          show: unref(isSidebarOpen),
          onClick: unref(closeSidebar)
        }, null, 8, ["show", "onClick"]),
        renderSlot(_ctx.$slots, "banner", {}, void 0, true),
        createVNode(VPNav),
        createVNode(VPLocalNav, {
          open: unref(isSidebarOpen),
          onOpenMenu: unref(openSidebar)
        }, null, 8, ["open", "onOpenMenu"]),
        createVNode(VPSidebar, { open: unref(isSidebarOpen) }, {
          top: withCtx(() => [
            renderSlot(_ctx.$slots, "sidebar-top", {}, void 0, true)
          ]),
          bottom: withCtx(() => [
            renderSlot(_ctx.$slots, "sidebar-bottom", {}, void 0, true)
          ]),
          _: 3
        }, 8, ["open"]),
        createVNode(VPContent, null, {
          "content-top": withCtx(() => [
            renderSlot(_ctx.$slots, "content-top", {}, void 0, true)
          ]),
          "content-bottom": withCtx(() => [
            renderSlot(_ctx.$slots, "content-bottom", {}, void 0, true)
          ]),
          "aside-top": withCtx(() => [
            renderSlot(_ctx.$slots, "aside-top", {}, void 0, true)
          ]),
          "aside-mid": withCtx(() => [
            renderSlot(_ctx.$slots, "aside-mid", {}, void 0, true)
          ]),
          "aside-bottom": withCtx(() => [
            renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)
          ]),
          "footer-before": withCtx(() => [
            renderSlot(_ctx.$slots, "footer-before", {}, void 0, true)
          ]),
          "footer-after": withCtx(() => [
            renderSlot(_ctx.$slots, "footer-after", {}, void 0, true)
          ]),
          _: 3
        }),
        createVNode(_sfc_main$c)
      ]);
    };
  }
});
var VPApp = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b00fe5ea"]]);
const VPTheme = {
  Layout: withConfigProvider(VPApp),
  NotFound: VPNotFound
};
var Theme = {
  ...VPTheme,
  Layout() {
    return h(VPTheme.Layout, null, {});
  }
};
const hasFetched = /* @__PURE__ */ new Set();
const createLink = () => document.createElement("link");
const viaDOM = (url) => {
  const link2 = createLink();
  link2.rel = `prefetch`;
  link2.href = url;
  document.head.appendChild(link2);
};
const viaXHR = (url) => {
  const req = new XMLHttpRequest();
  req.open("GET", url, req.withCredentials = true);
  req.send();
};
let link;
const doFetch = inBrowser$1 && (link = createLink()) && link.relList && link.relList.supports && link.relList.supports("prefetch") ? viaDOM : viaXHR;
function usePrefetch() {
  if (!inBrowser$1) {
    return;
  }
  if (!window.IntersectionObserver) {
    return;
  }
  let conn;
  if ((conn = navigator.connection) && (conn.saveData || /2g/.test(conn.effectiveType))) {
    return;
  }
  const rIC = window.requestIdleCallback || setTimeout;
  let observer = null;
  const observeLinks = () => {
    if (observer) {
      observer.disconnect();
    }
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const link2 = entry.target;
          observer.unobserve(link2);
          const { pathname } = link2;
          if (!hasFetched.has(pathname)) {
            hasFetched.add(pathname);
            const pageChunkPath = pathToFile(pathname);
            doFetch(pageChunkPath);
          }
        }
      });
    });
    rIC(() => {
      document.querySelectorAll("#app a").forEach((link2) => {
        const { target, hostname, pathname } = link2;
        const extMatch = pathname.match(/\.\w+$/);
        if (extMatch && extMatch[0] !== ".html") {
          return;
        }
        if (target !== `_blank` && hostname === location.hostname) {
          if (pathname !== location.pathname) {
            observer.observe(link2);
          } else {
            hasFetched.add(pathname);
          }
        }
      });
    });
  };
  onMounted(observeLinks);
  const route = useRoute();
  watch(() => route.path, observeLinks);
  onUnmounted(() => {
    observer && observer.disconnect();
  });
}
const ClientOnly = defineComponent({
  setup(_, { slots }) {
    const show = ref(false);
    onMounted(() => {
      show.value = true;
    });
    return () => show.value && slots.default ? slots.default() : null;
  }
});
const NotFound = Theme.NotFound || (() => "404 Not Found");
const VitePressApp = {
  name: "VitePressApp",
  setup() {
    const { site } = useData();
    onMounted(() => {
      watch(() => site.value.lang, (lang) => {
        document.documentElement.lang = lang;
      }, { immediate: true });
    });
    {
      usePrefetch();
    }
    return () => h(Theme.Layout);
  }
};
function createApp() {
  const router = newRouter();
  const app = newApp();
  app.provide(RouterSymbol, router);
  const data = initData(router.route);
  app.provide(dataSymbol, data);
  if (inBrowser$1) {
    useUpdateHead(router.route, data.site);
  }
  app.component("Content", Content);
  app.component("ClientOnly", ClientOnly);
  app.component(
    "Debug",
    () => null
  );
  Object.defineProperty(app.config.globalProperties, "$frontmatter", {
    get() {
      return data.frontmatter.value;
    }
  });
  if (Theme.enhanceApp) {
    Theme.enhanceApp({
      app,
      router,
      siteData: siteDataRef
    });
  }
  return { app, router };
}
function newApp() {
  return createSSRApp(VitePressApp);
}
function newRouter() {
  let isInitialPageLoad = inBrowser$1;
  let initialPath;
  return createRouter((path) => {
    let pageFilePath = pathToFile(path);
    if (isInitialPageLoad) {
      initialPath = pageFilePath;
    }
    if (isInitialPageLoad || initialPath === pageFilePath) {
      pageFilePath = pageFilePath.replace(/\.js$/, ".lean.js");
    }
    if (inBrowser$1) {
      isInitialPageLoad = false;
      return __vitePreload(() => import(
        /*@vite-ignore*/
        pageFilePath
      ), true ? [] : void 0);
    }
    return require(pageFilePath);
  }, NotFound);
}
if (inBrowser$1) {
  const { app, router } = createApp();
  router.go().then(() => {
    app.mount("#app");
  });
}
export { useRoute as a, useRouter as b, createApp, useData as u };
