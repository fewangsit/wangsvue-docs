<script setup lang="ts">
import { ref } from 'vue'
import { ToggleSwitch } from '@fewangsit/wangsvue'

const checked = ref(false)
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <ToggleSwitch
      v-model="checked"
      label="Enable notifications"
    />
    <p class="text-sm text-gray-600">
      Value: {{ checked }}
    </p>
  </div>
</template>
