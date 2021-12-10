const fs = require('fs')
const path = require('path')
const cheerio = require('cheerio')
const pinyin = require('pinyin')
const wereadConfig = require('./weread.config.js')
function zhToPinyin(zh) {
  return pinyin(zh, {
    style: pinyin.STYLE_NORMAL,
  }).join('')
}
/**
 * 批量解析微信读书笔记html，并转换成对应的vue文件
 */
/**
 * 实现思路
 * 1、遍历src下的所有文件并解析,找到src/*.html, 解析其文件名，在当前目录找到其对应的子目录（资源文件）
 * 3、获取html内容（id为js_content)的内容，获取对应子目录（资源文件）下所有的图片
 * 4、将内容追加到html模版里，并写到dist下
 * 5、拷贝对应的资源文件至dist下
 * 6、clean 删除 src下已经处理过的源文件及其依赖的资源文件
 * @type {string}
 */
const filePath = wereadConfig.src //path.resolve(__dirname + '/data/');
const fileWhiteList = ['html', 'jpg']

/**
 * 根据文件路径获取文件后缀（文件类型）
 * @param filePath
 * @returns {string}
 */
function getFileExt(filePath) {
  //获取最后一个.的位置
  let index = filePath.lastIndexOf('.')
  //获取后缀
  return filePath.substr(index + 1)
}

// 递归创建目录 异步方法
// function mkdirs(dirname, callback) {
//   fs.exists(dirname, function (exists) {
//     if (exists) {
//       callback();
//     } else {
//       // console.log(path.dirname(dirname));
//       mkdirs(path.dirname(dirname), function () {
//         fs.mkdir(dirname, callback);
//         console.log('在' + path.dirname(dirname) + '目录创建好' + dirname  +'目录');
//       });
//     }
//   });
// }

/**
 * 递归创建目录 同步方法
 * @param dirname
 * @returns {boolean}
 */
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

/**
 * 递归删除文件夹及其下子目录
 * @param filePath
 * @param callback
 */
function rmdir(filePath, callback) {
  // 先判断当前filePath的类型(文件还是文件夹,如果是文件直接删除, 如果是文件夹, 去取当前文件夹下的内容, 拿到每一个递归)
  fs.stat(filePath, function (err, stat) {
    if (err) return console.log(err)
    if (stat.isFile()) {
      fs.unlink(filePath, callback)
    } else {
      fs.readdir(filePath, function (err, data) {
        if (err) return console.log(err)
        let dirs = data.map(dir => path.join(filePath, dir))
        let index = 0
        !(function next() {
          // 此处递归删除掉所有子文件 后删除当前 文件夹
          if (index === dirs.length) {
            fs.rmdir(filePath, callback)
          } else {
            rmdir(dirs[index++], next)
          }
        })()
      })
    }
  })
}

let bookList = []
/**
 *
 * @param fileOrDirPath {String} 文件或文件夹路径
 * @param fileDir {String} 文件或文件夹上级路径
 * @param filename
 * @param filePath
 * @param isDir
 * @param isFile
 * @param dirLevel
 * @param fileType
 */
