import{_ as a,c as n,a2 as t,o as p}from"./chunks/framework.CuYr6EMX.js";const q=JSON.parse('{"title":"优化首屏体验——Lazy-Load","description":"","frontmatter":{},"headers":[],"relativePath":"tests/views/ReadNotes/juejinxiaoce/前端性能优化原理与实践/应用篇 1：优化首屏体验——Lazy-Load 初探.md","filePath":"tests/views/ReadNotes/juejinxiaoce/前端性能优化原理与实践/应用篇 1：优化首屏体验——Lazy-Load 初探.md"}'),l={name:"tests/views/ReadNotes/juejinxiaoce/前端性能优化原理与实践/应用篇 1：优化首屏体验——Lazy-Load 初探.md"};function e(i,s,o,c,u,g){return p(),n("div",null,s[0]||(s[0]=[t(`<h1 id="优化首屏体验——lazy-load" tabindex="-1">优化首屏体验——Lazy-Load <a class="header-anchor" href="#优化首屏体验——lazy-load" aria-label="Permalink to &quot;优化首屏体验——Lazy-Load&quot;">​</a></h1><p>Lazy-Load，翻译过来是“懒加载”。它是针对图片加载时机的优化：在一些图片量比较大的网站（比如电商网站首页，或者团购网站、小游戏首页等）， 如果我们尝试在用户打开页面的时候，就把所有的图片资源加载完毕，那么很可能会造成白屏、卡顿等现象，因为图片真的太多了，一口气处理这么多任务，浏览器做不到啊！</p><p>用户真的需要这么多图片吗？用户点开页面的瞬间，呈现给他的只有屏幕的一部分（我们称之为首屏）。 只要我们可以在页面打开的时候把首屏的图片资源加载出来，用户就会认为页面是没问题的。 至于下面的图片，我们完全可以等用户下拉的瞬间再即时去请求、即时呈现给他。 这样一来，性能的压力小了，用户的体验却没有变差——这个延迟加载的过程，就是 Lazy-Load。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;div data-v-b2db8566=&quot;&quot; </span></span>
<span class="line"><span>    data-v-009ea7bb=&quot;&quot; </span></span>
<span class="line"><span>    data-v-6b46a625=&quot;&quot;   </span></span>
<span class="line"><span>    data-src=&quot;https://user-gold-cdn.xitu.io/2018/9/27/16619f449ee24252?imageView2/1/w/120/h/120/q/85/format/webp/interlace/1&quot;    </span></span>
<span class="line"><span>    class=&quot;lazy thumb thumb&quot;    </span></span>
<span class="line"><span>    style=&quot;background-image: none; background-size: cover;&quot;&gt;  </span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre></div><p>我们注意到 style 内联样式中，背景图片设置为了 none。也就是说这个 div 是没有内容的，它只起到一个<strong>占位</strong>的作用。</p><p>这个“占位”的概念，在这个例子里或许体现得不够直观。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>style=&quot;background-image: url(&amp;quot;https://user-gold-cdn.xitu.io/2018/9/27/16619f449ee24252?imageView2/1/w/120/h/120/q/85/format/webp/interlace/1&amp;quot;); background-size: cover;&quot;</span></span></code></pre></div><p>可以看出，style 内联样式中的背景图片属性从 none 变成了一个在线图片的 URL。也就是说，出现在可视区域的瞬间，div 元素的内容被即时地修改掉了——它被写入了有效的图片 URL，于是图片才得以呈现。这就是懒加载的实现思路。</p><h2 id="一起写一个-lazy-load-吧" tabindex="-1">一起写一个 Lazy-Load 吧！ <a class="header-anchor" href="#一起写一个-lazy-load-吧" aria-label="Permalink to &quot;一起写一个 Lazy-Load 吧！&quot;">​</a></h2><p>基于上面的实现思路，我们完全可以手动实现一个属于自己的 Lazy-Load。</p><p>首先新建一个空项目，目录结构如下：</p><p>大家可以往 images 文件夹里塞入各种各样自己喜欢的图片。</p><p>我们在 index.html 中，为这些图片预置 img 标签：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>  &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span>  &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;ie=edge&quot;&gt;</span></span>
<span class="line"><span>  &lt;title&gt;Lazy-Load&lt;/title&gt;</span></span>
<span class="line"><span>  &lt;style&gt;</span></span>
<span class="line"><span>    .img {</span></span>
<span class="line"><span>      width: 200px;</span></span>
<span class="line"><span>      height:200px;</span></span>
<span class="line"><span>      background-color: gray;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    .pic {</span></span>
<span class="line"><span>      // 必要的img样式</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  &lt;/style&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>  &lt;div class=&quot;container&quot;&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;img&quot;&gt;</span></span>
<span class="line"><span>      // 注意我们并没有为它引入真实的src</span></span>
<span class="line"><span>      &lt;img class=&quot;pic&quot; alt=&quot;加载中&quot; data-src=&quot;./images/1.png&quot;&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;img&quot;&gt;</span></span>
<span class="line"><span>      &lt;img class=&quot;pic&quot; alt=&quot;加载中&quot; data-src=&quot;./images/2.png&quot;&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;img&quot;&gt;</span></span>
<span class="line"><span>      &lt;img class=&quot;pic&quot; alt=&quot;加载中&quot; data-src=&quot;./images/3.png&quot;&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;img&quot;&gt;</span></span>
<span class="line"><span>      &lt;img class=&quot;pic&quot; alt=&quot;加载中&quot; data-src=&quot;./images/4.png&quot;&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;img&quot;&gt;</span></span>
<span class="line"><span>      &lt;img class=&quot;pic&quot; alt=&quot;加载中&quot; data-src=&quot;./images/5.png&quot;&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>     &lt;div class=&quot;img&quot;&gt;</span></span>
<span class="line"><span>      &lt;img class=&quot;pic&quot; alt=&quot;加载中&quot; data-src=&quot;./images/6.png&quot;&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>     &lt;div class=&quot;img&quot;&gt;</span></span>
<span class="line"><span>      &lt;img class=&quot;pic&quot; alt=&quot;加载中&quot; data-src=&quot;./images/7.png&quot;&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>     &lt;div class=&quot;img&quot;&gt;</span></span>
<span class="line"><span>      &lt;img class=&quot;pic&quot; alt=&quot;加载中&quot; data-src=&quot;./images/8.png&quot;&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>     &lt;div class=&quot;img&quot;&gt;</span></span>
<span class="line"><span>      &lt;img class=&quot;pic&quot; alt=&quot;加载中&quot; data-src=&quot;./images/9.png&quot;&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>     &lt;div class=&quot;img&quot;&gt;</span></span>
<span class="line"><span>      &lt;img class=&quot;pic&quot; alt=&quot;加载中&quot; data-src=&quot;./images/10.png&quot;&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><p>在懒加载的实现中，有两个关键的数值：一个是<strong>当前可视区域的高度</strong>，另一个是<strong>元素距离可视区域顶部的高度</strong>。</p><p><strong>当前可视区域的高度</strong>， 在和现代浏览器及 IE9 以上的浏览器中，可以用 window.innerHeight 属性获取。 在低版本 IE 的标准模式中，可以用 document.documentElement.clientHeight 获取，这里我们兼容两种情况：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const viewHeight = window.innerHeight || document.documentElement.clientHeight</span></span></code></pre></div><p>而<strong>元素距离可视区域顶部的高度</strong>，我们这里选用 getBoundingClientRect() 方法来获取返回元素的大小及其相对于视口的位置。</p><blockquote><p>该方法的返回值是一个 DOMRect 对象，这个对象是由该元素的 getClientRects() 方法返回的一组矩形的集合, 即：是与该元素相关的 CSS 边框集合 。</p></blockquote><blockquote><p>DOMRect 对象包含了一组用于描述边框的只读属性——left、top、right 和 bottom，单位为像素。除了 width 和 height 外的属性都是相对于视口的左上角位置而言的。</p></blockquote><p>其中需要引起我们注意的就是 left、top、right 和 bottom，它们对应到元素上是这样的：</p><p>可以看出，top 属性代表了元素距离可视区域顶部的高度，正好可以为我们所用！</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>    // 获取所有的图片标签</span></span>
<span class="line"><span>    const imgs = document.getElementsByTagName(&#39;img&#39;)</span></span>
<span class="line"><span>    // 获取可视区域的高度</span></span>
<span class="line"><span>    const viewHeight = window.innerHeight || document.documentElement.clientHeight</span></span>
<span class="line"><span>    // num用于统计当前显示到了哪一张图片，避免每次都从第一张图片开始检查是否露出</span></span>
<span class="line"><span>    let num = 0</span></span>
<span class="line"><span>    function lazyload(){</span></span>
<span class="line"><span>        for(let i=num; i&lt;imgs.length; i++) {</span></span>
<span class="line"><span>            // 用可视区域高度减去元素顶部距离可视区域顶部的高度</span></span>
<span class="line"><span>            let distance = viewHeight - imgs[i].getBoundingClientRect().top</span></span>
<span class="line"><span>            // 如果可视区域高度大于等于元素顶部距离可视区域顶部的高度，说明元素露出</span></span>
<span class="line"><span>            if(distance &gt;= 0 ){</span></span>
<span class="line"><span>                // 给元素写入真实的src，展示图片</span></span>
<span class="line"><span>                imgs[i].src = imgs[i].getAttribute(&#39;data-src&#39;)</span></span>
<span class="line"><span>                // 前i张图片已经加载完毕，下次从第i+1张开始检查是否露出</span></span>
<span class="line"><span>                num = i + 1</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 监听Scroll事件</span></span>
<span class="line"><span>    window.addEventListener(&#39;scroll&#39;, lazyload, false);</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div>`,23)]))}const r=a(l,[["render",e]]);export{q as __pageData,r as default};
