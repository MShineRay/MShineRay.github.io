import{_ as a,c as i,a4 as e,o as l}from"./chunks/framework.D2q5ST7L.js";const E=JSON.parse('{"title":"JS知识点","description":"","frontmatter":{},"headers":[],"relativePath":"work-notes/front-end/js/knowledge-point/index.md","filePath":"work-notes/front-end/js/knowledge-point/index.md"}'),t={name:"work-notes/front-end/js/knowledge-point/index.md"};function n(h,s,r,p,k,o){return l(),i("div",null,s[0]||(s[0]=[e(`<h1 id="js知识点" tabindex="-1">JS知识点 <a class="header-anchor" href="#js知识点" aria-label="Permalink to &quot;JS知识点&quot;">​</a></h1><h2 id="map" tabindex="-1"><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map" target="_blank" rel="noreferrer">Map</a> <a class="header-anchor" href="#map" aria-label="Permalink to &quot;[Map](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map)&quot;">​</a></h2><h2 id="weakmap" tabindex="-1"><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakMap" target="_blank" rel="noreferrer">WeakMap</a> <a class="header-anchor" href="#weakmap" aria-label="Permalink to &quot;[WeakMap](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)&quot;">​</a></h2><h2 id="set" tabindex="-1"><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/Set" target="_blank" rel="noreferrer">Set</a> <a class="header-anchor" href="#set" aria-label="Permalink to &quot;[Set](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/Set)&quot;">​</a></h2><h2 id="abortcontroller" tabindex="-1"><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/AbortController/AbortController" target="_blank" rel="noreferrer">AbortController</a> <a class="header-anchor" href="#abortcontroller" aria-label="Permalink to &quot;[AbortController](https://developer.mozilla.org/zh-CN/docs/Web/API/AbortController/AbortController)&quot;">​</a></h2><ul><li>fetch 取消请求</li></ul><h2 id="参考资料" tabindex="-1">参考资料 <a class="header-anchor" href="#参考资料" aria-label="Permalink to &quot;参考资料&quot;">​</a></h2><ul><li><a href="https://www.yuque.com/cuggz/interview/vgbphi" target="_blank" rel="noreferrer">前端面试题之JavaScript篇</a></li></ul><h2 id="私有字段" tabindex="-1">私有字段 <a class="header-anchor" href="#私有字段" aria-label="Permalink to &quot;私有字段&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Person</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  #abc</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 私有字段</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  constructor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">abc</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.#abc </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> abc;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  getAbc</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.#abc;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  #</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">method</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 私有方法</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="parseint" tabindex="-1"><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseInt" target="_blank" rel="noreferrer">parseInt</a> <a class="header-anchor" href="#parseint" aria-label="Permalink to &quot;[parseInt](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseInt)&quot;">​</a></h2><p>在使用 parseInt 时，一定要指定一个 radix 如果输入的 string 以 &quot;0&quot;（0）开头，radix 被假定为 8（八进制）或 10（十进制）。具体选择哪一个 radix 取决于实现。ECMAScript 5 澄清了应该使用 10 (十进制)，但不是所有的浏览器都支持。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> filterInt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">^</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">(</span><span style="--shiki-light:#22863A;--shiki-light-font-weight:bold;--shiki-dark:#85E89D;--shiki-dark-font-weight:bold;">\\-</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#22863A;--shiki-light-font-weight:bold;--shiki-dark:#85E89D;--shiki-dark-font-weight:bold;">\\+</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">[0-9]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+|</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">Infinity)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">test</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(value)) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(value);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> NaN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><h2 id="用位运算实现权限组合" tabindex="-1">用位运算实现权限组合 <a class="header-anchor" href="#用位运算实现权限组合" aria-label="Permalink to &quot;用位运算实现权限组合&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> READ</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0b1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 1: 0001</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> WRITE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0b10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 2: 0010</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> UPDATE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0b100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 4: 0100</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> DELETE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0b1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 8: 1000</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> r</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 11</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(r </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> READ</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) { </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 位运算</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;有权限&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;无权限&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="参考资料-1" tabindex="-1">参考资料 <a class="header-anchor" href="#参考资料-1" aria-label="Permalink to &quot;参考资料&quot;">​</a></h3><ul><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_operators" target="_blank" rel="noreferrer">表达式与运算符</a></li></ul><h2 id="零宽字符" tabindex="-1">零宽字符 <a class="header-anchor" href="#零宽字符" aria-label="Permalink to &quot;零宽字符&quot;">​</a></h2><h3 id="应用场景" tabindex="-1">应用场景 <a class="header-anchor" href="#应用场景" aria-label="Permalink to &quot;应用场景&quot;">​</a></h3><ul><li>文本加密</li><li>文章水印</li></ul><h3 id="参考资料-2" tabindex="-1">参考资料 <a class="header-anchor" href="#参考资料-2" aria-label="Permalink to &quot;参考资料&quot;">​</a></h3><ul><li><a href="https://zhuanlan.zhihu.com/p/87919817" target="_blank" rel="noreferrer">一个你所不知道的加密方式--零宽字符加密</a></li></ul><h2 id="动态语言" tabindex="-1"><a href="https://zh.wikipedia.org/wiki/%E5%8A%A8%E6%80%81%E8%AF%AD%E8%A8%80" target="_blank" rel="noreferrer">动态语言</a> <a class="header-anchor" href="#动态语言" aria-label="Permalink to &quot;[动态语言](https://zh.wikipedia.org/wiki/%E5%8A%A8%E6%80%81%E8%AF%AD%E8%A8%80)&quot;">​</a></h2><ul><li><a href="https://zh.wikipedia.org/wiki/%E5%BC%B7%E5%BC%B1%E5%9E%8B%E5%88%A5" target="_blank" rel="noreferrer">强弱类型</a></li><li><a href="https://zh.wikipedia.org/wiki/%E9%A1%9E%E5%9E%8B%E7%B3%BB%E7%B5%B1#%E9%9D%9C%E6%85%8B%E5%92%8C%E5%8B%95%E6%85%8B%E6%AA%A2%E6%9F%A5" target="_blank" rel="noreferrer">类型系统</a></li></ul><h2 id="" tabindex="-1">== <a class="header-anchor" href="#" aria-label="Permalink to &quot;==&quot;">​</a></h2><ul><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Equality" target="_blank" rel="noreferrer">相等(==) MDN</a></li><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures" target="_blank" rel="noreferrer">原始值强制转换(对象转原始类型) MDN</a></li><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Strict_equality" target="_blank" rel="noreferrer">严格相等（===） MDN</a></li><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Unary_plus" target="_blank" rel="noreferrer">一元加(+) MDN</a></li></ul><h2 id="浏览器自动播放策略" tabindex="-1">浏览器自动播放策略 <a class="header-anchor" href="#浏览器自动播放策略" aria-label="Permalink to &quot;浏览器自动播放策略&quot;">​</a></h2><p>据一般规则，媒体内容将在满足以下至少一个的条件下自动播放：</p><ul><li>音频被静音或其音量设置为 0</li><li>用户和网页已有交互行为（包括点击、触摸、按下某个键等等）</li><li>网站已被列入白名单；如果浏览器确定用户经常与媒体互动，这可能会自动发生，也可能通过首选项或其他用户界面功能手动发生 自动播放权限策略被应用于 &lt;iframe&gt; 或者其文档上，从而获得了自动播放的权限。</li></ul><p>否则，播放可能会被阻止。导致播放被阻塞的确切情况以及将网站列入白名单的具体方法因浏览器而异，但最好是遵循以上的原则。</p><h3 id="参考资料-3" tabindex="-1">参考资料 <a class="header-anchor" href="#参考资料-3" aria-label="Permalink to &quot;参考资料&quot;">​</a></h3><ul><li>[媒体和 Web Audio API 的自动播放指南](<a href="https://developer.mozilla.org/zh-CN/docs/Web/Media/Autoplay_guide" target="_blank" rel="noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/Media/Autoplay_guide</a>]</li></ul>`,32)]))}const g=a(t,[["render",n]]);export{E as __pageData,g as default};
