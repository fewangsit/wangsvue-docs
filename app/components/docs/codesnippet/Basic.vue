<script setup lang="ts">
import { CodeSnippet } from '@fewangsit/wangsvue';

const jsonCode = `{
  "name": "WangsVue",
  "version": "1.0.0",
  "description": "Vue component library",
  "main": "index.js",
  "dependencies": {
    "vue": "^3.0.0",
    "typescript": "^5.0.0"
  }
}`;
</script>

<template>
  <CodeSnippet :code="jsonCode" lang="json" />
</template>
