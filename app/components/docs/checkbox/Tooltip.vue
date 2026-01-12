<script setup lang="ts">
import { Checkbox } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const tooltipValue = ref(false);
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <Checkbox
      v-model="tooltipValue"
      label="Checkbox with tooltip"
      tooltip="This is a helpful tooltip"
      tooltip-pos="top"
    />

    <Checkbox
      v-model="tooltipValue"
      label="Right tooltip"
      tooltip="Tooltip on the right"
      tooltip-pos="right"
    />
  </div>
</template>
