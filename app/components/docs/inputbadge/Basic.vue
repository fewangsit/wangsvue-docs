<script setup lang="ts">
import { ref } from 'vue'
import { InputBadge } from '@fewangsit/wangsvue'

const value = ref<string[]>([])
</script>

<template>
  <div class="flex flex-col gap-4">
    <InputBadge
      v-model="value"
      label="Tags"
      placeholder="Enter tags and press Enter"
    />
    <p class="text-sm text-gray-600">
      Tags: {{ value.length > 0 ? value.join(', ') : 'None' }}
    </p>
  </div>
</template>
