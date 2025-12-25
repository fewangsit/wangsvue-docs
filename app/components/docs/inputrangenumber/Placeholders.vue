<script setup lang="ts">
import { ref } from 'vue'
import { InputRangeNumber } from '@fewangsit/wangsvue'

const value = ref<number[]>([])
</script>

<template>
  <InputRangeNumber
    v-model="value"
    label="Age Range"
    min-placeholder="Minimum age"
    max-placeholder="Maximum age"
  />
</template>
