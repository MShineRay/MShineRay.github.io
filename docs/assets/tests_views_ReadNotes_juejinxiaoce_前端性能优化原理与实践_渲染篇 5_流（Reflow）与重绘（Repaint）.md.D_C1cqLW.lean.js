import{_ as n,c as a,a2 as p,o as e}from"./chunks/framework.CuYr6EMX.js";const u=JSON.parse('{"title":"回流（Reflow）与重绘（Repaint）","description":"","frontmatter":{},"headers":[],"relativePath":"tests/views/ReadNotes/juejinxiaoce/前端性能优化原理与实践/渲染篇 5:流（Reflow）与重绘（Repaint）.md","filePath":"tests/views/ReadNotes/juejinxiaoce/前端性能优化原理与实践/渲染篇 5:流（Reflow）与重绘（Repaint）.md"}'),t={name:"tests/views/ReadNotes/juejinxiaoce/前端性能优化原理与实践/渲染篇 5:流（Reflow）与重绘（Repaint）.md"};function l(i,s,o,c,d,r){return e(),a("div",null,s[0]||(s[0]=[p(`<h1 id="回流-reflow-与重绘-repaint" tabindex="-1">回流（Reflow）与重绘（Repaint） <a class="header-anchor" href="#回流-reflow-与重绘-repaint" aria-label="Permalink to &quot;回流（Reflow）与重绘（Repaint）&quot;">​</a></h1><p><strong>回流</strong>：当我们对 DOM 的修改引发了 DOM 几何尺寸的变化（比如修改元素的宽、高或隐藏元素等）时，浏览器需要重新计算元素的几何属性（其他元素的几何属性和位置也会因此受到影响），然后再将计算的结果绘制出来。这个过程就是回流（也叫重排）。</p><p><strong>重绘</strong>：当我们对 DOM 的修改导致了样式的变化、却并未影响其几何属性（比如修改了颜色或背景色）时，浏览器不需重新计算元素的几何属性、直接为该元素绘制新的样式（跳过了上图所示的回流环节）。这个过程叫做重绘。</p><p><strong>重绘不一定导致回流，回流一定会导致重绘</strong>。回流比重绘做的事情更多，带来的开销也更大。但这两个说到底都是吃性能的，所以都不是什么善茬。我们在开发中，要从代码层面出发，尽可能把回流和重绘的次数最小化。</p><h2 id="哪些实际操作会导致回流与重绘" tabindex="-1">哪些实际操作会导致回流与重绘 <a class="header-anchor" href="#哪些实际操作会导致回流与重绘" aria-label="Permalink to &quot;哪些实际操作会导致回流与重绘&quot;">​</a></h2><p>只要是不触发回流，但又触发了样式改变的 DOM 操作，都会引起重绘， 比如背景色、文字色、可见性(可见性这里特指形如visibility: hidden这样不改变元素位置和存在性的、单纯针对可见性的操作，注意与display:none进行区分)等。</p><ul><li>最“贵”的操作：改变 DOM 元素的几何属性</li></ul><p>这个改变几乎可以说是“牵一发动全身”——当一个DOM元素的几何属性发生变化时，所有和它相关的节点（比如父子节点、兄弟节点等）的几何属性都需要进行重新计算，它会带来巨大的计算量。</p><p>常见的几何属性有 width、height、padding、margin、left、top、border 等等。</p><ul><li>“价格适中”的操作：改变 DOM 树的结构</li></ul><p>节点的增减、移动等操作。浏览器引擎布局的过程，顺序上可以类比于树的前序遍历——它是一个从上到下、从左到右的过程。通常在这个过程中，当前元素不会再影响其前面已经遍历过的元素。</p><ul><li>最容易被忽略的操作：获取一些特定属性的值</li></ul><p>offsetTop、offsetLeft、 offsetWidth、offsetHeight、scrollTop、scrollLeft、scrollWidth、scrollHeight、clientTop、clientLeft、clientWidth、clientHeight 时，你就要注意了！</p><p>“像这样”的属性，到底是像什么样？——这些值有一个共性，就是需要通过<strong>即时计算</strong>得到。因此浏览器为了获取这些值，也会进行回流。</p><p>当我们调用了 getComputedStyle 方法，或者 IE 里的 currentStyle 时，也会触发回流。原理是一样的，都为求一个“即时性”和“准确性”。</p><h2 id="如何规避回流与重绘" tabindex="-1">如何规避回流与重绘 <a class="header-anchor" href="#如何规避回流与重绘" aria-label="Permalink to &quot;如何规避回流与重绘&quot;">​</a></h2><h3 id="将-导火索-缓存起来-避免频繁改动" tabindex="-1">将“导火索”缓存起来，避免频繁改动 <a class="header-anchor" href="#将-导火索-缓存起来-避免频繁改动" aria-label="Permalink to &quot;将“导火索”缓存起来，避免频繁改动&quot;">​</a></h3><p>有时我们想要通过多次计算得到一个元素的布局位置，我们可能会这样做：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>  &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span>  &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;ie=edge&quot;&gt;</span></span>
<span class="line"><span>  &lt;title&gt;Document&lt;/title&gt;</span></span>
<span class="line"><span>  &lt;style&gt;</span></span>
<span class="line"><span>    #el {</span></span>
<span class="line"><span>      width: 100px;</span></span>
<span class="line"><span>      height: 100px;</span></span>
<span class="line"><span>      background-color: yellow;</span></span>
<span class="line"><span>      position: absolute;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  &lt;/style&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>  &lt;div id=&quot;el&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>  &lt;script&gt;</span></span>
<span class="line"><span>  // 获取el元素</span></span>
<span class="line"><span>  const el = document.getElementById(&#39;el&#39;)</span></span>
<span class="line"><span>  // 这里循环判定比较简单，实际中或许会拓展出比较复杂的判定需求</span></span>
<span class="line"><span>  for(let i=0;i&lt;10;i++) {</span></span>
<span class="line"><span>      el.style.top  = el.offsetTop  + 10 + &quot;px&quot;;</span></span>
<span class="line"><span>      el.style.left = el.offsetLeft + 10 + &quot;px&quot;;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><p>每次循环都需要获取多次“敏感属性”，是比较糟糕的。我们可以将其以 JS 变量的形式缓存起来，待计算完毕再提交给浏览器发出重计算请求：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 缓存offsetLeft与offsetTop的值</span></span>
<span class="line"><span>const el = document.getElementById(&#39;el&#39;) </span></span>
<span class="line"><span>let offLeft = el.offsetLeft, offTop = el.offsetTop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 在JS层面进行计算</span></span>
<span class="line"><span>for(let i=0;i&lt;10;i++) {</span></span>
<span class="line"><span>  offLeft += 10</span></span>
<span class="line"><span>  offTop  += 10</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 一次性将计算结果应用到DOM上</span></span>
<span class="line"><span>el.style.left = offLeft + &quot;px&quot;</span></span>
<span class="line"><span>el.style.top = offTop  + &quot;px&quot;</span></span></code></pre></div><h3 id="避免逐条改变样式-使用类名去合并样式" tabindex="-1">避免逐条改变样式，使用类名去合并样式 <a class="header-anchor" href="#避免逐条改变样式-使用类名去合并样式" aria-label="Permalink to &quot;避免逐条改变样式，使用类名去合并样式&quot;">​</a></h3><p>比如我们可以把这段单纯的代码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const container = document.getElementById(&#39;container&#39;)</span></span>
<span class="line"><span>container.style.width = &#39;100px&#39;</span></span>
<span class="line"><span>container.style.height = &#39;200px&#39;</span></span>
<span class="line"><span>container.style.border = &#39;10px solid red&#39;</span></span>
<span class="line"><span>container.style.color = &#39;red&#39;</span></span></code></pre></div><p>优化成一个有 class 加持的样子：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>  &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span>  &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;ie=edge&quot;&gt;</span></span>
<span class="line"><span>  &lt;title&gt;Document&lt;/title&gt;</span></span>
<span class="line"><span>  &lt;style&gt;</span></span>
<span class="line"><span>    .basic_style {</span></span>
<span class="line"><span>      width: 100px;</span></span>
<span class="line"><span>      height: 200px;</span></span>
<span class="line"><span>      border: 10px solid red;</span></span>
<span class="line"><span>      color: red;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  &lt;/style&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>  &lt;div id=&quot;container&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>  &lt;script&gt;</span></span>
<span class="line"><span>  const container = document.getElementById(&#39;container&#39;)</span></span>
<span class="line"><span>  container.classList.add(&#39;basic_style&#39;)</span></span>
<span class="line"><span>  &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><p>前者每次单独操作，都去触发一次渲染树更改，从而导致相应的回流与重绘过程。</p><p>合并之后，等于我们将所有的更改一次性发出，用一个 style 请求解决掉了。</p><h3 id="将-dom-离线" tabindex="-1">将 DOM “离线” <a class="header-anchor" href="#将-dom-离线" aria-label="Permalink to &quot;将 DOM “离线”&quot;">​</a></h3><p>我们上文所说的回流和重绘，都是在“该元素位于页面上”的前提下会发生的。一旦我们给元素设置 display: none，将其从页面上“拿掉”，那么我们的后续操作，将无法触发回流与重绘——这个将元素“拿掉”的操作，就叫做 DOM 离线化。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const container = document.getElementById(&#39;container&#39;)</span></span>
<span class="line"><span>container.style.width = &#39;100px&#39;</span></span>
<span class="line"><span>container.style.height = &#39;200px&#39;</span></span>
<span class="line"><span>container.style.border = &#39;10px solid red&#39;</span></span>
<span class="line"><span>container.style.color = &#39;red&#39;</span></span>
<span class="line"><span>...（省略了许多类似的后续操作）</span></span></code></pre></div><p>离线化后就是这样：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let container = document.getElementById(&#39;container&#39;)</span></span>
<span class="line"><span>container.style.display = &#39;none&#39;</span></span>
<span class="line"><span>container.style.width = &#39;100px&#39;</span></span>
<span class="line"><span>container.style.height = &#39;200px&#39;</span></span>
<span class="line"><span>container.style.border = &#39;10px solid red&#39;</span></span>
<span class="line"><span>container.style.color = &#39;red&#39;</span></span>
<span class="line"><span>...（省略了许多类似的后续操作）</span></span>
<span class="line"><span>container.style.display = &#39;block&#39;</span></span></code></pre></div><p>有的同学会问，拿掉一个元素再把它放回去，这不也会触发一次昂贵的回流吗？这话不假，但我们把它拿下来了，后续不管我操作这个元素多少次，每一步的操作成本都会非常低。 当我们只需要进行很少的 DOM 操作时，DOM 离线化的优越性确实不太明显。 一旦操作频繁起来，这“拿掉”和“放回”的开销都将会是非常值得的。</p><h2 id="flush-队列-浏览器并没有那么简单" tabindex="-1">Flush 队列：浏览器并没有那么简单 <a class="header-anchor" href="#flush-队列-浏览器并没有那么简单" aria-label="Permalink to &quot;Flush 队列：浏览器并没有那么简单&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let container = document.getElementById(&#39;container&#39;)</span></span>
<span class="line"><span>container.style.width = &#39;100px&#39;</span></span>
<span class="line"><span>container.style.height = &#39;200px&#39;</span></span>
<span class="line"><span>container.style.border = &#39;10px solid red&#39;</span></span>
<span class="line"><span>container.style.color = &#39;red&#39;</span></span></code></pre></div><p>这段代码里，浏览器进行了多少次的回流或重绘呢？</p><p>“width、height、border是几何属性，各触发一次回流；color只造成外观的变化，会触发一次重绘。”——如果你立刻这么想了，说明你是个能力不错的同学，认真阅读了前面的内容。那么我们现在立刻跑一跑这段代码，看看浏览器怎么说：</p><p><img src="https://user-gold-cdn.xitu.io/2018/10/4/1663f57519a785ab?w=1284&amp;h=96&amp;f=png&amp;s=18506" alt=""></p><p>这里为大家截取有“Layout”和“Paint”出镜的片段（这个图是通过 Chrome 的 Performance 面板得到的，后面会教大家用这个东西）。我们看到浏览器只进行了一次回流和一次重绘——和我们想的不一样啊，为啥呢？</p><p>因为现代浏览器是很聪明的。浏览器自己也清楚，如果每次 DOM 操作都即时地反馈一次回流或重绘，那么性能上来说是扛不住的。于是它自己缓存了一个 flush 队列，把我们触发的回流与重绘任务都塞进去， 待到队列里的任务多起来、或者达到了一定的时间间隔，或者“不得已”的时候，再将这些任务一口气出队。 因此我们看到，上面就算我们进行了 4 次 DOM 更改，也只触发了一次 Layout 和一次 Paint。</p><p>大家这里尤其小心这个“不得已”的时候。前面我们在介绍回流的“导火索”的时候，提到过有一类属性很特别，它们有很强的“即时性”。 当我们访问这些属性时，浏览器会为了获得此时此刻的、最准确的属性值，而提前将 flush 队列的任务出队——这就是所谓的“不得已”时刻。 具体是哪些属性值，我们已经在“最容易被忽略的操作”这个小模块介绍过了。</p>`,42)]))}const g=n(t,[["render",l]]);export{u as __pageData,g as default};
