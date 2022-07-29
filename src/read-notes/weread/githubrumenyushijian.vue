<template>
  <div class="container">
    <h1 class="title">GitHub入门与实践</h1>
    <h5 class="author">大塚弘记</h5>
    <img src="/img/weread/GitHubrumenyushijian/t6_26211801.jpg" alt="written" class="written" />
    <div class="wr_macOS wr_Desktop wr_page_reader wr_whiteTheme">
      <div class="sectionListItem">
        <div class="sectionListItem_title">序言</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              ●代码审查不到位，审查效率低下
              ●只有编程者本人能看懂的代码、可靠性不高的代码直接被部署至正式环境中
              ●因键入错误、理解错误而造成的低级代码错误导致BUG频繁出现
              ●没有机会和其他人互相交流代码，共享知识，相互学习、指正、改善
              ●没有一个简单高效、能在一天之内添加多个功能的开发流程
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">1.2 使用GitHub会带来哪些变化</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              输入“#编号”，会连接到该仓库所对应的Issue编号。输入“用户名/仓库名#编号”则可以连接到指定仓库所对应的Issue编号。只要按照这类特定格式书写便会自动创建链接。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">2.4 初始设置</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              将color.ui设置为auto可以让命令的输出拥有更高的可读性。 ￼ $ git config --global
              color.ui auto
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">3.1 使用前的准备</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              运行下面的命令创建SSH Key。 ￼ $ ssh-keygen -t rsa -C
              "your_email@example.com"￼ Generating public/private rsa key pair.￼ Enter file in which
              to save the key￼ (/Users/your_user_directory/.ssh/id_rsa): 按回车键￼ Enter passphrase
              (empty for no passphrase): 输入密码￼ Enter same passphrase again: 再次输入密码
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
              ssh -T git@github.com￼ The authenticity of host 'github.com (207.97.227.239)' can't be
              established.￼ RSA key fingerprint is fingerprint值 ．￼ Are you sure you want to
              continue connecting (yes/no)？ 输入yes 出现如下结果即为成功。 ￼ Hi hirocastest! You've
              successfully authenticated, but GitHub does not￼ provide shell access.
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">3.2 实际动手使用</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              MIT许可协议具有以下特征。  
              被授权人权利：被授权人有权利使用、复制、修改、合并、出版发行、散布、再授权和/或贩售软件及软件的副本，及授予被供应人同等权利，唯服从以下义务。
              被授权人义务：在软件和软件的所有副本中都必须包含以上版权声明和本许可声明。
              其他重要特性：此许可协议并非属copyleft的自由软件许可协议条款，允许在自由及开放源代码软件或非自由软件（proprietary
              software）所使用。 MIT的内容可依照程序著作权者的需求更改内容。此亦为MIT与BSD（The BSD
              license, 3-clause BSD license）本质上不同处。
              MIT许可协议可与其他许可协议并存。另外，MIT条款也是自由软件基金会（FSF）所认可的自由软件许可协议条款，与GPL兼容。
              ——MIT许可证，Wikipedia, http://zh.wikipedia.org/,2015年3月27日获取
              详细内容请参阅原文￼。
              实际使用时，只需将LICENSE文件加入仓库，并在README.md文件中声明使用了何种许可协议即可。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">4.1 基本操作</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div><div class="text">git commit -m "First commit"￼</div></div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              如果只想让程序显示第一行简述信息，可以在git log命令后加上--pretty=short。
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
              不妨养成这样一个好习惯：在执行git commit命令之前先执行git diff
              HEAD命令，查看本次提交与上次提交之间有什么差别，等确认完毕后再进行提交。这里的HEAD是指向当前分支中最新一次提交的指针。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">4.2 分支的操作</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div><div class="text">git log --graph——以图表形式查看分支</div></div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">5.12 Settings</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              Webhooks &amp; Services
              在这个页面中，用户可以添加Hook让GitHub仓库与其他服务集成。通过Add
              webhook可以添加用户自己的webhook。通过Configure
              services则可以从GitHub事先列出的可以集成的服务中进行选择。能与GitHub集成的服务非常多，其中还包括邮件及IRC等社交服务，建议各位不要错过这个设置
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
              Deploy Keys
              在这个页面中，用户可以添加用于部署的公开密钥，允许以只读方式访问仓库。设置公开密钥后，用户可以使用私有密钥通过ssh协议clone仓库。要注意的是，这里添加的公开密钥·私有密钥对无法再添加到其他仓库。使用Deploy
              Keys功能时，需要给每个仓库赋予不同的密钥对。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">5.14 其他功能</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              GitHub Pages GitHub Pages主要用于在GitHub上托管静态HTML，以便发布项目的Web页￼。
              由于可以绑定独立域名，人们也经常利用结合了这个功能的Octopress￼框架来搭建博客。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div><div class="text">参照官方网站￼。</div></div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">7.4 小结</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              作为仓库的维护者要时刻记得，无法运行的代码绝不可以合入仓库，否则会失去团队对你的信任。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">8.1 hub命令</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              hub命令￼则是一个封装了git命令的命令行工具，能够辅助用户使用GitHub
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">8.2 Travis CI</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              Travis CI￼是一款免费服务，专门托管面向开源开发组织的CI（Continuous
              Integration，持续集成）
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
              让CI软件监视仓库，可以在开发者发送提交后立刻执行自动测试或构建。通过持续执行这样一个操作，可以检测出开发者意外发送的提交或无意的逻辑偏差，让代码保持在一定质量以上。
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
              一般情况下，只要在仓库中添加．travis.yml这样一个Travis CI专用的文件，Travis
              CI就与GitHub集成了。
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
              检测配置文件是否有问题 Travis CI专门提供了Travis
              WebLint供用户检测．travis.yml文件是否存在问题￼。检测时只需指定仓库，如果发现问题会出现图8.1中的页面。
              ￼ 图8.1 通过Travis WebLint检测配置是否正常
              如果配置文件的描述有误，在实际启动CI后会返回错误结果，但此时人们往往搞不清问题出在哪里。所以在开始使用CI之前请务必进行这项检测。
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
              将Travis CI的结果添加至README.md
              各位在查看GitHub端仓库的README.md文件时，不知有没有见到过像图8.5中“build
              passing”那种绿色或红色的图片。这就是刚才Travis CI的执行结果。 ￼ 图8.5 Travis
              CI的状态图
              绿色的图片表示仓库内代码顺利通过了测试，相反红色的图片表示仓库没有通过测试，证明仓库很可能存在某种问题。将执行结果显示在README.md中，既可以显示仓库的健全性，又可以防止自己遗漏Travis
              CI的结果，一举两得。 如果采用了Markdown语法，只需按下面格式进行描述。 ￼ [! [Build
              Status](https://secure.travis-ci.org/用户名/仓库名．png￼ )](http://travis-ci.org/用户名/仓库名)
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">8.3 Coveralls</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              Coveralls￼是由Lemur Heavy Industries￼运营的代码覆盖率检测服务。借助Travis
              CI或Jenkins等持续集成服务器，向用户报告自动测试的测试覆盖率
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">8.4 Gemnasium</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              Gemnasium服务可以查询GitHub仓库中软件正在使用的RubyGems或npm（Node Package
              Manager，包管理器），让开发者了解自己是否正在使用最新版本进行开发￼。
              最近的软件都会用到多个库。因此，当库的版本升级时，如果不及时应对，就会影响到软件的使用。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">9.3 GitHub Flow的流程</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              整个开发流程大致如下。   ❶ 令master分支时常保持可以部署的状态 ❷
              进行新的作业时要从master分支创建新分支，新分支名称要具有描述性 ❸
              在❷新建的本地仓库分支中进行提交 ❹ 在GitHub端仓库创建同名分支，定期push ❺
              需要帮助或反馈时创建Pull Request，以Pull Request进行交流 ❻
              让其他开发者进行审查，确认作业完成后与master分支合并 ❼ 与master分支合并后立刻部署
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">9.5 模拟体验GitHub Flow</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              ●将master分支更新到最新状态 ●在自己的开发环境中确认通过所有测试
              ●从master分支创建新分支 ●编写测试代码 ●编写实现目标功能的代码
              ●确认通过所有测试并且没有出现退步（Regression）现象 ●发送Pull
              Request请求合并至master分支
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
              也就是应该先编写目标功能的测试代码，以保证测试代码全部通过为基准编写功能代码。这个操作顺序能够极力减少出现BUG的可能，并且可以随时修改功能代码。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">9.6 团队实践GitHub Flow时的几点建议</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div><div class="text">减小Pull Request的体积</div></div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              开发时间越长或者代码量越大，代码审查时的成本就越高。过长的开发时间让审查者难以了解开发该功能时的背景，过大的代码量会让审查者难以阅读到代码的每个细节。这样一来BUG更容易出现，久而久之整个团队的代码审查都会漏洞频出。
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
              建议各位将目标功能细分，尽量缩小Pull
              Request的体积，保证每几小时至几天向master分支发送一次Pull
              Request，通过多次合并来实现一个功能。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div><div class="text">准备可供试运行的环境</div></div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              不妨创建一个与正式环境高度相似的预演（Staging）环境，在这个预演环境中部署关键修改，借以确认代码的实际运行状况。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div><div class="text">不要让Pull Request中有太多反馈</div></div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div><div class="text">不要积攒Pull Request</div></div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_divider leftIndent"></div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              建议团队制定一个新的规则：想创建Pull Request的人要先去对其他人的Pull
              Request进行审查及反馈，并在可以部署时及时部署。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">9.7 GitHub Flow的小结</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div><div class="text">●开发流程以部署为中心 ●高速源于简单</div></div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">9.8 Git Flow——以发布为中心的开发模式</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              ￼ 图9.15 A successful Git branching model ※ Vincent Driessen“A successful Git
              branching model-nvie.com”（http://nvie.com/posts/a-successful-git-branching-model/）
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
              ❶ 从开发版的分支（develop）创建工作分支（feature branches），进行功能的实现或修正 ❷
              工作分支（feature branches）的修改结束后，与开发版的分支（develop）进行合并 ❸
              重复上述❶和❷，不断实现功能直至可以发布 ❹ 创建用于发布的分支（release
              branches），处理发布的各项工作 ❺
              发布工作完成后与master分支合并，打上版本标签（Tag）进行发布 ❻
              如果发布的软件出现BUG，以打了标签的版本为基础进行修正（hotfixes）
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">9.9 导入Git Flow前的准备</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div><div class="text">brew install git-flow</div></div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">9.10 模拟体验Git Flow</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              master分支时常保持着软件可以正常运行的状态。由于要维持这一状态，所以不允许开发者直接对master分支的代码进行修改和提交。
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
              develop分支是开发过程中的代码中心分支。与master分支一样，这个分支也不允许开发者直接进行修改和提交。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">9.11 Git Flow的小结</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              版本控制策略规定了软件版本号的分配规则，因此制定该策略时应当尽量简单易懂。
              比如在用x.y.z格式进行版本管理时的规则如下所示。   ●
              x在重大功能变更或新版本不向下兼容时加1，此时y与z的数字归0
              ●y在添加新功能或者删除已有功能时加1，此时z的数字归0 ●z只在进行内部修改后加1  
              下面举个具体例子。   ●1.0.0：最初发布的版本 ●1.0.1：修正了轻微BUG ●1.0.2：修复漏洞
              ●1.1.0：添加新功能 ●2.0.0：更新整体UI并添加新功能  
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">10.3 能实现Git托管的软件</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              一些开源软件拥有与GitHub相类似的功能。 例如下面几种都比较常用。   ●GitBucket￼ ●GitLab￼
              ●Gitorious￼ ●RhodeCode￼  
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">附录B 通过Gist轻松实现代码共享</div>
        <div class="sectionListItem_content noteItem_content clickable">
          <span class="icon"></span>
          <div>
            <div class="text">
              Gist￼是一款简单的Web应用程序，常被开发者们用来共享示例代码和错误信息。
            </div>
          </div>
        </div>
      </div>
      <div class="sectionListItem">
        <div class="sectionListItem_title">点评</div>
        <div class="sectionListItem_content noteItem_content noteItem_content_review">
          <span class="icon"></span>
          <div>
            <div class="wr_ratingLevelBar wr_ratingLevelBar_Good">
              <div class="wr_ratingLevelBar_icon"></div>
              <div class="wr_ratingLevelBar_text">推荐</div>
            </div>
            <div class="text">入门级</div>
          </div>
        </div>
      </div>
    </div>
    <!--  <footer class="footer">-->
    <!--    <img src="/img/weread/GitHubrumenyushijian/qr.png" alt="qr">-->
    <!--    <p>扫码阅读本书</p>-->
    <!--  </footer>-->
  </div>
</template>
<style scoped>
@import '/css/weread.css';
@import '/css/readnotes.css';
</style>
