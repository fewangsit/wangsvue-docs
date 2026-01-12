<script setup lang="ts">
import { InputRangeNumber } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const value = ref<number[]>([]);
</script>

<template>
  <InputRangeNumber
    v-model="value"
    invalid
    label="Budget Range"
    max-placeholder="Maximum budget"
    min-placeholder="Minimum budget"
    use-validator
    validator-message="Budget range is required for this project"
  />
</template>
