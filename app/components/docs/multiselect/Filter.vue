<script setup lang="ts">
import { MultiSelect } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const selectedValues = ref([]);
const options = [
  'Australia',
  'Brazil',
  'China',
  'Egypt',
  'France',
  'Germany',
  'India',
  'Japan',
  'Spain',
  'United States',
];
</script>

<template>
  <MultiSelect
    v-model="selectedValues"
    :options="options"
    filter
    filter-placeholder="Search countries..."
    label="Select Countries"
    placeholder="Choose countries"
  />
</template>
