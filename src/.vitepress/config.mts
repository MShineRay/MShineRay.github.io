import { defineConfig } from 'vitepress'
import {wxSideBarList} from '../read-notes/weread/list.js'
import {frontEndList} from  '../work-notes/front-end/list.js'
import zhiqunReadNotes from '../read-notes/zhiqun/list.js'
// import zhiQunImgList from '../image-notes/zhiqun/list'
// @ts-ignore
import fs from 'fs'
// @ts-ignore
import path from 'path'
const nav = [
  {
    text: 'Space',
    activeMatch: `^/(image-notes|www-notes|read-notes|guide|style-guide|cookbook|examples)/`,
    items: [
      { text: 'Read Notes', link: '/read-notes/' },
      { text: 'Image Notes', link: '/image-notes/' },
      { text: 'WWW Notes', link: '/www-notes/' },
      { text: 'fecli', link: 'https://www.npmjs.com/package/@a0znpm/fecli' },
      { text: 'Work Notes', link: '/work-notes/' }
    ]
  },
  // {
  //   text: 'Vue',
  //   items: [
  //     { text: 'Playground', link: 'https://sfc.vuejs.org'},
  //     { text: 'API', link: 'https://vuejs.org/api/'},
  //     { text: 'introduction', link: 'https://vuejs.org/guide/introduction' },
  //     { text: 'tutorial', link: 'https://vuejs.org/tutorial/' },
  //     { text: 'examples', link: 'https://vuejs.org/examples/' },
  //     { text: 'Quick Start', link: 'https://vuejs.org/guide/quick-start' },
  //     { text: 'Style Guide', link: 'https://vuejs.org/style-guide/' },
  //     // {text: 'Migration from Vue 2', link: 'https://v3-migration.vuejs.org/'}
  //   ]
  // }
]

// TODO 抽取左侧菜单
const sidebar = {
  '/read-notes/': [
    {
      text: 'Read Notes',
      collapsed: false,
      items: [
        {
          text: 'Book List', link: '/read-notes/'
        }
      ].concat(wxSideBarList)
    },
    {
      text: '知群',
      collapsed: false,
      items: zhiqunReadNotes
    },
    {
      text: '链接',
      collapsed: false,
      items: [
        { text: 'Image Notes', link: '/image-notes/'},
        { text: 'WWW Notes', link: '/www-notes/'},
        { text: 'Work Notes', link: '/work-notes/'},
      ]
    }
  ],
  '/image-notes/': [
    {
      text: '知群',
      items: [
        { text: 'Image List', link: '/image-notes/',},
      ]
    },
    // { // TODO: 如何实现动态加载？
    //   text: '知群',
    //   items: zhiQunImgList
    // },
    {
      text: '链接',
      items: [
        { text: 'Read Notes', link: '/read-notes/' },
        { text: 'WWW Notes', link: '/www-notes/'},
        { text: 'Work Notes', link: '/work-notes/'},
      ]
    }
  ],
  '/work-notes/': [
    {
      text: 'Work Notes',
      items: [
        // { text: '工作笔记', link: '/work-notes/',},
        { text: 'AIGC', link: '/work-notes/aigc/',},
        { text: 'charles', link: '/work-notes/charles/',},
        { text: 'Quick App', link: '/work-notes/quick-app/',},
        { text: 'rich text', link: '/work-notes/rich-text/',},
        { text: 'svelte', link: '/work-notes/svelte/',},
        { text: 'web3', link: '/work-notes/web3/',},
      ].concat(frontEndList)
    },
    {
      text: '链接',
      items: [
        { text: 'Read Notes', link: '/read-notes/' },
        { text: 'WWW Notes', link: '/www-notes/'},
        { text: 'Image Notes', link: '/image-notes/'},
      ]
    }
  ],
  '/www-notes/': [
    {
      text: 'WWW Notes',
      items: [
        { text: 'www list', link: '/www-notes/',},
      ]
    },
    {
      text: '链接',
      items: [
        { text: 'Read Notes', link: '/read-notes/' },
        { text: 'Work Notes', link: '/work-notes/'},
        { text: 'Image Notes', link: '/image-notes/'},
      ]
    }
  ]

}

// https://vitepress.dev/reference/site-config
// @ts-ignore
// @ts-ignore
export default defineConfig({
  lang: 'en-US',
  title: 'ToBetter',
  description: 'For better, do better',
  scrollOffset: 'header',
  head: [
    [
      'link',
      {
        href: '/css/variables.css',
        rel: 'stylesheet',
        type:'text/css'
      }
    ],
    [
      'link',
      {
        href: '/css/readnotes.css',
        rel: 'stylesheet',
        type:'text/css'
      }
    ],
    [
      'link',
      {
        href: '/css/weread.css',
        rel: 'stylesheet',
        type:'text/css'
      }
    ],
    [
      'link',
      {
        href: '/favicon.ico',
        rel: 'icon'
      }
    ],
    [
      'meta',
      {
        name: 'app-build-time',
        value: ''+new Date().getTime()
      }
    ],
    [
      'script',
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=G-R31NB6KKBC',
        async: "async"
      }
    ],
    [
      'link',
      {
        href: '//cdn.bootcss.com/gitalk/1.5.0/gitalk.min.css',
        rel: "stylesheet"
      }
    ],
    [
      'script',
      {
        src: '//cdn.bootcss.com/gitalk/1.7.2/gitalk.min.js',
      }
    ],
    [
      'script',
      {},
      fs.readFileSync(
        path.resolve(__dirname, './inlined-scripts/gtag_event.js'),
        'utf-8'
      )
    ],
    [
      'script',
      {},
      fs.readFileSync(
        path.resolve(__dirname, './inlined-scripts/gitalk.js'),
        'utf-8'
      )
    ],
    // [
    //   'script',
    //   {
    //     src: '/scripts/felogsdk.iife.min.js',
    //   }
    // ],
    // [
    //   'script',
    //   {
    //     src: '/scripts/felogsdk.init.js',
    //   }
    // ],
  ],
  appearance: false, // 屏蔽深色模式

  themeConfig: {
    logo: '/img/logo-share-dark.svg',
    logoDark: '/img/logo-share.svg',
    logoText: 'ToBetter',
    search: {
      provider: 'local'
    },
    // algolia: {
    //   indexName: 'search',
    //   appId: '0E4UM292MA',
    //   apiKey: '1d5e30f5de7b1b9655cbd8fd89088ca1'
    // },

    // https://vitepress.dev/reference/default-theme-config
    nav,
    sidebar,

    editLink: {
      pattern: 'https://github.com/MShineRay/MShineRay.github.io/edit/main/src/:path',
      text: 'Edit this page on GitHub'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/mshineray/' },
    ],

    footer: {
      copyright: `Copyright © 2022-now MShineRay`
    },
  },
  license: {
    text: 'MIT License',
    link: 'https://opensource.org/licenses/MIT'
  },
  // srcDir: './src',
  // assetsDir: './docs',
  // outDir: '../docs',
})
