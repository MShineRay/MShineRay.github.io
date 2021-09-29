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
function writeFile(path, data, res) {
  mkdirsSync(path)
  fs.writeFile(path + '/index.json', data, function (err) {
    if (err) throw err
    res.send('{ "message": "mock写入成功！' + path + '"}')
  })
}

module.exports = function (app) {
  app.use('*/-local-setpost*', (req, res) => {
    try {
      res.setHeader('Content-Type', 'application/json')
      let path = req.query.path
      let content = '';
      req.on('data', function (chunk) {
        content += chunk;
      });
      req.on('end', function () {
        writeFile('./_temp-local-log/' + path, content, res)
      });
    } catch (e) {
      res.send('{ "message": "mock写入失败！"}')
    }
  })
}