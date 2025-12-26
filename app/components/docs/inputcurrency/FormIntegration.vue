<script setup lang="ts">
import { Form, InputCurrency } from '@fewangsit/wangsvue'
import type { FormPayload } from '@fewangsit/wangsvue/form'

const onSubmit = (payload: FormPayload) => {
  console.log('Form submitted:', payload.formValues)
}
</script>

<template>
  <Form
    :buttons-template="['clear', 'submit']"
    @submit="onSubmit"
  >
    <template #fields>
      <InputCurrency
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
