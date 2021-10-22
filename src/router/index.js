import Vue from 'vue'
import VueRouter from 'vue-router'

import routeTest from './routes/routeTest'
import Home from '../views/Home.vue'
import wereadRoutes from './routes/wereadRoutes'
// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }
import Layout from '@/layout'

// const files = require.context('@/views', true, /\.vue$/)
// let pages = {
//
// }
// files.keys().forEach(key => {
//   pages[key.replace(/(\.\/|\.vue)/g, '')] = files(key).default
// })
// let generator = []
// Object.keys(pages).forEach(item => {
//   generator.push({
//     path: `/${pages[item].name.replace(/-/g, '/')}`,
//     name: pages[item].name,
//     component: pages[item]
//   })
// })


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Layout,
    children: [
      {
        path: '',
        name: 'home',
        component: Home,
        meta: {  }
      },
      {
        path: 'read-notes',
        name: 'read-notes',
        component: ()=>import('@/views/ReadNotes'),
      },
      ...wereadRoutes
    ]
  },
  ...routeTest,
  // {
  //   path: "/test",
  //   name: "Test",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "test" */ "../views-test/Test.vue"),// 异步加载、模块分组打包
  // },
  // ...generator,
  {
    path: '*',
    redirect: '/test',
  },
]
console.log(routes )

const router = new VueRouter({
  routes,
})

export default router
