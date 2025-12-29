import { Focus, Tooltip, WangsVue, ToastService } from '@fewangsit/wangsvue'
import preset from '@fewangsit/wangsvue-presets/wangsvue'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(WangsVue, { preset })
  nuxtApp.vueApp.use(ToastService)
  nuxtApp.vueApp.directive('Tooltip', Tooltip)
  nuxtApp.vueApp.directive('focus', Focus)
})
