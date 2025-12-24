<script setup lang="ts">
import { ref } from 'vue'
import { InputCurrency } from '@fewangsit/wangsvue'
import type { CurrencyValue } from '@fewangsit/wangsvue/inputcurrency'

const value = ref<CurrencyValue>({ currency: 'USD', value: 1500 })
</script>

<template>
  <div class="flex flex-col gap-4">
    <InputCurrency
      v-model="value"
      label="Product Price"
      placeholder="Enter price"
      :disabled="true"
    />
    <p class="text-sm text-gray-600">
      Value: {{ value ? `${value.currency} ${value.value}` : 'Empty' }}
    </p>
  </div>
</template>
