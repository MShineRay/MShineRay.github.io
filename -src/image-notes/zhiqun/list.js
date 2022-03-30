import list from './index.json'

const wxSideBarAry = []
for (let i=0,len=list.length; i<len; i++){
  let title = list[i].pageName
  let imgList = list[i].imgList
  wxSideBarAry.push({
    text: title,
    link: `/image-notes/image.html?title=${title}&imgList=${JSON.stringify(imgList)}`
  })
}
export default wxSideBarAry
