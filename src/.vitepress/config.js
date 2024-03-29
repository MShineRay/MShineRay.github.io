const getBase = require('../../src/vitepress/config/baseConfig')
import fs from 'fs'
const path = require('path')
import {wxSideBarList} from '../read-notes/weread/list'
import zhiqunReadNotes from '../read-notes/zhiqun/list'
// import zhiQunImgList from '../image-notes/zhiqun/list'

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
      items: [
        {
          text: 'Book List', link: '/read-notes/'
        }
      ].concat(wxSideBarList)
    },
    {
      text: '知群',
      items: zhiqunReadNotes
    },
    {
      text: '链接',
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
        { text: '工作台', link: '/work-notes/',},
      ]
    },
    {
      text: '埋点',
      items: [
        { text: 'Log List', link: '/work-notes/log',},
      ]
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

module.exports = (async () => {
  const base = await getBase()
  return {
    ...base,

    vite: {
      ...base.vite,
      build: {
        minify: false
      },
      resolve: {
        alias: {
          '@vue/theme': path.join(__dirname, '../../src')
        }
      }
    },

    lang: 'en-US',
    title: 'ToBetter',
    description: 'to do better for better',
    scrollOffset: 'header',
    head: [
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
          value: new Date().getTime()
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
          async: "async"
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
      [
        'script',
        {
          src: '/scripts/felogsdk.iife.min.js',
        }
      ],
      [
        'script',
        {
          src: '/scripts/felogsdk.init.js',
        }
      ],
    ],

    themeConfig: {
      logo: '/img/logo-share-dark.svg',
      logoDark: '/img/logo-share.svg',
      logoText: 'ToBetter',
      // algolia: {
      //   indexName: 'pro_github',
      //   appId: 'TH7FJEUQK2',
      //   apiKey: 'd39b6ce586dd2d44bab6ec298b57783d'
      // },

      // carbonAds: {
      //   code: 'CEBDT27Y',
      //   placement: 'vuejsorg'
      // },

      socialLinks: [
        { icon: 'github', link: 'https://github.com/mshineray/' },
      ],

      nav,
      sidebar,
      editLink: { // TODO repo不支持替换，解决方式：基于@vue/theme 新搭建主题
        repo: 'MShineRay/MShineRay.github.io',
        text: 'Edit this page on GitHub'
      },

      footer: {
        license: {
          text: 'MIT License',
          link: 'https://opensource.org/licenses/MIT'
        },
        copyright: `Copyright © 2022-now MShineRay`
      },
      appearance: false // 屏蔽黑白主题切换
    }
  }
})()
