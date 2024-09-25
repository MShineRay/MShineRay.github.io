import{_ as s,c as a,a2 as p,o as e}from"./chunks/framework.CuYr6EMX.js";const h=JSON.parse('{"title":"事件的节流（throttle）与防抖（debounce）","description":"","frontmatter":{},"headers":[],"relativePath":"tests/views/ReadNotes/juejinxiaoce/前端性能优化原理与实践/应用篇 2：事件的节流（throttle）与防抖（debounce）.md","filePath":"tests/views/ReadNotes/juejinxiaoce/前端性能优化原理与实践/应用篇 2：事件的节流（throttle）与防抖（debounce）.md"}'),l={name:"tests/views/ReadNotes/juejinxiaoce/前端性能优化原理与实践/应用篇 2：事件的节流（throttle）与防抖（debounce）.md"};function t(c,n,o,i,r,d){return e(),a("div",null,n[0]||(n[0]=[p(`<h1 id="事件的节流-throttle-与防抖-debounce" tabindex="-1">事件的节流（throttle）与防抖（debounce） <a class="header-anchor" href="#事件的节流-throttle-与防抖-debounce" aria-label="Permalink to &quot;事件的节流（throttle）与防抖（debounce）&quot;">​</a></h1><p>scroll 事件是一个非常容易被反复触发的事件。其实不止 scroll 事件，resize 事件、鼠标事件（比如 mousemove、mouseover 等）、键盘事件（keyup、keydown 等）都存在被频繁触发的风险。</p><p>频繁触发回调导致的大量计算会引发页面的抖动甚至卡顿。为了规避这种情况，我们需要一些手段来控制事件被触发的频率。就是在这样的背景下，throttle（事件节流）和 debounce（事件防抖）出现了。</p><h2 id="节流-与-防抖-的本质" tabindex="-1">“节流”与“防抖”的本质 <a class="header-anchor" href="#节流-与-防抖-的本质" aria-label="Permalink to &quot;“节流”与“防抖”的本质&quot;">​</a></h2><p>这两个东西都以<strong>闭包</strong>的形式存在。</p><p>它们通过对事件对应的回调函数进行包裹、以自由变量的形式缓存时间信息， 最后用 setTimeout 来控制事件的触发频率。</p><h2 id="throttle-第一个人说了算" tabindex="-1">Throttle： 第一个人说了算 <a class="header-anchor" href="#throttle-第一个人说了算" aria-label="Permalink to &quot;Throttle： 第一个人说了算&quot;">​</a></h2><p>throttle 的中心思想在于：在某段时间内，不管你触发了多少次回调，我都只认第一次，并在计时结束时给予响应。</p><p>先给大家讲个小故事：现在有一个旅客刚下了飞机，需要用车，于是打电话叫了该机场唯一的一辆机场大巴来接。司机开到机场，心想来都来了，多接几个人一起走吧，这样这趟才跑得值——我等个十分钟看看。于是司机一边打开了计时器，一边招呼后面的客人陆陆续续上车。在这十分钟内，后面下飞机的乘客都只能乘这一辆大巴，十分钟过去后，不管后面还有多少没挤上车的乘客，这班车都必须发走。</p><p>在这个故事里，“司机” 就是我们的节流阀，他控制发车的时机；“乘客”就是因为我们频繁操作事件而不断涌入的回调任务，它需要接受“司机”的安排；而“计时器”，就是我们上文提到的以自由变量形式存在的时间信息，它是“司机”决定发车的依据；最后“发车”这个动作，就对应到回调函数的执行。</p><p>总结下来，所谓的“节流”，是通过在一段时间内<strong>无视后来产生的回调请求</strong>来实现的。只要一位客人叫了车，司机就会为他开启计时器，一定的时间内，后面需要乘车的客人都得排队上这一辆车，谁也无法叫到更多的车。</p><p>对应到实际的交互上是一样一样的：每当用户触发了一次 scroll 事件，我们就为这个触发操作开启计时器。一段时间内，后续所有的 scroll 事件都会被当作“一辆车的乘客”——它们无法触发新的 scroll 回调。直到“一段时间”到了，第一次触发的 scroll 事件对应的回调才会执行，而“一段时间内”触发的后续的 scroll 回调都会被节流阀无视掉。</p><p>理解了大致的思路，我们现在一起实现一个 throttle：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// fn是我们需要包装的事件回调, interval是时间间隔的阈值</span></span>
<span class="line"><span>function throttle(fn, interval) {</span></span>
<span class="line"><span>  // last为上一次触发回调的时间</span></span>
<span class="line"><span>  let last = 0</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  // 将throttle处理结果当作函数返回</span></span>
<span class="line"><span>  return function () {</span></span>
<span class="line"><span>      // 保留调用时的this上下文</span></span>
<span class="line"><span>      let context = this</span></span>
<span class="line"><span>      // 保留调用时传入的参数</span></span>
<span class="line"><span>      let args = arguments</span></span>
<span class="line"><span>      // 记录本次触发回调的时间</span></span>
<span class="line"><span>      let now = +new Date()</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      // 判断上次触发的时间和本次触发的时间差是否小于时间间隔的阈值</span></span>
<span class="line"><span>      if (now - last &gt;= interval) {</span></span>
<span class="line"><span>      // 如果时间间隔大于我们设定的时间间隔阈值，则执行回调</span></span>
<span class="line"><span>          last = now;</span></span>
<span class="line"><span>          fn.apply(context, args);</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 用throttle来包装scroll的回调</span></span>
<span class="line"><span>const better_scroll = throttle(() =&gt; console.log(&#39;触发了滚动事件&#39;), 1000)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>document.addEventListener(&#39;scroll&#39;, better_scroll)</span></span></code></pre></div><h2 id="debounce-最后一个人说了算" tabindex="-1">Debounce： 最后一个人说了算 <a class="header-anchor" href="#debounce-最后一个人说了算" aria-label="Permalink to &quot;Debounce： 最后一个人说了算&quot;">​</a></h2><p>防抖的中心思想在于：我会等你到底。在某段时间内，不管你触发了多少次回调，我都只认最后一次。</p><p>继续讲司机开车的故事。这次的司机比较有耐心。第一个乘客上车后，司机开始计时（比如说十分钟）。十分钟之内，如果又上来了一个乘客，司机会把计时器清零，重新开始等另一个十分钟（延迟了等待）。直到有这么一位乘客，从他上车开始，后续十分钟都没有新乘客上车，司机会认为确实没有人需要搭这趟车了，才会把车开走。</p><p>我们对比 throttle 来理解 debounce：在throttle的逻辑里，“第一个人说了算”，它只为第一个乘客计时，时间到了就执行回调。而 debounce 认为，“最后一个人说了算”，debounce 会为每一个新乘客设定新的定时器。</p><p>我们基于上面的理解，一起来写一个 debounce：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// fn是我们需要包装的事件回调, delay是每次推迟执行的等待时间</span></span>
<span class="line"><span>function debounce(fn, delay) {</span></span>
<span class="line"><span>  // 定时器</span></span>
<span class="line"><span>  let timer = null</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  // 将debounce处理结果当作函数返回</span></span>
<span class="line"><span>  return function () {</span></span>
<span class="line"><span>    // 保留调用时的this上下文</span></span>
<span class="line"><span>    let context = this</span></span>
<span class="line"><span>    // 保留调用时传入的参数</span></span>
<span class="line"><span>    let args = arguments</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 每次事件被触发时，都去清除之前的旧定时器</span></span>
<span class="line"><span>    if(timer) {</span></span>
<span class="line"><span>        clearTimeout(timer)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 设立新定时器</span></span>
<span class="line"><span>    timer = setTimeout(function () {</span></span>
<span class="line"><span>      fn.apply(context, args)</span></span>
<span class="line"><span>    }, delay)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 用debounce来包装scroll的回调</span></span>
<span class="line"><span>const better_scroll = debounce(() =&gt; console.log(&#39;触发了滚动事件&#39;), 1000)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>document.addEventListener(&#39;scroll&#39;, better_scroll)</span></span></code></pre></div><h2 id="用-throttle-来优化-debounce" tabindex="-1">用 Throttle 来优化 Debounce <a class="header-anchor" href="#用-throttle-来优化-debounce" aria-label="Permalink to &quot;用 Throttle 来优化 Debounce&quot;">​</a></h2><p>debounce 的问题在于它“太有耐心了”。试想，如果用户的操作十分频繁——他每次都不等 debounce 设置的 delay 时间结束就进行下一次操作，于是每次 debounce 都为该用户重新生成定时器，回调函数被延迟了不计其数次。频繁的延迟会导致用户迟迟得不到响应，用户同样会产生“这个页面卡死了”的观感。</p><p>为了避免弄巧成拙，我们需要借力 throttle 的思想，打造一个“有底线”的 debounce——等你可以，但我有我的原则：delay 时间内，我可以为你重新生成定时器；但只要delay的时间到了，我必须要给用户一个响应。这个 throttle 与 debounce “合体”思路，已经被很多成熟的前端库应用到了它们的加强版 throttle 函数的实现中：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// fn是我们需要包装的事件回调, delay是时间间隔的阈值</span></span>
<span class="line"><span>function throttle(fn, delay) {</span></span>
<span class="line"><span>  // last为上一次触发回调的时间, timer是定时器</span></span>
<span class="line"><span>  let last = 0, timer = null</span></span>
<span class="line"><span>  // 将throttle处理结果当作函数返回</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  return function () { </span></span>
<span class="line"><span>    // 保留调用时的this上下文</span></span>
<span class="line"><span>    let context = this</span></span>
<span class="line"><span>    // 保留调用时传入的参数</span></span>
<span class="line"><span>    let args = arguments</span></span>
<span class="line"><span>    // 记录本次触发回调的时间</span></span>
<span class="line"><span>    let now = +new Date()</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 判断上次触发的时间和本次触发的时间差是否小于时间间隔的阈值</span></span>
<span class="line"><span>    if (now - last &lt; delay) {</span></span>
<span class="line"><span>    // 如果时间间隔小于我们设定的时间间隔阈值，则为本次触发操作设立一个新的定时器</span></span>
<span class="line"><span>       clearTimeout(timer)</span></span>
<span class="line"><span>       timer = setTimeout(function () {</span></span>
<span class="line"><span>          last = now</span></span>
<span class="line"><span>          fn.apply(context, args)</span></span>
<span class="line"><span>        }, delay)</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        // 如果时间间隔超出了我们设定的时间间隔阈值，那就不等了，无论如何要反馈给用户一次响应</span></span>
<span class="line"><span>        last = now</span></span>
<span class="line"><span>        fn.apply(context, args)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 用新的throttle包装scroll的回调</span></span>
<span class="line"><span>const better_scroll = throttle(() =&gt; console.log(&#39;触发了滚动事件&#39;), 1000)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>document.addEventListener(&#39;scroll&#39;, better_scroll)</span></span></code></pre></div><h2 id="小结" tabindex="-1">小结 <a class="header-anchor" href="#小结" aria-label="Permalink to &quot;小结&quot;">​</a></h2><p>throttle 和 debounce 不仅是我们日常开发中的常用优质代码片段，更是前端面试中不可不知的高频考点。“看懂了代码”、“理解了过程”在本节都是不够的，重要的是把它写到自己的项目里去，亲自体验一把节流和防抖带来的性能提升。</p>`,26)]))}const b=s(l,[["render",t]]);export{h as __pageData,b as default};
