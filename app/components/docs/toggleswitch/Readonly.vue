<script setup lang="ts">
import { ToggleSwitch } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const readonlyOn = ref(true);
const readonlyOff = ref(false);
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <ToggleSwitch v-model="readonlyOn" label="Readonly (on)" readonly />

    <ToggleSwitch v-model="readonlyOff" label="Readonly (off)" readonly />
  </div>
</template>
