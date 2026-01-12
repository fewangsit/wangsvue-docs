import { Focus, ToastService, Tooltip, WangsVue } from '@fewangsit/wangsvue';
import preset from '@fewangsit/wangsvue-presets/wangsvue';

export default defineNuxtPlugin((nuxtApp): void => {
  nuxtApp.vueApp.use(WangsVue, { preset });
  nuxtApp.vueApp.use(ToastService);
  nuxtApp.vueApp.directive('Tooltip', Tooltip);
  nuxtApp.vueApp.directive('focus', Focus);
});
