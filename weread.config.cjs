const path = require('path')
module.exports = {
  src: path.resolve(__dirname + '/tests/weread-src/'), //绝对路径
  outRootDirName: 'weread-src',
  outputDir: './tests/weread', //相对路径
}
