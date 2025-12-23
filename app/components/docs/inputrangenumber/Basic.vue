<script setup lang="ts">
import { ref } from 'vue'
import { InputRangeNumber } from '@fewangsit/wangsvue'

const value = ref<number[]>([])
</script>

<template>
  <div class="flex flex-col gap-4">
    <InputRangeNumber
      v-model="value"
      label="Price Range"
      placeholder="Enter price range"
    />
    <p class="text-sm text-gray-600">
      Range: {{ value.length > 0 ? `${value[0]} - ${value[1]}` : 'Empty' }}
    </p>
  </div>
</template>
