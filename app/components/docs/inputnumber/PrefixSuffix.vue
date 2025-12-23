<script setup lang="ts">
import { ref } from 'vue'
import { InputNumber } from '@fewangsit/wangsvue'

const temperature = ref<number>()
const percentage = ref<number>()
const weight = ref<number>()
</script>

<template>
  <div class="flex flex-col gap-4">
    <InputNumber
      v-model="temperature"
      label="Temperature"
      placeholder="Enter temperature"
      suffix="°C"
      :min="-50"
      :max="50"
      :show-buttons="true"
    />

    <InputNumber
      v-model="percentage"
      label="Percentage"
      placeholder="Enter percentage"
      suffix="%"
      :min="0"
      :max="100"
      :max-fraction-digits="1"
    />

    <InputNumber
      v-model="weight"
      label="Weight"
      placeholder="Enter weight"
      prefix="Weight: "
      suffix=" kg"
      :min="0"
      :max-fraction-digits="2"
    />
  </div>
</template>
