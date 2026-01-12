<script setup lang="ts">
import { Dropdown } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const selectedValue = ref<string>();
const options = ['Small', 'Medium', 'Large', 'Extra Large'];
</script>

<template>
  <Dropdown
    v-model="selectedValue"
    :options="options"
    label="T-Shirt Size"
    placeholder="Pick your size"
  />
</template>
