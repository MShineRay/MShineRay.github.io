<template>
  <div class="container">
    <h1 class="title">大型网站性能优化实战：从前端、网络、CDN到后端、大促的全链路性能优化详解</h1>
    <h5 class="author">周涛明 张荣华 张新兵</h5>
    <img
      src="/img/weread/daxingwangzhanxingnengyouhuashizhan/t6_25462652.jpg"
      alt="written"
      class="written"
    />
    <div class="wr_macOS wr_Desktop wr_page_reader wr_whiteTheme">
      <div class="sectionListItem">
        <div class="sectionListItem_title">1.1 页面用户体验的要素介绍</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              下面几个要素来衡量网站性能方面的用户体验，并尝试通过不同监控系统进行系统监控和指标量化：●
              白屏。● 首屏。● 页面整体加载。● 页面可交互。● 功能交互响应。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">1.2 白屏时间</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              即用户打开浏览器输入网站的URL后，从屏幕空白到第一个画面出来的时间，这个时间的长短将直接决定网站页面给用户的第一印象。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              将白屏时间命名为StartRender，而在最新的Chrome、IE浏览器提供的Performance Timing
              API中也提供了类似的称为FirstPaint的指标。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              重要性：页面渲染的时间越短，用户等待的时间就越短，用户感知到的页面速度就越快，这样可以大大提高用户体验，减少新用户的跳出，提高留存率。反之，过长的等待时间，会让用户变得烦躁，更轻易跳出或者关闭这个网站。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">[插图]</div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">[插图]</div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">DNS Lookup即浏览器从DNS服务器中进行域名查询。</div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              域名解析的过程，可短至几十毫秒，也可能消耗几秒，所以解析过程的快慢直接影响页面整体加载的渲染速度，特别是对于每天访问量达千万级别的页面。DNS解析速度的优化策略有很多，通常我们会从以下几个方面思考细节的优化：●
              DNS缓存优化。● DNS预加载策略。● 页面中资源的域名的合理分配。● 稳定可靠的DNS服务器等。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              而对于有着亿级流量的大型网络平台，每一个过程的优化都可能带来质的提升。比如被很多人忽略的模板渲染过程，通过优化模板渲染逻辑，可使模板渲染速度提高一倍；或者通过调整Gzip算法及响应内容的代码结构，来提高Gzip压缩率、减小压缩包大小等。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              客户端下载、解析、渲染显示页面服务器返回HTTP
              Response后，浏览器陆续开始接收数据，进行HTML下载、解析、渲染显示等过程。具体步骤如下。（1）如果是Gzip包，则先解压为HTML。（2）解析HTML的头部代码，下载头部代码中引用的样式资源文件或者脚本资源文件。（3）解析HTML代码和样式文件代码，这个过程会构造出两个树结构，即与HTML相关的DOM树，以及与CSS相关的CSSOM树。（4）通过遍历DOM树和CSSOM树，浏览器依次计算每个节点的大小、坐标、颜色等样式，构造出渲染树。（5）根据渲染树完成绘制的过程。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">[插图]</div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              关于浏览器下载、解析、渲染显示页面的优化策略，根据渲染步骤，大概可以从以下几个方面着手：●
              优化HTML代码和结构，缩短HTML下载时间，加快HTML解析速度。●
              优化CSS文件和结构，缩短CSS文件下载时间和解析时间。●
              合理放置JS代码，避免前面第三种情况的出现，这也是最重要的。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">1.3 首屏时间</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              最关键的是，要能够找到衡量各自页面首屏内容展示速度的办法，通过监控发现潜在的问题，然后做出调整
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">1.4 页面整体加载完成</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              页面加载完成又称为PageLoad，顾名思义，即页面相关资源（CSS样式文件、JS脚本文件、图片等）全部加载完成的时间。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              如果用户等待加载完成需要的时间超过8s，用户会放弃对页面的进一步浏览，离开网站，从而导致用户流失。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">通常4s左右的平均加载时间，是用户可能会等待页面加载的最长时间。</div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              [1]DOM树即我们熟知的Document Object
              Modle节点树，而CSSOM树是根据样式文件内容结构生成的。基于CSSOM树，可关联各个DOM节点的样式定义。具体可参考https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp?hl=zh-cn中的解释。[2]SpeedIndex由WebPagetest提供，通过视频录制、画面到帧的分析来模拟检测首屏的渲染，可以反映在实验室中配置的各种不同终端及网络下，页面首屏内容展示完成的速度快慢。关于SpeedIndex的更多信息，可以查阅相关网站。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">3.1 快速了解网站性能</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">《高性能网站建设指南》</div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              ● 尽量减少HTTP请求。● 使用CDN。● 静态资源使用Cache。● 启用Gzip压缩。●
              JavaScript脚本尽量放在页面底部。● CSS样式表放在顶部。● 避免CSS表达式。●
              减少内联JavaScript和CSS的使用，尽可能使用外部的JavaScript和CSS文件。● 减少DNS查询。●
              精简JavaScript。● 避免重定向。● 删除重复的脚本。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">Google开源的优化工具PageSpeed</div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">使用WebPagetest进行性能分析</div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              和YSlow、PageSpeed一样，WebPagetest同样也使用和它们相似的一组最佳性能实践来分析网页。WebPagetest通过浏览器访问，基于输入的Website
              URL，以及选择的国家城市、浏览器类型、网络带宽等信息，启动对应的远程服务器上的浏览器进行性能分析测试。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              我们希望有一种工具，能够帮我们漂洋过海，去了解某个特定地区用户访问网站的真实性能情况。WebPagetest就能够提供遍布世界各个角落的代表性城市的页面性能分析测试，基本覆盖亚洲、大洋洲、非洲、欧洲、北美和南美洲。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              如果希望网站能够持续为用户提供最佳的性能体验，就需要建立网站自身的性能监控系统。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              一个基础的真实用户性能监控系统的设计，具有日常页面性能监控、预警等功能，并且能够在网站性能发生问题时提供足够的基础性能分析数据。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">3.2 真实用户前端性能监控</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              建立一个基础的真实用户前端性能监控系统，大致包含以下5个系统模块的设计开发工作：●
              真实用户前端性能数据采集。● 采集数据存储。● 监控系统指标定义及加工计算。●
              数据分析、性能报表产出。● 性能基线定义。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">[插图]</div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">[插图]</div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              基于我们的经验，如果NavigationStart不为0，则使用NavigationStart作为页面StartTime基数，如果为0，则降级使用FetchStart，如果FetchStart还是0，则将考虑此数据作废。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">[插图]</div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              下面的维度可以作为常规性能监控系统的常规设计，尤其是当你的网站用户遍布全球时： ●
              基于不同的设备（区分终端），来自手持设备还是PC等。 ●
              基于不同的国家，不同国家中的不同地区等。 ● 基于不同类型的用户群体。
              然后基于上面不同维度、不同组合的需求，对数据进行聚合计算，并最终用于图表展示。同样也有可借鉴的常规可视化图表设计：
              ● 性能数据汇总概括。 ● 变化趋势。 ● 分布区间、直方图等。 ●
              基于页面的瀑布图绘制（瀑布图绘制可基于最新的Resource Timing提供的数据进行绘制）。
              在这里有必要强调一点，对数据进行聚合计算时，通常大家第一时间可能会想到使用平均数来统计计算。这会导致一个问题，即平均数非常容易受极大值和极小值的影响，如果只看平均数，会导致我们把访问页面非常慢的那部分用户忽略掉。
              比如一个用户打开页面用时10s，另一个用户打开页面用时3s，平均耗时为6s。决策者基于这个结果判断出当前页面性能处于还能接受的状态，但实际上打开页面需要10s
              的问题被忽略了，无法暴露出来。
              所以推荐大家使用中位数，可以弥补平均数的不足。用中位数来描述一个页面性能数据的集中趋势，然后结合数据区间，来观察不同区间的分布情况，了解页面真实的性能情况。
              比如基于自定义的不同数据区间，定义“非常快”“快”“慢”“非常慢”等区间，来观察用户访问性能快慢的分布情况，从而进行针对性的优化。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">4.1 最大QPS推算及验证</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">QPS（吞吐量）</div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              RT=Thread CPU Time+Thread Wait Time RT（Response
              Time，响应时间）可以简单地理解为系统从输入到输出的时间间隔，系统是指一个网站或者一个其他类型的软件应用，或者指某个设备，比如手机，手机界面也有响应时间。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              服务器端 RT
              的含义是指从服务器接收请求到该请求响应的全部数据被发往客户端的时间间隔。客户端 RT
              的含义是指从客户端（比如浏览器）发起请求到客户端（比如浏览器）接收该请求响应的全部数据的时间间隔。需要注意的是，服务器端RT+网络开销≈客户端RT。也就是说，一个差的网络环境会导致两个RT差距悬殊（比如，从俄罗斯到美国的RT远大于国内网络环境中的RT）。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              客户端的RT直接影响用户体验，要想降低客户端RT，提升用户体验，必须考虑两点，一个是服务器端的RT，另一个是网络。对于网络来讲，常见的优化方式有CDN、AND和专线，分别适用于不同的场景。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">单线程QPS=1000ms /RT</div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">最佳线程数=（RT/CPU Time）×CPU核数×CPU利用率</div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">[插图]</div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">[插图]</div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">4.2 同步模型与异步模型</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              1.同步模型简介
              关于什么是同步模型，拿Web开发中的thread-per-client举一个经常碰到的例子：
              （1）浏览器发起HTTP请求，servlet容器接收请求。
              （2）servlet容器解析请求，并按照业务逻辑请求remote Cache中的内容（Tair等）。
              （3）servlet容器拿到Cache的返回结果，并进行逻辑运算。 （4）servlet容器将计算结果返回。
              假设用Tomcat作为servlet容器，当一个请求过来时（由于流程较为简单，直接用文字描述流程）：
              （1）Tomcat中监听8080端口的主线程接收了一个socket。
              （2）主线程把socket交给Tomcat线程池中的某个work线程。
              （3）线程阻塞式读取socket中的数据，并解析HTTP，组装成request对象。
              （4）线程获取request对象中的某个数据作为key。
              （5）根据上一步获取的key请求Tair，线程会进入阻塞状态，等Tair的value返回。
              （6）value返回，线程被唤醒，将value返回给response。
              （7）返回结果以阻塞写的方式写入socket的OutputStream。
              （8）Tomcat的work线程回池，准备处理下一个请求。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">4.3 数据结构对性能的影响</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              一个好的程序员既要能写出容易被机器理解的代码（执行效率高），又要能写出让其他程序员容易理解的代码（维护成本低）
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">[插图]</div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">4.5 综合案例：电商活动页面性能优化</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">解决消耗CPU资源大户Gzip</div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              把Gzip关闭或者降低压缩级别会提高带宽消耗，经过详细的压力测试（对不同大小的页面，通过不断地调整压缩级别）和计算，降低压缩级别带来的QPS的提高所节约的机器费用和带宽提升所带来的费用提升不相上下（机器按照3年折旧来算）
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">[插图]</div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">第5章 TCP优化</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              TCP 优化在传统的性能优化领域中很容易在应用层面被忽略，通常在 CDN
              加速服务中会考虑这个优化。大型网站不仅有图片还有动态请求，经过TCP层面优化，可以让网络耗时变短。而在CDN层面，由于大型网站还有大量的图片和JS等资源，这些静态资源占整个页面请求的90%以上，所以只要性能提升10%，整体的性能体验改观就相当明显。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">5.1 TCP传输原理</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              TCP通过“发送－应答（ACK确认）－重传机制”来确保传输的可靠性，它是端到端进行传输的。对于大型网站，响应报文从服务器端给客户端浏览器进行报文的传输，所以在服务器端，可以通过优化来降低响应给客户端的网络耗时。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              TCP传输是分段的，一个HTTP响应报文会被操作系统切成多个MSS大小（一般为1460
              B）的段，发送端每次只会发送若干段。能够发送多少个数据包，由拥塞窗口和接收端窗口共同决定，直到接收端接收到完整的报文为止。在此过程中，报文分段按照顺序进行发送，每个报文段在发送时，会做顺序编号，以便能够完整正确地组装，所以当HTTP的请求响应模型将请求发送给服务器时，服务器响应都需要多个RTT的传输，物理距离越远，总体网络耗时越长。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">5.4 总结</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              ●
              尽量将操作系统进行版本升级。高版本的Linux操作系统对TCP内核进行了多项优化，包括拥塞窗口变大、Early
              Transmit等算法优化。●
              尽量通过监控工具发现问题，例如LastMile。远距离的传输容易丢包，可以通过LastMile来发现问题。在建立连接的时候丢包，为了避免定时器溢出再进行报文的传输，可以通过调整初始RTO来减少网络耗时。●
              用户体验要注意
              RTO。服务器端耗时占用整体耗时的一小部分，要把主要精力放在网络耗时的减少上。如果是小型网站，服务的用户群相对比较集中，就不要考虑
              TCP 优化，因为带来的收益往往很小。●
              尽量减小HTTP报文的大小。因为HTTP报文越小，传输所需要的RTT次数越少，耗时越短，通常Ajax异步化是减少HTTP同步报文大小的主要手段。●
              尽量减少HTTP头的大小。HTTP的Gzip压缩只针对HTTP主体，而HTTP头是不能被压缩的，要尽早对Cookie大小进行控制，因为Cookie往往是造成HTTP头偏大的主要因素，Cookie大小在很多时候都接近4KB的上限。●
              尽量将机房部署在离核心用户近的地方，通过减少网络距离来减少网络耗时。●
              尽量选择大的运营商。小的运营商往往在BGP选路时会绕路，造成网络耗时增加。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">6.1 DNS基本原理</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">[插图]</div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">7.1 CDN优化概述</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              CDN对于一个大型网站而言，主要提供了6种能力。 1.静态加速能力
              通过本地化缓存加速能力给用户提供一个尽力而为的就近访问的高性能访问架构，将用户访问的内容缓存在边缘节点上，消除由用户地域差异而导致的用户体验不一致，提供不同地区用户的相对一致的高性能访问体验。
              2.卸载源站能力
              CDN将资源缓存在它的服务器上，访问是在用户和CDN之间进行的，原来用户的直接请求都发送到网站服务器上，移交到
              CDN
              上后，源站的访问量和带宽占用都会大幅度减小。特别是对大型网站而言，图片等静态资源占了网站所有请求的90%以上。图片访问量对于大型网站来说是巨大的，服务器要提供具备相应吞吐能力的服务，其架构设计、运维规划、监控和预警要十分完善，否则很容易出现稳定性问题。后面将会介绍
              CDN
              命中率突然变低，造成源站出现各种不稳定的问题；也可以看到，CDN的命中率对于减小源站的压力十分关键。总而言之，CDN的存在大大减小了源站的压力，提高了网站的稳定性。
              3.防攻击能力 一般比较成熟的 CDN 提供商至少有数百个 CDN 节点，甚至数千个，而把资源放在
              CDN上，对网站的恶意攻击大部分都会将目标放到CDN节点上，CDN是一个天然的跨地区甚至跨洲的大型分布式系统。大量CDN节点的存在，可以有效地将攻击由中心化分散到CDN的边缘上，从而有效地阻止或者减小攻击造成的危害。
              4.动态加速能力
              CDN提供静态加速能力的原理是通过将资源缓存在CDN边缘节点上，让用户访问资源的网络距离变短，从而实现性能的优化。CDN不仅适用于可缓存资源的静态加速，而且可以用于动态请求的加速，其原理是通过7层路由路径的优选，克服BGP选路的缺点，实现动态加速能力
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              5.用户访问序列优化能力 CDN 能够做的事情超乎我们的想象，CDN 如果能获取网页的
              HTML，就可以实现访问序列的优化。 1）页面内资源预取
              获取网页的HTML后，CDN服务器会将HTML中的图片、CSS和JS标签的资源提前预取到 CDN
              的边缘节点上，等浏览器下载序列到相对应的资源时，边缘节点上已经存在该资源，从而避免回源站处理并获取资源，减少性能损耗。
              2）页面间资源预取
              页面间资源预取指的是在用户访问当前网页时，将要访问页面的资源提前预取到 CDN
              边缘节点上，等浏览器下载序列相到对的应资源时，避免回源或者从 CDN
              二级缓存节点上获取资源，以减少网络延迟。 6.定制化模块开发能力
              CDN不仅提供各种标准功能，而且提供定制化的功能开发，这些功能模块中有不少已经标准化，例如边缘化的图片压缩、边缘化图片格式转换、自适应图片下载等功能。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">7.3 从应用看CDN的基本原理</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              CDN实现过程非常复杂，应用CDN技术来做设计方案，不需要把CDN的所有细节都搞清楚，但是需要知道
              CDN哪些能做、哪些不能做，用了 CDN 后会带来什么问题等。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">[插图]</div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">7.4 CDN优化常见策略</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              所谓的CSI其实就是通过浏览器端发起Ajax请求，从源站获取实时性和一致性要求高的数据，例如价格信息，网页的其他部分全部可以缓存到
              CDN
              的边缘服务器上。典型的电子商务的场景是商品详情页面，页面的大部分HTML内容都可以缓存，价格的信息要求强一致性，因此可以将获取价格的信息重新改造成Ajax，只要设置max-age就可以确定CDN缓存时间（如果只想在CDN上缓存，不想在浏览器本地缓存HTML内容，可以使用s-maxage响应头）。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              当页面要依赖SEO引流时，必须使用ESI技术，因为搜索引擎的爬虫无法获取异步Ajax的内容。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              ESI 更适合于对重要性内容需要实时化和强一致性的内容静态化的解决方案，CSI
              的实时处理部分通常适合对网页重要内容不做更改的情况，如业务打点请求。使用 ESI
              还是CSI需要考虑对用户体验的影响、实时部分的重要性，以及容错处理能力。但是ESI的处理过程相对复杂，改造成本相对较高，源站需要自己实现HTML的拼接逻辑，并做各种容错处理。综上所述，两者比较如下：●
              ESI实现成本较高，容错能力强，页面加载性能较差。●
              CSI实现成本较低，容错能力弱，页面加载性能较好。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              从本质上说，无论是静态加速还是动态加速，大部分都通过减小网络延迟来进行加速。静态加速是通过把资源缓存在离用户最近的地方来实现优化的目的，动态加速是通过优化传输、优化网络转发等方式来实现优化的目的。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">[插图]</div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              用户序列优化是CDN根据用户请求的HTML内容和浏览器下载的序列进行提前解析，将浏览器需要的资源提前预取到CDN节点上，等到浏览器下载该资源时，该资源已经提前在CDN节点上了
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">7.5 CDN优化实战</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              304请求问题的基本原理：浏览器在访问同一资源时，会向服务器发送请求，让服务器判断是否用浏览器本地缓存的资源，服务器如果发现客户端本地缓存的资源是最新的，那么会响应304请求给浏览器，告诉浏览器可以使用本地缓存的资源，这样可以减小网络的消耗
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              CDN的性能降低通常和大量回源相关，因为CDN节点本身相对比较稳定，特别是网站使用国外顶级的CDN提供商，在性能和可用性方面有保障。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              如果想要知道CDN没有命中的原因，那么必须在源头上下工夫，CDN加速的是图片、CSS和JS,CSS和JS的问题在上面的步骤中得到了解决，所以问题可能出在图片上，如图7-23所示（图中敏感内容做了处理）。对于电商类型的网站而言，图片大都来自于商品，图片的大量回源可能和下面几种情况相关。
              ● 图片新增尺寸。 ● 有大量新图片产生。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              为什么根据IP库判断不能精准地区分用户？这是因为大部分DNS输入的IP地址是Local
              DNS的IP地址，而不是用户真实的IP地址。在这种情况下，用户的IP地址所在的地区并不和Local
              DNS IP地址所在的地区相同。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              大型网站一般都有4层、7层防攻击的能力，为了防止CDN被源站防攻击系统拦截，通常的做法是，将CDN节点的服务器IP列表加入防攻击系统的白名单过滤列表，以防止正常浏览被“误杀”。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              秒杀商品宝贝页面中商品的基本价格和折扣需要准实时，库存要保持强一致性。强一致性方案采用
              CSI
              进行库存判断，如果从源站获取的库存大于0，那么可以继续下单购买。如果从源站获取库存失败，默认的购买按钮是灰色的，只有明确地获取到库存信息才能继续流程，通过这种方式有效地避免了超卖的问题。对于价格和折扣信息同样可以用CSI来解决，因为秒杀商品是爆品，命中率非常高，几乎可以做到100%边缘命中，因此在折扣达标前后，只要缓存时间足够短（例如一分钟），缓存时间一到，CSI从源站获取到相应信息并判断是否是最新信息，如果不是，缓存立刻被更新成最新的信息，已经不需要更新DOM节点，因此不会出现Repaint的现象，页面的闪烁问题几乎不会出现，所以CSI几乎不会发生问题。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              ● 同域名非加速页面处理的解决方案在非加速页面的response
              header里面加入Cache-Control:no-cache，以便CDN不会启用缓存机制，保证非加速页面能够被CDN识别成动态请求，从而能够到达源站获取响应。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">7.6 总结</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              通过实践将CDN最重要的使用原则总结如下。1）尽早了解CDN的基本工作原理无论是调度优化，还是命中率的调优，或是针对页面做的CDN静态化，了解CDN的基本工作原理都十分重要。非常清楚地了解CDN的优缺点和使用场合十分关键，要清楚地了解CDN能做什么、不能做什么，适合做什么、不适合做什么，以及使用之后要考虑什么问题。2）尽早了解license的细节，比较不同服务等级license的差别CDN提供商提供的license版本很多，需要和售前人员清晰地了解license提供的功能和SLA的细节，这样可以综合ROI多方面来确定使用哪个版本，也可以对某些高级功能进行测试和线上效果实测。3）做好上线前的测试验证工作测试验证工作，需要有比较健全的功能验证流程。在沟通过程中，经常遇到各种口头“承诺”，双方在口径和理解上存在一定的误差。例如在WebP性能优化的项目中，首先笔者和售前人员沟通了方案的可行性，准备将WebP格式的图片上线替换JPG格式的图片，售前人员说这是可行的，即CDN提供商有能力缓存WebP格式的图片。上线测试时，我们发现性能并没有好转，一直猜测是由于上线新格式图片的范围太小，导致热度不够，热点不突出，最终导致命中率降低而引起的。后来去源站查看，发现WebP格式的图片大量回源，而且几乎每次访问都产生了回源，再跟售前人员进行沟通，发现是配置没有启用。其实发生过多次类似的问题，如前面提到的命中率超低的问题也是配置不正确引起的，这些问题都需要做好沟通和测试工作。4）尽早做好监控规划细化监控对于发现问题非常关键，监控还需要做一定的规划，针对主要的域名最好做细分。针对不同类型的命中率需要分开监控，根据命中率从低到高的排行数据，能够对回源站的请求进行归类和分析。5）避免全量发布新图片格式在使用
              CDN
              的过程中命中率越高对网站的卸载能力就越好，一般回源意味着性能会急剧下降，回源数量突增，非常可能造成系统故障。而全量发布新图片格式，会造成大量的回源，我们的网站已经因这个问题发生过多次故障。例如在搜索列表页面，商品图片多达数十个，搜索访问量非常大，网站流量的很大比例来源于搜索，因此一旦有新图片格式，相当于在
              CDN节点上的缓存全部被击穿，回到源站，造成大规模的性能下降。对于这种情况，一般在发布时可以通过将发布周期变长来解决。例如某个应用有100台机器，根据源站能够支撑的容量，逐步切换机器来增加权重，同时观测监控系统的变化情况，关注关键指标是否发生变化。6）尽量对图片只新增不修改图片一般很少会涉及修改，在设计时，尽量和图片名称解耦，这样可以做到图片只会新增而不用修改。图片新增设计对于提高图片的命中率将会起到非常重要的作用，涉及修改需求时，只需要修改图片的名称，也就是通过新增图片的方式来让图片过期，可以将图片的过期时间设置成3年，甚至10年（不能设置过长的过期时间，因为CDN的存储空间有限，会导致图片被淘汰、性能下降，特别是针对热度相近的场景）。7）尽早设计好源站架构源站是高风险防范的最后一道防线，在大量回源时，能够抵挡住容量的压力，而在实际架构的过程中，特别是在网站的高速发展时期，在对
              CDN 优化还不是很了解的时候，很容易出现 CDN
              命中率不高的情况，源站承受很大的压力。当命中率不高的时候，静态资源的访问大量回源，CDN的卸载能力没有充分发挥，这对源站的容量要求很高，特别是在网站发展初期，机房网络建设不健全的时候，交换机的千兆网卡，造成流量稍大时丢包大量增加，网络延迟大幅增加，用户无法及时打开网站，从而引起订单量大幅下降。所以在源站的架构优化过程中，要提前考虑网络架构的优化，以及源站吞吐量的优化。8）尽早了解CDN的配置规则CDN里面有些默认的配置规则，如默认用户真实IP地址的字段使用的是TRUE_CLIENT_IP，默认没有配置的图片格式使用的是WebP，这些配置是否开启需要CDN提供商进行准确的确认。9）提供合理、准确的数据对CDN进行优化从前面的调度优化实例中可以看出，通过LastMile监控发现了非就近调度的情况，在提供了Local
              DNS的IP地址之后，问题得到了解决，并且免费升级了license，使得调度上得到了非常大的优化。由此可见，提供准确的数据非常关键。10）CDN的性能问题一般和大量回源相关由于某种原因造成大量的回源，会引起CDN性能的大幅下降。CDN提供的SLA的基本保障是可用性，当性能发生衰减时，大都跟大量的回源相关，可以通过细分监控来确定是由哪个域名引起的，通过监控的衰变时间点，确定项目发布是否会引起大量的回源，一般成熟的CDN是能够保障稳定性的。11）CDN高命中率是CDN应用的基本要求CDN不仅能提高性能，也能提高稳定性，由于图片、JS、CSS等静态资源访问量极大，一个页面请求可能达到数百个静态请求，源站的压力极大。在网站从小到大的发展过程中，由于机房建设的基础设施很难到位，把如此大的压力放到源站，源站的稳定性会受到极大的影响，所以高命中率是CDN应用的基本要求。从应用实践来看，CDN的命中率对于用户类型的访问应该接近100%，如果没有达到100%，那么说明优化空间非常大。12）应用CDN需要考虑ROICDN的优化方案非常多，不是所有的CDN优化方案都适合在项目中使用，要把合适的方案应用在合适的地方。通过ROI分析，可以比较清楚地知道，哪些方案是有用的和合适的。CDN的应用有时候会带来架构的复杂性，这些复杂性的引入不仅浪费大量的人力和物力，还会造成用户体验的下降。CDN的应用一定要达到理想的目标，否则就是过度应用。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">8.1 监控设计</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              从问题排查思路看监控的设计从应用监控的角度来看，如前面所说，监控的目的是快速地发现和定位问题，要想更快地发现和定位问题，一般分为两个大的步骤：第一，要定位于问题发现，通过监控能够直接判断是否出了问题，是否对业务有影响，从这个角度来说，首先要考虑部署业务监控的能力，对业务的关键指标进行监控，同时要根据业务的周期性规律进行环比、同比的报警规则设置，出现对业务有直接影响的问题要立即报警。第二，从定位问题的角度来看，要顺应排查的思路进行监控设计，当通过业务监控发现问题时，定位问题要选择对业务影响最大的问题。首先排查应用是否产生了大量的异常，当业务有损伤时，会看是否是应用本身出现问题了。能够直接反映应用是否出现问题的指标是应用是否发生异常，所以异常是定位问题的直接指标，这里的异常包含代码运行过程中产生的异常。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">8.4 性能监控的关键指标</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              RT（Response Time）表示响应时间，它是从接收请求开始到服务器处理完成的时间差值。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              5.URL监控URL是Web应用通常需要监控的，包含以下关键指标。●
              调用量：调用次数及趋势监控，可以进行同比、环比。● 耗时：访问此URL的服务器端耗时。●
              错误数：在选定的周期内，访问此URL发生的错误数，最好将错误的具体信息进行聚类统计。分析问题时，一般看到同类错误信息多，就可以判定是哪个调用出现问题了。●
              相关依赖明细：此URL包含的服务、存储等直接依赖的调用耗时，有了该明细便于定位出哪个服务出现了问题。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">9.4 大型网站常用的容量评估方法</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              二八原则评估法——新业务评估的基本方法其实在业务高速发展的时候，经常会遇到一个问题，如何在第一次做容量评估的时候，根据业务量就可以进行呢？第一次没有更好的答案，通常是根据二八原则进行评估。对于一个普通的营销场景普遍可以用二八原则评估法进行容量评估，当然秒杀、限时抢购、限时活动除外。对于秒杀、限时抢购活动，可以根据业务预计的时间进行调整。评估QPS=（业务量/24×3600）×80%/20%
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">第10章 高性能系统架构模式</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              一个高性能网站一般都会用到缓存架构，缓存意味着高性能，通过空间换时间。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">10.1 无状态架构</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              小型网站通常将用户的登录信息存在Session中，Session是典型的有状态架构，而负载均衡会将用户流量均分在集群的每个负载中，用户的第一次请求分配到集群中的A机器上，后续的请求可能会分流到B机器上，那么Session的信息就会丢失。为了处理负载的随机分配问题，可采用Session复制的机制，Session复制易造成水平扩展能力急剧下降，同时也会因为复制的延迟导致系统出现稳定性问题。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              基于浏览器Cookie的无状态架构Session是有状态的，Session复制的架构会造成扩展能力急剧下降，Cookie的共享方式是，通过浏览器记录，将共享的具体信息存储在
              Cookie中，目前很多大型电商网站都采用这种架构。Cookie的最大问题是，大小存在限制，在有限制的情况下，维护Cookie比较烦琐，特别是在优化Cookie大小时，通常会下调已经没有维护的业务，但是修改Cookie是牵一发而动全身的事情，很容易造成大故障。另外要注意Cookie安全问题（要防止被篡改）和过期时间。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">10.4 读写分离架构</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              读写分离架构是从小型系统过渡到大型系统的过程中常用的架构，其根本目的是减少写的压力，让读的性能更好，同时读和写互不影响，也消除了读和写之间的锁等待，减少延迟，从理论上能够将应用访问数据库的性能提升一倍。此架构适合在读一致性要求不高的场景中使用，Master
              主库服务器负责包括读在内的事务型数据库操作，这是为了有强一致性的场景，Slave辅库服务器负责无事务需求的读操作。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">10.5 基于数据水平切分的水平扩展架构</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              在部署时通常要遵守以下基本原则。●
              尽量将重要的业务单独进行物理部署重要的业务单独部署可以避免相互影响，因为一处问题会影响全局。●
              尽量将重要的业务和批量化的业务分开部署单一的写和读性能对数据库的影响较小，特别是在索引设置不合理的情况下，会导致整体磁盘性能急剧下降，通常批量读取还会涉及幻读等问题。●
              尽量将非重要业务部署在一起非重要业务放在一起，即使出现问题，也不会造成很大的影响。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">10.6 缓存架构</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              ●
              页面缓存对于商品详情页面来说，Web页面缓存的key可以是商品ID，对象是整个商品ID对应的HTML页面。通常缓存整个HTML页面的场景很少，一般的Web页面都含有大量的动态因素，例如商品的价格、库存的数量，这些数据都需要强一致性。通常在这种场景下会使用片段页面缓存，ESI（Eage
              Server Include）是片段页面缓存的常见解决方案，也是最早出现的CDN缓存HTML
              的解决方案，它已经成为一个通用的标准，Varnish 及 Squid
              页面缓存解决方案都支持ESI的语法和标准。页面缓存也可以通过CDN进行动态加速。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">10.8 异步化架构</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              [插图]图10-12异步化架构的优点是，不仅能够削峰，而且能够通过异步化从强依赖变成弱依赖，从稳定性的角度看，减少直接依赖可以提高稳定性。异步化架构的不足是，带来了维护成本，异步化往往需要后续的任务处理，需要建立任务表和任务扫描，维护的范围有所扩大，问题排查成本也比较高。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">10.9 排队缓冲架构</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              在极高并发的场景下，如下单场景，如果直接将请求发到数据库，会造成数据库的崩溃，通常的做法是将请求放到队列中，进行排队处理，避免大规模冲击到数据库。既然是大型网站就免不了高并发的读写操作，很典型的一个例子就是秒杀，这种高并发的写操作，如果一下子都涌入数据库中，会导致数据库的压力非常大，从而导致客户端的访问延迟增加，即使不挂也容易造成数据库的死锁，遇到这种一拥而入的情况，就必须进行线性化操作。在代码层面上可以用锁机制来串行化，在分布式中可以用“消息队列”来串行化，而且还可以通过逻辑操作对消息队列进行动态的防洪和控洪。
              排队缓冲架构，通常需要计算合理的阈值，超过阈值的部分使用队列进行排队缓冲，即将请求放到缓冲队列中进行串行化处理。一旦进入缓冲队列，用户端的响应时间会变长，注意要设置合理的队列长度，否则会造成用户体验变差。像秒杀这种场景，用户响应时间超过3s，页面可能处于白屏状态或者旋转等待状态。如果每次响应的时间超过10ms，那么队列的长度建议设置成300个，这样用户等待的最长时间不会超过3s，具体过程如图10-13所示。
              ￼
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">10.10 多机房架构</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              从用户体验角度考虑，交易是非常关键的环节，用户访问性能越好，成交转化的可能性越高。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">10.11 基于服务的可扩展架构</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              基于服务（SOA）的可扩展架构更多地强调了复用性、组件化、高内聚、松耦合，解耦思想最终落实到架构设计中是业务能力组件化，组件间的交互通过服务接口进行，粗粒度的服务本身就体现了松耦合，解耦不仅包括组件的应用层，还包括数据库和数据层，都能够自成一套，可以独立进行需求、设计、开发、测试和运维的全生命周期管理。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              1.业务垂直化，高内聚低耦合，依赖弱耦合
              在业务发展初期，人少、团队规模小、业务简单，业务上的诉求更多的是快速功能迭代、快速上线，在简单的业务背景下，架构的分解也是非常粗粒度的，也是合理的。但是当业务发展到数百人的时候，业务需求复杂度大幅增加，之前的一个功能从头到尾都是几个人在维护，变成很多功能每个团队都需要维护。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              在早期的时候，可能这些展示需求都由一个人来维护问题不大，当分散到各个小团队的时候，每个人都必须对物流的逻辑有所了解，但是每个人理解的逻辑和获取的信息不同，可能造成用户看到的费用不一样，用户体验极差。所以需要功能内聚，由专门的团队来维护，提供服务化接口，供展示方调用。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              2.服务水平伸缩，和Web应用解除耦合
              从伸缩性角度来说，如果功能耦合在一起，特别是Web系统和服务耦合在一起，带来的最大问题是伸缩困难。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">3.可维护性提升</div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              从高效功能开发角度来说，基于服务的架构最大的好处是将功能之间的强耦合变成松耦合，可维护性更强。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">10.12 日结架构</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              日结架构是在金融类场景下常见的解决方案。在金融场景下一般需要依赖机构的能力，例如互联网保险平台，需要通过机构进行投保的核保和保单的生成，如果通过机构实时地交互，金融系统会承担很大的压力，无论是泛金融的保险场景，还是银行类的转账场景，系统的承压能力非常有限。日结的方式首先在业务上要得到认可，认可中间层先将业务进行处理，然后在T
              日日结给机构。特别是在投保的场景下，核保规则可以前置在中间层业务里，风险也由中间层来把控，并且风险实际是可控的。这种场景不适合于像车险、寿险这种复杂的核保规则，车险的核保需要与行业平台进行交互，业务平台无法直接和行业平台进行交互，并且有些数据业务中间平台很难获得，如车险的出险记录、交通违法情况、续保的情况等。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">11.1 大促保障概述</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              大促是大型网站非常重要的营销形式，营销的作用是通过薄利多销的方式来吸引更多用户的关注，拉新是大促最重要的目的之一，运营的三个重要工作是拉新、促活和转化。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">11.5 大促资金安全保障策略</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              通常资金安全问题容易发生在并发控制、幂等控制出现问题的时候，其后果是客户少付或多付。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">11.7 大促保障实战分析</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              智能DNS只做了一件事情，那就是把域名解析成IP地址，其分配方式是轮询，轮询是指每发起一次DNS查询请求，就交叉分配一次IP地址，理论上这个分配肯定是均衡的。
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--  <footer class="footer">-->
    <!--    <img src="/img/weread/daxingwangzhanxingnengyouhuashizhan/qr.png" alt="qr">-->
    <!--    <p>扫码阅读本书</p>-->
    <!--  </footer>-->
  </div>
</template>
<script>
import logCreated from "../../mixin/log-created";

export default {
  name: 'daxingwangzhanxingnengyouhuashizhan',
  mixins: [logCreated]

}
</script>
<style scoped>
@import '/css/weread.css';
@import '/css/readnotes.css';
</style>
