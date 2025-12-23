<script setup lang="ts">
import { ref } from 'vue'
import { InputText } from '@fewangsit/wangsvue'

const productCode = ref('')

const existingCodes = ['PROD001', 'PROD002', 'ITEM123', 'SKU456']
</script>

<template>
  <div class="flex flex-col gap-4">
    <InputText
      v-model="productCode"
      label="Product Code"
      placeholder="Enter product code"
      :use-validator="true"
      field-name="productCode"
      :mandatory="true"
      :auto-uppercase="true"
      :existing-values="existingCodes"
      :validator-message="{
        empty: 'Product code is required',
        exist: 'This product code already exists'
      }"
    />
    <p class="text-xs text-gray-500 mt-1">
      Existing: {{ existingCodes.join(', ') }}
    </p>

    <div class="text-sm text-gray-600">
      <p><strong>existingValues</strong>: Array of values to check against</p>
      <p>Uses 'exist' validation message when value matches existing values</p>
    </div>
  </div>
</template>
