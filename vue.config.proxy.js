const feServerConfig = require('./src/common/feServerConfig')
const FE_PROXY = '/fe-api-proxy' //通过vueCLI自身携带的代理功能来进行接口访问达到跨域成功
const hostToEnv = {
  // 'mock.local.fe.cn': 'mock',
  'dev.local.fe.cn': 'dev',
  'test.local.fe.cn': 'test',
  'fat.local.fe.cn': 'fat',
  'sit.local.fe.cn': 'sit',
  'uat.local.fe.cn': 'uat',
  'pre.local.fe.cn': 'pre',
}

let _host = ''
process.argv.forEach(function (value, index) {
  if (value === '--host') {
    _host = process.argv[index + 1]
  }
})
let envConf = feServerConfig[hostToEnv[_host]]
module.exports = function () {
  let proxyObj = {
    default: {
      //初始化配置 防止proxyObj为空时格式异常
      target: 'http://localhost',
      pathRewrite: {},
    },
  }
  if (envConf && envConf.common) {
    Object.keys(envConf.common).forEach(function (key) {
      let _key = FE_PROXY + '/' + key.slice(0, -3) + '/'
      proxyObj[_key] = {
        target: 'http:' + envConf.common[key].replace(/http:|https:/, ''),
        ws: true,
        changeOrigin: true,
        pathRewrite: {},
      }
      proxyObj[_key]['pathRewrite']['^' + _key] = ''
    })
  }
  return proxyObj
}
