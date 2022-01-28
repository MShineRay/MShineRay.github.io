# Event Loop 与异步更新策略

Vue 和 React 都实现了异步更新策略。达到了减少 DOM 操作、避免过度渲染的目的。

## Event Loop 中的“渲染时机”

### Micro-Task 与 Macro-Task

事件循环中的异步队列有两种：macro（宏任务）队列和 micro（微任务）队列。

常见的 macro-task 比如： setTimeout、setInterval、 setImmediate、script（整体代码）、 I/O 操作、UI 渲染等。  
常见的 micro-task 比如: process.nextTick、Promise、MutationObserver 等。

### Event Loop 过程解析

基于对 micro 和 macro 的认知，我们来走一遍完整的事件循环过程。

一个完整的 Event Loop 过程，可以概括为以下阶段：

*   初始状态：调用栈空。micro 队列空，macro 队列里有且只有一个 script 脚本（整体代码）。
    
*   全局上下文（script 标签）被推入调用栈，同步代码执行。在执行的过程中，通过对一些接口的调用，可以产生新的 macro-task 与 micro-task，它们会分别被推入各自的任务队列里。
    同步代码执行完了，script 脚本会被移出 macro 队列，**这个过程本质上是队列的 macro-task 的执行和出队的过程**。
    
*   上一步我们出队的是一个 macro-task，这一步我们处理的是 micro-task。但需要注意的是：当 macro-task 出队时，任务是**一个一个**执行的；
    而 micro-task 出队时，任务是**一队一队**执行的（如下图所示）。因此，我们处理 micro 队列这一步，会逐个执行队列中的任务并把它出队，直到队列被清空。
    

