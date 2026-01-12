<script setup lang="ts">
import { Dropdown } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const selectedValue = ref('Option 2');
const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
</script>

<template>
  <Dropdown
    v-model="selectedValue"
    :options="options"
    disabled
    label="Select Option"
    placeholder="Choose an option"
  />
</template>
