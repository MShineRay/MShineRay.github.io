// api.data.ts
// a file ending with data.(j|t)s will be evaluated in Node.js
import wwwJSON from './list.json'

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
  // read from fs and generate the data
  load(): APIGroup[] {
    // let result: any[] = []
    // let imgList: any[] = []
    // wereadJSON.map((group) => {
    //   imgList.push({
    //     text: group.bookName,
    //     link: '/read-notes' + group.bookUrl
    //   })
    // })
    // result = result
    //   .concat([
    //     {
    //       text: '前端',
    //       items: imgList
    //     }
    //   ])
    return wwwJSON
  }
}
