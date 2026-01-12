<script setup lang="ts">
import { ToggleSwitch } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const invalidValue = ref(false);
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <ToggleSwitch
      v-model="invalidValue"
      invalid
      label="Invalid toggle switch"
    />
  </div>
</template>
