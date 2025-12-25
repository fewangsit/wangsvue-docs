<script setup lang="ts">
import { Dropdown } from '@fewangsit/wangsvue'
import { ref } from 'vue'

const selectedValue = ref()
const options = [
  'Australia', 'Brazil', 'China', 'Egypt', 'France',
  'Germany', 'India', 'Japan', 'Spain', 'United States'
]
</script>

<template>
  <Dropdown
    v-model="selectedValue"
    label="Select Country"
    :options="options"
    :filter="true"
    filter-placeholder="Search countries..."
    placeholder="Choose a country"
  />
</template>
