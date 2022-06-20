const getBase = require('../../src/vitepress/config/baseConfig')
const path = require('path')

const nav = [
  {
    text: 'Space',
    activeMatch: `^/(mock|log)/`,
    items: [
      { text: 'Log', link: '/log/' },
      { text: 'Link', link: '/link/'},
      { text: 'Mock', link: '/mock/' },
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

  '/mock/': [
    {
      text: 'Mock List',
      items: [
        { text: 'Mock列表', link: '/mock/',},
      ]
    },
    {
      text: '链接',
      items: [
        { text: 'Log', link: '/log/' },
        { text: 'Link', link: '/link/'},
      ]
    }
  ],
  '/log/': [
    {
      text: 'Log',
      items: [
        { text: 'Log list', link: '/log/',},
      ]
    },
    {
      text: '链接',
      items: [
        { text: 'Mock', link: '/mock/' },
        { text: 'Link', link: '/link/'},
      ]
    }
  ],
  '/link/': [
    {
      text: 'Link',
      items: [
        { text: 'Link list', link: '/link/',},
      ]
    },
    {
      text: '链接',
      items: [
        { text: 'Mock', link: '/mock/' },
        { text: 'Log', link: '/Log/'},
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
    title: 'Fe',
    description: 'FE',
    scrollOffset: 'header',
    head: [
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
    ],

    themeConfig: {
      logo: '/img/logo-share-dark.svg',
      logoDark: '/img/logo-share.svg',
      logoText: 'FE',
      socialLinks: [
        { icon: 'github', link: 'https://xxx' },
      ],

      nav,
      sidebar,
      footer: {
        license: {
          text: 'MIT License',
          link: 'https://opensource.org/licenses/MIT'
        },
        copyright: `Copyright © 2022-now FE`
      }
    }
  }
})()
