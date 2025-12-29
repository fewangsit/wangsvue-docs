<script setup lang="ts">
import { ref } from 'vue'
import { InputRangeNumber } from '@fewangsit/wangsvue'

const value = ref<number[]>([])
</script>

<template>
  <InputRangeNumber
    v-model="value"
    label="Budget Range"
    min-placeholder="Minimum budget"
    max-placeholder="Maximum budget"
    :invalid="true"
    use-validator
    validator-message="Budget range is required for this project"
  />
</template>
