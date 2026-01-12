<script setup lang="ts">
import { Editor } from '@fewangsit/wangsvue';
import type { JSONContent } from '@fewangsit/wangsvue/editor';
import { ref } from 'vue';

const content = ref<JSONContent>();
</script>

<template>
  <Editor
    v-model="content"
    label="Article Content"
    placeholder="Start writing your article here... Use the toolbar to format your text."
  />
</template>
