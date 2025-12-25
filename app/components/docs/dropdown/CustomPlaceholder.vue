<script setup lang="ts">
import { Dropdown } from '@fewangsit/wangsvue'
import { ref } from 'vue'

const selectedValue = ref()
const options = ['Small', 'Medium', 'Large', 'Extra Large']
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <Dropdown
      v-model="selectedValue"
      label="T-Shirt Size"
      :options="options"
      placeholder="Pick your size"
    />
  </div>
</template>
