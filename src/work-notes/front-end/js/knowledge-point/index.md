# JS知识点

本文收集整理于语雀博主 [CUGGZ]的原创文章 <br/>
原文链接：
https://www.yuque.com/cuggz/interview/vgbphi

## 参考资料
- [前端面试题之JavaScript篇](https://www.yuque.com/cuggz/interview/vgbphi)


## 浏览器自动播放策略

据一般规则，媒体内容将在满足以下至少一个的条件下自动播放：

- 音频被静音或其音量设置为 0
- 用户和网页已有交互行为（包括点击、触摸、按下某个键等等）
- 网站已被列入白名单；如果浏览器确定用户经常与媒体互动，这可能会自动发生，也可能通过首选项或其他用户界面功能手动发生
自动播放权限策略被应用于 &lt;iframe&gt; 或者其文档上，从而获得了自动播放的权限。


否则，播放可能会被阻止。导致播放被阻塞的确切情况以及将网站列入白名单的具体方法因浏览器而异，但最好是遵循以上的原则。

### 参考资料
- [媒体和 Web Audio API 的自动播放指南](https://developer.mozilla.org/zh-CN/docs/Web/Media/Autoplay_guide]
