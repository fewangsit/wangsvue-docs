<script setup lang="ts">
import { Form, InputText } from '@fewangsit/wangsvue';
import type { FormPayload } from '@fewangsit/wangsvue/form';

const onSubmit = (payload: FormPayload): void => {
  console.log('Form submitted:', payload);
};

const onSave = (payload: FormPayload): void => {
  console.log('Form saved:', payload);
};
</script>

<template>
  <Form
    :buttons-template="['save', 'submit']"
    @save="onSave"
    @submit="onSubmit"
    save-btn-label="Save Draft"
    submit-btn-label="Complete"
  >
    <template #fields>
      <InputText
        :validator-message="{
          empty: 'Email is required',
          invalidFormat: 'Invalid email',
        }"
        field-name="email"
        label="Email"
        mandatory
        use-validator
      />
    </template>
  </Form>
</template>
