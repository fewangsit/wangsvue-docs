<script setup lang="ts">
import { ToggleSwitch } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const disabledOn = ref(true);
const disabledOff = ref(false);
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <ToggleSwitch v-model="disabledOn" disabled label="Disabled (on)" />

    <ToggleSwitch v-model="disabledOff" disabled label="Disabled (off)" />
  </div>
</template>
