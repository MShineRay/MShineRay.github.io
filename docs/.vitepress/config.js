const getBase = require('../../src/vitepress/config/baseConfig')
import fs from 'fs'
const path = require('path')
import {wxSideBarList} from '../read-notes/weread/list'

const nav = [
  {
    text: 'Space',
    activeMatch: `^/(image-notes|www-notes|read-notes|guide|style-guide|cookbook|examples)/`,
    items: [
      { text: 'Read Notes', link: '/read-notes/' },
      { text: 'Image Notes', link: '/image-notes/' },
      { text: 'WWW Notes', link: '/www-notes/' },
    ]
  },

  {
    text: 'Vue',
    items: [
      { text: 'Playground', link: 'https://sfc.vuejs.org'},
      { text: 'API', link: 'https://vuejs.org/api/'},
      { text: 'introduction', link: 'https://vuejs.org/guide/introduction' },
      { text: 'tutorial', link: 'https://vuejs.org/tutorial/' },
      { text: 'examples', link: 'https://vuejs.org/examples/' },
      { text: 'Quick Start', link: 'https://vuejs.org/guide/quick-start' },
      { text: 'Style Guide', link: 'https://vuejs.org/style-guide/' },
      // {text: 'Migration from Vue 2', link: 'https://v3-migration.vuejs.org/'}
    ]
  }
]
// TODO 抽取左侧菜单
const sidebar = {
  '/read-notes/': [
    {
      text: 'WXRead Notes',
      items: [
        {
          text: 'WXRead List', link: '/read-notes/'
        }
      ].concat(wxSideBarList)
    },
    {
      text: 'Point Notes',
      items: [
        { text: 'Point List', link: '/read-notes/point/',},
        { text: 'point xx', link: '/read-notes/point/xx',},
      ]
    }
  ],
  '/image-notes/': [
    {
      text: 'Image Notes',
      items: [
        { text: 'Image List', link: '/image-notes/',},
      ]
    },
    {
      text: '知群',
      items: [
        { text: 'Read Notes', link: '/read-notes/zhiqun/' },
        { text: 'Image Notes', link: '/guide/image-notes'}
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
    title: 'ShineRay',
    description: 'ShineRay',
    scrollOffset: 'header',
    head: [
      [
        'script',
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-R31NB6KKBC',
          // 'data-site': 'XNOLWPLB',
          // 'data-spa': 'auto',
          // defer: ''
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
    ],

    themeConfig: {
      logo: '/img/logo-vue.svg',
      logoDark: '/img/logo-vue-dark.svg',
      logoText: 'ShineRay',
      // algolia: {
      //   indexName: 'vuejs-v3',
      //   appId: 'BH4D9OD16A',
      //   apiKey: 'bc6e8acb44ed4179c30d0a45d6140d3f'
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
      }

    }
  }
})()