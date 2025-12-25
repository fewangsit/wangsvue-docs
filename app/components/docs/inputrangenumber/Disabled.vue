<script setup lang="ts">
import { ref } from 'vue'
import { InputRangeNumber } from '@fewangsit/wangsvue'

const value = ref<number[]>([100, 500])
</script>

<template>
  <InputRangeNumber
    v-model="value"
    label="Price Range (Disabled)"
    min-placeholder="Min price"
    max-placeholder="Max price"
    :disabled="true"
  />
</template>
