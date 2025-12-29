<script setup lang="ts">
import { MultiSelect } from '@fewangsit/wangsvue'
import { ref } from 'vue'

const selectedValues = ref([])
const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5']
</script>

<template>
  <MultiSelect
    v-model="selectedValues"
    label="Select Options"
    :options="options"
    :hide-header-checkbox="true"
    placeholder="Choose options"
  />
</template>
