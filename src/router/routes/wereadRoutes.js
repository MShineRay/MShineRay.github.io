const files = require.context('@/views/ReadNotes/weread', true, /\.vue$/)
let pages = {}
files.keys().forEach(key => {
  pages[key.replace(/(\.\/|\.vue)/g, '')] = files(key).default
})
let generator = []
Object.keys(pages).forEach(item => {
  generator.push({
    path: `/read-notes/${pages[item].name.replace(/-/g, '/')}`,
    name: pages[item].name,
    component: () => import('@/views/ReadNotes/weread/' + pages[item].name),
  })
})

export default [
  // {
  //   path: '/read-notes/pingjunfen',
  //   name: 'pingjunfen',
  //   component: () => import('@/views/ReadNotes/weread/pingjunfen'),
  // },
  // {
  //   path: '/read-notes/yongjiujilu',
  //   name: 'yongjiujilu',
  //   component: () => import('@/views/ReadNotes/weread/yongjiujilu'),
  // }
  ...generator,
]
