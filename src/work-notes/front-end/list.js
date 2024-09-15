import list from './list.json'

const wxSideBarAry = []
for (let i=0,len=list.length; i<len; i++){
  let item = list[i]
  wxSideBarAry.push({
    text: item.bookName,
    link: item.bookUrl
  })
}
export const frontEndList = wxSideBarAry
