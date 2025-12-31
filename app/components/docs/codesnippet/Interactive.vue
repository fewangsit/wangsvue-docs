<script setup lang="ts">
import { ref } from 'vue'
import { CodeSnippet } from '@fewangsit/wangsvue'

const editableCode = ref(`function calculateSum(a, b) {
  return a + b;
}

// Try editing this code
const result = calculateSum(5, 3);
console.log('Result:', result);`)
</script>

<template>
  <div class="space-y-4">
    <CodeSnippet
      v-model:code="editableCode"
      lang="javascript"
      placeholder="Write your JavaScript code here..."
    />

    <div class="p-3 bg-gray-50 rounded text-sm">
      <strong>Interactive Mode:</strong> You can edit the code above and see your changes in real-time.
    </div>
  </div>
</template>
