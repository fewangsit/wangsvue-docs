<script setup lang="ts">
import { Form, InputText, InputNumber } from '@fewangsit/wangsvue'

const onSubmit = (payload: { formValues: Record<string, unknown> }) => {
  console.log('Product form submitted:', payload.formValues)
}

const onCancel = () => {
  console.log('Form cancelled')
}
</script>

<template>
  <Form
    :column-per-row="2"
    @submit="onSubmit"
    @cancel="onCancel"
  >
    <template #fields="{ formValues }">
      <InputText
        v-model="formValues.productName"
        label="Product Name"
        field-name="productName"
        :use-validator="true"
        :mandatory="true"
        :validator-message="{
          empty: 'Product name is required'
        }"
      />

      <InputText
        v-model="formValues.sku"
        label="SKU"
        field-name="sku"
        :use-validator="true"
        :mandatory="true"
        :validator-message="{
          empty: 'SKU is required'
        }"
      />

      <InputNumber
        v-model="formValues.price"
        label="Price"
        field-name="price"
        :use-validator="true"
        :mandatory="true"
        mode="currency"
        currency="USD"
        locale="en-US"
        :use-grouping="true"
        :min="0"
        :min-fraction-digits="2"
        :max-fraction-digits="2"
        :validator-message="{
          empty: 'Price is required'
        }"
      />

      <InputNumber
        v-model="formValues.quantity"
        label="Initial Stock"
        field-name="quantity"
        :use-validator="true"
        :mandatory="true"
        :min="0"
        :max="999999"
        :show-buttons="true"
        :validator-message="{
          empty: 'Initial stock quantity is required'
        }"
      />
    </template>
  </Form>
</template>
