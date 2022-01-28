# Performance、LightHouse 与性能 API

性能监测是前端性能优化的重要一环。监测的目的是为了确定性能瓶颈，从而有的放矢地开展具体的优化工作。

性能监测方案主要有两种：**可视化方案、可编程方案**。

## 可视化监测：从 Performance 面板说起

Performance 是 Chrome 提供给我们的开发者工具，用于记录和分析我们的应用在运行时的所有活动。它呈现的数据具有实时性、多维度的特点，可以帮助我们很好地定位性能问题。

### 开始记录

右键打开开发者工具，选中我们的 Performance 面板：


当我们选中图中所标示的实心圆按钮，Performance 会开始帮我们记录我们后续的交互操作；当我们选中圆箭头按钮，Performance 会将页面重新加载，计算加载过程中的性能表现。  
tips：使用 Performance 工具时，为了规避其它 Chrome 插件对页面的性能影响，我们最好在无痕模式下打开页面：


### 简要分析

**FPS**：这是一个和动画性能密切相关的指标，它表示每一秒的帧数。图中绿色柱状越高表示帧率越高，体验就越流畅。若出现红色块，则代表长时间帧，很可能会出现卡顿。图中以绿色为主，偶尔出现红块，说明网页性能并不糟糕，但仍有可优化的空间。

**CPU**：表示CPU的使用情况，不同的颜色片段代表着消耗CPU资源的不同事件类型。这部分的图像和下文详情面板中的Summary内容有对应关系，我们可以结合这两者挖掘性能瓶颈。

**NET**：粗略的展示了各请求的耗时与前后顺序。这个指标一般来说帮助不大。

### 挖掘性能瓶颈

我们会主要去看 Main 栏目下的火焰图和 Summary 提供给我们的饼图——这两者和概述面板中的 CPU 一栏结合。

先看 CPU 图表和 Summary 饼图。
CPU 图表中，我们可以根据颜色填充的饱满程度，确定 CPU 的忙闲，进而了解该页面的总的任务量。
而 Summary 饼图则以一种直观的方式告诉了我们，哪个类型的任务最耗时（从本例来看是脚本执行过程）。

再看 Main 提供给我们的火焰图。它展示了整个运行时主进程所做的每一件事情（包括加载、脚本运行、渲染、布局、绘制等）。
x 轴表示随时间的记录。每个长条就代表一个活动。更宽的条形意味着事件需要更长时间。
y 轴表示调用堆栈，我们可以看到事件是相互堆叠的，上层的事件触发了下层的事件。

CPU 图标和 Summary 图都是按照“类型”给我们提供性能信息，
而 Main 火焰图则将粒度细化到了每一个函数的调用。
到底是从哪个过程开始出问题、是哪个函数拖了后腿、又是哪个事件触发了这个函数，这些具体的、细致的问题都将在 Main 火焰图中得到解答。

## 可视化监测： 更加聪明的 LightHouse

Performance 展示作用大于分析作用。它要求使用者对工具本身及其所展示的信息有充分的理解，能够将晦涩的数据“翻译”成具体的性能问题。

> Lighthouse 是一个开源的自动化工具，用于改进网络应用的质量。
> 你可以将其作为一个 Chrome 扩展程序运行，或从命令行运行。 
> 为Lighthouse 提供一个需要审查的网址，它将针对此页面运行一连串的测试，
> 然后生成一个有关页面性能的报告。


首先在 Chrome 的应用商店里下载一个 LightHouse。这一步 OK 之后，我们浏览器右上角会出现一个小小的灯塔 ICON。打开我们需要测试的那个页面，点击这个 ICON，唤起如下的面板：


然后点击“Generate report”按钮，只需静候数秒，LightHouse 就会为我们输出一个完美的性能报告。

上述分别是页面性能、PWA（渐进式 Web 应用）、可访问性（无障碍）、最佳实践、SEO 五项指标的跑分。孰强孰弱，我们一看便知。

向下拉动 Report 页，我们还可以看到每一个指标的细化评估：

在“Opportunities”中，LightHouse 甚至针对我们的性能问题给出了可行的建议、以及每一项优化操作预期会帮我们节省的时间。这份报告的可操作性是很强的——我们只需要对着 LightHouse 给出的建议，一条一条地去尝试，就可以看到自己的页面，在一秒一秒地变快。

除了直接下载，我们还可以通过命令行使用 LightHouse：

```
npm install -g lighthouse
lighthouse https://juejin.im/books
```

此外，从 Chrome 60 开始，DevTools 中直接加入了基于 LightHouse 的 Audits 面板：

LightHouse 因此变得更加触手可及了，这一操作也足以证明 Chrome 团队对 LightHouse 的推崇。

## 可编程的性能上报方案： W3C 性能 API

W3C 规范为我们提供了 Performance 相关的接口。
它允许我们获取到用户访问一个页面的每个阶段的精确时间，从而对性能进行分析。
我们可以将其理解为 Performance 面板的进一步细化与可编程化。

### 访问 performance 对象

performance 是一个全局对象。我们在控制台里输入 window.performance，就可一窥其全貌：

### 关键时间节点

在 performance 的 timing 属性中，我们可以查看到如下的时间戳：


这些时间戳与页面整个加载流程中的关键时间节点有着一一对应的关系：

通过求两个时间点之间的差值，我们可以得出某个过程花费的时间，举个🌰：

```
const timing = window.performance.timing
// DNS查询耗时
timing.domainLookupEnd - timing.domainLookupStart
  
// TCP连接耗时
timing.connectEnd - timing.connectStart
 
// 内容加载耗时
timing.responseEnd - timing.requestStart
···

```

除了这些常见的耗时情况，我们更应该去关注一些**关键性能指标**：firstbyte、fpt、tti、ready 和 load 时间。
这些指标数据与真实的用户体验息息相关，是我们日常业务性能监测中不可或缺的一部分：

```
// firstbyte：首包时间	
timing.responseStart – timing.domainLookupStart	

// fpt：First Paint Time, 首次渲染时间 / 白屏时间
timing.responseEnd – timing.fetchStart

// tti：Time to Interact，首次可交互时间	
timing.domInteractive – timing.fetchStart

// ready：HTML 加载完成时间，即 DOM 就位的时间
timing.domContentLoaded – timing.fetchStart

// load：页面完全加载时间
timing.loadEventStart – timing.fetchStart

```

以上这些通过 Performance API 获取到的时间信息都具有较高的准确度。
我们可以对此进行一番格式处理之后上报给服务端，也可以基于此去制作相应的统计图表，从而实现更加精准、更加个性化的性能耗时统计。

此外，通过访问 performance 的 memory 属性，我们还可以获取到内存占用相关的数据；
通过对 performance 的其它属性方法的灵活运用，我们还可以把它耦合进业务里，实现更加多样化的性能监测需求——灵活，
是可编程化方案最大的优点。

*   [Performance 官方文档](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/reference)
    
*   [使用 Lighthouse 审查网络应用](https://developers.google.com/web/tools/lighthouse/?hl=zh-cn)
    
*   [MDN Performance API 介绍](https://developer.mozilla.org/zh-CN/docs/Web/API/Performance)