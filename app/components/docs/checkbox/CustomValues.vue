<script setup lang="ts">
import { Checkbox } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const customValue = ref('no');
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <Checkbox
      v-model="customValue"
      false-value="no"
      label="Custom values checkbox"
      true-value="yes"
    />

    <p class="text-sm text-gray-600">Value: {{ customValue }}</p>
  </div>
</template>
