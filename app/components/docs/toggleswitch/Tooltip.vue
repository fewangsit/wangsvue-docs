<script setup lang="ts">
import { ToggleSwitch } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const tooltipValue = ref(false);
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <ToggleSwitch
      v-model="tooltipValue"
      label="Toggle with tooltip"
      tooltip="This enables dark mode"
      tooltip-pos="top"
    />

    <ToggleSwitch
      v-model="tooltipValue"
      label="Right tooltip"
      tooltip="Tooltip on the right"
      tooltip-pos="right"
    />
  </div>
</template>
