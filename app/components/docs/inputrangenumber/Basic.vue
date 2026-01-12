<script setup lang="ts">
import { InputRangeNumber } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const value = ref<number[]>([]);
</script>

<template>
  <InputRangeNumber
    v-model="value"
    label="Price Range"
    placeholder="Enter price range"
  />
</template>
