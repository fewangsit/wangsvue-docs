<script setup lang="ts">
import { ref } from 'vue'
import { InputNumber } from '@fewangsit/wangsvue'

const value = ref<number>()
</script>

<template>
  <div class="flex flex-col gap-4">
    <InputNumber
      v-model="value"
      label="Price"
      placeholder="Enter price"
      mode="currency"
      currency="USD"
      locale="en-US"
      :use-grouping="true"
      :min-fraction-digits="2"
      :max-fraction-digits="2"
    />
    <p class="text-sm text-gray-600">
      Value: {{ value ?? 'Empty' }}
    </p>
  </div>
</template>
