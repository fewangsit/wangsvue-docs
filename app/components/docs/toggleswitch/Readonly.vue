<script setup lang="ts">
import { ref } from 'vue'
import { ToggleSwitch } from '@fewangsit/wangsvue'

const readonlyOn = ref(true)
const readonlyOff = ref(false)
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <ToggleSwitch
      v-model="readonlyOn"
      :readonly="true"
      label="Readonly (on)"
    />
    <ToggleSwitch
      v-model="readonlyOff"
      :readonly="true"
      label="Readonly (off)"
    />
  </div>
</template>
