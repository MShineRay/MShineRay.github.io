// api.data.ts
// a file ending with data.(j|t)s will be evaluated in Node.js
import wereadJSON from './weread/list.json'
import zhiqunList from './zhiqun/list.js'

export interface APIGroup {
  text: string
  items: {
    text: string
    link: string
  }[]
}

// declare resolved data type
export declare const data: APIGroup[]

export default {
  // declare files that should trigger HMR
  watch: './*.md',
  // read from fs and generate the data
  load(): APIGroup[] {
    let result: any[] = []
    let imgList: any[] = []
    wereadJSON.map((group) => {
      imgList.push({
        text: group.bookName,
        link: '/read-notes' + group.bookUrl
      })
    })
    result = result
      .concat([
        {
          text: '读书',
          type: '/read-notes/weread/',
          items: imgList
        }
      ])
      .concat([
        {
          text: '知群',
          items: zhiqunList
        }
      ])
    return result
  }
}
