// api.data.ts
import fronEndJSON from './front-end/list.json'
const allJson = [/*...wereadJSON,*/ ...fronEndJSON]
export interface APIGroup {
  text: string
  items: {
    text: string
    link: string
  }[]
}

export declare const data: APIGroup[]

export default {
  watch: './*.md',
  load(): APIGroup[] {
    let result: any[] = []
    let imgList: any[] = []
    allJson.map((group) => {
      imgList.push({
        text: group.name,
        link: group.url
      })
    })
    return result
  }
}
