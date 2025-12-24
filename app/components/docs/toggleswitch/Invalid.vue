<script setup lang="ts">
import { ref } from 'vue'
import { ToggleSwitch } from '@fewangsit/wangsvue'

const invalidValue = ref(false)
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <ToggleSwitch
      v-model="invalidValue"
      :invalid="true"
      label="Invalid toggle switch"
    />
  </div>
</template>
