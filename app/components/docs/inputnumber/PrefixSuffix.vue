<script setup lang="ts">
import { InputNumber } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const temperature = ref<number>();
const percentage = ref<number>();
const weight = ref<number>();
</script>

<template>
  <div class="flex flex-col gap-4">
    <InputNumber
      v-model="temperature"
      :max="50"
      :min="-50"
      label="Temperature"
      placeholder="Enter temperature"
      show-buttons
      suffix="°C"
    />

    <InputNumber
      v-model="percentage"
      :max="100"
      :max-fraction-digits="1"
      :min="0"
      label="Percentage"
      placeholder="Enter percentage"
      suffix="%"
    />

    <InputNumber
      v-model="weight"
      :max-fraction-digits="2"
      :min="0"
      label="Weight"
      placeholder="Enter weight"
      prefix="Weight: "
      suffix=" kg"
    />
  </div>
</template>
