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
      placeholder="Enter age"
      :min="0"
      :max="120"
      :show-buttons="true"
    />
    <p class="text-sm text-gray-600">
      Value: {{ value ?? 'Empty' }} (Min: 0, Max: 120)
    </p>
  </div>
</template>
