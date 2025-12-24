<script setup lang="ts">
import { ref } from 'vue'
import { InputCurrency } from '@fewangsit/wangsvue'
import type { CurrencyValue } from '@fewangsit/wangsvue/inputcurrency'

const value = ref<CurrencyValue>()
const isInvalid = ref(true)
</script>

<template>
  <div class="flex flex-col gap-4">
    <InputCurrency
      v-model="value"
      label="Product Price"
      placeholder="Enter valid price"
      :use-validator="true"
      field-name="productPrice"
      :mandatory="true"
      :invalid="isInvalid"
      validator-message="Product price must be greater than 0"
    />
    <p class="text-sm text-gray-600">
      Value: {{ value ? `${value.currency} ${value.value}` : 'Empty' }}
    </p>
    <button
      class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-fit"
      @click="isInvalid = !isInvalid"
    >
      Toggle Invalid State: {{ isInvalid ? 'Invalid' : 'Valid' }}
    </button>
  </div>
</template>
