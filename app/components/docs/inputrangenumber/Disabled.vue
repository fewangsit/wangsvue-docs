<script setup lang="ts">
import { InputRangeNumber } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const value = ref<number[]>([100, 500]);
</script>

<template>
  <InputRangeNumber
    v-model="value"
    disabled
    label="Price Range (Disabled)"
    max-placeholder="Max price"
    min-placeholder="Min price"
  />
</template>
