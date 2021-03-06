import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import { path } from '@vuepress/utils'

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'ja',
  title: 'traP 3DCG体験会',
  description: '東京工業大学デジタル創作同好会traPが主催する、新入生向け3DCG体験会の資料ページです。座学編で3DCGについて俯瞰的に学び、実習編で簡単なアニメーションを作成します。',
  // base: '/modeling-trial/',
  head: [['link', { rel: 'icon', href: '/images/logo/3dcg_logo.ico' }]],

  clientAppEnhanceFiles: path.resolve(__dirname, './clientAppEnhance.ts'),

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
          children: ['/practical/README.md', '/practical/basic_operation.md', '/practical/model_creation.md', '/practical/animation.md', '/practical/rendering.md', '/practical/how_to_study.md',]
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
      path.resolve(__dirname, './local-plugins/vuepress-plugin-junbichu/lib/index.ts'),
      {}
    ],
    [
      '@vuepress/register-components',
      {
        components: {
          blenderVersion: path.resolve(__dirname, './components/blenderVersion.vue'),
        },
      },
    ],
    [
      path.resolve(__dirname, './local-plugins/vuepress-plugin-seo-v2/lib/index.ts'),
      {
        title: (page, site) => page.data.title && site.title ? page.data.title + " | " + site.title : site.title || '',
        url: (page, site) => 'https://3d-trial-2022.trap.games' + page.path,
        image: () => 'https://3d-trial-2022.trap.games/images/card.png'
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