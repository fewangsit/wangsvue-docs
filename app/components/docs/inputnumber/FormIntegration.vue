<script setup lang="ts">
import { Form, InputNumber } from '@fewangsit/wangsvue';
import type { FormPayload } from '@fewangsit/wangsvue/form';

const onSubmit = (payload: FormPayload): void => {
  console.log('Form submitted:', payload.formValues);
};
</script>

<template>
  <Form :buttons-template="['submit', 'clear']" @submit="onSubmit">
    <template #fields>
      <InputNumber
        :max="999"
        :min="1"
        :validator-message="{
          empty: 'Quantity is required',
        }"
        field-name="quantity"
        label="Quantity"
        mandatory
        show-buttons
        use-validator
      />
    </template>
  </Form>
</template>
