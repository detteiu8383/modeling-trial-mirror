import type { Plugin, PluginObject, Page, App } from '@vuepress/core'

const seoPlugin: Plugin = (options, app): PluginObject => {
    const pluginObj: PluginObject = {
        name: 'vuepress-junbichu',
        multiple: false,
    }

    pluginObj.extendsPage = (page: Page) => {
        if (app.env.isDev) { return }
        if (page.frontmatter.junbichu) {
            page.contentRendered = `<h1 id="このページは現在準備中です" tabindex="-1">このページは現在準備中です</h1><p>このページは現在準備中です👷</p><p>公開をお待ちください🙏</p>`
            console.log(`\x1b[35m[${pluginObj.name}]\x1b[0m set junbichu: ${page.path}`)
        }
    }
    return pluginObj
}

export default seoPlugin