<script setup lang="ts">
import { Form, InputPhoneNumber } from '@fewangsit/wangsvue';
import type { FormPayload } from '@fewangsit/wangsvue/form';

const onSubmit = (payload: FormPayload): void => {
  console.log('Form submitted:', payload.formValues);
};
</script>

<template>
  <Form :buttons-template="['submit', 'clear']" @submit="onSubmit">
    <template #fields>
      <InputPhoneNumber
        :validator-message="{
          empty: 'Phone number is required',
        }"
        field-name="phone"
        label="Phone Number"
        mandatory
        use-validator
      />
    </template>
  </Form>
</template>
