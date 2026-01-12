<script setup lang="ts">
import { Dropdown } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const selectedValue = ref<string>();
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
  <Dropdown
    v-model="selectedValue"
    :options="options"
    filter
    filter-placeholder="Search countries..."
    label="Select Country"
    placeholder="Choose a country"
  />
</template>
