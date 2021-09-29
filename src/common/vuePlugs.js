import feAxios from './feAxios.js'
import feTools from './feTools.js'
import mixin from '@/mixin'
import VueAxios from 'vue-axios'
import axios from 'axios'
import * as filter from '@/filters'
import UI_THEME from '@/theme/theme-default'
import feConfig from './feConfig'
import feApiConfig from './feApiConfig'

const VuePlugsConfig = {
  feApiConfig,
  feAxios,
  feTools,
  feConfig,
  $axios: axios,
}
const VuePlugs = {
  // eslint-disable-next-line
  install: function (Vue, options = {}) {
    const VUE_PLUGS = Object.keys(VuePlugsConfig)
    const VUE_FILTER = Object.keys(filter)

    VUE_PLUGS.forEach(key => (Vue.prototype[key] = VuePlugsConfig[key]))

    VUE_FILTER.forEach(key => Vue.filter(key, filter[key])) // Vue 全局注册过滤器

    /**
     * 用于事件中心管理
     * @reference https://cn.vuejs.org/v2/guide/migration.html#dispatch-%E5%92%8C-broadcast-%E6%9B%BF%E6%8D%A2
     */
    Vue.prototype.$eventHub = new Vue()

    Vue.use(VueAxios, axios)

    Vue.mixin(mixin)

    // 注册一个全局自定义指令 `v-el-focus`
    Vue.directive('el-focus', {
      // 当被绑定的元素插入到 DOM 中时……
      inserted: function (el) {
        // 聚焦元素(此处需要querySelector是由于el-input编译后会一层div作为父级节点包装) FYI：https://blog.csdn.net/qq_39313596/article/details/96308277
        if (el.tagName.toLocaleLowerCase() === 'input') {
          el.focus()
        } else {
          if (el.getElementsByTagName('input')) {
            el.getElementsByTagName('input')[0].focus()
          }
        }
      },
    })

    // 安装自定义主题
    Vue.use(UI_THEME)
  },
}
export default VuePlugs
