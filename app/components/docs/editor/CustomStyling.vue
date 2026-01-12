<script setup lang="ts">
import { Editor } from '@fewangsit/wangsvue';
import type { JSONContent } from '@fewangsit/wangsvue/editor';
import { ref } from 'vue';

const content = ref<JSONContent>({
  type: 'doc',
  content: [
    {
      type: 'paragraph',
      content: [
        {
          type: 'text',
          text: 'This editor has custom styling applied to the wrapper, toolbar, and content areas.',
        },
      ],
    },
  ],
});
</script>

<template>
  <Editor
    v-model="content"
    content-wrapper-class="!min-h-32 !bg-purple-25"
    editor-wrapper-class="!border-2 !border-purple-300 !rounded-lg"
    label="Custom Styled Editor"
    placeholder="Editor with custom styling..."
    toolbar-wrapper-class="!bg-purple-50 !border-b-purple-200"
  />
</template>
