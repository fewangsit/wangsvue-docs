<script setup lang="ts">
import { Form, InputText, InputCurrency } from '@fewangsit/wangsvue'

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
        v-model="formValues.category"
        label="Category"
        field-name="category"
        :use-validator="true"
        :mandatory="true"
        :validator-message="{
          empty: 'Category is required'
        }"
      />

      <InputCurrency
        v-model="formValues.price"
        label="Selling Price"
        field-name="price"
        :use-validator="true"
        :mandatory="true"
        :max="100000"
        :validator-message="{
          empty: 'Selling price is required'
        }"
      />

      <InputCurrency
        v-model="formValues.cost"
        label="Cost Price"
        field-name="cost"
        :use-validator="true"
        :max="100000"
        field-info="Internal cost for profit calculation"
      />
    </template>
  </Form>
</template>
