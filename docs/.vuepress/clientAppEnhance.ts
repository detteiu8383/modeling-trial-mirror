import { defineClientAppEnhance } from '@vuepress/client'
import Tweet from "vue-tweet";

export default defineClientAppEnhance(({ app }) => {
  // set global components
  app.component('Tweet', Tweet)
})