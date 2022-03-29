import fs from 'fs'
import path from 'path'
// @ts-ignore
import { defineConfigWithTheme } from 'vitepress'
// @ts-ignore
import type { Config as ThemeConfig } from '@a0znpm/theme-vue-base'
import baseConfig from '@a0znpm/theme-vue-base/config'
import { headerPlugin } from './headerMdPlugin'
import {wxSideBarList} from '../src/read-notes/weread/list'
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
export const sidebar = {
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
console.log(baseConfig)
export default defineConfigWithTheme<ThemeConfig>({
  // extends: baseConfig,
  lang: 'en-US',
  title: 'ShineRay',
  description: 'ShineRay',
  srcDir: 'src',
  srcExclude: ['tutorial/**/description.md'],
  scrollOffset: 'header',
  base: '/',
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
    nav,
    sidebar,

    // algolia: {
    //   indexName: 'vuejs',
    //   appId: 'ML0LEBN7FQ',
    //   apiKey: 'f49cbd92a74532cc55cfbffa5e5a7d01',
    //   searchParameters: {
    //     facetFilters: ['version:v3']
    //   }
    // },

    // carbonAds: {
    //   code: 'CEBDT27Y',
    //   placement: 'vuejsorg'
    // },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mshineray/' },
    ],

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
  },

  markdown: {
    config(md) {
      md.use(headerPlugin)
    }
  },

  vite: {
    define: {
      __VUE_OPTIONS_API__: false
    },
    optimizeDeps: {
      include: ['gsap', 'dynamics.js'],
      exclude: ['@vue/repl']
    },
    // @ts-ignore
    ssr: {
      external: ['@vue/repl']
    },
    server: {
      host: true,
      fs: {
        // for when developing with locally linked theme
        allow: ['../..']
      }
    },
    build: {
      minify: 'terser',
      chunkSizeWarningLimit: Infinity
    },
    json: {
      stringify: true
    }
  },

  vue: {
    reactivityTransform: true
  }
})
