// import '@/theme/assets/common.css'// 公共css
// import '@/theme/assets/iconfont.css'//公共iconfont
import './theme-base/index.css'
// import './assets/iconfont/iconfont.css'//业务iconfont 使用 https://www.iconfont.cn/ 维护
import ElementUI from 'element-ui'
let install = function install(Vue) {
  Vue.use(ElementUI)
}
let theme = {
  install: install,
}
export default theme
