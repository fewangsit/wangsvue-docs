<script setup lang="ts">
import { InputRangeNumber } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const value = ref<number[]>([]);
</script>

<template>
  <InputRangeNumber
    v-model="value"
    :validator-message="{ empty: 'Price range is required' }"
    label="Price Range"
    mandatory
    max-field-name="maxPrice"
    max-placeholder="Max price"
    min-field-name="minPrice"
    min-placeholder="Min price"
    use-validator
  />
</template>
