<script setup lang="ts">
import { ref } from 'vue'
import { InputNumber } from '@fewangsit/wangsvue'

const value = ref<number>()
</script>

<template>
  <div class="flex flex-col gap-4">
    <InputNumber
      v-model="value"
      label="Age"
      placeholder="Enter age (0-120)"
      :min="0"
      :max="120"
    />
    <div class="text-sm text-gray-600">
      Value: {{ value ?? 'Empty' }}
    </div>
  </div>
</template>
