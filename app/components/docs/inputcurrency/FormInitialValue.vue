<script setup lang="ts">
import { InputCurrency } from '@fewangsit/wangsvue';
import type { CurrencyValue } from '@fewangsit/wangsvue/inputcurrency';

const initialValue: CurrencyValue = { currency: 'USD', value: 2500 };
</script>

<template>
  <div class="flex flex-col gap-4">
    <InputCurrency
      :model-value="initialValue"
      field-name="productPrice"
      label="Initial Product Price"
      placeholder="Enter price"
      use-validator
    />

    <p class="text-sm text-gray-600">
      Initial Value: {{ initialValue.currency }} {{ initialValue.value }}
    </p>
  </div>
</template>
