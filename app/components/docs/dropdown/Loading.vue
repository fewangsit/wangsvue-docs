<script setup lang="ts">
import { ref } from 'vue'
import { Dropdown } from '@fewangsit/wangsvue'

const selectedValue = ref()
const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4']
</script>

<template>
  <Dropdown
    v-model="selectedValue"
    label="Select Option"
    :options="options"
    :loading="true"
    placeholder="Loading options..."
  />
</template>
