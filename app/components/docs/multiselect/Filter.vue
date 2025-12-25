<script setup lang="ts">
import { MultiSelect } from '@fewangsit/wangsvue'
import { ref } from 'vue'

const selectedValues = ref([])
const options = [
  'Australia', 'Brazil', 'China', 'Egypt', 'France',
  'Germany', 'India', 'Japan', 'Spain', 'United States'
]
</script>

<template>
  <MultiSelect
    v-model="selectedValues"
    label="Select Countries"
    :options="options"
    :filter="true"
    filter-placeholder="Search countries..."
    placeholder="Choose countries"
  />
</template>