async function parse(
  fileOrDirPath,
  {
    fileDir, //文件所在文件夹
    filename,
    filePath, //文件绝对路径
    isDir,
    isFile,
    dirLevel = 0,
    fileType,
  } = {}
) {
  if (fileOrDirPath) {
    let isDirDef = isDir // true || false 判断是不是文件夹
    let isFileDef = isFile // true || false 判断是不是文件夹

    if (!filePath) {
      let lstatSync = fs.lstatSync(fileOrDirPath)
      isDirDef = lstatSync.isDirectory()
      isFileDef = lstatSync.isFile()
    }

    if (isDirDef) {
      //根据文件路径读取文件，返回文件列表
      fs.readdir(fileOrDirPath, function (err, files) {
        if (err) {
          console.warn(err)
        } else {
          //遍历读取到的文件列表
          // console.log('files:', files)
          dirLevel++
          files.forEach(function (filename) {
            //获取当前文件的绝对路径
            const filePath = path.join(fileOrDirPath, filename)
            const stat = fs.lstatSync(filePath)
            const isDir = stat.isDirectory() // true || false 判断是不是文件夹
            const isFile = stat.isFile() // true || false 判断是不是文件夹
            //获取后缀
            const fileType = getFileExt(filePath)
            const encoding = 'utf-8'
            const fileInfo = {
              fileDir: fileOrDirPath,
              filename,
              filePath,
              isDir,
              isFile,
              dirLevel,
              fileType,
              encoding,
            }
            if (isDir || (isFile && (fileWhiteList.includes(fileType) || fileType === filePath))) {
              parse(filePath, fileInfo) //递归，如果是文件夹，就继续遍历该文件夹下面的文件
            }
          })
        }
      })
    } else if (isFileDef) {
      let fileList = filePath.split(wereadConfig.outRootDirName /*'data'*/)
      fileList.splice(0, 1)
      let fileDistDir = fileList.join(wereadConfig.outRootDirName /*'data'*/)
      // mkdirsSync(wereadConfig.outputDir/*'./dist'*/ + fileDistDir.split(filename)[0])
      console.log('filePath:' + filePath)
      console.log('fileDistDir:' + fileDistDir)
      console.log('fileType:' + fileType)
      let imgName = ''
      if (fileType === 'html' && dirLevel < 2) {
        let file = fs.readFileSync(filePath, 'utf8')
        let $ = cheerio.load(file)
        let imgUrl = $('.wr_bookCover_img').attr('src')
        console.log($('.wr_bookCover_img').attr('src'))
        imgName = imgUrl ? imgUrl.split('/').pop() : ''
        let js_content = $('.readerNoteList').html()
        if (!js_content) {
          return false
        }
        js_content = js_content.replace(/<!---->/g, '')
        let ary = fileDistDir.split('/')[1].split('.html')[0].split('-')
        let bookName = ary[0]
        let author = ary[1]
        console.log('bookName:' + bookName)
        console.log('author:' + author)
        let bookNamePinyin = zhToPinyin(bookName)
        bookNamePinyin = bookNamePinyin.replace(/：/g, '')
        let newVue = `<template>
  <div class="container">
  <h1 class="title">${bookName}</h1>
  <h5 class="author">${author}</h5>
  <img src="./img/${bookNamePinyin}/${imgName}" alt="written" class="written">
  <div class="wr_macOS wr_Desktop wr_page_reader wr_whiteTheme">
    ${js_content}
  </div>
<!--  <footer class="footer">-->
<!--    <img src="./img/${bookNamePinyin}/qr.png" alt="qr">-->
<!--    <p>扫码阅读本书</p>-->
<!--  </footer>-->
</div>
</template>
<script>
export default {
  name: '${bookNamePinyin}'
}
</script>
<style lang="scss" scoped>
@import '~@/assets/css/weread.css';
@import '~@/assets/scss/readnotes';
</style>`
        let vueFile = fileDistDir
          .replace('.html', '.vue')
          .replace('-微信读书', '')
          .replace('-' + author, '')
          .replace(/：/g, '')

        console.log('vueFile:' + vueFile)
        vueFile = zhToPinyin(vueFile)
        fs.writeFile(wereadConfig.outputDir /*'./dist'*/ + vueFile, newVue, 'utf8', function (err) {
          if (err) return console.log(err)
          bookList.push({
            bookImg: bookNamePinyin + '/written.jpg',
            author: author,
            bookName: bookName,
            bookUrl: '/read-notes/' + bookNamePinyin,
          })
        })
      } else {
        if (fileWhiteList.includes(fileType)) {
          let file = fs.readFileSync(filePath, 'binary')
          console.log('file:' + fileDistDir)
          let dirName = fileDistDir.split('/')[1]
          let imgFile = fileDistDir.replace(dirName, 'img')
          let bookName = dirName.split('-')[0]
          let bookNamePinyin = zhToPinyin(bookName)
          bookNamePinyin = bookNamePinyin.replace(/：/g, '')
          console.log('bookNamePinyin:' + bookNamePinyin)
          console.log('imgFile:' + imgFile)
          let imgName = imgFile.split('/').pop()
          // await mkdirsSync('./dist/img/'+ bookNamePinyin)
          console.log('imgName:' + imgName)
          await mkdirsSync(wereadConfig.outputDir + '/img/' + bookNamePinyin)
          try {
            //同步写入文件
            let fileSrc = wereadConfig.outputDir + '/img/' + bookNamePinyin + '/' + imgName
            console.log('fileSrc:' + fileSrc)
            fs.writeFileSync(fileSrc, file, 'binary')
          } catch (err) {
            console.error(err)
          }
        }
      }
    }
  }
}

mkdirsSync(wereadConfig.outputDir /*'./dist'*/)

rmdir(wereadConfig.outputDir + '/' /*'./dist/'*/, function () {
  console.log('dist删除成功')
  mkdirsSync(wereadConfig.outputDir + '/img' /*./dist/img*/)
  console.log('mkdirsSync ' + wereadConfig.outputDir + '/img success')

  console.log('parsing...')
  parse(filePath)

  setTimeout(function () {
    console.log('bookList:')
    console.log(bookList)
    // const oldBookList = require('./src/views/ReadNotes/bookList.json')
    // let file = `export default =
    // ${JSON.stringify(oldBookList.concat(bookList))}`
    // console.log(file)
    // const data = fs.writeFileSync(__dirname+'/src/views/ReadNotes/bookList.js', file, 'binary')
  }, 3000)
})
