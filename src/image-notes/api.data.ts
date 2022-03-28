// api.data.ts
// a file ending with data.(j|t)s will be evaluated in Node.js
import fs from 'fs'
import path from 'path'
import zhiqunJSON from './zhiqun/index.json'

export interface APIGroup {
  text: string
  items: {
    text: string
    link: string,
    imgList: {}[],
    headers: string[]
  }[]
}

// declare resolved data type
export declare const data: APIGroup[]

export default {
  // declare files that should trigger HMR
  watch: './*.md',
  // read from fs and generate the data
  load(): APIGroup[] {
    let result = []
    let imgList = []
    zhiqunJSON.map((group) => {
      imgList.push({
        text: group.pageName,
        link: '/image-notes/image',
        imgList: JSON.stringify(
          group.imgList.map((item) => ({
            name: item.name,
            url: '/image-notes/zhiqun' + item.url
          }))
        ),
        headers: group.imgList.map((item) => {
          return item.name
        })
      })
    })
    result = result.concat(
      [
        {
          text: '知群',
          type: '/image-notes/zhiqun/',
          items: imgList
        }
      ]
    )
    console.log(JSON.stringify(result))
    return result
  }
}

const headersCache = new Map<string,
  {
    headers: string[]
    timestamp: number
  }>()

function parsePageHeaders(link: string) {
  const fullPath = path.join(__dirname, '../', link) + '.md'
  const timestamp = fs.statSync(fullPath).mtimeMs

  const cached = headersCache.get(fullPath)
  if (cached && timestamp === cached.timestamp) {
    return cached.headers
  }

  const src = fs.readFileSync(fullPath, 'utf-8')
  const h2s = src.match(/^## [^\n]+/gm)
  let headers: string[] = []
  if (h2s) {
    headers = h2s.map((h) =>
      h
        .slice(2)
        .replace(/<sup class=.*/, '')
        .replace(/\\</g, '<')
        .replace(/`([^`]+)`/g, '$1')
        .trim()
    )
  }
  headersCache.set(fullPath, {
    timestamp,
    headers
  })
  return headers
}
