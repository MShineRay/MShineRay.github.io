import list from './list.json'

const wxSideBarAry = []
for (let i=0,len=list.length; i<len; i++){
  let item = list[i]
  wxSideBarAry.push({
    text: item.name,
    link: item.url,
    items: item.items || []
  })
}
export const frontEndList = wxSideBarAry
