<script setup lang="ts">
import { ref } from 'vue'
import { MultiSelect } from '@fewangsit/wangsvue'

const selectedItems = ref(['Option 1'])

const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4']
</script>

<template>
  <MultiSelect
    ref="multiSelectRef"
    v-model="selectedItems"
    :options="options"
    label="Controlled MultiSelect"
    :controls="true"
  />
</template>
