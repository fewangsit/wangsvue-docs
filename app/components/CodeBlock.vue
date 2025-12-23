<script setup lang="ts">
interface Props {
  code: string
  language?: string
  filename?: string
  showLineNumbers?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  language: 'javascript',
  showLineNumbers: false
})

const { highlightCode } = useSyntaxHighlight()

const highlightedCode = computed(() => {
  return highlightCode(props.code, props.language)
})
</script>

<template>
  <div class="relative group">
    <!-- Code block -->
    <div class="relative">
      <pre
        ref="codeRef"
        :class="[
          'language-' + language,
          'bg-gray-50 dark:bg-gray-900 p-4 overflow-x-auto text-sm',
          filename ? 'rounded-b-lg' : 'rounded-lg',
          showLineNumbers ? 'line-numbers' : ''
        ]"
      ><!-- eslint-disable-next-line vue/no-v-html --><code
        :class="'language-' + language"
        v-html="highlightedCode"
      /></pre>

      <slot name="toolbar" />
    </div>
  </div>
</template>

<style scoped>
/* Line numbers support */
.line-numbers {
  counter-reset: linenumber;
}

.line-numbers code {
  counter-increment: linenumber;
}

.line-numbers code::before {
  content: counter(linenumber);
  position: absolute;
  left: 0;
  width: 3em;
  text-align: right;
  color: #999;
  border-right: 1px solid #ddd;
  padding-right: 0.5em;
  margin-right: 1em;
}
</style>
