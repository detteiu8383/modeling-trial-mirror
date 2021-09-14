import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'ja',
  title: 'モデリング体験会',
  description: '東京工業大学デジタル創作同好会主催のモデリング体験会の資料です',

  themeConfig: {
    navbar: [
      {
        text: 'はじめに',
        link: '/'
      },
      {
        text: '座学編',
        link: '/lectures/'
      },
      {
        text: '実習編',
        link: '/practical/'
      },
    ]
  }
})