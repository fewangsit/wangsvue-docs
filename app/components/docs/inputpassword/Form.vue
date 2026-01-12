<script setup lang="ts">
import { Form, InputPassword } from '@fewangsit/wangsvue';
import type { FormPayload } from '@fewangsit/wangsvue/form';

const onSubmit = (payload: FormPayload): void => {
  console.log('Form submitted:', payload.formValues);
};
</script>

<template>
  <Form
    :buttons-template="['submit', 'clear']"
    @submit="onSubmit"
    hide-stay-checkbox
  >
    <template #fields>
      <InputPassword
        :validator-message="{ empty: 'Password is required' }"
        field-name="password"
        label="Password"
        mandatory
        use-validator
      />
    </template>
  </Form>
</template>
