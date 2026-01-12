<script setup lang="ts">
import { Form, InputEmail } from '@fewangsit/wangsvue';
import { useTemplateRef } from 'vue';

const form = useTemplateRef<Form>('form');
const apiErrors = {
  email: 'This email is already registered',
};

const simulateApiError = async (): Promise<void> => {
  // Simulate an API call delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Set errors returned from the "API"
  form.value?.setErrors(apiErrors);
};
</script>

<template>
  <Form
    ref="form"
    :buttons-template="['submit']"
    :reset-after-submit="false"
    @submit="simulateApiError"
  >
    <template #fields>
      <InputEmail
        :validator-message="{ empty: 'Email is required' }"
        field-name="email"
        label="Email"
        mandatory
        use-validator
      />
    </template>
  </Form>
</template>
