const pkg = require('./package.json')
process.env.VUE_APP_FEBUILDTIME = new Date().getTime()
process.env.VUE_APP_FEBUILDTIMEX = new Date()
process.env.VUE_APP_FEPROJECTNAME = pkg.name
const path = require('path')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
const dllPath = './' + pkg.dllPath
const linkPath = '/' + pkg.dllPath.split('/')[1]

/**
 * @fix (node:5328) MaxListenersExceededWarning: Possible EventEmitter memory leak detected.
 * @type {number}
 */
require('events').EventEmitter.defaultMaxListeners = 0
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
  // webpack的配置在这个属性里修改configureWebpack
  configureWebpack: config => {
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
  },
  chainWebpack: config => {
    config.externals({
      // 以下是全局使用
      vue: 'Vue',
      // vuex: 'Vuex',
      'vue-router': 'VueRouter',
    })
  },
  // 第三方插件配置
  // pluginOptions: {},
}
