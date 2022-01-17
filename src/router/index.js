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
    path: '/read-notes',
    name: 'Home',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'read-notes',
        component: () => import('@/views/ReadNotes'),
      },
      ...wereadRoutes,
    ]
  },
  {
    path: '/share-image',
    name: 'Home',
    component: Layout,
    redirect: '',
    children: [
      {
        path: '/',
        name: 'share-image',
        component: ()=>import('@/views/ShareImage')
      },
      {
        path: '/share-image/zhiqun/',
        name: 'share-image',
        component: ()=>import('@/views/ShareImage/zhiqun/index.vue')
      },
      {
        path: '/share-image/zhiqun/detail',
        name: 'share-image',
        component: ()=>import('@/views/ShareImage/zhiqun/image.vue')
      }
    ],
  },
  ...routeTest,
  {
    path: '/home',
    name: 'Home',
    component: Layout,
    children: [
      {
        path: '',
        name: 'home',
        component: Home,
        meta: {},
      }
    ],
  },
  {
    path: '*',
    redirect: '/home',
  },
]
console.log(routes)

const router = new VueRouter({
  routes,
})

export default router
