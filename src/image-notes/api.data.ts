// api.data.ts
// a file ending with data.(j|t)s will be evaluated in Node.js
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
    let result: any[] = [];
    let imgList: any[] = [];
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
    return result
  }
}
