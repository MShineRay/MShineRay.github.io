# JS Web API
 
## Intersection Observer

### 应用场景

- 图片懒加载
- 无限滚动效果

### 示例代码


### 参考资料
- [IntersectionObserver MDN](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver)



## Page Visibility API

### 应用场景
- 浏览器切换tab后，定时器会不准，内部优化为最小按照1s计时，
  -  此时可以结合 document.hidden 、visibilitychange进行处理

### 示例代码


### 参考资料
- [Page_Visibility_API MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Page_Visibility_API)


## Web Animations API

### 应用场景
- js动画
### 示例代码

### 参考资料
- [Web_Animations_API MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Animations_API)


## navigator.connection

### 应用场景
- 网络状态

### 示例代码
```javascript
if (navigator.onLine) {
  console.log("在线");
} else {
  console.log("离线");
}

window.addEventListener("offline", (e) => {
  console.log("离线");
});

window.addEventListener("online", (e) => {
  console.log("在线");
});

navigator.connection.addEventListener("change", (e) => {
  console.log('监听 navigator.connection.efftiveType发生变化 ');
});

```

### 参考资料
- [Navigator connection MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Navigator/connection)
- [NetworkInformation MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/NetworkInformation)
- [Navigator onLine MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Navigator/onLine)



## transition

### 应用场景
- 动画
### 示例代码

### 参考资料
- [transition MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)



## drag event API

### 应用场景
- 拖拽
### 示例代码

### 参考资料
- [dragstart_event MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/dragstart_event)
- [dragend_event MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/dragend_event)
- [dragenter_event MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/dragenter_event)


## Audio API

### 应用场景
- 声音的分析和处理
### 示例代码

### 参考资料
- [AudioContext MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/AudioContext)
- [Web/HTML/Element/audio MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/audio)
- [音频与视频处理 MDN](https://developer.mozilla.org/zh-CN/docs/Web/Media/Audio_and_video_manipulation)


## Clipboard

### 应用场景
- 复制
- 剪切板
- 富文本-图片粘贴

### 示例代码

### 参考资料
- [Clipboard MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Clipboard)
- [clipboard.js github](https://github.com/zenorocha/clipboard.js)
- [FileReader](#filereader)

## FileReader

### 应用场景
- 文件读取
### 示例代码

### 参考资料
- [FileReader MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader)


