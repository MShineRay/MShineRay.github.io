/**
 * 接口服务配置
 * @private
 * @type {object}
 */
const API_MOCK_PHP = 'fe-mock-php' // mock=>调用在服务器上的PHP程序来读取模拟数据
// eslint-disable-next-line
const API_PROXY = '/fe-api-proxy' // 通过vueCLI自身携带的代理功能来进行接口访问达到跨域成功
const API_LOCAL = '/fe-api-local' // 调用本地nodejs程序来读取模拟数据
let WS_PROTOCOL, HTTP_PROTOCOL// eslint-disable-line
try {
  WS_PROTOCOL = window.location.protocol === 'https:' ? 'wss:' : 'ws:'// eslint-disable-line
  HTTP_PROTOCOL = window.location.protocol === 'https:' ? 'https:' : 'http:'// eslint-disable-line
} catch (error) {
  WS_PROTOCOL = 'ws:'
  HTTP_PROTOCOL = 'http:'
}

let online = {
  common: {
    shareUrl: '//www.test.com',
    share2Url: HTTP_PROTOCOL + '//www.test2.com',
    share3Url: 'http://www.test2.com',
  },
  special: {
    debug: false, // 调试模式
  },
}

let mock = {
  common: {
    shareUrl: API_MOCK_PHP + '/share',
    locWSUrl: WS_PROTOCOL,
  },
  special: {
    debug: true, // 调试模式
  },
}

let dev = {
  common: {},
  special: {
    debug: true, // 调试模式
  },
}
let test = {
  common: {},
  special: {
    debug: true, // 调试模式
  },
}
let fat = {
  common: {},
  special: {
    debug: true, // 调试模式
  },
}

let sit = {
  common: {},
  special: {
    debug: true, // 调试模式
  },
}
let uat = {
  common: {},
  special: {
    debug: true, // 调试模式
  },
}
// 准生产环境、灰度环境
let pre = {
  common: {},
  special: {
    debug: true, // 调试模式
  },
}

let nodeProxyApi = {
  // shareUrl: API_PROXY + '/share',
}

let locMock = {
  common: {
    shareUrl: API_LOCAL + '/share',
  },
  special: {},
}
let locDev = {
  common: nodeProxyApi,
  special: {},
}
let locTest = {
  common: nodeProxyApi,
  special: {},
}
let locFat = {
  common: nodeProxyApi,
  special: {},
}
let locSit = {
  common: nodeProxyApi,
  special: {},
}

let locPre = {
  common: nodeProxyApi,
  special: {},
}

let locUat = {
  common: nodeProxyApi,
  special: {},
}

const feServerConfig = {
  online,
  mock,
  dev,
  test,
  fat,
  sit,
  pre,
  uat,
  locMock,
  locDev,
  locTest,
  locFat,
  locSit,
  locPre,
  locUat,
}
module.exports = feServerConfig
