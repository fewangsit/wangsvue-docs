<script setup lang="ts">
import { Form, InputCurrency } from '@fewangsit/wangsvue';
import type { FormPayload } from '@fewangsit/wangsvue/form';

const onSubmit = (payload: FormPayload): void => {
  console.log('Form submitted:', payload.formValues);
};
</script>

<template>
  <Form :buttons-template="['clear', 'submit']" @submit="onSubmit">
    <template #fields>
      <InputCurrency
        :max="100000"
        :validator-message="{ empty: 'Product price is required' }"
        field-info="Enter the product price in your preferred currency"
        field-name="price"
        label="Product Price"
        mandatory
        use-validator
      />
    </template>
  </Form>
</template>
