<script setup lang="ts">
import { Form, InputText } from '@fewangsit/wangsvue';
import type { FormPayload } from '@fewangsit/wangsvue/form';

const onSubmit = (payload: FormPayload): void => {
  console.log('Form submitted, stay after submit:', payload.stayAfterSubmit);
};
</script>

<template>
  <Form @submit="onSubmit">
    <template #fields>
      <InputText
        :validator-message="{ empty: 'Feedback is required' }"
        field-name="feedback"
        label="Feedback"
        mandatory
        use-validator
      />
    </template>
  </Form>
</template>
