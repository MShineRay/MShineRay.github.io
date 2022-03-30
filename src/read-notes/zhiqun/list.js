import list from './list.json'

const ary = []
for (let i=0,len=list.length; i<len; i++){
  let item = list[i]
  ary.push({
    text: item.name,
    link: '/read-notes/zhiqun/'+item.url
  })
}
export default ary
