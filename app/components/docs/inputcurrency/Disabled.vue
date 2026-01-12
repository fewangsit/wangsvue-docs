<script setup lang="ts">
import { InputCurrency } from '@fewangsit/wangsvue';
import type { CurrencyValue } from '@fewangsit/wangsvue/inputcurrency';
import { ref } from 'vue';

const value = ref<CurrencyValue>({ currency: 'USD', value: 1500 });
</script>

<template>
  <div class="flex flex-col gap-4">
    <InputCurrency
      v-model="value"
      disabled
      label="Product Price"
      placeholder="Enter price"
    />

    <p class="text-sm text-gray-600">
      Value: {{ value ? `${value.currency} ${value.value}` : 'Empty' }}
    </p>
  </div>
</template>
