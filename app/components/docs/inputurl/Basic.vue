<script setup lang="ts">
import { ref } from 'vue'
import { InputURL } from '@fewangsit/wangsvue'

const value = ref('')
</script>

<template>
  <div class="flex flex-col gap-4">
    <InputURL
      v-model="value"
      label="Website URL"
      placeholder="Enter website URL"
    />
    <p class="text-sm text-gray-600">
      Value: {{ value || 'Empty' }}
    </p>
  </div>
</template>
