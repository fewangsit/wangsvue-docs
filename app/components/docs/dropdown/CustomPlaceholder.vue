<script setup lang="ts">
import { Dropdown } from '@fewangsit/wangsvue'
import { ref } from 'vue'

const selectedValue = ref()
const options = ['Small', 'Medium', 'Large', 'Extra Large']
</script>

<template>
  <Dropdown
    v-model="selectedValue"
    label="T-Shirt Size"
    :options="options"
    placeholder="Pick your size"
  />
</template>
