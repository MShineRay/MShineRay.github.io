import list from './list.json'

const wxSideBarAry = []
for (let i=0,len=list.length; i<len; i++){
  let item = list[i]
  wxSideBarAry.push({
    text: item.bookName,
    link: '/read-notes'+item.bookUrl
  })
}
export const wxSideBarList = wxSideBarAry
