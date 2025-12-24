<script setup lang="ts">
import { ref } from 'vue'
import { Checkbox } from '@fewangsit/wangsvue'

const tooltipValue = ref(false)
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
