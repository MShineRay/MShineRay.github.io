const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const pkg = require('./package.json')
const TerserPlugin = require('terser-webpack-plugin')
const makeInfo = require('./mack.info.js')
const dllPath = pkg.dllPath

module.exports = {
  entry: {
    vendor: ['vue', 'vue-router', 'vuex', 'axios', 'element-ui', 'vue-axios'],
  },
  output: {
    path: path.join(__dirname, dllPath),
    filename: 'fe.[name].dll.[hash:8].js',
    library: '[name]_[hash]',
  },
  plugins: [
    new CleanWebpackPlugin(), // https://www.npmjs.com/package/clean-webpack-plugin
    new webpack.DllPlugin({
      // https://webpack.js.org/plugins/dll-plugin/#root
      path: path.join(__dirname, dllPath, '[name]-manifest.json'),
      name: '[name]_[hash]',
      context: process.cwd(),
    }),
    new webpack.BannerPlugin(makeInfo),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true, // Must be set to true if using source-maps in production
      }),
    ],
  },
}
