'use strict';
const fs = require('fs');

// 读取JSON文件
function readJsonFile(filePath, callback) {
  const _mockFilePath = filePath + '.json';
  fs.readFile(_mockFilePath, 'utf8', (err, data) => {
    if (!err) {
      console.log('成功Json', _mockFilePath);
      callback(JSON.stringify(JSON.parse(data), null, 2), 'json');
    } else {
      console.log('失败Json', _mockFilePath);
      callback(
        JSON.stringify({
          Status: false,
          feMockTips: '失败Json' + _mockFilePath
        }),
        'json'
      );
    }
  });
}

// 读取JS文件
function readJsFile(filePath, callback) {
  const _mockFilePath = '../.' + filePath + '.js';
  try {
    // 删除require的缓存
    delete require.cache[require.resolve(_mockFilePath)];
    const nodeMockResponse = require(_mockFilePath);
    if (nodeMockResponse) {
      console.log('成功Js', _mockFilePath);
      callback(nodeMockResponse, 'js');
    } else {
      console.log('出错了Try', _mockFilePath);
      let _jsonObj = {Status: false, feMockTips: '出错了Try' + _mockFilePath};
      callback(_jsonObj, 'js');
    }
  } catch (e) {
    console.log('出错了Catch', _mockFilePath);
    let _jsonObj = {Status: false, feMockTips: '出错了Catch' + _mockFilePath};
    callback(_jsonObj, 'js');
  }
}

function readFile(filePath, callback, req) {
  let sleep = req.query.mockS || 100;
  setTimeout(() => {
    fs.access(filePath + '.js', err => {
      if (err) {
        readJsonFile(filePath, callback)
      } else {
        readJsFile(filePath, callback)
      }
    })
  }, sleep)
}

module.exports = function (app) {
  app.use('*/fe-api-local', (req, res) => {
    const apiPath = req.originalUrl.split('?')[0].replace('/fe-api-local/', '');
    const filePath = './mock/' + apiPath + '/index';
    readFile(filePath, (fileContent, fileType) => {
      res.setHeader('Content-Type', 'application/json');
      fileType === 'js' ? res.send(fileContent) : res.write(fileContent);
      res.end();
    }, req);
  });
};
