const pkg = require('./package.json')
process.env.VUE_APP_FEBUILDTIME = new Date().getTime()
process.env.VUE_APP_FEBUILDTIMEX = new Date()
process.env.VUE_APP_FEPROJECTNAME = pkg.name
const feApiLocal = require('./fe-service/fe-api-local/index.js')
const feApiProxy = require('./vue.config.proxy')
// const webpack = require('webpack')
const path = require('path')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const dllPath = './' + pkg.dllPath
const linkPath = '/' + pkg.dllPath.split('/')[1]

/**
 * @fix (node:5328) MaxListenersExceededWarning: Possible EventEmitter memory leak detected.
 * @type {number}
 */
require('events').EventEmitter.defaultMaxListeners = 0

/**
 * 根据分支来开启sourcemap
 * deploy/q、master为生产分支，不开启
 */
// const fs = require('fs')
let IS_PRODUCTIONSOURCEMAP = true
// const isGitDir = fs.statSync('./.git')
// if (isGitDir) {
//   let is_branch = fs.readFileSync('./.git/HEAD')
//   if (
//     is_branch.toString().indexOf('/deploy/q') > 0 ||
//     is_branch.toString().indexOf('/master') > 0
//   ) {
//     IS_PRODUCTIONSOURCEMAP = false
//   }
// }
module.exports = {
  publicPath: '/', // process.env.VUE_APP_API_URL,//process.env.NODE_ENV === 'production' ? '/' : '/',

  outputDir: './docs',
  pages: {
    index: {
      // entry for the page
      entry: 'src/main.js',
      // the source template
      template: 'public/index.html',
      // output as dist/index.html
      filename: 'index.html',
    },
  },

  // lintOnSave：{ type:Boolean default:true } 问你是否使用eslint
  lintOnSave: false,

  // productionSourceMap：{ type:Bollean,default:true } 生产源映射
  // 如果您不需要生产时的源映射，那么将此设置为false可以加速生产构建
  productionSourceMap: false,
  // devServer:{type:Object} 3个属性host,port,https
  // 它支持webPack-dev-server的所有选项
  devServer: {
    port: 50010, // 端口号
    host: '0.0.0.0',
    disableHostCheck: true,
    https: false, // https:{type:Boolean}
    open: false, // 配置自动启动浏览器
    // 默认情况对接到TEST数据环境，目前测试环境不可用，先对接到Q环境
    proxy: feApiProxy(),
    before(app) {
      feApiLocal(app)
    },
  },
  // webpack的配置在这个属性里修改configureWebpack
  configureWebpack: config => {
    // if (process.env.NODE_ENV === 'development') {
    //   config.devtool = 'source-map'
    //   // mutate config for production...
    // } else {
      // config.plugins.push(
      //   new webpack.DllReferencePlugin({
      //     context: process.cwd(),
      //     manifest: require(dllPath + '/vendor-manifest.json'),
      //   })
      // )
      config.plugins.push(
        new AddAssetHtmlPlugin({
          // dll文件位置
          filepath: path.resolve(__dirname, dllPath + '/*.js'),
          // dll 引用路径
          publicPath: linkPath,
          // dll最终输出的目录
          outputPath: linkPath,
        })
      )

      // chunk文件新增构建信息
      // config.plugins.push(new webpack.BannerPlugin(makeInfo))
      if (process.env.Analyse) {
        config.plugins.push(new BundleAnalyzerPlugin())
      }
    // }
  },
  chainWebpack: (config) => {
    config.externals({
      // 以下是全局使用
      vue: 'Vue',
      vuex: 'Vuex',
      'vue-router': 'VueRouter',
    })
  }
  // 第三方插件配置
  // pluginOptions: {},
}
