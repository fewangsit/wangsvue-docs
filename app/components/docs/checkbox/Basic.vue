<script setup lang="ts">
import { ref } from 'vue'
import { Checkbox } from '@fewangsit/wangsvue'

const checked = ref(false)
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <Checkbox
      v-model="checked"
      label="Accept terms and conditions"
    />
  </div>
</template>
