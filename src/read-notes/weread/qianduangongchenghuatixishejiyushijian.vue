<template>
  <div class="container">
    <h1 class="title">前端工程化：体系设计与实践</h1>
    <h5 class="author">周俊鹏</h5>
    <img
      src="/img/weread/qianduangongchenghuatixishejiyushijian/t6_23914574.jpg"
      alt="written"
      class="written"
    />
    <div class="wr_macOS wr_Desktop wr_page_reader wr_whiteTheme">
      <div class="sectionListItem">
        <div class="sectionListItem_title">推荐序 技术之外</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div><div class="text">前端还是不要碰业务逻辑，围绕着交互做就好了。</div></div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">示例代码</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div><div class="text">https://github.com/boijs/boi。</div></div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">内容概览</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              脚手架在项目初期减少了重复的体力操作并且降低了业务框架学习成本；构建系统从编程语言、优化和部署3个角度解决了前端开发语言内在的缺陷以及由宿主客户端特性引起的开发和生产环境之间的差异性；本地开发服务器提供了前后端并行开发的平台；部署功能权衡速度、协作和安全，把控着Web产品上线前的最后一道关卡。最后将这些功能模块合理地串联为完整的工作流，便是前端工程化的完整外在形态。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">1.1 前端工程师的基本素养</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div><div class="text">[插图]</div></div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">1.2 Node.js带给前端的改革</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              Node.js的灵感来自Flickr（一个提供网络图片服务的平台）上的一个上传进度条，浏览器为了能够获取上传文件的进度而不得不频繁地向服务器发起查询请求。与这种方式相比，如果服务器能够在文件上传完毕之后主动推送一条消息给浏览器的话，会节省很多浏览器和网络资源消耗。这种理念便是Node.js实现异步操作的核心Event
              Loop（事件驱动）的雏形
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div><div class="text">[插图]</div></div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              与PHP不同的是，Node.js可以直接提供网络服务，不需要借助Apache、Nginx等专业的服务器软件。虽然并不建议在生产环境下直接将Node.js服务暴露给用户，但是Node.js这种特性可以让我们更方便地开发各种工具
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
              在JavaScript开发领域研究同构的主要目的也是为了将这门编程语言应用于不同的开发领域。
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
              传统网站的渲染流程是由浏览器主动发起请求，然后服务器端生成HTML文档后发送响应给浏览器，浏览器接到响应后将HTML文档渲染为可视网页。这是自浏览器发明以来就沿用至今的渲染流程。这种工作模式的优点是节省客户端资源，在客户终端设备以及浏览器性能普遍比较落后的情况下能够保证良好的渲染效果，并且服务器端渲染的网页更利于SEO（Search
              Engine
              Optimization，搜索引擎优化）。而其缺点是每访问一个页面都要发起请求，每个请求都需要服务器进行路由匹配、数据库查询、生成HTML文档后再发送响应给浏览器，这个过程会消耗服务器的大量计算资源
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
              SPA有以下优点。&nbsp;·减轻了服务器的资源消耗。·与HTML文档比起来，JSON数据的体积小很多，减少了网络请求的时间消耗。·页面路由控制更快速灵活。·可以离线使用。&nbsp;同时SPA也带来了新问题。首先，浏览器需要等待JavaScript文件加载完成之后才可以渲染后续的HTML文档内容，用户在等待的过程中页面是空白的，这就是我们在进行Web产品性能评估时经常谈到的“白屏时间”；其次，由于客户端和服务器端编程语言不同，可能会存在一些诸如数据格式的差异，甚至路由逻辑冲突，比如vue-router
              history模式的路由，这些问题增加了维护难度；最后，SPA不利于常规的SEO（搜索引擎优化）爬虫（之所以说常规是因为Google已经针对SPA进行了SEO优化，但是目前国内的搜索引擎对SPA的支持并不理想）。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">1.3 前后端分离</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              前后端分离指的是通过将前端工程师与后端工程师进行明确、合理的分工，改善前后端协作中拖慢开发进度的环节，提高工作效率。前后端分离的核心是解耦。从开发、测试以及部署3个角度看，前后端分离对工作效率的提升如下。&nbsp;·
              从开发角度来讲，前后端分离的宗旨是实现并行开发，缩短开发周期。·
              从测试角度来讲，前后端分离令前端工程师和后端工程师更快速、精准地对问题进行定位。·
              从部署角度来讲，前后端分离将静态文件和动态文件分离部署并结合回滚策略，简化了部署流程，增强了应用程序的健壮性。
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
              开发阶段前后端分离要解决的问题可以按照资源类型分为两种：静态资源的处理和动态资源的处理。
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
              服务器环境，只要最终在浏览器里解析即可。HTML模板的处理方案可以按照项目类型分为以下几种。1）SPA项目。这类项目中不存在HTML模板的概念，所有的HTML实体内容均由JavaScript在浏览器下生成。所以SPA项目中可以将html文件作为静态文件处理。2）HTML模板由服务器端部署的项目。这类项目最终的HTML模板需要与服务器端代码一同打包部署。由于静态文件必须由HTML引入，为了避免“套模板”，开发阶段前端工程师直接编写HTML模板更有利于快速开发和问题定位。3）大前端项目。这类项目中前端工程师负责与客户端相关的所有文件，包括静态文件与HTML模板，这是最理想的模式。
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
              之所以称为“大前端”而不是“全栈工程师”是因为大前端通常不接触数据库操作。大前端负责的并不是真正的Web服务层，而是中间层。中间层的作用主要解决的就是HTML的渲染，这也是为了实现前后端分离而探索出的一个模式。
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
              对于HTML模板由服务器端部署的项目，前后端分离要解决3个问题。1）HTML模板引擎的支持。2）HTML模板的初始数据。3）各种异步数据接口的数据。
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
              HTML模板的初始数据和异步接口的数据都可以用Mock服务解决。前后端开发人员在编写代码之前约定好接口的请求规范和数据结构。开发期间，前端工程师按照规范使用Mock服务提供的模拟数据进行开发。
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
              测试分为两个阶段，第一个阶段是前后端工程师的单元测试，这个阶段前后端工程师的测试是独立的，各自的测试流程和结果不会影响对方；第二个阶段是集成测试，这个阶段前后端的代码进行整合，在测试环境下由专业的测试工程师进行测试用例遍历。前后端分离首先要解决的是集成测试阶段的问题及时定位，解决方案并不是通过技术或工具，而是通过明确责任承担角色。
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
              前端工程师负责所有与用户直接接触的功能和逻辑，所以有责任在出现问题时站在第一线。后端工程师的产出并不与用户直接接触，前端工程师更容易定位用户层面的问题。
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
              前后端分离不仅仅是通过技术手段解决问题，技术和工具只是辅助，其本质是分工和角色的细分。这恰恰是目前很多团队在进行前后端分离时容易忽略的问题。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div><div class="text">制定客户端监控系统，收集客户端问题并及时通知开发人员。</div></div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              大多数团队并未将生产环境的客户端质量保障作为前后端分离的一部分。服务器端通常具备监控、预警以及应急策略，尽可能保证服务器问题的及时处理。同理，客户端也应该具备监控机制，并且由前端工程师负责。
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
              不能令浏览器将html文件强制缓存到本地。如果用户之前访问过此页面，html文件被浏览器强制缓存到本地，那么即使开发人员更新了html文件，也会由于浏览器的缓存策略而无法获取最新版本的资源。除非用户手动清除浏览器缓存，而这显然是不可行的。解决这个问题的办法有两种，分别如下。1）分别为html文件与其他静态资源设置不同的缓存策略。html文件可以使用协商缓存策略（浏览器HTTP请求返回状态码304），其他静态资源使用强缓存策略（浏览器HTTP请求返回状态码“200（from
              cache）”
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div><div class="text">2）使用一刀切的方案，所有静态资源均使用协商缓存策略。</div></div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              HTML模板由服务器端部署，并且前端工程师不负责中间层或者服务器端开发的项目。这类项目通常的部署方案如下。&nbsp;·静态资源部署到静态文件服务器。·
              HTML模板文件编写完成之后由前端工程师通过SVN、Git等版本管理工具同步到代码仓库，后端工程师拉取最新代码后，将模板文件与服务器端逻辑代码一同部署。
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
              静态资源和动态资源分离部署的优点是：在集成测试阶段，对于只涉及一方（前端或者后端）的Bug，相关负责人修改代码后独立进行部署即可，不需要另一方再行部署。比如CSS样式出现问题，前端工程师修改css文件后部署到静态文件服务器，不需要后端工程师再部署一次服务器端文件即可在浏览器刷新后获取修复后的文件。当然，这个优点只是针对测试阶段，因为大部分公司供测试使用的静态文件服务器是不设置客户端缓存的，这样可以保证测试环境下每次访问网站都能拿到最新的资源。但是在生产环境下必须使用浏览器缓存，所以修复生产环境的问题必须按照上述部署策略进行重新部署。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">1.4 前端工程化</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              前端工程化的主要目标是解放生产力、提高生产效率。通过制定一系列的规范，借助工具和框架解决前端开发以及前后端协作开发过程中的痛点和难点问题。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div><div class="text">1．从开发角度衡量工程化主要体现在“快”。</div></div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              2．从测试角度衡量工程化主要体现在“快”和“准”。测试的“快”体现在前端工程师和服务器端工程师并行开发完成之后的集成测试阶段。
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
              工程化要解决的就是尽量减少低级的逻辑错误，降低集成测试阶段消耗的时间成本。
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
              工程化不仅仅是冷冰冰的工具和平台，同时也需要严格的分工制度。通过明确责任人，对测试出现的问题进行快速准确的定位。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div><div class="text">3．从部署角度衡量工程化主要体现在“稳”。</div></div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              部署并不是简单地把文件“放到”线上就可以了，还需要考虑用户客户端的缓存是否影响了新版本的展现、考虑测试用例没有覆盖100%情况下的危机处理、考虑不同地区开放不同版本等。
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
              对于一些有云Mock服务器的团队来讲，本地服务器甚至可以不提供Mock服务。但是如果项目需要SSR（Server
              Side
              Render，服务器端渲染）并且本地服务器与服务器端使用相同的编程语言，本地服务器还应该具备HTML模板解析功能。这样，前端工程师负责View层的开发工作，后端工程师负责服务器端逻辑开发。这种模式对Mock服务有了额外的需求——提供服务器端渲染的页面初始数据。云Mock平台是无法完成此项功能的，这是本地Mock服务独有的优势。所以，不论项目是否需要SSR，我们都建议将Mock服务集成到本地开发服务器。即使你的团队有云Mock服务，本地的Mock服务也可以使用代理模式将请求转交给云Mock服务。
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
              本地服务器须具备以下功能。&nbsp;·
              Mock服务。如果团队具备统一的云Mock平台，本地服务器可以不提供Mock服务。但如果需要支持SSR，则必须提供本地Mock服务。·支持SSR，前提是本地服务器与线上服务器使用相同的编程语言。·动态构建，浏览器自动刷新。
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
              优化部署的基本原则是，确保单方问题的修复不需要调动多方资源。具体的解决方案就是静态资源与动态资源分离部署。动静态资源的分离部署可以解耦前后端工程师的部署行为，两者可以对自身的产出进行独立部署。减少了耦合工作，就提高了迭代和维护效率。同时，动静态资源分离部署也是Web应用架构优化的一个必要策略。
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
              分离部署对工作效率的提升主要体现在集成测试阶段。比如测试人员发现浏览器有样式Bug，在前端工程师修复并将CSS文件部署到测试文件服务器后便可以立即进行Bug修复验证测试，不涉及后端工程师的工作。前提是测试所用的静态资源服务器需要设置浏览器不使用缓存或者协商缓存策略，并且静态资源的URL不添加版本号参数或者hash文件指纹，这样在静态文件更新后刷新浏览器即可请求到最新的文件，无须清理浏览器缓存。
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
              前端渲染的优点如下。&nbsp;·前端掌控路由，与传统的服务器端路由相比用户体验更佳。·可移植、可离线使用。·服务器端提供的是干净的数据接口，具备高度的可复用性。·
              HTML资源作为静态资源，易于部署。·前端工程师与后端工程师可以使用Git、SVN等工具分别维护独立的源代码，无须耦合。&nbsp;
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div><div class="text">由WebView承载的Web产品更是无须考虑SEO问题。</div></div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div><div class="text">1．本地工具链——工程化不等同于工具化</div></div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              前端工程化是一系列工具和规范的组合，规范为蓝本，工具为实现。其中规范又包括：&nbsp;·项目文件的组织结构，比如使用目录名称区分源文件和目标文件。·源代码的开发范式，比如使用既定的模块化方案。·工具的使用规范，比如工程化自身的配置规范。·各阶段环境的依赖，比如部署功能的实现需要目标服务器提供SSH权限。
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
              前端工程化的初级阶段便是将各类工具的功能进行整合，为业务开发人员提供统一规范的工具栈。
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
              本地工具链形态。此形态下的所有工程化功能模块，包括构建、本地服务器、部署等，均在本地环境下工作。
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
              本地工具链形态的工程化方案解决的问题，降低了业务开发人员学习、使用工具的成本。
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
              工具链的统一，另一个好处是巩固了流程的规范性，开发者使用统一的工具链、遵循统一的规范进行业务代码的编写，利于多人协作与程序的维护。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div><div class="text">2．管理平台——进一步淡化差异、加深规范</div></div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              本地工具链形态的工程化虽然解决了前端开发以及前后端协作开发中的部分痛点问题，但由于所有的功能模块均在本地环境工作，因此必然会受到环境差异性的影响，比如操作系统类型、版本、内核等。这些因素会在一定程度上影响构建产出代码的一致性。
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
              集中管理的云平台。管理平台形态的工程化做到了以下几点。&nbsp;·淡化环境差异性，保证构建产出的一致性。·权限集中管理，提高安全性。·项目版本集中管理，便于危机处理，比如版本回滚等。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div><div class="text">3．持续集成——前端工程化的目标是融入整体</div></div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              前端工程化必然是整体Web工作流中间的一个子集方案。前端工程化最终的完美形态，必然与整体工作流结合，作为持续集成方案中的一环。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">1.5 工程化方案架构</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              本地工具链和云管理平台形态的前端工程化方案的主要区别在于，将构建、部署功能提升到云平台集中管理，保证构建结果的一致性并且便于权限控制，而从各个功能模块的实现角度考虑并没有很大差别。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div><div class="text">[插图]</div></div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div><div class="text">https://github.com/boijs/boi</div></div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div><div class="text">commander.js是一个实现命令行交互的Node.js模块</div></div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div><div class="text">1．规范设计原则——用户至上</div></div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">编程规范的设计原则着重于代码的可移植性，减少对代码的捆绑性。</div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div><div class="text">工具只是辅助作用，最基本的原则是切勿喧宾夺主</div></div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div><div class="text">2．架构设计原则——扩展至上</div></div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              我们在设计工程化方案架构时，应当秉持“内核轻量、扩展丰富”的原则。比如webpack本身不提供任何具化的方案，而是开放丰富的配置和扩展API供开发者封装和扩展自己的构建方案。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">1.6 总结</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              前端工程化的核心目标之一便是建立合理的前后端分离工作环境，提高团队整体的工作效率。本地工具链形态的工程化通过Mock服务实现了前后端并行开发，统一的工具栈加强了规范意识和约束，减少了业务开发人员的学习成本。云管理平台形态的工程化进一步淡化了差异性并加深了规范。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">2.1 脚手架的功能和本质</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div><div class="text">[插图]</div></div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              选定方案→配置方案细节→配置完成→根据定制方案创建项目文件→结束流程。从中我们可以总结出脚手架的本质——方案的封装。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div><div class="text">脚手架的功能是创建项目初始文件，本质是方案的封装。</div></div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">2.2 脚手架在前端工程中的角色和特征</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              前端工程体系不是Vue、React这种业务开发框架，工程体系是一种“服务”，是辅助性质的，其服务的主要对象就是一线的业务开发人员。在一套合理的前端工程体系下，业务开发人员关注的重点应该集中在业务逻辑的开发上，而不是这套工程体系的学习和配置上。所以，合理的前端工程体系必须具备的要素之一便是平缓的学习曲线，即使文档再清晰易懂，也不应该强制要求业务开发人员花时间学习各种细节。业务开发人员需要了解的应该仅仅是如何配置、如何使用。这便是脚手架工具要解决的最切实问题，简单概括就是：&nbsp;·快速生成配置。·降低框架学习成本。·令业务开发人员关注业务逻辑本身。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div><div class="text">前端工程化的3个阶段：本地工具链、云管理平台和持续集成。</div></div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              虚拟机可以规避由操作系统差异引起的额外开发成本，工程化工具也不必考虑操作系统兼容性问题。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content noteItem_content_review clickable">
          <span class="icon"></span>
          <div>
            <div class="text">也能减少因系统不同产生的构建差异</div>
            <div class="abstract">
              虚拟机可以规避由操作系统差异引起的额外开发成本，工程化工具也不必考虑操作系统兼容性问题。
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
              优秀的脚手架工具遵循的原则是一致的。从功能实现的角度考量，需要具备：&nbsp;·与构建、开发、部署等功能模块联动，在创建项目时生成对应配置项。·自动安装依赖模块。&nbsp;从平台角度考量，需要具备：&nbsp;·动态可配置。·底层高度可扩展。&nbsp;从易用性角度考量，需要具备：&nbsp;·丰富但不烦琐的配置项。·支持多种运行环境，比如命令行和Node.js
              API。·兼容各类主流操作系统。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div><div class="text">[插图]</div></div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              脚手架的目的之一便是将配置的复杂度以阶梯状呈现给用户，能够让用户循序渐进地适应和学习整套工程体系。
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
              开关决定这项功能是否开启，所有细节功能的实现必须建立在开关被开启的前提下。另外，细节配置项通常具备默认值，根据默认值会封装到脚手架方案中。也就是说，在开关被开启的前提下，即使用户不刻意配置细节选项，在默认方案下也可以正常进行业务开发。所以，最终的结论是：只将开关配置项交由脚手架开放给用户，细节配置项保持默认值。如果用户有更细化的需求，可以直接修改功能模块的配置文件。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">2.3 开源脚手架案例剖析</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              Sails.js——Node.js全栈MVC框架。·
              PHP中间层——只包括Controller和View的Web服务中间层框架，类似目前被广泛讨论的大前端。·
              Yeoman——开放的脚手架平台，不封装任何具体方案。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div><div class="text">1．Sails.js——针对服务器端的脚手架方案</div></div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div><div class="text">[插图]</div></div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              Yeoman的slogan是“THE WEB'S SCAFFOLDING TOOL FOR MODERN
              WEBAPPS”——面向webapp的脚手架工具，但笔者个人认为称其为脚手架框架更为合适。Yeoman不能直接创建项目文件，它提供了一套完整的脚手架开发者API，使用这些API可以定制符合自己业务需求的任意脚手架方案。换句话说，Yeoman不封装任何方案，它是完全开放、高度可扩展的。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">2.4 集成Yeoman封装脚手架方案</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div><div class="text">2．转化动态内容</div></div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div><div class="text">动态数据的转化本质上是由EJS模板渲染引擎执行的。</div></div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div><div class="text">3．自动安装依赖模块</div></div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              一定要区分用户所创建的项目根目录是否为当前目录。如果是新目录，需要首先进入目标目录，然后再执行安装行为。
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
              if (! this.options.current) { //
              如果当前目录不是项目根目录，则进入到项目目录后再安装模块
              process.chdir(Path.join(process.cwd(), this.options.appname)); } if (this.pkg
              &amp;&amp; _.isArray(this.pkg) &amp;&amp; this.pkg.length &gt; 0) {
              this.npmInstall(this.pkg, { 'save-dev': true, 'skipMessage': true }); }
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
              exec(`npm install -g ${generator}`, { async: true, silent: true }, (code) =&gt; { /*
              eslint-enable */ if (code ! = 0) { process.exit(); }
              env.register(require.resolve(generatorPath), appCommand); inCurrentDir ?
              env.run(`${appCommand} ${appname} -c`) : env.run(`${appCommand} ${appname}`); }); }
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">3.1 构建功能解决的问题</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              资源嵌入——比如小于10KB的图片编译为base64格式嵌入文档，减少一次HTTP请求。
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
              构建需要解决的问题可以归纳为以下3类。&nbsp;·面向语言。·面向优化。·面向部署。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">3.2 配置API设计原则和编程范式约束</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              具体到实际开发环境，还需要考虑模块化开发、异步加载、增量更新、动态构建等诸多复杂需求。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">3.4 CSS预编译与PostCSS</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              CSS预编译器的工作原理是提供便捷的语法和特性供开发者编写源代码，随后经过专门的编译工具将源码转化为CSS语法
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
              CSS预编译器几乎成为现如今开发CSS的标配，它从以下几个方面提升了CSS开发的效率。1．增强编程能力。2．增强源码可复用性，让CSS开发符合DRY（Don't
              repeat
              yourself）的原则。3．增强源码可维护性。4．更便于解决浏览器兼容性。不同的预编译器特性虽然有所差异，但核心功能均围绕这些目标打造，比如：&nbsp;·嵌套。·变量。·
              mixin/继承。·运算。·模块化。
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
              嵌套是所有预编译器都支持的语法特性，也是原生CSS最让开发者头疼的问题之一；mixin/继承是为了解决hack和代码复用；变量和运算增强了源码的可编程能力；模块化的支持不仅更利于代码复用，同时也提高了源码的可维护性。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div><div class="text">[插图]</div></div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              使用CSS预编译弥补CSS源码的弱编程能力，比如变量、运算、继承、模块化等。·使用PostCSS处理针对浏览器的需求，比如autoprefix、自动CSS
              Sprites等。
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
              如果需要将编译后的css文件独立导出，则须将style-loader[插图]替换为extract-text-webpack-plugin，如下：
              { test: /\.less$/, use: ExtractTextPlugin.extract({ use: [{ loader: 'css-loader',
              options: { importLoaders: 2 // css-loader options } }, { loader: 'postcss-loader',
              options: {} // postcss-loader options }, { loader: 'less-loader', options: {} //
              less-loader options }], publicPath: '/' }) }
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
              CSS
              Sprites的功能需求简单说就是将CSS中引用的散列图标合并成一张Sprites图片，目的是为了减少Web应用的HTTP请求数，增强用户体验。
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
              针对高清屏幕的散列图标文件须命名为[name]@[dpi]x.png，其中[name]为图标名称，[dpi]为匹配的屏幕像素比，比如about@2x.png。编译后将会生成独立的Sprites图片。
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
              自动生成CSS
              Sprites功能实现借助于PostCSS的插件postcss-sprites，配置postcss-loader如下： { loader:
              'postcss-loader', options: { plugins: [ require('postcss-sprites')(postcssSpritesOpts)
              ] } }
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">3.5 模块化开发</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              模块是一个白盒，侧重的是对属性的封装，重心在设计和开发阶段，不关注运行时逻辑；组件是一个可以独立部署的软件单元，面向的是运行时，侧重于产品的功能性。组件是一个黑盒，内部的逻辑是不可见的。模块可以理解为零件，比如轮胎上的螺丝钉；而组件则是轮胎，是具备某项完整功能的一个整体。具体到前端领域，一个button是一个模块，一个包括多个button的导航栏是一个组件。
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
              模块化开发的价值有以下几点。1）避免命名冲突。2）便于依赖管理。3）利于性能优化。4）提高可维护性。5）利于代码复用。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div><div class="text">设计工具函数的主要原则之一是尽可能保证功能的单一性。</div></div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              命名冲突问题不是催生模块化的唯一因素，但却是模块化首要解决的问题之一。
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
              依赖管理是模块化规范的核心特性之一，开发者遵循既定的规范进行各模块之间的源代码编写，构建工具按照模块化规范对代码进行解析，生成AST（Abstract
              Syntax
              Tree，抽象语法树）获取各模块之间详细的依赖关系。HTML文档只需要引入一个入口文件即可。
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
              模块化规范解决了模块之间错综复杂的依赖管理问题，不仅降低了开发难度和维护难度，同时也搭配了专业的构建工具梳理依赖关系，让开发者将更多的精力集中在业务逻辑本身。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div><div class="text">按需加载是进行Web性能优化的铁律之一。</div></div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              配合模块化规范的依赖管理功能可以让按需加载的模块更加易于管理，这是其一；其二，使用模块化构建工具将同步的散列模块进行合并打包，减少了客户端的HTTP请求数量，不仅提高了Web应用的解析速度，而且减小了服务器的并发压力；其三，细粒度的模块划分搭配动态加载令Web应用程序的解析更顺畅。
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
              CommonJS是一种只适用于JavaScript的静态模块化规范，适合Node.js开发，但是并不适合浏览器环境，因为：1）浏览器环境的前端资源不仅仅是JavaScript，还包括CSS、图片等，CommonJS无法处理JavaScript以外的资源。2）CommonJS所有模块均是同步阻塞式加载，无法实现按需异步加载。
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
              在CommonJS基础上，AMD/CMD规范扩展了以下功能。&nbsp;·可以处理JavaScript以外的资源。·源码无须编译便可在浏览器环境下运行。·按需异步加载、并行加载。·插件系统。
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
              然而不论是面向服务器端的CommonJS，还是针对浏览器的AMD/CMD，都是在语言规范缺失时代背景下的折中产物。三者共同的缺点如下。1）应用场景单一，模块无法跨环境运行。2）构建工具不统一，开发者除了需要学习规范本身，还需要学习对应的构建工具。比如针对CommonJS的Browserify、针对AMD的r.js、针对CMD的SPM。3）不同规范的模块无法混合使用，模块可复用性不高。4）未来不可期。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">3.6 增量更新与缓存</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              合理利用缓存是Web性能优化的必要手段，前端工程师所接触的主要是针对客户端浏览器的缓存策略，客户端的缓存可以分为以下两种。1）利用本地存储，比如LocalStorage、SessionStorage等。2）利用HTTP缓存策略，其中又分为强制缓存与协商缓存。
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
              浏览器对静态资源的缓存本质上是HTTP协议的缓存策略，其中又可以分为强制缓存和协商缓存。两种缓存策略都会将资源缓存到本地，强制缓存策略根据过期时间决定使用本地缓存还是请求新资源；而协商缓存每次都会发出请求，经过服务器进行对比后决定采用本地缓存还是新资源。具体采用哪种缓存策略，由HTTP协议的首部（Headers）信息决定。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div><div class="text">[插图]</div></div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">3.7 资源定位</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              CDN的一个重要功能是将静态资源缓存到用户近距离的CDN节点上，不但能提高用户对静态资源的访问速度，还能节省服务器的带宽消耗、降低负载。实现此功能的一个重要前提是将静态资源部署到已接入CDN解析服务的专属服务器上，而这类服务器通常与Web主页面处于不同的域名下。这样做的主要目的是为了充分利用浏览器的并发请求能力，提高页面的加载速度。同时，独立域名的静态资源请求不会携带主页面的cookie等数据，这样进一步加快了网络访问。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div><div class="text">chunksSortMode选项的作用是将注入的资源进行排序。</div></div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">Node.js并不具备操作DOM的能力，实现文本解析的本质是字符串操作。</div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div><div class="text">Parser 5</div></div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">4.1 本地开发服务器解决的问题</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              动态构建和Mock服务是本地开发服务器的主要功能。动态构建解决的问题是面向开发层面的，通过监听→修改→触发→构建的流程避免了源码的每次修改都需要人为地执行一次构建，便于开发过程中的即时调试。Mock服务解决的问题是面向前后端协作层面的，以提前约定好的规范为前提，通过本地服务容器提供的Mock数据接口辅助前端逻辑的编写。此外，如果项目需要SSR（服务器端渲染），本地开发服务器还需要具备解析HTML模板的功能，同时Mock服务提供SSR所需的初始数据。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">4.2 动态构建</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              Java的动态编译最普遍的是即时编译（JIT），将部分代码的编译行为推迟到运行时执行，目的是为了提高性能。
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
              本地开发服务器动态编译功能的目的是为了节省人力、方便前端开发和调试，本质原理是监听+触发。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">中间件是在输入到输出过程中对内容进行加工从而输出预想的数据。</div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              浏览器并不会在接收到绘制需求时便立即执行，而是将1秒（1000毫秒）平均分为60帧，每1帧的绘制间隔约为16.7毫秒。也就是说，每隔16.7毫秒浏览器会将此时间内所有的绘制需求一起执行。之所以采用这样的策略，一方面是因为人眼能够感知到的平缓动画上限就是60帧/秒；另一方面也是考虑到性能因素，避免不必要且无用的额外工作，减轻系统负荷。
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
              ignored，指定不参与监听的文件，比如/node_modules/。此配置项会大幅降低CPU负荷和内存占用。
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
              webpack实现监听的原理是借助于Node.js的文件I/O权限注册Filesystem Event
              Listener（文件系统事件监听），对于一些不支持Filesystem
              Event的场景（比如虚拟机）webpack无法监听到源文件的改动。定期轮询是webpack针对此类场景的备选方案。如果开发环境支持Filesystem
              Event，将此配置设置为false。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div><div class="text">源码改动之后，浏览器应该在何时获取重新编译后的资源？</div></div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              当然是在重新编译行为完成之后。那么我们如何知道重新编译何时完成呢？
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div><div class="text">前端工程体系的原则之一是能够自动化的工作就不要消耗人力</div></div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              在webpack发布之前，业界大多数工具对此问题的解决方案是：在动态编译完成之后立即触发浏览器自动刷新，从而让浏览器及时获取重新编译之后的资源，这种方案被称为Livereload。webpack使用了一种效率更高且更利于调试的解决方案：Hot
              Module Replacement，简称HMR[插图]
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div><div class="text">HMR和Livereload以保证浏览器即时获取动态编译资源。</div></div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              Livereload的原理是在浏览器和服务器之间创建WebSocket连接，服务器端在执行完动态编译之后发送reload事件至浏览器，浏览器接收到此事件之后刷新整个页面
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div><div class="text">[插图]</div></div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              Livereload虽然能够保证动态构建的资源被浏览器即时获取，但是它有一个致命的缺陷：无法保存页面状态。
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
              我们在搭建工程体系各个功能模块期间不能因为人为失误是技术层面外的因素而忽略了它对工程效率的影响。
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
              HMR以局部更新取代整体页面刷新，有效地弥补了Livereload无法保存页面状态的缺陷。
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
              在开启webpack-dev-server模式下，webpack向构建输出的文件中注入了一项额外的功能模块——HMR
              Runtime。同时在服务器端也注入了对应的服务模块——HMR
              Server。两者是客户端与服务器端的关系，与Livereload的实现方式类似的是，两者之间也是通过WebSocket进行通信的。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div><div class="text">[插图]</div></div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              1）修改源文件并保存后，webpack监听到Filesystem
              Event事件并触发了重新构建行为。2）构建完成之后，webpack将模块变动信息传递给HMR
              Server。3）HMR Server通过WebSocket发送Push信息告知HMR Runtime需要更新客户端模块，HMR
              Runtime随后通过HTTP获取待更新模块的内容详情。4）最终，HMR
              Runtime将更新的模块进行替换，在此过程中浏览器不会进行刷新。
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
              entry中注入额外的模块会增加构建输出文件的体积，并且HMR的主要目的是便于开发阶段的即时调试，而测试和生产环境下并无此需求。所以必须控制HMR
              Runtime只在开发环境下注入，此需求的实现便涉及了执行环境的区分。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">4.3 Mock服务</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              Mock服务针对的是前后端协作层面的问题，通过模拟数据解耦了前端逻辑的编写对后端接口的依赖。Mock服务是实现前后端分离和并行开发的核心，其重要性不言而喻。
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
              Mock进化的第二种形态是以Mock.js为代表的客户端Mock，工作原理是在客户端拦截JavaScript代码发出的AJAX请求并返回由Mock.js创建的假数据。
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
              Mock.js可以随机创建假数据，在此基础上，前端逻辑便可以处理各种异常状态。客户端Mock的优点是解决了代码中直接编写假数据无法模拟请求流程和异常处理的问题，并且客户端Mock相当于创建了一个模拟接口，而不是针对某个接口的假数据。所以可以将客户端Mock的代码集中写入一个单独的js文件，一方面便于统一维护，另一方面在接口完成之后直接把引用Mock的js文件删除即可：
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
              Mock
              Server最普遍的使用场景是模拟异步数据接口，比如使用AJAX或者JSONP获取和提交数据。模拟的方式通常有如下两种。&nbsp;·
              Local——本地模式，使用本地的JSON数据作为异步接口的请求响应。·
              Proxy——代理模式，将异步接口代理到线上的其他接口地址，类似于转接者角色。&nbsp;Mock
              Server本质上是一个简化版的Web Server，最基础的组件是负责分发的路由
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div><div class="text">[插图]</div></div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              // 根据是否为JSONP请求返回对应格式的数据 req.query.callback ? res.jsonp(MockData) :
              res.json(MockData);
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">req.query.callback ? res.jsonp(MockData) : res.json(MockData);</div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              传统意义上的HTTP Proxy Server（HTTP代理服务器）是介于客户端与Web
              Server之间的中转站，通常是为了节省IP开销、缓存利用等目的。Mock
              Server的Proxy模式并没有HTTP代理服务器那么复杂的功能和需求，其最主要的功能是为了解决某些接口不支持跨域请求的限制。比如：&nbsp;·规模庞大的业务往往需要多台不同域的服务提供不同的数据服务，比如用户相关的服务处于auth.app.com域名内，主站服务处于www.app.com域名内。·假设迭代需求不涉及主站接口http://www.app.com/data的改动（请注意，此处的场景是仅仅不涉及此接口的修改，主站其他接口可能会需要改动），开发阶段不必花费精力创建此接口的Mock，可以直接使用生产环境的服务。·主站www.app.com的接口不支持跨域请求。项目上线后处于主站同域名内，所以生产环境不涉及跨域请求。·前端工程师所处的开发环境域名为localhost，由于某些业务限制，不能通过修改host文件将本地IP映射为www.app.com。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">在搭建HTTP代理时可能会踩很多的坑，比如https验证、session管理等。</div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">5.1 部署流程的设计原则</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              使用node-ssh2模块实现SFTP上传文件的流程非常简单，即建立SSH连接→遍历本地待部署目录→依次上传待部署文件。
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
              const Glob = require('glob'); const Path = require('path'); const SSHClient =
              require('ssh2').Client; const SSHConn = new SSHClient(); module.exports =
              function(connect){ // 部署目标路径 const TargetPath = connect.path; // 本地待部署目录
              const SourcePath = Path.join(process.cwd(), 'dest'); // 监听ready事件
              SSHConn.on('ready', () =&gt; { SSHConn.sftp((err, sftp) =&gt; { if(err){ //
              异常结束SSH连接 SSHConn.end(); throw err; } Glob(Path.join(SourcePath, '**/**.**'),
              (err, files) =&gt; { if(err || ! files || files.length === 0){ SSHConn.end(); throw
              err; } files.forEach(file =&gt; { let _file = file.replace(SourcePath, ''); //
              获取子目录名称 let _fileDirname = Path.parse(_file).dir; // 目标子目录路径 let
              _targetDirname = Path.join(TargetPath, _fileDirname); // 目标完整路径 let _targetFile
              = Path.join(TargetPath, _file); new Promise((resolve, reject) =&gt; { //
              判断目标路径是否存在 sftp.exists(_targetDirname, (isExist) =&gt; { if (isExist) {
              resolve(); } else { reject(); } }); }).catch(() =&gt; { // 创建目标目录 return new
              Promise((resolve) =&gt; { SSHConn.exec(`mkdir -p ${_targetDirname}`, (err, stream)
              =&gt; { if (err) throw err; stream.on('end', err =&gt; { if (err) throw err;
              resolve(); }); }); }); }).then(()&gt; { // 上传 sftp.fastPut(file, _targetFile, err
              =&gt; { if (err) throw err; }); }).catch(err =&gt; { SSHConn.end(); throw err; }); });
              }); }); }); // 连接 SSHConn.connect({ host: connect.host, port: connect.port || 22,
              username: connect.auth &amp;&amp; connect.auth.username, password: connect.auth
              &amp;&amp; connect.auth.password }); };
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
              完整的部署上传模块还需要考虑权限验证、路径一致性判断、优化提示等细节。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">5.2 流程之外：前端静态资源的部署策略</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div><div class="text">5.2.2 Apache设置缓存策略</div></div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">6.1 本地工作流</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div><div class="text">[插图]</div></div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div><div class="text">[插图]</div></div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">6.2 云平台工作流</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div><div class="text">[插图]</div></div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div><div class="text">[插图]</div></div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              WebHook是一种用于在服务器之间进行实时通信的策略，源服务器通过监听某种特定事件（比如Git仓库的Push事件），在事件发生后发送一个HTTP请求（通常是POST请求）至目标服务器。这是事件驱动模型的一个典型案例，对于前端工程师而言是再熟悉不过的了，浏览器的事件监听回调策略以及Node.js的Event
              Loop都是基于事件驱动模型的。所以WebHook也可以被称为Web回调。WebHook通常被用于实时性要求较高的场景，比如消息通知。在前端工程化领域，WebHook是将Git仓库管理平台和云平台联系在一起的纽带，是实现流程自动化的关键所在。如图6-1所示的工作流中，Merge事件触发GitLab的WebHook监听回调，发送消息通知云平台。随后云平台接收到消息之后自动进行构建、单元测试以及部署流程。目前主流的Git仓库管理平台均支持WebHook，比如GitHub和GitLab。比较普遍的可监听事件包括Push、新建tag、Merge等，图6-5是GitLab
              v7版本WebHook支持的事件类型。
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
              比如使用Node.js配合github-webhook-handler模块[插图]搭建一个监听Push事件的简易HTTP服务
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--  <footer class="footer">-->
    <!--    <img src="/img/weread/qianduangongchenghuatixishejiyushijian/qr.png" alt="qr">-->
    <!--    <p>扫码阅读本书</p>-->
    <!--  </footer>-->
  </div>
</template>
<script>
import logCreated from "../../mixin/log-created";

export default {
  name: 'qianduangongchenghuatixishejiyushijian',
  mixins: [logCreated]

}
</script>
<style scoped>
@import './css/weread.css';
@import './css/readnotes.css';
</style>
