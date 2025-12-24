<script setup lang="ts">
import { ref } from 'vue'
import { ToggleSwitch } from '@fewangsit/wangsvue'

const customValue = ref('off')
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <ToggleSwitch
      v-model="customValue"
      true-value="on"
      false-value="off"
      label="Custom values toggle"
    />
    <p class="text-sm text-gray-600">
      Value: {{ customValue }}
    </p>
  </div>
</template>
