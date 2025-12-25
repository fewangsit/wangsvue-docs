<script setup lang="ts">
import { Dropdown } from '@fewangsit/wangsvue'
import type { BadgeProps } from '@fewangsit/wangsvue/badge'
import { ref } from 'vue'

const selectedValue = ref<BadgeProps['severity']>('success')
const options = [
  { label: 'Success', value: 'success' },
  { label: 'Info', value: 'info' },
  { label: 'Warning', value: 'warning' },
  { label: 'Danger', value: 'danger' }
]
</script>

<template>
  <Dropdown
    v-model="selectedValue"
    label="Select Status"
    :options="options"
    option-label="label"
    option-value="value"
    value-type="badge"
    :badge-value-props="{ severity: selectedValue }"
    placeholder="Choose status"
  />
</template>
