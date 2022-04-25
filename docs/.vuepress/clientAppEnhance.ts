import { defineClientAppEnhance } from '@vuepress/client'
import YouTube from 'vue3-youtube'
import Tweet from "vue-tweet";

export default defineClientAppEnhance(({ app }) => {
  // set global components
  app.component('YouTube', YouTube)
  app.component('Tweet', Tweet)
})