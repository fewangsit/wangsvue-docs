<script setup lang="ts">
import { Dropdown } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const selectedValue = ref<string>();
const options = [
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' },
];
</script>

<template>
  <Dropdown
    v-model="selectedValue"
    :options="options"
    label="Select City"
    option-label="name"
    option-value="code"
    placeholder="Choose a city"
  />
</template>
