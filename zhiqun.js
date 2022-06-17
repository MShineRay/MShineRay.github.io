const fs = require('fs')
const path = require('path')
const filePath = path.resolve(__dirname + '/src/public/img/zhiqun/');
fs.readdir(filePath, function (err, data) {
  if (err) return console.log(err)
  let dataList = []
  for (let i=0,len=data.length; i<len; i++){
    let name = data[i].split('.')[0]
    dataList.push({
      "pageName": name,
      "imgList": [
        {
          "name": name,
          "url": "/img/zhiqun/"+data[i]
        }
      ]
    })
  }
  fs.writeFileSync(__dirname+'/src/image-notes/zhiqun/index.json', JSON.stringify(dataList,null, ' '), 'utf8')
})
