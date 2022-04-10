import type { Plugin, PluginObject, Page, SiteData, HeadTagEmpty } from '@vuepress/core'

export interface SeoPluginOptions {
    description?: (page: Page, site: SiteData) => string
    type?: (page: Page, site: SiteData) => string
    title?: (page: Page, site: SiteData) => string
    image?: (page: Page, site: SiteData) => string
    url?: (page: Page, site: SiteData) => string
    card?: (page: Page, site: SiteData) => string
}

const seoPlugin: Plugin<SeoPluginOptions> = (options, app): PluginObject => {
    const name = 'vuepress-plugin-seo'
    const multiple = false

    const defaultOptions: SeoPluginOptions = {
        description: (page, site) => page.frontmatter.description || site.description,
        type: (page, _) => (typeof page.frontmatter.type === "string" ? page.frontmatter.type : false) || "article",
        title: (page, site) => page.frontmatter.title || site.title,
        image: (page, _) => (typeof page.frontmatter.image === "string" ? page.frontmatter.image : false) || "",
        url: (page, site) => page.path,
        card: () => "summary_large_image",
    }

    const resolveOptions = Object.assign({}, defaultOptions, options)

    /**
     *  @see https://v2.vuepress.vuejs.org/reference/plugin-api.html#extendspage
     */
    const extendsPage = (page: Page) => {
        const defaultHead = page.frontmatter.head || []

        const addHead = (tagName: HeadTagEmpty, attrName: string, attrValue: string, content: string | boolean) => {
            // skip if content is empty
            if (content === "") return

            if (!page.frontmatter.head) {
                page.frontmatter.head = []
            }
            // skip tags with the same element 
            const isExist = defaultHead.findIndex(h => h[1][attrName] === attrValue) !== -1
            if (!isExist) {
                // [tagName, { attrName: attrValue }, innerHTML?] => <${tagname} ${attrName}="${attrValue}">${innerHTML}</${tagname}>
                page.frontmatter.head.push([tagName, { [attrName]: attrValue, "content": content }])
            }
        }

        addHead("meta", "name", "description", resolveOptions.description(page, app.siteData))

        addHead("meta", "property", "og:type", resolveOptions.type(page, app.siteData))
        addHead("meta", "property", "og:url", resolveOptions.url(page, app.siteData))
        addHead("meta", "property", "og:title", resolveOptions.title(page, app.siteData))
        addHead("meta", "property", "og:description", resolveOptions.description(page, app.siteData))
        addHead("meta", "property", "og:image", resolveOptions.image(page, app.siteData))

        addHead("meta", "property", "twitter:card", resolveOptions.card(page, app.siteData))
        addHead("meta", "property", "twitter:url", resolveOptions.url(page, app.siteData))
        addHead("meta", "property", "twitter:title", resolveOptions.title(page, app.siteData))
        addHead("meta", "property", "twitter:description", resolveOptions.description(page, app.siteData))
        addHead("meta", "property", "twitter:image", resolveOptions.image(page, app.siteData))

        console.log(`\x1b[35m[${name}]\x1b[0m add seo tags to ${page.path}`)
    }

    return {
        name,
        multiple,
        extendsPage,
    }
}

export default seoPlugin