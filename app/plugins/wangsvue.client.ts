import { Focus, Tooltip, WangsVue } from '@fewangsit/wangsvue'
import preset from '@fewangsit/wangsvue-presets/wangsvue'

export default defineNuxtPlugin((nuxtApp: unknown) => {
  nuxtApp.vueApp.use(WangsVue, { preset })
  nuxtApp.vueApp.directive('Tooltip', Tooltip)
  nuxtApp.vueApp.directive('focus', Focus)
})
