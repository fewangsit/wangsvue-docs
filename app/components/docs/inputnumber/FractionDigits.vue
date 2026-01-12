<script setup lang="ts">
import { InputNumber } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const minFraction = ref(3.14159);
const maxFraction = ref(123.456789);
const rangeFraction = ref(42.123456789);
</script>

<template>
  <div class="flex flex-col gap-4">
    <InputNumber
      v-model="minFraction"
      :min-fraction-digits="2"
      label="Min 2 Fraction Digits"
    />

    <InputNumber
      v-model="maxFraction"
      :max-fraction-digits="2"
      label="Max 2 Fraction Digits"
    />

    <InputNumber
      v-model="rangeFraction"
      :max-fraction-digits="4"
      :min-fraction-digits="2"
      label="Min 2, Max 4 Fraction Digits"
    />
  </div>
</template>
