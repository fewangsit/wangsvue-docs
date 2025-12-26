<script setup lang="ts">
import { Form, InputText } from '@fewangsit/wangsvue'

const onSubmit = (payload: { formValues: Record<string, unknown>, stayAfterSubmit: boolean }) => {
  console.log('Form submitted:', payload)
}

const onSave = (payload: { formValues: Record<string, unknown>, stayAfterSubmit: boolean }) => {
  console.log('Form saved:', payload)
}
</script>

<template>
  <Form
    :buttons-template="['save', 'submit']"
    :save-btn-label="'Save Draft'"
    :submit-btn-label="'Complete'"
    @submit="onSubmit"
    @save="onSave"
  >
    <template #fields>
      <InputText
        label="Email"
        field-name="email"
        :use-validator="true"
        :mandatory="true"
        :validator-message="{ empty: 'Email is required', invalidFormat: 'Invalid email' }"
      />
    </template>
  </Form>
</template>
