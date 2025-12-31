<script setup lang="ts">
import { ref } from 'vue'
import { Editor } from '@fewangsit/wangsvue'
import type { JSONContent } from '@fewangsit/wangsvue/editor'

const content = ref<JSONContent>({
  type: 'doc',
  content: [
    {
      type: 'paragraph',
      content: [
        {
          type: 'text',
          text: 'This editor has custom styling applied to the wrapper, toolbar, and content areas.'
        }
      ]
    }
  ]
})
</script>

<template>
  <Editor
    v-model="content"
    label="Custom Styled Editor"
    placeholder="Editor with custom styling..."
    editor-wrapper-class="!border-2 !border-purple-300 !rounded-lg"
    toolbar-wrapper-class="!bg-purple-50 !border-b-purple-200"
    content-wrapper-class="!min-h-32 !bg-purple-25"
  />
</template>
