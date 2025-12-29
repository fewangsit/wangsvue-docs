<script setup lang="ts">
import { MultiSelect } from '@fewangsit/wangsvue'
import { ref } from 'vue'

const selectedValues = ref(['Option 1', 'Option 2', 'Option 3'])
const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6', 'Option 7']
</script>

<template>
  <MultiSelect
    v-model="selectedValues"
    label="Select Options"
    :options="options"
    :max-selected-labels="2"
    selected-items-label="items selected"
    placeholder="Choose options"
  />
</template>
