# vue 

## [Object.freeze](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)

## 观察 observe
观察的方式就是深度遍历每一个属性，把每一个属性的读取和赋值变成函数

Object.defineProperty(obj, key, {
  get() {
    // ...
  },
  set() {
    // ...
  }
})

对象属性级别监听 
 Object.defineProperty 进行深度遍历，效率缺失
- 无法监听属性的新增和删除

// 观察
const proxy = new Proxy(obj, {
  get(){
  },
  set(){
  }
})
对象级别监听，无需深度遍历，可以监听到属性的新增和删除
