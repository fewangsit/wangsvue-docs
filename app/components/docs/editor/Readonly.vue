<script setup lang="ts">
import { Editor } from '@fewangsit/wangsvue';
import type { JSONContent } from '@fewangsit/wangsvue/editor';
import { ref } from 'vue';

const content = ref<JSONContent>({
  type: 'doc',
  content: [
    {
      type: 'heading',
      attrs: { level: 2 },
      content: [
        {
          type: 'text',
          text: 'Sample Document',
        },
      ],
    },
    {
      type: 'paragraph',
      content: [
        {
          type: 'text',
          text: 'This is a ',
        },
        {
          type: 'text',
          marks: [{ type: 'bold' }],
          text: 'readonly editor',
        },
        {
          type: 'text',
          text: ' displaying formatted content. The content cannot be edited but maintains all formatting.',
        },
      ],
    },
    {
      type: 'bulletList',
      content: [
        {
          type: 'listItem',
          content: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'Bullet point one',
                },
              ],
            },
          ],
        },
        {
          type: 'listItem',
          content: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'Bullet point two',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});
</script>

<template>
  <Editor v-model="content" editor-state="readonly" label="Document Preview" />
</template>
