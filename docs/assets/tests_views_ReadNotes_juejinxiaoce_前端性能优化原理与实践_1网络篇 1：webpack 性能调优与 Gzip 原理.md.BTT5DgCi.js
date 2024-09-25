import{_ as s,c as n,a2 as p,o as e}from"./chunks/framework.CuYr6EMX.js";const h=JSON.parse('{"title":"webpack 性能调优与 Gzip 原理","description":"","frontmatter":{},"headers":[],"relativePath":"tests/views/ReadNotes/juejinxiaoce/前端性能优化原理与实践/1网络篇 1：webpack 性能调优与 Gzip 原理.md","filePath":"tests/views/ReadNotes/juejinxiaoce/前端性能优化原理与实践/1网络篇 1：webpack 性能调优与 Gzip 原理.md"}'),l={name:"tests/views/ReadNotes/juejinxiaoce/前端性能优化原理与实践/1网络篇 1：webpack 性能调优与 Gzip 原理.md"};function i(t,a,c,o,d,r){return e(),n("div",null,a[0]||(a[0]=[p(`<h1 id="webpack-性能调优与-gzip-原理" tabindex="-1">webpack 性能调优与 Gzip 原理 <a class="header-anchor" href="#webpack-性能调优与-gzip-原理" aria-label="Permalink to &quot;webpack 性能调优与 Gzip 原理&quot;">​</a></h1><p>我们从输入 URL 到显示页面这个过程中，涉及到网络层面的，有三个主要过程：</p><ul><li>DNS 解析</li><li>TCP 连接</li><li>HTTP 请求/响应</li></ul><p>对于 DNS 解析和 TCP 连接两个步骤，我们前端可以做的努力非常有限。相比之下，HTTP 连接这一层面的优化才是我们网络优化的核心。</p><p>HTTP 优化有两个大的方向：</p><ul><li>减少请求次数</li><li>减少单次请求所花费的时间</li></ul><p>非常常见的操作——资源的压缩与合并。</p><h2 id="webpack-的性能瓶颈" tabindex="-1">webpack 的性能瓶颈 <a class="header-anchor" href="#webpack-的性能瓶颈" aria-label="Permalink to &quot;webpack 的性能瓶颈&quot;">​</a></h2><p>webpack 的优化瓶颈，主要是两个方面：</p><ul><li>webpack 的构建过程太花时间</li><li>webpack 打包的结果体积太大</li></ul><h2 id="webpack-优化方案" tabindex="-1">webpack 优化方案 <a class="header-anchor" href="#webpack-优化方案" aria-label="Permalink to &quot;webpack 优化方案&quot;">​</a></h2><h3 id="构建过程提速策略" tabindex="-1">构建过程提速策略 <a class="header-anchor" href="#构建过程提速策略" aria-label="Permalink to &quot;构建过程提速策略&quot;">​</a></h3><h4 id="不要让-loader-做太多事情——以-babel-loader-为例" tabindex="-1">不要让 loader 做太多事情——以 babel-loader 为例 <a class="header-anchor" href="#不要让-loader-做太多事情——以-babel-loader-为例" aria-label="Permalink to &quot;不要让 loader 做太多事情——以 babel-loader 为例&quot;">​</a></h4><p>babel-loader 无疑是强大的，但它也是慢的。</p><p>最常见的优化方式是，用 include 或 exclude 来帮我们避免不必要的转译，比如 webpack 官方在介绍 babel-loader 时给出的示例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>module: {</span></span>
<span class="line"><span>  rules: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      test: /\\.js$/,</span></span>
<span class="line"><span>      exclude: /(node_modules|bower_components)/,</span></span>
<span class="line"><span>      use: {</span></span>
<span class="line"><span>        loader: &#39;babel-loader&#39;,</span></span>
<span class="line"><span>        options: {</span></span>
<span class="line"><span>          presets: [&#39;@babel/preset-env&#39;]</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这段代码帮我们规避了对庞大的 node_modules 文件夹或者 bower_components 文件夹的处理。但通过限定文件范围带来的性能提升是有限的。除此之外，如果我们选择开启缓存将转译结果缓存至文件系统，则至少可以将 babel-loader 的工作效率提升两倍。要做到这点，我们只需要为 loader 增加相应的参数设定：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>loader: &#39;babel-loader?cacheDirectory=true&#39;</span></span></code></pre></div><p>尽管可以在 loader 配置时通过写入 exclude 去避免 babel-loader 对不必要的文件的处理，但是考虑到这个规则仅作用于这个 loader，像一些类似 UglifyJsPlugin 的 webpack 插件在工作时依然会被这些庞大的第三方库拖累，webpack 构建速度依然会因此大打折扣。</p><h4 id="不要放过第三方库" tabindex="-1">不要放过第三方库 <a class="header-anchor" href="#不要放过第三方库" aria-label="Permalink to &quot;不要放过第三方库&quot;">​</a></h4><p>第三方库以 node_modules 为代表，它们庞大得可怕，却又不可或缺。</p><p>处理第三方库的姿势有很多，其中，Externals 不够聪明，一些情况下会引发重复打包的问题；而 CommonsChunkPlugin 每次构建时都会重新构建一次 vendor；出于对效率的考虑，我们这里为大家推荐 DllPlugin。</p><p>DllPlugin 是基于 Windows 动态链接库（dll）的思想被创作出来的。这个插件会把第三方库单独打包到一个文件中，这个文件就是一个单纯的依赖库。<strong>这个依赖库不会跟着你的业务代码一起被重新打包，只有当依赖自身发生版本变化时才会重新打包</strong>。</p><p>用 DllPlugin 处理文件，要分两步走：</p><ul><li>基于 dll 专属的配置文件，打包 dll 库</li><li>基于 webpack.config.js 文件，打包业务代码</li></ul><p>以一个基于 React 的简单项目为例，我们的 dll 的配置文件可以编写如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const path = require(&#39;path&#39;)</span></span>
<span class="line"><span>const webpack = require(&#39;webpack&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>module.exports = {</span></span>
<span class="line"><span>    entry: {</span></span>
<span class="line"><span>      // 依赖的库数组</span></span>
<span class="line"><span>      vendor: [</span></span>
<span class="line"><span>        &#39;prop-types&#39;,</span></span>
<span class="line"><span>        &#39;babel-polyfill&#39;,</span></span>
<span class="line"><span>        &#39;react&#39;,</span></span>
<span class="line"><span>        &#39;react-dom&#39;,</span></span>
<span class="line"><span>        &#39;react-router-dom&#39;,</span></span>
<span class="line"><span>      ]</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    output: {</span></span>
<span class="line"><span>      path: path.join(__dirname, &#39;dist&#39;),</span></span>
<span class="line"><span>      filename: &#39;[name].js&#39;,</span></span>
<span class="line"><span>      library: &#39;[name]_[hash]&#39;,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    plugins: [</span></span>
<span class="line"><span>      new webpack.DllPlugin({</span></span>
<span class="line"><span>        // DllPlugin的name属性需要和libary保持一致</span></span>
<span class="line"><span>        name: &#39;[name]_[hash]&#39;,</span></span>
<span class="line"><span>        path: path.join(__dirname, &#39;dist&#39;, &#39;[name]-manifest.json&#39;),</span></span>
<span class="line"><span>        // context需要和webpack.config.js保持一致</span></span>
<span class="line"><span>        context: __dirname,</span></span>
<span class="line"><span>      }),</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>编写完成之后，运行这个配置文件，我们的 dist 文件夹里会出现这样两个文件：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>vendor-manifest.json</span></span>
<span class="line"><span>vendor.js</span></span></code></pre></div><p>vendor.js 不必解释，是我们第三方库打包的结果。这个多出来的 vendor-manifest.json，则用于描述每个第三方库对应的具体路径：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;name&quot;: &quot;vendor_397f9e25e49947b8675d&quot;,</span></span>
<span class="line"><span>  &quot;content&quot;: {</span></span>
<span class="line"><span>    &quot;./node_modules/core-js/modules/_export.js&quot;: {</span></span>
<span class="line"><span>      &quot;id&quot;: 0,</span></span>
<span class="line"><span>        &quot;buildMeta&quot;: {</span></span>
<span class="line"><span>        &quot;providedExports&quot;: true</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    &quot;./node_modules/prop-types/index.js&quot;: {</span></span>
<span class="line"><span>      &quot;id&quot;: 1,</span></span>
<span class="line"><span>        &quot;buildMeta&quot;: {</span></span>
<span class="line"><span>        &quot;providedExports&quot;: true</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>随后，我们只需在 webpack.config.js 里针对 dll 稍作配置：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const path = require(&#39;path&#39;);</span></span>
<span class="line"><span>const webpack = require(&#39;webpack&#39;)</span></span>
<span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  mode: &#39;production&#39;,</span></span>
<span class="line"><span>  // 编译入口</span></span>
<span class="line"><span>  entry: {</span></span>
<span class="line"><span>    main: &#39;./src/index.js&#39;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  // 目标文件</span></span>
<span class="line"><span>  output: {</span></span>
<span class="line"><span>    path: path.join(__dirname, &#39;dist/&#39;),</span></span>
<span class="line"><span>    filename: &#39;[name].js&#39;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  // dll相关配置</span></span>
<span class="line"><span>  plugins: [</span></span>
<span class="line"><span>    new webpack.DllReferencePlugin({</span></span>
<span class="line"><span>      context: __dirname,</span></span>
<span class="line"><span>      // manifest就是我们第一步中打包出来的json文件</span></span>
<span class="line"><span>      manifest: require(&#39;./dist/vendor-manifest.json&#39;),</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="happypack——将-loader-由单进程转为多进程" tabindex="-1">Happypack——将 loader 由单进程转为多进程 <a class="header-anchor" href="#happypack——将-loader-由单进程转为多进程" aria-label="Permalink to &quot;Happypack——将 loader 由单进程转为多进程&quot;">​</a></h4><p>webpack 是单线程的，就算此刻存在多个任务，你也只能排队一个接一个地等待处理。这是 webpack 的缺点，好在我们的 CPU 是多核的，Happypack 会充分释放 CPU 在多核并发方面的优势，帮我们把任务分解给多个子进程去并发执行，大大提升打包效率。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const HappyPack = require(&#39;happypack&#39;)</span></span>
<span class="line"><span>// 手动创建进程池</span></span>
<span class="line"><span>const happyThreadPool =  HappyPack.ThreadPool({ size: os.cpus().length })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  module: {</span></span>
<span class="line"><span>    rules: [</span></span>
<span class="line"><span>      ...</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        test: /\\.js$/,</span></span>
<span class="line"><span>        // 问号后面的查询参数指定了处理这类文件的HappyPack实例的名字</span></span>
<span class="line"><span>        loader: &#39;happypack/loader?id=happyBabel&#39;,</span></span>
<span class="line"><span>        ...</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  plugins: [</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span>    new HappyPack({</span></span>
<span class="line"><span>      // 这个HappyPack的“名字”就叫做happyBabel，和楼上的查询参数遥相呼应</span></span>
<span class="line"><span>      id: &#39;happyBabel&#39;,</span></span>
<span class="line"><span>      // 指定进程池</span></span>
<span class="line"><span>      threadPool: happyThreadPool,</span></span>
<span class="line"><span>      loaders: [&#39;babel-loader?cacheDirectory&#39;]</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="构建结果体积压缩" tabindex="-1">构建结果体积压缩 <a class="header-anchor" href="#构建结果体积压缩" aria-label="Permalink to &quot;构建结果体积压缩&quot;">​</a></h3><h4 id="文件结构可视化-找出导致体积过大的原因" tabindex="-1">文件结构可视化，找出导致体积过大的原因 <a class="header-anchor" href="#文件结构可视化-找出导致体积过大的原因" aria-label="Permalink to &quot;文件结构可视化，找出导致体积过大的原因&quot;">​</a></h4><p>包组成可视化工具——<a href="https://www.npmjs.com/package/webpack-bundle-analyzer" target="_blank" rel="noreferrer">webpack-bundle-analyzer</a>,</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const BundleAnalyzerPlugin = require(&#39;webpack-bundle-analyzer&#39;).BundleAnalyzerPlugin;</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  plugins: [</span></span>
<span class="line"><span>    new BundleAnalyzerPlugin()</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="拆分资源" tabindex="-1">拆分资源 <a class="header-anchor" href="#拆分资源" aria-label="Permalink to &quot;拆分资源&quot;">​</a></h4><h4 id="删除冗余代码" tabindex="-1">删除冗余代码 <a class="header-anchor" href="#删除冗余代码" aria-label="Permalink to &quot;删除冗余代码&quot;">​</a></h4><p>一个比较典型的应用，就是 <code>Tree-Shaking</code>。</p><p>从 webpack2 开始，webpack 原生支持了 ES6 的模块系统，并基于此推出了 Tree-Shaking。webpack 官方是这样介绍它的：</p><blockquote><p>Tree shaking is a term commonly used in the JavaScript context for dead-code elimination, or more precisely, live-code import. It relies on ES2015 module import/export for the static structure of its module system.</p></blockquote><p>意思是基于 import/export 语法，Tree-Shaking 可以在编译的过程中获悉哪些模块并没有真正被使用，这些没用的代码，在最后打包的时候会被去除。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { page1, page2 } from &#39;./pages&#39;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>// show是事先定义好的函数，大家理解它的功能是展示页面即可</span></span>
<span class="line"><span>show(page1)</span></span></code></pre></div><p>pages 文件里，我虽然导出了两个页面：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>export const page1 = xxx</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export const page2 = xxx</span></span></code></pre></div><p>但因为 page2 事实上并没有被用到（这个没有被用到的情况在静态分析的过程中是可以被感知出来的），所以打包的结果里会把这部分：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>export const page2 = xxx;</span></span></code></pre></div><p>直接删掉，这就是 Tree-Shaking 帮我们做的事情。</p><p>Tree-Shaking 的针对性很强，它更适合用来处理模块级别的冗余代码。至于<strong>粒度更细</strong>的冗余代码的去除，往往会被整合进 JS 或 CSS 的压缩或分离过程中。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const UglifyJsPlugin = require(&#39;uglifyjs-webpack-plugin&#39;);</span></span>
<span class="line"><span>module.exports = {</span></span>
<span class="line"><span> plugins: [</span></span>
<span class="line"><span>   new UglifyJsPlugin({</span></span>
<span class="line"><span>     // 允许并发</span></span>
<span class="line"><span>     parallel: true,</span></span>
<span class="line"><span>     // 开启缓存</span></span>
<span class="line"><span>     cache: true,</span></span>
<span class="line"><span>     compress: {</span></span>
<span class="line"><span>       // 删除所有的console语句    </span></span>
<span class="line"><span>       drop_console: true,</span></span>
<span class="line"><span>       // 把使用多次的静态值自动定义为变量</span></span>
<span class="line"><span>       reduce_vars: true,</span></span>
<span class="line"><span>     },</span></span>
<span class="line"><span>     output: {</span></span>
<span class="line"><span>       // 不保留注释</span></span>
<span class="line"><span>       comment: false,</span></span>
<span class="line"><span>       // 使输出的代码尽可能紧凑</span></span>
<span class="line"><span>       beautify: false</span></span>
<span class="line"><span>     }</span></span>
<span class="line"><span>   })</span></span>
<span class="line"><span> ]</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这段手动引入 UglifyJsPlugin 的代码其实是 webpack3 的用法，webpack4 现在已经默认使用 uglifyjs-webpack-plugin 对代码做压缩了——在 webpack4 中，我们是通过配置 optimization.minimize 与 optimization.minimizer 来自定义压缩相关的操作的。</p><h4 id="按需加载" tabindex="-1">按需加载 <a class="header-anchor" href="#按需加载" aria-label="Permalink to &quot;按需加载&quot;">​</a></h4><p>用 React 构建一个单页应用，用 React-Router 来控制路由，十个路由对应了十个页面，这十个页面都不简单。如果我把这整个项目打一个包，用户打开我的网站时，会发生什么？有很大机率会卡死，更好的做法肯定是先给用户展示主页，其它页面等请求到了再加载。当然这个情况也比较极端，但却能很好地引出按需加载的思想：</p><ul><li><p>一次不加载完所有的文件内容，只加载此刻需要用到的那部分（会提前做拆分）</p></li><li><p>当需要更多内容时，再对用到的内容进行即时加载</p></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import BugComponent from &#39;../pages/BugComponent&#39;</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>&lt;Route path=&quot;/bug&quot; component={BugComponent}&gt;</span></span></code></pre></div><p>为了开启按需加载，我们要稍作改动。</p><p>首先 webpack 的配置文件要走起来：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>output: {</span></span>
<span class="line"><span>    path: path.join(__dirname, &#39;/../dist&#39;),</span></span>
<span class="line"><span>    filename: &#39;app.js&#39;,</span></span>
<span class="line"><span>    publicPath: defaultSettings.publicPath,</span></span>
<span class="line"><span>    // 指定 chunkFilename</span></span>
<span class="line"><span>    chunkFilename: &#39;[name].[chunkhash:5].chunk.js&#39;,</span></span>
<span class="line"><span>},</span></span></code></pre></div><p>路由处的代码也要做一下配合：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const getComponent =&gt; (location, cb) {</span></span>
<span class="line"><span>  require.ensure([], (require) =&gt; {</span></span>
<span class="line"><span>    cb(null, require(&#39;../pages/BugComponent&#39;).default)</span></span>
<span class="line"><span>  }, &#39;bug&#39;)</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>&lt;Route path=&quot;/bug&quot; getComponent={getComponent}&gt;</span></span></code></pre></div><p>对，核心就是这个方法：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>require.ensure(dependencies, callback, chunkName)</span></span></code></pre></div><p>这是一个异步的方法，webpack 在打包时，BugComponent 会被单独打成一个文件，只有在我们跳转 bug 这个路由的时候，这个异步方法的回调才会生效，才会真正地去获取 BugComponent 的内容。这就是按需加载。</p><p>在 React-Router4 中，我们确实是用 Code-Splitting 替换掉了楼上这个操作。而且如果有使用过 React-Router4 实现过路由级别的按需加载的同学，可能会对 React-Router4 里用到的一个叫“Bundle-Loader”的东西印象深刻。</p><p>去看一下 Bundle Loader 并不长的源代码的话，你会发现它竟然还是使用 require.ensure 来实现的——这也是我要把 require.ensure 单独拎出来的重要原因。 所谓按需加载，根本上就是在正确的时机去触发相应的回调。理解了这个 require.ensure 的玩法，大家甚至可以结合业务自己去修改一个按需加载模块来用。</p><h2 id="gzip-压缩原理" tabindex="-1">Gzip 压缩原理 <a class="header-anchor" href="#gzip-压缩原理" aria-label="Permalink to &quot;Gzip 压缩原理&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>accept-encoding:gzip</span></span></code></pre></div><blockquote><p>HTTP 压缩是一种内置到网页服务器和网页客户端中以改进传输速度和带宽利用率的方式。在使用 HTTP 压缩的情况下，HTTP 数据在从服务器发送前就已压缩：兼容的浏览器将在下载所需的格式前宣告支持何种方法给服务器；不支持压缩方法的浏览器将下载未经压缩的数据。最常见的压缩方案包括 Gzip 和 Deflate。</p></blockquote><p><strong>HTTP 压缩就是以缩小体积为目的，对 HTTP 内容进行重新编码的过程</strong></p><p>Gzip 的内核就是 Deflate，目前我们压缩文件用得最多的就是 Gzip。 可以说，Gzip 就是 HTTP 压缩的经典例题。</p><h3 id="该不该用-gzip" tabindex="-1">该不该用 Gzip <a class="header-anchor" href="#该不该用-gzip" aria-label="Permalink to &quot;该不该用 Gzip&quot;">​</a></h3><p>如果你的项目不是极端迷你的超小型文件，我都建议你试试 Gzip。</p><p>压缩 Gzip，服务端要花时间；解压 Gzip，浏览器要花时间。中间节省出来的传输时间， 真的那么可观吗？</p><p>答案是肯定的。如果是 1k、2k 的小文件，那确实有点高射炮打蚊子的意思，不值当。 但更多的时候，我们处理的都是具备一定规模的项目文件。 实践证明，这种情况下压缩和解压带来的时间开销相对于传输过程中节省下的时间开销来说， 可以说是微不足道的。</p><h3 id="gzip-是万能的吗" tabindex="-1">Gzip 是万能的吗 <a class="header-anchor" href="#gzip-是万能的吗" aria-label="Permalink to &quot;Gzip 是万能的吗&quot;">​</a></h3><p>首先要承认 Gzip 是高效的，压缩后<strong>通常</strong>能帮我们减少响应 70% 左右的大小。</p><p>但它并非万能。Gzip 并不保证针对每一个文件的压缩都会使其变小。</p><p>Gzip 压缩背后的原理，是在一个文本文件中找出一些重复出现的字符串、临时替换它们， 从而使整个文件变小。根据这个原理，文件中代码的重复率越高，那么压缩的效率就越高， 使用 Gzip 的收益也就越大。反之亦然。</p><h3 id="webpack-的-gzip-和服务端的-gzip" tabindex="-1">webpack 的 Gzip 和服务端的 Gzip <a class="header-anchor" href="#webpack-的-gzip-和服务端的-gzip" aria-label="Permalink to &quot;webpack 的 Gzip 和服务端的 Gzip&quot;">​</a></h3><p>一般来说，Gzip 压缩是服务器的活儿：服务器了解到我们这边有一个 Gzip 压缩的需求，它会启动自己的 CPU 去为我们完成这个任务。 而压缩文件这个过程本身是需要耗费时间的，大家可以理解为我们以服务器压缩的时间开销和 CPU 开销（以及浏览器解析压缩文件的开销）为代价， 省下了一些传输过程中的时间开销。</p><p>服务器的 CPU 性能不是无限的，如果存在大量的压缩需求，服务器也扛不住的。服务器一旦因此慢下来了，用户还是要等。 Webpack 中 Gzip 压缩操作的存在，事实上就是为了在构建过程中去做一部分服务器的工作，为服务器分压。</p><p>因此，这两个地方的 Gzip 压缩，谁也不能替代谁。它们必须和平共处，好好合作。作为开发者，我们也应该结合业务压力的实际强度情况，去做好这其中的权衡。</p>`,86)]))}const b=s(l,[["render",i]]);export{h as __pageData,b as default};
