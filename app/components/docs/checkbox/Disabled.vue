<script setup lang="ts">
import { ref } from 'vue'
import { Checkbox } from '@fewangsit/wangsvue'

const disabledChecked = ref(true)
const disabledUnchecked = ref(false)
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <Checkbox
      v-model="disabledChecked"
      :disabled="true"
      label="Disabled (checked)"
    />
    <Checkbox
      v-model="disabledUnchecked"
      :disabled="true"
      label="Disabled (unchecked)"
    />
  </div>
</template>
