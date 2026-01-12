<script setup lang="ts">
import { Form, ImageCompressor } from '@fewangsit/wangsvue';
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
      <ImageCompressor
        :validator-message="{ empty: 'Profile photo is required' }"
        field-name="profilePhoto"
        label="Profile Photo"
        mandatory
        use-validator
      />
    </template>
  </Form>
</template>
