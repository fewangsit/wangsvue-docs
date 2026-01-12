<script setup lang="ts">
import { FileUpload, Form } from '@fewangsit/wangsvue';
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
      <FileUpload
        :max-file-size="5242880"
        :validator-message="{ empty: 'Resume file is required' }"
        accept=".pdf,.doc,.docx"
        field-name="resume"
        file-extensions="PDF, DOC, DOCX"
        file-requirements="Max size: 5MB"
        label="Upload Resume"
        mandatory
        placeholder="Select your resume"
        use-validator
      />
    </template>
  </Form>
</template>
