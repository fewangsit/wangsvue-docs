// @ts-check
import vue from '@fewangsit/eslint-config-vue-code-standard';

export default [
  {
    ignores: [
      '**/dist/**',
      '**/node_modules/**',
      '.nuxt/**',
      '.output/**',
      './scripts/**',
    ],
  },
  ...vue,
  {
    files: ['app/components/CodeBlock.vue', 'app/components/InlineCode.vue'],
    rules: {
      'vue/no-v-html': 'off',
    },
  },
  {
    files: ['*.config.ts'],
    rules: {
      'func-style': 'off',
    },
  },
  {
    rules: {
      'no-console': 'off',
      'no-undef': 'off',
    },
  },
];
