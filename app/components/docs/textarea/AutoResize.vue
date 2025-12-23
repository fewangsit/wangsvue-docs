<script setup lang="ts">
import { ref } from 'vue'
import { Textarea } from '@fewangsit/wangsvue'

const value = ref('')
</script>

<template>
  <div class="flex flex-col gap-4">
    <Textarea
      v-model="value"
      label="Auto Resize Text"
      placeholder="Start typing and watch it grow..."
      :auto-resize="true"
      :rows="2"
    />
    <p class="text-sm text-gray-600">
      Lines: {{ value.split('\n').length }}
    </p>
  </div>
</template>
