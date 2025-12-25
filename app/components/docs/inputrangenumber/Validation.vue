<script setup lang="ts">
import { ref } from 'vue'
import { InputRangeNumber } from '@fewangsit/wangsvue'

const value = ref<number[]>([])
</script>

<template>
  <InputRangeNumber
    v-model="value"
    label="Salary Range"
    min-placeholder="Minimum salary"
    max-placeholder="Maximum salary"
    :use-validator="true"
    :mandatory="true"
    min-field-name="minSalary"
    max-field-name="maxSalary"
    :validator-message="{
      empty: 'Salary range is required'
    }"
  />
</template>
