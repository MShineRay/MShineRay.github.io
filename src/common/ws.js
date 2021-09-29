class WebSocketClient {
  constructor(ws) {
    this.ws = ws
    this.timer = null
    this.client = null
    this.isConnect = false
    this.lockReconnect = false
    this.init()
  }

  init() {
    if ('WebSocket' in window) {
      this.client = new WebSocket(this.ws)
      this.client.onopen = () => {
        this.isConnect = true
      }
      this.onerror = err => {
        this.reconnectWs()
        console.error('WebSocket->>onerror', err)
      }
    } else {
      return Error('当前浏览器不支持WebSocket')
    }
  }

  // 重新连接机制
  reconnectWs() {
    if (this.lockReconnect) {
      return
    }
    this.lockReconnect = true
    this.timer && clearTimeout(this.timer)
    this.timer = setTimeout(function () {
      this.init()
      this.lockReconnect = false
    }, 4000)
  }

  sendMsg(param) {
    if (this.client.readyState === 1 && this.isConnect) {
      this.client.send(
        WebSocketClient.isType(param) === 'Object' ? WebSocketClient.jsonToStr(param) : param
      )
    }
    return this // 返回 this 支持链式调用
  }

  getMsgInfo(callback) {
    this.client.addEventListener('message', response => {
      const _result = response.data
      callback(WebSocketClient.isString(_result) ? WebSocketClient.strToJson(_result) : _result)
    })
  }

  static jsonToStr(str) {
    return JSON.stringify(str)
  }

  static strToJson(str) {
    return JSON.parse(str)
  }

  static isString(data) {
    return typeof data === 'string'
  }

  static isType(value) {
    return Object.prototype.toString.call(value).slice(-7, -1)
  }

  close() {
    this.client.onclose = () => {
      this.ws = null
      console.log('close ws')
    }
  }
}

export default WebSocketClient
