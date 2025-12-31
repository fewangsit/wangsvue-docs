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
          text: 'This editor has no border for seamless integration into custom layouts.'
        }
      ]
    }
  ]
})
</script>

<template>
  <Editor
    v-model="content"
    label="Borderless Editor"
    :borderless="true"
  />
</template>
