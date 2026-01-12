<script setup lang="ts">
import { MultiSelect } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const selectedValues = ref(['Option 1', 'Option 2', 'Option 3']);
const options = [
  'Option 1',
  'Option 2',
  'Option 3',
  'Option 4',
  'Option 5',
  'Option 6',
  'Option 7',
];
</script>

<template>
  <MultiSelect
    v-model="selectedValues"
    :max-selected-labels="2"
    :options="options"
    label="Select Options"
    placeholder="Choose options"
    selected-items-label="items selected"
  />
</template>
