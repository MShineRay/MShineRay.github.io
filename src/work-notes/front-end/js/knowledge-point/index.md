# JS知识点

## [AbortController](https://developer.mozilla.org/zh-CN/docs/Web/API/AbortController/AbortController)
- fetch 取消请求

## 参考资料
- [前端面试题之JavaScript篇](https://www.yuque.com/cuggz/interview/vgbphi)

## 私有字段

~~~js
class Person {
  #abc;// 私有字段
  constructor(abc) {
    this.#abc = abc;
  }
  getAbc() {
    return this.#abc;
  }
  #method() {// 私有方法
  }
}
~~~

## [parseInt](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
在使用 parseInt 时，一定要指定一个 radix
如果输入的 string 以 "0"（0）开头，radix 被假定为 8（八进制）或 10（十进制）。具体选择哪一个 radix 取决于实现。ECMAScript 5 澄清了应该使用 10 (十进制)，但不是所有的浏览器都支持。
~~~js
function filterInt (value) {
  if (/^(\-|\+)?([0-9]+|Infinity)$/.test(value)) return Number(value);
  return NaN;
};
~~~

## 用位运算实现权限组合
~~~js
const READ = 0b1; // 1: 0001
const WRITE = 0b10; // 2: 0010
const UPDATE = 0b100; // 4: 0100
const DELETE = 0b1000; // 8: 1000

const r = 11;

if(r & READ) { // 位运算
  console.log("有权限")
}else {
  console.log("无权限")
}
~~~

### 参考资料
- [表达式与运算符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_operators)

## 零宽字符

### 应用场景
- 文本加密
- 文章水印

### 参考资料
- [一个你所不知道的加密方式--零宽字符加密](https://zhuanlan.zhihu.com/p/87919817)

## [动态语言](https://zh.wikipedia.org/wiki/%E5%8A%A8%E6%80%81%E8%AF%AD%E8%A8%80)
- [强弱类型](https://zh.wikipedia.org/wiki/%E5%BC%B7%E5%BC%B1%E5%9E%8B%E5%88%A5)
- [类型系统](https://zh.wikipedia.org/wiki/%E9%A1%9E%E5%9E%8B%E7%B3%BB%E7%B5%B1#%E9%9D%9C%E6%85%8B%E5%92%8C%E5%8B%95%E6%85%8B%E6%AA%A2%E6%9F%A5)

## ==
- [相等(==) MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Equality)
- [原始值强制转换(对象转原始类型) MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures)
- [严格相等（===） MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Strict_equality)
- [一元加(+) MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Unary_plus)

## 浏览器自动播放策略

据一般规则，媒体内容将在满足以下至少一个的条件下自动播放：

- 音频被静音或其音量设置为 0
- 用户和网页已有交互行为（包括点击、触摸、按下某个键等等）
- 网站已被列入白名单；如果浏览器确定用户经常与媒体互动，这可能会自动发生，也可能通过首选项或其他用户界面功能手动发生
自动播放权限策略被应用于 &lt;iframe&gt; 或者其文档上，从而获得了自动播放的权限。


否则，播放可能会被阻止。导致播放被阻塞的确切情况以及将网站列入白名单的具体方法因浏览器而异，但最好是遵循以上的原则。

### 参考资料
- [媒体和 Web Audio API 的自动播放指南](https://developer.mozilla.org/zh-CN/docs/Web/Media/Autoplay_guide]
