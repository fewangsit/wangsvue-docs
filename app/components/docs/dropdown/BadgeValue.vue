<script setup lang="ts">
import { Dropdown } from '@fewangsit/wangsvue';
import type { BadgeProps } from '@fewangsit/wangsvue/badge';
import { ref } from 'vue';

const selectedValue = ref<BadgeProps['severity']>('success');
const options = [
  { label: 'Success', value: 'success' },
  { label: 'Info', value: 'info' },
  { label: 'Warning', value: 'warning' },
  { label: 'Danger', value: 'danger' },
];
</script>

<template>
  <Dropdown
    v-model="selectedValue"
    :badge-value-props="{ severity: selectedValue }"
    :options="options"
    label="Select Status"
    option-label="label"
    option-value="value"
    placeholder="Choose status"
    value-type="badge"
  />
</template>
