<script setup lang="ts">
import { ref } from 'vue'
import { InputRangeNumber } from '@fewangsit/wangsvue'

const value = ref<number[]>([])
</script>

<template>
  <div class="flex flex-col gap-4">
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
    <p class="text-sm text-gray-600">
      Salary Range: {{ value.length > 0 ? `$${value[0]} - $${value[1]}` : 'Empty' }}
    </p>
  </div>
</template>
