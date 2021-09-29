/**
 * route test
 */
export default [
  {
    //自测模块，不参与构建及部署
    //TODO：待分离自测功能
    path: '/test',
    name: 'Test',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "test" */ '@/views-test/Test.vue'), // 异步加载、模块分组打包
  },
]
