<script setup lang="ts">
import { ref } from 'vue'
import { InputNumber } from '@fewangsit/wangsvue'

const value = ref(10)
</script>

<template>
  <div class="flex flex-col gap-4">
    <InputNumber
      v-model="value"
      label="Quantity"
      :show-buttons="true"
    />
    <div class="text-sm text-gray-600">
      Value: {{ value }}
    </div>
  </div>
</template>
