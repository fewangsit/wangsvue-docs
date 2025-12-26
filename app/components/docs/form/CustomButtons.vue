<script setup lang="ts">
import { Form, InputText } from '@fewangsit/wangsvue'
import type { FormPayload } from '@fewangsit/wangsvue/form'

const onSubmit = (payload: FormPayload) => {
  console.log('Form submitted:', payload)
}

const onSave = (payload: FormPayload) => {
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
