<script setup lang="ts">
import { InputNumber } from '@fewangsit/wangsvue'
</script>

<template>
  <div class="flex flex-col gap-4">
    <InputNumber
      :model-value="42"
      label="Disabled Input"
      :disabled="true"
    />
  </div>
</template>
