<script setup lang="ts">
import { MultiSelect } from '@fewangsit/wangsvue'
import { ref } from 'vue'

const selectedValues = ref([])
const options = [
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' },
  { name: 'Tokyo', code: 'TKY' }
]
</script>

<template>
  <MultiSelect
    v-model="selectedValues"
    label="Select Cities"
    :options="options"
    option-label="name"
    option-value="code"
    placeholder="Choose cities"
  />
</template>
