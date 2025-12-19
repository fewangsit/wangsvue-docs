/**
 * Component Demo Registry
 *
 * Maps demo component paths to their dynamic import functions.
 * This registry is used by ComponentDemo.vue to load demo components dynamically.
 */

export const componentRegistry: Record<string, () => Promise<{ default: Component }>> = {
  // Button components
  'button/Basic': () => import('./button/Basic.vue'),
  'button/Severity': () => import('./button/Severity.vue'),
  'button/Size': () => import('./button/Size.vue'),
  'button/Icon': () => import('./button/Icon.vue'),
  'button/IconOnly': () => import('./button/IconOnly.vue'),
  'button/Badge': () => import('./button/Badge.vue'),
  'button/Tooltip': () => import('./button/Tooltip.vue'),
  'button/Loading': () => import('./button/Loading.vue'),
  'button/Raised': () => import('./button/Raised.vue'),
  'button/Text': () => import('./button/Text.vue'),
  'button/Outlined': () => import('./button/Outlined.vue'),
  'button/Template': () => import('./button/Template.vue'),

  // Icon components
  'icon/Basic': () => import('./icon/Basic.vue'),
  'icon/Severity': () => import('./icon/Severity.vue'),
  'icon/Tooltip': () => import('./icon/Tooltip.vue'),
  'icon/Gallery': () => import('./icon/Gallery.vue')
}
