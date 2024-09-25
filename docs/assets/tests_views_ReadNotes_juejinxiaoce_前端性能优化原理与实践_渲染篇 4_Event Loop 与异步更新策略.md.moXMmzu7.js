import{_ as a,c as n,a2 as p,o as e}from"./chunks/framework.CuYr6EMX.js";const h=JSON.parse('{"title":"Event Loop 与异步更新策略","description":"","frontmatter":{},"headers":[],"relativePath":"tests/views/ReadNotes/juejinxiaoce/前端性能优化原理与实践/渲染篇 4:Event Loop 与异步更新策略.md","filePath":"tests/views/ReadNotes/juejinxiaoce/前端性能优化原理与实践/渲染篇 4:Event Loop 与异步更新策略.md"}'),i={name:"tests/views/ReadNotes/juejinxiaoce/前端性能优化原理与实践/渲染篇 4:Event Loop 与异步更新策略.md"};function l(t,s,c,o,r,m){return e(),n("div",null,s[0]||(s[0]=[p(`<h1 id="event-loop-与异步更新策略" tabindex="-1">Event Loop 与异步更新策略 <a class="header-anchor" href="#event-loop-与异步更新策略" aria-label="Permalink to &quot;Event Loop 与异步更新策略&quot;">​</a></h1><p>Vue 和 React 都实现了异步更新策略。达到了减少 DOM 操作、避免过度渲染的目的。</p><h2 id="event-loop-中的-渲染时机" tabindex="-1">Event Loop 中的“渲染时机” <a class="header-anchor" href="#event-loop-中的-渲染时机" aria-label="Permalink to &quot;Event Loop 中的“渲染时机”&quot;">​</a></h2><h3 id="micro-task-与-macro-task" tabindex="-1">Micro-Task 与 Macro-Task <a class="header-anchor" href="#micro-task-与-macro-task" aria-label="Permalink to &quot;Micro-Task 与 Macro-Task&quot;">​</a></h3><p>事件循环中的异步队列有两种：macro（宏任务）队列和 micro（微任务）队列。</p><p>常见的 macro-task 比如： setTimeout、setInterval、 setImmediate、script（整体代码）、 I/O 操作、UI 渲染等。<br> 常见的 micro-task 比如: process.nextTick、Promise、MutationObserver 等。</p><h3 id="event-loop-过程解析" tabindex="-1">Event Loop 过程解析 <a class="header-anchor" href="#event-loop-过程解析" aria-label="Permalink to &quot;Event Loop 过程解析&quot;">​</a></h3><p>基于对 micro 和 macro 的认知，我们来走一遍完整的事件循环过程。</p><p>一个完整的 Event Loop 过程，可以概括为以下阶段：</p><ul><li><p>初始状态：调用栈空。micro 队列空，macro 队列里有且只有一个 script 脚本（整体代码）。</p></li><li><p>全局上下文（script 标签）被推入调用栈，同步代码执行。在执行的过程中，通过对一些接口的调用，可以产生新的 macro-task 与 micro-task，它们会分别被推入各自的任务队列里。 同步代码执行完了，script 脚本会被移出 macro 队列，<strong>这个过程本质上是队列的 macro-task 的执行和出队的过程</strong>。</p></li><li><p>上一步我们出队的是一个 macro-task，这一步我们处理的是 micro-task。但需要注意的是：当 macro-task 出队时，任务是<strong>一个一个</strong>执行的； 而 micro-task 出队时，任务是<strong>一队一队</strong>执行的（如下图所示）。因此，我们处理 micro 队列这一步，会逐个执行队列中的任务并把它出队，直到队列被清空。</p></li></ul><p><img src="https://user-gold-cdn.xitu.io/2018/10/1/1662fc9d8bf609a6?w=480&amp;h=410&amp;f=png&amp;s=8715" alt=""></p><ul><li><p><strong>执行渲染操作，更新界面</strong>（敲黑板划重点）。</p></li><li><p>检查是否存在 Web worker 任务，如果有，则对其进行处理 。</p></li></ul><p>（上述过程循环往复，直到两个队列都清空）</p><h3 id="渲染的时机" tabindex="-1">渲染的时机 <a class="header-anchor" href="#渲染的时机" aria-label="Permalink to &quot;渲染的时机&quot;">​</a></h3><p>假如我想要在异步任务里进行DOM更新，我该把它包装成 micro 还是 macro 呢？</p><p>我们先假设它是一个 macro 任务，比如我在 script 脚本中用 setTimeout 来处理它：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// task是一个用于修改DOM的回调</span></span>
<span class="line"><span>setTimeout(task, 0)</span></span></code></pre></div><p>现在 task 被推入的 macro 队列。但因为 script 脚本本身是一个 macro 任务，所以本次执行完 script 脚本之后，下一个步骤就要去处理 micro 队列了，再往下就去执行了一次 render，对不对？</p><p>但本次render我的目标task其实并没有执行，想要修改的DOM也没有修改，因此这一次的render其实是一次无效的render。</p><p>macro 不 ok，我们转向 micro 试试看。我用 Promise 来把 task 包装成是一个 micro 任务：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Promise.resolve().then(task)</span></span></code></pre></div><p>那么我们结束了对 script 脚本的执行，是不是紧接着就去处理 micro-task 队列了？micro-task 处理完，DOM 修改好了，紧接着就可以走 render 流程了——不需要再消耗多余的一次渲染，不需要再等待一轮事件循环，直接为用户呈现最即时的更新结果。</p><p>因此，我们更新 DOM 的时间点，应该尽可能靠近渲染的时机。<strong>当我们需要在异步任务中实现 DOM 修改时，把它包装成 micro 任务是相对明智的选择</strong>。</p><h2 id="生产实践-异步更新策略——以-vue-为例" tabindex="-1">生产实践：异步更新策略——以 Vue 为例 <a class="header-anchor" href="#生产实践-异步更新策略——以-vue-为例" aria-label="Permalink to &quot;生产实践：异步更新策略——以 Vue 为例&quot;">​</a></h2><p>什么是异步更新？</p><p>当我们使用 Vue 或 React 提供的接口去更新数据时，这个更新并不会立即生效，而是会被推入到一个队列里。待到适当的时机，队列中的更新任务会被<strong>批量触发</strong>。这就是异步更新。</p><p>异步更新可以帮助我们避免过度渲染，是“让 JS 为 DOM 分压”的典范之一。</p><h3 id="异步更新的优越性" tabindex="-1">异步更新的优越性 <a class="header-anchor" href="#异步更新的优越性" aria-label="Permalink to &quot;异步更新的优越性&quot;">​</a></h3><p>异步更新的特性在于它<strong>只看结果</strong>，因此渲染引擎<strong>不需要为过程买单</strong>。</p><p>最典型的例子，比如有时我们会遇到这样的情况：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 任务一</span></span>
<span class="line"><span>this.content = &#39;第一次测试&#39;</span></span>
<span class="line"><span>// 任务二</span></span>
<span class="line"><span>this.content = &#39;第二次测试&#39;</span></span>
<span class="line"><span>// 任务三</span></span>
<span class="line"><span>this.content = &#39;第三次测试&#39;</span></span></code></pre></div><p>我们在三个更新任务中对同一个状态修改了三次，如果我们采取传统的同步更新策略，那么就要操作三次 DOM。但本质上需要呈现给用户的目标内容其实只是第三次的结果，也就是说只有第三次的操作是有意义的——我们白白浪费了两次计算。</p><p>但如果我们把这三个任务塞进异步更新队列里，它们会先在 JS 的层面上被<strong>批量执行完毕</strong>。当流程走到渲染这一步时，它仅仅需要针对有意义的计算结果操作一次 DOM——这就是异步更新的妙处。</p><h3 id="vue状态更新手法-nexttick" tabindex="-1">Vue状态更新手法：nextTick <a class="header-anchor" href="#vue状态更新手法-nexttick" aria-label="Permalink to &quot;Vue状态更新手法：nextTick&quot;">​</a></h3><p>Vue 每次想要更新一个状态的时候，会先把它这个更新操作给包装成一个异步操作派发出去。这件事情，在源码中是由一个叫做 nextTick 的函数来完成的：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>export function nextTick (cb?: Function, ctx?: Object) {</span></span>
<span class="line"><span>  let _resolve</span></span>
<span class="line"><span>  callbacks.push(() =&gt; {</span></span>
<span class="line"><span>    if (cb) {</span></span>
<span class="line"><span>      try {</span></span>
<span class="line"><span>        cb.call(ctx)</span></span>
<span class="line"><span>      } catch (e) {</span></span>
<span class="line"><span>        handleError(e, ctx, &#39;nextTick&#39;)</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    } else if (_resolve) {</span></span>
<span class="line"><span>      _resolve(ctx)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>  // 检查上一个异步任务队列（即名为callbacks的任务数组）是否派发和执行完毕了。pending此处相当于一个锁</span></span>
<span class="line"><span>  if (!pending) {</span></span>
<span class="line"><span>    // 若上一个异步任务队列已经执行完毕，则将pending设定为true（把锁锁上）</span></span>
<span class="line"><span>    pending = true</span></span>
<span class="line"><span>    // 是否要求一定要派发为macro任务</span></span>
<span class="line"><span>    if (useMacroTask) {</span></span>
<span class="line"><span>      macroTimerFunc()</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>      // 如果不说明一定要macro 你们就全都是micro</span></span>
<span class="line"><span>      microTimerFunc()</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  // $flow-disable-line</span></span>
<span class="line"><span>  if (!cb &amp;&amp; typeof Promise !== &#39;undefined&#39;) {</span></span>
<span class="line"><span>    return new Promise(resolve =&gt; {</span></span>
<span class="line"><span>      _resolve = resolve</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>Vue 的异步任务默认情况下都是用 Promise 来包装的，都是 micro-task。</p><p>macroTimeFunc() 是这么实现的：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// macro首选setImmediate 这个兼容性最差</span></span>
<span class="line"><span>if (typeof setImmediate !== &#39;undefined&#39; &amp;&amp; isNative(setImmediate)) {</span></span>
<span class="line"><span>  macroTimerFunc = () =&gt; {</span></span>
<span class="line"><span>    setImmediate(flushCallbacks)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>} else if (typeof MessageChannel !== &#39;undefined&#39; &amp;&amp; (</span></span>
<span class="line"><span>    isNative(MessageChannel) ||</span></span>
<span class="line"><span>    // PhantomJS</span></span>
<span class="line"><span>    MessageChannel.toString() === &#39;[object MessageChannelConstructor]&#39;</span></span>
<span class="line"><span>  )) {</span></span>
<span class="line"><span>  const channel = new MessageChannel()</span></span>
<span class="line"><span>  const port = channel.port2</span></span>
<span class="line"><span>  channel.port1.onmessage = flushCallbacks</span></span>
<span class="line"><span>  macroTimerFunc = () =&gt; {</span></span>
<span class="line"><span>    port.postMessage(1)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>} else {</span></span>
<span class="line"><span>  // 兼容性最好的派发方式是setTimeout</span></span>
<span class="line"><span>  macroTimerFunc = () =&gt; {</span></span>
<span class="line"><span>    setTimeout(flushCallbacks, 0)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>microTimeFunc() 是这么实现的：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//  不是ios全都给我去Promise 如果不兼容promise 那么你只能将就一下变成macro了</span></span>
<span class="line"><span>if (typeof Promise !== &#39;undefined&#39; &amp;&amp; isNative(Promise)) {</span></span>
<span class="line"><span>  const p = Promise.resolve()</span></span>
<span class="line"><span>  microTimerFunc = () =&gt; {</span></span>
<span class="line"><span>    p.then(flushCallbacks)</span></span>
<span class="line"><span>    // in problematic UIWebViews, Promise.then doesn&#39;t completely break, but</span></span>
<span class="line"><span>    // it can get stuck in a weird state where callbacks are pushed into the</span></span>
<span class="line"><span>    // microtask queue but the queue isn&#39;t being flushed, until the browser</span></span>
<span class="line"><span>    // needs to do some other work, e.g. handle a timer. Therefore we can</span></span>
<span class="line"><span>    // &quot;force&quot; the microtask queue to be flushed by adding an empty timer.</span></span>
<span class="line"><span>    if (isIOS) setTimeout(noop)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>} else {</span></span>
<span class="line"><span>  // 如果无法派发micro，就退而求其次派发为macro</span></span>
<span class="line"><span>  microTimerFunc = macroTimerFunc</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>无论是派发 macro 任务还是派发 micro 任务，派发的任务对象都是一个叫做 flushCallbacks 的东西 flushCallbacks 源码如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function flushCallbacks () {</span></span>
<span class="line"><span>  pending = false</span></span>
<span class="line"><span>  // callbacks在nextick中出现过 它是任务数组（队列）</span></span>
<span class="line"><span>  const copies = callbacks.slice(0)</span></span>
<span class="line"><span>  callbacks.length = 0</span></span>
<span class="line"><span>  // 将callbacks中的任务逐个取出执行</span></span>
<span class="line"><span>  for (let i = 0; i &lt; copies.length; i++) {</span></span>
<span class="line"><span>    copies[i]()</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>Vue 中每产生一个状态更新任务，它就会被塞进一个叫 callbacks 的数组（此处是任务队列的实现形式）中。 这个任务队列在被丢进 micro 或 macro 队列之前，会先去检查当前是否有异步更新任务正在执行（即检查 pending 锁）。 如果确认 pending 锁是开着的（false），就把它设置为锁上（true）， 然后对当前 callbacks 数组的任务进行派发（丢进 micro 或 macro 队列）和执行。 设置 pending 锁的意义在于保证状态更新任务的有序进行，避免发生混乱。</p><p><a href="https://juejin.im/book/5a36661851882538e2259c0f" target="_blank" rel="noreferrer">Vue运行机制解析</a></p>`,45)]))}const u=a(i,[["render",l]]);export{h as __pageData,u as default};
