<script setup lang="ts">
import { Checkbox } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const binaryValue = ref(false);
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <Checkbox v-model="binaryValue" binary label="Binary checkbox" />

    <p class="text-sm text-gray-600">Value: {{ binaryValue }}</p>
  </div>
</template>
