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
          text: 'Welcome to the rich text editor! You can format text, add links, and more.'
        }
      ]
    }
  ]
})
</script>

<template>
  <Editor
    v-model="content"
    label="Content"
  />
</template>
