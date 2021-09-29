'use strict'
const fs = require('fs')
const path = require('path')

// 递归创建目录 同步方法
function mkdirsSync(dirname) {
  if (fs.existsSync(dirname)) {
    return true
  } else {
    if (mkdirsSync(path.dirname(dirname))) {
      fs.mkdirSync(dirname)
      return true
    }
  }
}

// 数据写入
function writeFile(path, data) {
  mkdirsSync(path)
  fs.writeFile(path + '/index.json', data, function (err) {
    if (err) throw err
    console.log('{ "message": "mock写入成功！' + path + '"}')
  })
}

module.exports = function (app) {
    try {
      let lastVersion = process.env.VUE_APP_FEBUILDTIME;
      console.log(lastVersion);
      let time = process.env.VUE_APP_FEBUILDTIMEX;
      console.log(time)
      
      let content = {
        "lastVersion": lastVersion,
        "time":time
      }
      writeFile('./public/version', JSON.stringify(content))
    } catch (e) {console.log("version write error");}
}
