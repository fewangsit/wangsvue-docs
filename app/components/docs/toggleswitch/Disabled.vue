<script setup lang="ts">
import { ref } from 'vue'
import { ToggleSwitch } from '@fewangsit/wangsvue'

const disabledOn = ref(true)
const disabledOff = ref(false)
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <ToggleSwitch
      v-model="disabledOn"
      :disabled="true"
      label="Disabled (on)"
    />
    <ToggleSwitch
      v-model="disabledOff"
      :disabled="true"
      label="Disabled (off)"
    />
  </div>
</template>
