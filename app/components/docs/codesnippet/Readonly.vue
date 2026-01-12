<script setup lang="ts">
import { CodeSnippet } from '@fewangsit/wangsvue';

const readonlyCode = `const config = {
  apiUrl: 'https://api.example.com',
  timeout: 5000,
  retries: 3,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer token'
  }
};

// This code is read-only and cannot be modified
export default config;`;
</script>

<template>
  <CodeSnippet :code="readonlyCode" lang="javascript" readonly />
</template>
