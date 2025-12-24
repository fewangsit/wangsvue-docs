<script setup lang="ts">
import { ref } from 'vue'
import { Checkbox } from '@fewangsit/wangsvue'

const binaryValue = ref(false)
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <Checkbox
      v-model="binaryValue"
      :binary="true"
      label="Binary checkbox"
    />
    <p class="text-sm text-gray-600">
      Value: {{ binaryValue }}
    </p>
  </div>
</template>
