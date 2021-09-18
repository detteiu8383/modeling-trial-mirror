import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'ja',
  title: 'traP 3DCG体験会',
  description: '新入生向け 東京工業大学デジタル創作同好会traP 3DCG体験会',
  base: '/modeling-trial/',

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
          children: ['/guide/README.md', '/guide/notes.md', '/guide/blender-installation.md']
        }
      ],
      '/lectures/': [
        {
          text: '座学編',
          children: ['/lectures/README.md']
        }
      ],
      '/practical/': [
        {
          text: '座学編',
          children: ['/practical/README.md']
        }
      ],
    }
  }
})