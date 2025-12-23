// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here
  {
    files: ['app/components/CodeBlock.vue', 'app/components/InlineCode.vue'],
    rules: {
      'vue/no-v-html': 'off'
    }
  }
)
