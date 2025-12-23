<script setup lang="ts">
import { ref } from 'vue'
import { InputCurrency } from '@fewangsit/wangsvue'

const value = ref<{ currency: string, value?: number }>()
</script>

<template>
  <div class="flex flex-col gap-4">
    <InputCurrency
      v-model="value"
      label="Product Price"
      placeholder="Enter product price"
      :use-validator="true"
      field-name="productPrice"
      :mandatory="true"
      :max="10000"
      :validator-message="{
        empty: 'Product price is required'
      }"
    />
    <p class="text-sm text-gray-600">
      Value: {{ value ? `${value.currency} ${value.value}` : 'Empty' }}
    </p>
  </div>
</template>
