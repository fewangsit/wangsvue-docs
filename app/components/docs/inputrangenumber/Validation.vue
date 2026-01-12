<script setup lang="ts">
import { InputRangeNumber } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const value = ref<number[]>([]);
</script>

<template>
  <InputRangeNumber
    v-model="value"
    :validator-message="{
      empty: 'Salary range is required',
    }"
    label="Salary Range"
    mandatory
    max-field-name="maxSalary"
    max-placeholder="Maximum salary"
    min-field-name="minSalary"
    min-placeholder="Minimum salary"
    use-validator
  />
</template>
