<script setup lang="ts">
import { MultiSelect } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const selectedItems = ref(['Option 1']);

const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
</script>

<template>
  <MultiSelect
    v-model="selectedItems"
    :options="options"
    controls
    label="Controlled MultiSelect"
  />
</template>
