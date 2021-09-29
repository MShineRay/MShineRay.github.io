import Vue from 'vue'
import App from './App.vue'
import router from './router'
import filters from './filters'
import store from './store'
import VuePlugs from './common/vuePlugs'

Vue.use(VuePlugs)
Vue.config.productionTip = false
for (const key in filters) {
  Vue.filter(key, filters[key])
}
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
