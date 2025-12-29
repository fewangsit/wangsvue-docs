<script setup lang="ts">
import { ref } from 'vue'
import { InputRangeNumber } from '@fewangsit/wangsvue'

const value = ref<number[]>([])
</script>

<template>
  <InputRangeNumber
    v-model="value"
    label="Price Range"
    min-placeholder="Min price"
    max-placeholder="Max price"
    :mandatory="true"
    :use-validator="true"
    min-field-name="minPrice"
    max-field-name="maxPrice"
    :validator-message="{ empty: 'Price range is required' }"
  />
</template>