![](https://user-gold-cdn.xitu.io/2018/10/1/1662fc9d8bf609a6?w=480&h=410&f=png&s=8715)

*   **执行渲染操作，更新界面**（敲黑板划重点）。
    
*   检查是否存在 Web worker 任务，如果有，则对其进行处理 。
    

（上述过程循环往复，直到两个队列都清空）

### 渲染的时机

假如我想要在异步任务里进行DOM更新，我该把它包装成 micro 还是 macro 呢？

我们先假设它是一个 macro 任务，比如我在 script 脚本中用 setTimeout 来处理它：

```
// task是一个用于修改DOM的回调
setTimeout(task, 0)

```

现在 task 被推入的 macro 队列。但因为 script 脚本本身是一个 macro 任务，所以本次执行完 script 脚本之后，下一个步骤就要去处理 micro 队列了，再往下就去执行了一次 render，对不对？

但本次render我的目标task其实并没有执行，想要修改的DOM也没有修改，因此这一次的render其实是一次无效的render。

macro 不 ok，我们转向 micro 试试看。我用 Promise 来把 task 包装成是一个 micro 任务：

```
Promise.resolve().then(task)

```

那么我们结束了对 script 脚本的执行，是不是紧接着就去处理 micro-task 队列了？micro-task 处理完，DOM 修改好了，紧接着就可以走 render 流程了——不需要再消耗多余的一次渲染，不需要再等待一轮事件循环，直接为用户呈现最即时的更新结果。

因此，我们更新 DOM 的时间点，应该尽可能靠近渲染的时机。**当我们需要在异步任务中实现 DOM 修改时，把它包装成 micro 任务是相对明智的选择**。

## 生产实践：异步更新策略——以 Vue 为例

什么是异步更新？

当我们使用 Vue 或 React 提供的接口去更新数据时，这个更新并不会立即生效，而是会被推入到一个队列里。待到适当的时机，队列中的更新任务会被**批量触发**。这就是异步更新。

异步更新可以帮助我们避免过度渲染，是“让 JS 为 DOM 分压”的典范之一。

### 异步更新的优越性

异步更新的特性在于它**只看结果**，因此渲染引擎**不需要为过程买单**。

最典型的例子，比如有时我们会遇到这样的情况：

```
// 任务一
this.content = '第一次测试'
// 任务二
this.content = '第二次测试'
// 任务三
this.content = '第三次测试'

```

我们在三个更新任务中对同一个状态修改了三次，如果我们采取传统的同步更新策略，那么就要操作三次 DOM。但本质上需要呈现给用户的目标内容其实只是第三次的结果，也就是说只有第三次的操作是有意义的——我们白白浪费了两次计算。

但如果我们把这三个任务塞进异步更新队列里，它们会先在 JS 的层面上被**批量执行完毕**。当流程走到渲染这一步时，它仅仅需要针对有意义的计算结果操作一次 DOM——这就是异步更新的妙处。

### Vue状态更新手法：nextTick

Vue 每次想要更新一个状态的时候，会先把它这个更新操作给包装成一个异步操作派发出去。这件事情，在源码中是由一个叫做 nextTick 的函数来完成的：

```
export function nextTick (cb?: Function, ctx?: Object) {
  let _resolve
  callbacks.push(() => {
    if (cb) {
      try {
        cb.call(ctx)
      } catch (e) {
        handleError(e, ctx, 'nextTick')
      }
    } else if (_resolve) {
      _resolve(ctx)
    }
  })
  // 检查上一个异步任务队列（即名为callbacks的任务数组）是否派发和执行完毕了。pending此处相当于一个锁
  if (!pending) {
    // 若上一个异步任务队列已经执行完毕，则将pending设定为true（把锁锁上）
    pending = true
    // 是否要求一定要派发为macro任务
    if (useMacroTask) {
      macroTimerFunc()
    } else {
      // 如果不说明一定要macro 你们就全都是micro
      microTimerFunc()
    }
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(resolve => {
      _resolve = resolve
    })
  }
}

```

Vue 的异步任务默认情况下都是用 Promise 来包装的，都是 micro-task。

macroTimeFunc() 是这么实现的：

```
// macro首选setImmediate 这个兼容性最差
if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  macroTimerFunc = () => {
    setImmediate(flushCallbacks)
  }
} else if (typeof MessageChannel !== 'undefined' && (
    isNative(MessageChannel) ||
    // PhantomJS
    MessageChannel.toString() === '[object MessageChannelConstructor]'
  )) {
  const channel = new MessageChannel()
  const port = channel.port2
  channel.port1.onmessage = flushCallbacks
  macroTimerFunc = () => {
    port.postMessage(1)
  }
} else {
  // 兼容性最好的派发方式是setTimeout
  macroTimerFunc = () => {
    setTimeout(flushCallbacks, 0)
  }
}

```

microTimeFunc() 是这么实现的：
```
//  不是ios全都给我去Promise 如果不兼容promise 那么你只能将就一下变成macro了
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  const p = Promise.resolve()
  microTimerFunc = () => {
    p.then(flushCallbacks)
    // in problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) setTimeout(noop)
  }
} else {
  // 如果无法派发micro，就退而求其次派发为macro
  microTimerFunc = macroTimerFunc
}

```

无论是派发 macro 任务还是派发 micro 任务，派发的任务对象都是一个叫做 flushCallbacks 的东西
flushCallbacks 源码如下：

```
function flushCallbacks () {
  pending = false
  // callbacks在nextick中出现过 它是任务数组（队列）
  const copies = callbacks.slice(0)
  callbacks.length = 0
  // 将callbacks中的任务逐个取出执行
  for (let i = 0; i < copies.length; i++) {
    copies[i]()
  }
}

```

Vue 中每产生一个状态更新任务，它就会被塞进一个叫 callbacks 的数组（此处是任务队列的实现形式）中。
这个任务队列在被丢进 micro 或 macro 队列之前，会先去检查当前是否有异步更新任务正在执行（即检查 pending 锁）。
如果确认 pending 锁是开着的（false），就把它设置为锁上（true），
然后对当前 callbacks 数组的任务进行派发（丢进 micro 或 macro 队列）和执行。
设置 pending 锁的意义在于保证状态更新任务的有序进行，避免发生混乱。

[Vue运行机制解析](https://juejin.im/book/5a36661851882538e2259c0f)