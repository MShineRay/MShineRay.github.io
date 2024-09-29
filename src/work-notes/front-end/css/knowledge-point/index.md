# CSS知识点

## [盒模型](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/The_box_model)
- [box-sizing demo](/css/box-sizing.html)
- [常规流布局](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Normal_Flow)
- [常规流布局](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Normal_Flow)
- [外边距折叠](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - 外边距折叠是指在使用外边距创建空间时，如果没有获得预期的空间，就会发生外边距折叠。
    - 根据外边距相接触的两个元素是正边距还是负边距，结果会有所不同：
      - 两个正外边距将合并为一个外边距。其大小等于最大的单个外边距。
      - 两个负外边距会折叠，并使用最小（离零最远）的值。
      - 如果其中一个外边距为负值，其值将从总值中减去。
- [offsetWidth MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/offsetWidth)
- [clientWidth MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/clientWidth)
- [innerWidth MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/innerWidth)
- [outerWidth MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/outerWidth)
- [浏览器开发者工具 MDN](https://developer.mozilla.org/zh-CN/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools)
  - [chrome 开发者工具](https://developer.chrome.com/docs/devtools/overview?hl=zh-cn)
    - [lighthouse](https://developer.chrome.com/docs/devtools/lighthouse?hl=zh-cn)

## display 的 block、inline 和 inline-block 的区别

### block： 
  - 会独占一行，多个元素会另起一行，可以设置 width、 height、margin 和 padding 属性；
  - 可以自动换行；
  - 多个块状，默认排列从上到下。
### inline：
  - 元素不会独占一行，设置 width、height 属性无效。
  - 可以设置水平方向的 margin 和 padding 属性，不能设置垂直方向的 padding 和 margin；
  - 不会自动换行；
### inline-block：
  - 将对象设置为 inline 对象，但对象的内容作为 block 对象呈现，之后的内联对象会被排列在同一行内。

### 参考资料
- [display MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display)


## link 和 @import 的区别
- 相同点
  - 两者都是外部引用 CSS 的方式
  - 通过媒体查询有条件地加载资源
- 区别如下：
  - link 是 [XHTML](https://developer.mozilla.org/zh-CN/docs/Glossary/XHTML) 标签，除了加载 CSS 外，还可以定义 RSS 等其他事务，这里个人理解：可以使用 [as](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/link#as) 属性加载其他格式文件，比如script、font；<br/> @import 属于 CSS 范畴，只能加载 CSS。
  - link 引用 CSS 时，在页面载入时同时加载；<br/> @import 需要页面网页完全载入以后加载。
     ~~~
     加载页面时，link标签引入的 CSS 在加载页面时会被同时加载；
     @import引入的 CSS 将在页面加载完毕后才会被加载，因此，可能会导致页面加载速度变慢。
     ~~~
  - link 是 XHTML 标签，无兼容问题；<br/> @import 是在 CSS2.1 提出的，低版本的浏览器不支持。
  - link 支持使用 Javascript 控制 DOM 去改变样式([样式表加载事件](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/link#%E6%A0%B7%E5%BC%8F%E8%A1%A8%E5%8A%A0%E8%BD%BD%E4%BA%8B%E4%BB%B6))；<br/>而@import 不支持
    ~~~
     可以通过 JS 操作 DOM ，插入link标签来改变样式；
     由于 DOM 方法是基于文档的，无法使用@import的方式插入样式。
    ~~~
    ~~~html
    <script>
     const stylesheet = document.querySelector("#my-stylesheet");
      stylesheet.onload = () => {
       // 做点有意思的事情，样式表已经加载了
      };

      stylesheet.onerror = () => {
         console.log("加载样式表时发生错误！");
      };
    </script>
     <link rel="stylesheet" href="mystylesheet.css" id="my-stylesheet" />
    ~~~


### 参考资料
- [HTML | 外部引入 CSS 的2种方式：link和@import有什么区别？](https://blog.csdn.net/sunyctf/article/details/142152375)
- [XHTML MDN](https://developer.mozilla.org/zh-CN/docs/Glossary/XHTML)
- [HTML MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML)
- [HTML element  link MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/link)
- [web css @import MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/%40import)


## CSS Sprites
   CSSSprites（精灵图），将一个页面涉及到的所有图片都包含到一张
   大图中去，然后利用 CSS 的 background-image，background-repeat，
   background-position 属性的组合进行背景定位。
   ### 优点：
   利用 CSS Sprites 能很好地减少网页的 http 请求，从而大大提高了
   页面的性能，这是 CSS Sprites 最大的优点；<br/>
   CSS Sprites 能减少图片的字节，把 3 张图片合并成 1 张图片的字节
   总是小于这 3 张图片的字节总和。
   ### 缺点：
   在图片合并时，要把多张图片有序的、合理的合并成一张图片，还要
   留好足够的空间，防止板块内出现不必要的背景。在宽屏及高分辨率
   下的自适应页面，如果背景不够宽，很容易出现背景断裂；<br/>
   CSS Sprites 在开发的时候相对来说有点麻烦，需要借助 photoshop
   或其他工具来对每个背景单元测量其准确的位置。<br/>
   维护方面：CSS Sprites 在维护的时候比较麻烦，页面背景有少许改
   动时，就要改这张合并的图片，无需改的地方尽量不要动，这样避免
   改动更多的 CSS，如果在原来的地方放不下，又只能（最好）往下加
   图片，这样图片的字节就增加了，还要改动CSS。


## CSS 优化和提高性能的方法有哪些？
### 加载性能：
- （1）css 压缩：将写好的 css 进行打包压缩，可以减小文件体积。
- （2）css 单一样式：当需要下边距和左边距的时候，很多时候会选择使用 margin:top 0 bottom 0 ； 但
margin-bottom:bottom;margin-left:left;执行效率会更高。
- （3）减少使用@import，建议使用 link，因为后者在页面加载时一起加载，前者是等待页面加载完成之后再进行加载。
### 选择器性能：
- （1）关键选择器（key selector）。选择器的最后面的部分为关键选择器（即用来匹配目标元素的部分）。CSS 选择符是从右到左进行
匹配的。当使用后代选择器的时候，浏览器会遍历所有子元素来确定是否是指定的元素等等；
- （2）如果规则拥有 ID 选择器作为其关键选择器，则不要为规则增加标签。过滤掉无关的规则（这样样式系统就不会浪费时间去匹配它们了）。
- （3）避免使用通配规则，如*{}计算次数惊人，只对需要用到的元素进行选择。
- （4）尽量少的去对标签进行选择，而是用 class。
- （5）尽量少的去使用后代选择器，降低选择器的权重值。后代选择器的开销是最高的，尽量将选择器的深度降到最低，最高不要超过三层，更多的使用类来关联每一个标签元素。
- （6）了解哪些属性是可以通过继承而来的，然后避免对这些属性重复指定规则。
### 渲染性能：
- （1）慎重使用高性能属性：浮动、定位。
- （2）尽量减少页面重排、重绘。
- （3）去除空规则：｛｝。空规则的产生原因一般来说是为了预留样式。去除这些空规则无疑能减少 css 文档体积。
- （4）属性值为 0 时，不加单位。
- （5）属性值为浮动小数 0.**，可以省略小数点之前的 0。
- （6）标准化各种浏览器前缀：带浏览器前缀的在前。标准属性在后。
- （7）不使用@import 前缀，它会影响 css 的加载速度。
- （8）选择器优化嵌套，尽量避免层级过深。
- （9）css 雪碧图，同一页面相近部分的小图标，方便使用，减少页面的请求次数，但是同时图片本身会变大，使用时，优劣考虑清楚再使用。
- （10）正确使用 display 的属性，由于 display 的作用，某些样式组合会无效，徒增样式体积的同时也影响解析性能。
- （11）不滥用 web 字体。对于中文网站来说 WebFonts 可能很陌生， 国外却很流行。web fonts 通常体积庞大，而且一些浏览器在下载 web fonts 时会阻塞页面渲染损伤性能。
### 可维护性、健壮性:
-  （1）将具有相同属性的样式抽离出来，整合并通过 class 在页面中进行使用，提高 css 的可维护性。
-  （2）样式与内容分离：将 css 代码定义到外部 css 中


## 对 CSS 工程化的理解
   ### CSS 工程化是为了解决以下问题：
   - 1.宏观设计：CSS 代码如何组织、如何拆分、模块结构怎样设计？
   - 2.编码优化：怎样写出更好的 CSS？
   - 3.构建：如何处理我的 CSS，才能让它的打包结果最优？
   - 4.可维护性：代码写完了，如何最小化它后续的变更成本？如何确保任何一个同事都能轻松接手？

   ### CSS 工程化实践：
   - 预处理器：Less、 Sass 等；
   - 重要的工程化插件： PostCss； Webpack loader 等。

   ### （1）预处理器：为什么要用预处理器？它的出现是为了解决什么问题？
<p>预处理器，其实就是 CSS 世界的“轮子”。预处理器支持我们写一种类似 CSS、但实际并不是 CSS 的语言，然后把它编译成 CSS 代码：
</p>

   <img src="https://imageslib.github.io/img/css/css-prerender01.png"/>

<p>那为什么写 CSS 代码写得好好的，偏偏要转去写“类 CSS”呢？
    这就和本来用 JS 也可以实现所有功能，但最后却写 React 的 jsx 或者Vue 的模板语法一样——为了爽！
    要想知道有了预处理器有多爽，首先要知道的是传统 CSS 有多不爽。
 </p> 

<p>
    随着前端业务复杂度的提高，前端工程中对 CSS 提出了以下的诉求：
 </p>

- 1.宏观设计上：希望能优化 CSS 文件的目录结构，对现有的 CSS 文件实现复用；
- 2.编码优化上：希望能写出结构清晰、简明易懂的 CSS，需要它具有一目了然的嵌套层级关系，而不是无差别的一铺到底写法；希望它具有变量特征、计算能力、循环能力等等更强的可编程性，这样可以少写一些无用的代码；
- 3.可维护性上：更强的可编程性意味着更优质的代码结构，实现复用意味着更简单的目录结构和更强的拓展能力，这两点如果能做到，自然会带来更强的可维护性。
   
 <p> 
  这三点是传统 CSS 所做不到的，也正是预处理器所解决掉的问题。<br/>
  预处理器普遍会具备这样的特性：
</p>

  - 嵌套代码的能力，通过嵌套来反映不同 css 属性之间的层级关系；
  - 支持定义 css 变量；
  - 提供计算函数；
  - 允许对代码片段进行 extend 和 mixin；
  - 支持循环语句的使用；
  - 支持将 CSS 文件模块化，实现复用。
    
### （2）PostCss 是如何工作的？在什么场景下会使用？
<p>  PostCss 仍然是一个对 CSS 进行解析和处理的工具，它会对 CSS 做
    这样的事情：
</p>
  
<img src="https://imageslib.github.io/img/css/css-prerender02.png"/>

<p>它和预处理器的不同就在于，预处理器处理的是 类 CSS，而 PostCss
处理的就是 CSS 本身。Babel 可以将高版本的 JS 代码转换为低版
本的 JS 代码。<br/>PostCss 做的是类似的事情：它可以编译尚未被浏览
器广泛支持的先进的 CSS 语法，还可以自动为一些需要额外兼容的
语法增加前缀。更强的是，由于 PostCss 有着强大的插件机制，支
持各种各样的扩展，极大地强化了 CSS 的能力。</p>

<p>PostCss 在业务中的使用场景非常多：<br/>
提高 CSS 代码的可读性：PostCss 其实可以做类似预处理器能做的
工作；<br/>
当我们的 CSS 代码需要适配低版本浏览器时 ， PostCss 的
Autoprefixer 插件可以帮助我们自动增加浏览器前缀；<br/>
允许我们编写面向未来的 CSS：PostCss 能够帮助我们编译 CSS
next 代码
</p> 


### （3）Webpack 能处理 CSS 吗？如何实现？
<p>Webpack 在裸奔的状态下，是不能处理 CSS 的，Webpack 本身是一个面向 JavaScript 且只能处理 JavaScript 代码的模块化打包工具；<br />
Webpack 在 loader 的辅助下，是可以处理 CSS 的。<br />
如何用 Webpack 实现对 CSS 的处理：<br />
Webpack 中操作 CSS 需要使用的两个关键的 loader：css-loader
和 style-loader <br />
css-loader：导入 CSS 模块，对 CSS 代码进行编译处理；<br />
style-loader：创建 style 标签，把 CSS 内容写入标签。<br />
在实际使用中，css-loader 的执行顺序一定要安排在 style-loader
的前面。因为只有完成了编译过程，才可以对 css 代码进行插入；<br />
若提前插入了未编译的代码，webpack 是无法理解的，会报错。
</p>


## 对 BFC 的理解，如何创建 BFC
- Box: Box 是 CSS 布局的对象和基本单位，⼀个⻚⾯是由很多个 Box
组成的，这个 Box 就是我们所说的盒模型。
- Formatting context：块级上下⽂格式化，它是⻚⾯中的⼀块渲染区
域，并且有⼀套渲染规则，它决定了其⼦元素将如何定位，以及和其
他元素的关系和相互作⽤。
- 块格式化上下文（Block Formatting Context，BFC）是 Web 页面的
可视化 CSS 渲染的一部分，是布局过程中生成块级盒子的区域，也是
浮动元素与其他元素的交互限定区域。

通俗来讲：BFC 是一个独立的布局环境，可以理解为一个容器，在这
个容器中按照一定规则进行物品摆放，并且不会影响其它环境中的物
品。如果一个元素符合触发 BFC 的条件，则 BFC 中的元素布局不受外部影响。


### 创建 BFC 的条件：
- 根元素：body；
- 元素设置浮动：float 除 none 以外的值；
- 元素设置绝对定位：position (absolute、fixed)；
- display 值为：inline-block、table-cell、table-caption、flex
等；
- overflow 值为：hidden、auto、scroll；
### BFC 的特点：
- 垂直方向上，自上而下排列，和文档流的排列方式一致。
- 在 BFC 中上下相邻的两个容器的 margin 会重叠
- 计算 BFC 的高度时，需要计算浮动元素的高度
- BFC 区域不会与浮动的容器发生重叠
- BFC 是独立的容器，容器内部元素不会影响外部元素
- 每个元素的左 margin 值和容器的左 border 相接触
### BFC 的作用：
- 解决 margin 的重叠问题：
  - 由于 BFC 是一个独立的区域，内部的元素 和外部的元素互不影响，将两个元素变为两个 BFC，就解决了 margin
  重叠的问题。
  
- 解决高度塌陷的问题：
  - 在对子元素设置浮动后，父元素会发生高度塌
  陷，也就是父元素的高度变为 0。解决这个问题，只需要把父元素变
  成一个 BFC。常用的办法是给父元素设置 overflow:hidden。
  
- 创建自适应两栏布局：
  - 可以用来创建自适应两栏布局：左边的宽度固定，右边的宽度自适应。
  ~~~css
  .left{
    width: 100px;
    height: 200px;
    background-color: red;
    float: left;
  }
  .right{
    height: 300px;
    background-color: blue;
    overflow: hidden;
  }
  ~~~
  ~~~html
  <div class="left"></div>
  <div class="right"></div>
  ~~~

  左侧设置 float:left，右侧设置 overflow: hidden。这样右边就触
发了 BFC，BFC 的区域不会与浮动元素发生重叠，所以两侧就不会发
生重叠，实现了自适应两栏布局。


## 元素的层叠顺序
层叠顺序，英文称作 stacking order，表示元素发生层叠时有着特
定的垂直显示顺序。下面是盒模型的层叠规则：

<img src="https://imageslib.github.io/img/css/css-stacking-order.png"/>

<br/>

对于上图，由上到下分别是：
- （1）背景和边框：建立当前层叠上下文元素的背景和边框。
- （2）负的 z-index：当前层叠上下文中，z-index 属性值为负的元素。
- （3）块级盒：文档流内非行内级非定位后代元素。
- （4）浮动盒：非定位浮动元素。
- （5）行内盒：文档流内行内级非定位后代元素。
- （6）z-index:0：层叠级数为 0 的定位元素。
- （7）正 z-index：z-index 属性值为正的定位元素。

注意: 当定位元素 z-index:auto，生成盒在当前层叠上下文中的层
级为 0，不会建立新的层叠上下文，除非是根元素。


## 参考资料
- [MDN](https://developer.mozilla.org/)
- [前端面试题之CSS篇](https://www.yuque.com/cuggz/interview/evfmq3)
- 本文收集整理于语雀博主 [CUGGZ]的原创文章 <br/>
  原文链接：https://www.yuque.com/cuggz/interview/evfmq3

