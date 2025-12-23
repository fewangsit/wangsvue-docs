<script setup lang="ts">
import { ref } from 'vue'
import { InputCurrency } from '@fewangsit/wangsvue'

const value = ref<{ currency: string, value?: number }>()
</script>

<template>
  <div class="flex flex-col gap-4">
    <InputCurrency
      v-model="value"
      label="Price"
      placeholder="Enter price"
    />
    <p class="text-sm text-gray-600">
      Value: {{ value ? `${value.currency} ${value.value}` : 'Empty' }}
    </p>
  </div>
</template>
