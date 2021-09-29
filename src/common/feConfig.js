/**
 * 前端环境配置（判断、解析）工具
 */
import feServerConfig from './feServerConfig'
// 生产环境
const feConfig = {
  environment: 'online', // 环境类型 online：生产环境
  debug: false, // 调试模式
  timeout: 30000, // ajax 默认超时时间
  themeType: 0, // 主题类型
}
Object.assign(feConfig, feServerConfig['online'].common, feServerConfig['online'].special)
const FE_ONLINE_HOST = 'xxx.com' // 前端生产域名

if (window.location.host !== FE_ONLINE_HOST) {
  // 非生产环境配置
  const arrayBaseDomain = ['staff', 'test'] // 配置默认的前端基础域名
  const objBaseDomain = {
    mock: ['mock'],
    dev: ['dev'],
    test: ['test'],
    sit: ['sit'],
    uat: ['uat'],
    pre: ['pre'],
  }
  const objEnvironment = {
    locMock: ['mock.local.fe.cn'],
    locDev: ['dev.local.fe.cn', '127.0.0.1', 'localhost'],
    locTest: ['test.local.fe.cn'],
    locSit: ['sit.local.fe.cn'],
    locUat: ['uat.local.fe.cn'],
    locPre: ['pre.local.fe.cn'],
    mock: [],
    dev: [],
    test: [],
    sit: [],
    uat: [],
    pre: [],
  }
  for (const key in objBaseDomain) {
    for (let i = 0, iLen = objBaseDomain[key].length; i < iLen; i++) {
      for (let j = 0, jLen = arrayBaseDomain.length; j < jLen; j++) {
        objEnvironment[key].push(objBaseDomain[key][i] + arrayBaseDomain[j])
      }
    }
  }
  for (const key in objEnvironment) {
    for (let i = 0, len = objEnvironment[key].length; i < len; i++) {
      if (window.location.hostname === objEnvironment[key][i]) {
        feConfig['environment'] = key
      }
    }
  }

  const env = feConfig['environment']
  if (
    [
      'mock',
      'dev',
      'test',
      'sit',
      'uat',
      'pre',
      'locMock',
      'locDev',
      'locTest',
      'locSit',
      'locUat',
      'locPre',
    ].indexOf(env) > -1
  ) {
    Object.assign(feConfig, feServerConfig[env].common, feServerConfig[env].special)
  }
}
console.log('feConfig:', feConfig)
export default feConfig
