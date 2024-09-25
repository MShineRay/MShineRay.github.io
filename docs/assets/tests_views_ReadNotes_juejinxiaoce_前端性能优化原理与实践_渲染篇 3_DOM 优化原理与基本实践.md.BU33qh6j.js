import{_ as a,c as s,a2 as t,o as e}from"./chunks/framework.CuYr6EMX.js";const u=JSON.parse('{"title":"DOM 优化原理与基本实践","description":"","frontmatter":{},"headers":[],"relativePath":"tests/views/ReadNotes/juejinxiaoce/前端性能优化原理与实践/渲染篇 3:DOM 优化原理与基本实践.md","filePath":"tests/views/ReadNotes/juejinxiaoce/前端性能优化原理与实践/渲染篇 3:DOM 优化原理与基本实践.md"}'),p={name:"tests/views/ReadNotes/juejinxiaoce/前端性能优化原理与实践/渲染篇 3:DOM 优化原理与基本实践.md"};function l(o,n,i,c,r,d){return e(),s("div",null,n[0]||(n[0]=[t(`<h1 id="dom-优化原理与基本实践" tabindex="-1">DOM 优化原理与基本实践 <a class="header-anchor" href="#dom-优化原理与基本实践" aria-label="Permalink to &quot;DOM 优化原理与基本实践&quot;">​</a></h1><p>“DOM 为什么这么慢”以及“如何使 DOM 变快”。</p><h2 id="dom-为什么这么慢" tabindex="-1">DOM 为什么这么慢 <a class="header-anchor" href="#dom-为什么这么慢" aria-label="Permalink to &quot;DOM 为什么这么慢&quot;">​</a></h2><blockquote><p>把 DOM 和 JavaScript 各自想象成一个岛屿，它们之间用收费桥梁连接。——《高性能 JavaScript》</p></blockquote><p>JS 是很快的，在 JS 中修改 DOM 对象也是很快的。在JS的世界里，一切是简单的、迅速的。但 DOM 操作并非 JS 一个人的独舞，而是两个模块之间的协作。</p><p>JS 引擎和渲染引擎（浏览器内核）是独立实现的。 当我们用 JS 去操作 DOM 时，本质上是 JS 引擎和渲染引擎之间进行了“跨界交流”。它依赖了桥接接口作为“桥梁”（如下图）。</p><p>过“桥”要收费——这个开销本身就是不可忽略的。我们每操作一次 DOM（不管是为了修改还是仅仅为了访问其值），都要过一次“桥”。过“桥”的次数一多，就会产生比较明显的性能问题。因此“减少 DOM 操作”的建议，并非空穴来风。</p><h3 id="对-dom-的修改引发样式的更迭" tabindex="-1">对 DOM 的修改引发样式的更迭 <a class="header-anchor" href="#对-dom-的修改引发样式的更迭" aria-label="Permalink to &quot;对 DOM 的修改引发样式的更迭&quot;">​</a></h3><p>过桥很慢，到了桥对岸，我们的更改操作带来的结果也很慢。</p><p>我们对 DOM 的操作都不会局限于访问，而是为了修改它。当我们对 DOM 的修改会引发它外观（样式）上的改变时，就会触发<strong>回流</strong>或<strong>重绘</strong>。</p><p>这个过程本质上还是因为我们对 DOM 的修改触发了渲染树（Render Tree）的变化所导致的：</p><ul><li><p>回流：当我们对 DOM 的修改引发了 DOM 几何尺寸的变化（比如修改元素的宽、高或隐藏元素等）时，浏览器需要重新计算元素的几何属性（其他元素的几何属性和位置也会因此受到影响），然后再将计算的结果绘制出来。这个过程就是回流（也叫重排）。</p></li><li><p>重绘：当我们对 DOM 的修改导致了样式的变化、却并未影响其几何属性（比如修改了颜色或背景色）时，浏览器不需重新计算元素的几何属性、直接为该元素绘制新的样式（跳过了上图所示的回流环节）。这个过程叫做重绘。</p></li></ul><p><strong>重绘不一定导致回流，回流一定会导致重绘</strong>。硬要比较的话，回流比重绘做的事情更多，带来的开销也更大。但这两个说到底都是吃性能的，所以都不是什么善茬。 我们在开发中，要从代码层面出发，尽可能把回流和重绘的次数最小化。</p><h3 id="减少-dom-操作-少交-过路费-、避免过度渲染" tabindex="-1">减少 DOM 操作：少交“过路费”、避免过度渲染 <a class="header-anchor" href="#减少-dom-操作-少交-过路费-、避免过度渲染" aria-label="Permalink to &quot;减少 DOM 操作：少交“过路费”、避免过度渲染&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>  &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span>  &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;ie=edge&quot;&gt;</span></span>
<span class="line"><span>  &lt;title&gt;DOM操作测试&lt;/title&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>  &lt;div id=&quot;container&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><p>此时我有一个假需求——我想往 container 元素里写 10000 句一样的话。如果我这么做：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>for(var count=0;count&lt;10000;count++){ </span></span>
<span class="line"><span>  document.getElementById(&#39;container&#39;).innerHTML+=&#39;&lt;span&gt;我是一个小测试&lt;/span&gt;&#39;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这段代码有两个明显的可优化点。</p><p>第一点，<strong>过路费交太多了</strong>。我们每一次循环都调用 DOM 接口重新获取了一次 container 元素，相当于每次循环都交了一次过路费。前后交了 10000 次过路费，但其中 9999 次过路费都可以用<strong>缓存变量</strong>的方式节省下来：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 只获取一次container</span></span>
<span class="line"><span>let container = document.getElementById(&#39;container&#39;)</span></span>
<span class="line"><span>for(let count=0;count&lt;10000;count++){ </span></span>
<span class="line"><span>  container.innerHTML += &#39;&lt;span&gt;我是一个小测试&lt;/span&gt;&#39;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>第二点，<strong>不必要的 DOM 更改太多了</strong>。我们的 10000 次循环里，修改了 10000 次 DOM 树。对 DOM 的修改会引发渲染树的改变、进而去走一个（可能的）回流或重绘的过程，而这个过程的开销是很“贵”的。我们竟然重复执行了 N 多次！其实我们可以通过<strong>就事论事</strong>的方式节省下来不必要的渲染：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let container = document.getElementById(&#39;container&#39;)</span></span>
<span class="line"><span>let content = &#39;&#39;</span></span>
<span class="line"><span>for(let count=0;count&lt;10000;count++){ </span></span>
<span class="line"><span>  // 先对内容进行操作</span></span>
<span class="line"><span>  content += &#39;&lt;span&gt;我是一个小测试&lt;/span&gt;&#39;</span></span>
<span class="line"><span>} </span></span>
<span class="line"><span>// 内容处理好了,最后再触发DOM的更改</span></span>
<span class="line"><span>container.innerHTML = content</span></span></code></pre></div><p>所谓“就事论事”，就像大家所看到的：JS 层面的事情，JS 自己去处理，处理好了，再来找 DOM 打报告。</p><p>事实上，考虑JS 的运行速度，比 DOM 快得多这个特性。我们减少 DOM 操作的核心思路，就是<strong>让 JS 去给 DOM 分压</strong>。</p><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/DocumentFragment" target="_blank" rel="noreferrer">DOM Fragment</a></p><blockquote><p>DocumentFragment 接口表示一个没有父级文件的最小文档对象。它被当做一个轻量版的 Document 使用，用于存储已排好版的或尚未打理好格式的XML片段。因为 DocumentFragment 不是真实 DOM 树的一部分，它的变化不会引起 DOM 树的重新渲染的操作（reflow），且不会导致性能等问题。</p></blockquote><p>字符串变量 content 就扮演着一个 DOM Fragment 的角色。其实无论字符串变量也好，DOM Fragment 也罢， 它们本质上都作为脱离了真实 DOM 树的<strong>容器</strong>出现，用于缓存批量化的 DOM 操作。</p><p>直接用 innerHTML 去拼接目标内容，这样做固然有用，但却不够优雅。 相比之下，DOM Fragment 可以用更加结构化的方式去达成同样的目的，从而在维持性能的同时，保住代码的可拓展和可维护性。 现在用 DOM Fragment 来改写上面的例子：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let container = document.getElementById(&#39;container&#39;)</span></span>
<span class="line"><span>// 创建一个DOM Fragment对象作为容器</span></span>
<span class="line"><span>let content = document.createDocumentFragment()</span></span>
<span class="line"><span>for(let count=0;count&lt;10000;count++){</span></span>
<span class="line"><span>  // span此时可以通过DOM API去创建</span></span>
<span class="line"><span>  let oSpan = document.createElement(&quot;span&quot;)</span></span>
<span class="line"><span>  oSpan.innerHTML = &#39;我是一个小测试&#39;</span></span>
<span class="line"><span>  // 像操作真实DOM一样操作DOM Fragment对象</span></span>
<span class="line"><span>  content.appendChild(oSpan)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 内容处理好了,最后再触发真实DOM的更改</span></span>
<span class="line"><span>container.appendChild(content)</span></span></code></pre></div>`,29)]))}const h=a(p,[["render",l]]);export{u as __pageData,h as default};
