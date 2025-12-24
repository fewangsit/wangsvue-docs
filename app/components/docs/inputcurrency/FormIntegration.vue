<script setup lang="ts">
import { Form, InputCurrency } from '@fewangsit/wangsvue'

const onSubmit = (payload: { formValues: Record<string, unknown> }) => {
  console.log('Form submitted:', payload.formValues)
}
</script>

<template>
  <Form
    :buttons-template="['clear', 'submit']"
    @submit="onSubmit"
  >
    <template #fields="{ formValues }">
      <InputCurrency
        v-model="formValues.price"
        label="Product Price"
        field-name="price"
        :use-validator="true"
        :mandatory="true"
        :max="100000"
        :validator-message="{ empty: 'Product price is required' }"
        field-info="Enter the product price in your preferred currency"
      />
    </template>
  </Form>
</template>
