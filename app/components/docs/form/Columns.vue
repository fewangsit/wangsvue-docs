<script setup lang="ts">
import { Form, InputText } from '@fewangsit/wangsvue';
import type { FormPayload } from '@fewangsit/wangsvue/form';

const onSubmit = (payload: FormPayload): void => {
  console.log('Form submitted:', payload);
};
</script>

<template>
  <Form :column-per-row="2" @submit="onSubmit">
    <template #fields>
      <InputText
        :validator-message="{ empty: 'First name is required' }"
        field-name="firstName"
        label="First Name"
        mandatory
        use-validator
      />

      <InputText
        :validator-message="{ empty: 'Last name is required' }"
        field-name="lastName"
        label="Last Name"
        mandatory
        use-validator
      />
    </template>
  </Form>
</template>
