<script setup lang="ts">
import { InputCurrency } from '@fewangsit/wangsvue';
import type { CurrencyValue } from '@fewangsit/wangsvue/inputcurrency';
import { ref } from 'vue';

const price = ref<CurrencyValue>();
</script>

<template>
  <div class="flex flex-col gap-6">
    <div>
      <InputCurrency
        v-model="price"
        label="Product Price"
        placeholder="Enter product price"
      />

      <p class="text-sm text-gray-600 mt-2">
        Price: {{ price ? `${price.currency} ${price.value}` : 'Empty' }}
      </p>
    </div>
  </div>
</template>
