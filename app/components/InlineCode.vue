<script setup lang="ts">
interface Props {
  code: string
  language?: string
}

const props = withDefaults(defineProps<Props>(), {
  language: 'javascript'
})

const { highlightCode } = useSyntaxHighlight()

const highlightedCode = computed(() => {
  return highlightCode(props.code, props.language)
})
</script>

<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <code
    class="inline-block bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono"
    v-html="highlightedCode"
  />
</template>
