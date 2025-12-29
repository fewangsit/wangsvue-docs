<script setup lang="ts">
import { ref } from 'vue'
import { InputRangeNumber } from '@fewangsit/wangsvue'

const value = ref<number[]>([])
</script>

<template>
  <InputRangeNumber
    v-model="value"
    label="Price Range"
    placeholder="Enter price range"
  />
</template>
