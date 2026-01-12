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
          text: 'This editor has no border for seamless integration into custom layouts.',
        },
      ],
    },
  ],
});
</script>

<template>
  <Editor v-model="content" borderless label="Borderless Editor" />
</template>
