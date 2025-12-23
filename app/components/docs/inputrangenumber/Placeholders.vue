<script setup lang="ts">
import { ref } from 'vue'
import { InputRangeNumber } from '@fewangsit/wangsvue'

const value = ref<number[]>([])
</script>

<template>
  <div class="flex flex-col gap-4">
    <InputRangeNumber
      v-model="value"
      label="Age Range"
      min-placeholder="Minimum age"
      max-placeholder="Maximum age"
    />
    <p class="text-sm text-gray-600">
      Age Range: {{ value.length > 0 ? `${value[0]} - ${value[1]} years` : 'Empty' }}
    </p>
  </div>
</template>
