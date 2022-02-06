import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import { path } from '@vuepress/utils'

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'ja',
  title: 'traP 3DCG体験会',
  description: '新入生向け 東京工業大学デジタル創作同好会traP 3DCG体験会',
  base: '/modeling-trial/',
  head: [['link', { rel: 'icon', href: '/modeling-trial/images/logo/3dcg_logo.ico' }]],

  extendsMarkdown: md => {
    md.use(require("markdown-it-footnote"));
  },

  themeConfig: {
    navbar: [
      {
        text: 'はじめに',
        link: '/guide/'
      },
      {
        text: '座学編',
        link: '/lectures/'
      },
      {
        text: '実習編',
        link: '/practical/'
      },
    ],
    sidebar: {
      '/guide/': [
        {
          text: "はじめに",
          children: ['/guide/README.md', '/guide/notes.md', '/guide/preparation.md', '/guide/blender-installation.md']
        }
      ],
      '/lectures/': [
        {
          text: '座学編',
          children: ['/lectures/README.md', '/lectures/what-can.md', '/lectures/how-to.md', '/lectures/what-used.md']
        }
      ],
      '/practical/': [
        {
          text: '実習編',
          children: ['/practical/README.md', '/practical/basic_operation.md', '/practical/model_creation.md', '/practical/rendering.md',]
        }
      ],
    },
    logo: '/images/logo/3dcg_logo.svg',
  },
  plugins: [
    [
      '@vuepress/container',
      {
        type: 'training',
        locales: {
          '/': {
            defaultInfo: '実習'
          }
        }
      }
    ],
    [
      '@vuepress/register-components',
      {
        components: {
          tweet: path.resolve(__dirname, './components/tweet.vue'),
          blenderVersion: path.resolve(__dirname, './components/blenderVersion.vue'),
        },
      },
    ],
    [
      path.resolve(__dirname, './local-plugins/vuepress-plugin-seo-v2/index.js'),
      {
        title: ($page: { title: string; }, $site: { title: string; }) => $page.title + " | " + $site.title,
        description: ($page: { excerpt: string; }) => $page.excerpt ? $page.excerpt.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '').replace(/\n/g, ' ') : '東京工業大学デジタル創作同好会traP 新入生向け3DCG体験会',
        url: ($page: { path: string; }) => 'https://d_etteiu8383.trap.show/modeling-trial' + $page.path,
        image: (_: any) => 'https://d_etteiu8383.trap.show/modeling-trial/images/logo/card.png'
      }
    ],
    [
      '@vuepress/plugin-google-analytics',
      {
        id: 'G-XLCK2L39NG',
      },
    ],
  ]
})