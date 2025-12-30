<script setup lang="ts">
import { Form, FileUpload } from '@fewangsit/wangsvue'
import type { FormPayload } from '@fewangsit/wangsvue/form'

const onSubmit = (payload: FormPayload) => {
  console.log('Form submitted:', payload.formValues)
}
</script>

<template>
  <Form
    :buttons-template="['submit', 'clear']"
    hide-stay-checkbox
    @submit="onSubmit"
  >
    <template #fields>
      <FileUpload
        label="Upload Resume"
        field-name="resume"
        :use-validator="true"
        :mandatory="true"
        :validator-message="{ empty: 'Resume file is required' }"
        accept=".pdf,.doc,.docx"
        :max-file-size="5242880"
        placeholder="Select your resume"
        file-extensions="PDF, DOC, DOCX"
        file-requirements="Max size: 5MB"
      />
    </template>
  </Form>
</template>
