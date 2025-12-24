<script setup lang="ts">
import { ref } from 'vue'
import { Checkbox } from '@fewangsit/wangsvue'

const readonlyChecked = ref(true)
const readonlyUnchecked = ref(false)
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <Checkbox
      v-model="readonlyChecked"
      :readonly="true"
      label="Readonly (checked)"
    />
    <Checkbox
      v-model="readonlyUnchecked"
      :readonly="true"
      label="Readonly (unchecked)"
    />
  </div>
</template>
