// api.data.ts
// a file ending with data.(j|t)s will be evaluated in Node.js
import wereadJSON from './log/list.json'

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
    return result
  }
}
