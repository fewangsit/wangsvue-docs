<script setup lang="ts">
import { ref } from 'vue'
import { InputNumber } from '@fewangsit/wangsvue'

const minFraction = ref(3.14159)
const maxFraction = ref(123.456789)
const rangeFraction = ref(42.123456789)
</script>

<template>
  <div class="flex flex-col gap-4">
    <InputNumber
      v-model="minFraction"
      label="Min 2 Fraction Digits"
      :min-fraction-digits="2"
    />
    <InputNumber
      v-model="maxFraction"
      label="Max 2 Fraction Digits"
      :max-fraction-digits="2"
    />
    <InputNumber
      v-model="rangeFraction"
      label="Min 2, Max 4 Fraction Digits"
      :min-fraction-digits="2"
      :max-fraction-digits="4"
    />
  </div>
</template>
