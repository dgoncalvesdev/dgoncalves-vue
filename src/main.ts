import { createApp } from "vue"
import { createPinia } from "pinia"

import App from "./App.vue"

import router from "./router"

import "@/style/normalize.css"
import "@/style/global.scss"

import * as customComponents from "@/lib/custom-components/index"
import { MotionPlugin } from "@vueuse/motion"

const app = createApp(App)
  .use(createPinia())
  .use(router)
  .use(MotionPlugin)

Object.entries(customComponents).forEach(([key, value]) => {
  app.component(key, value)
})

app.mount("#app")
