<script setup lang="ts">
import { Form, InputEmail } from '@fewangsit/wangsvue'
import { useTemplateRef } from 'vue'

const form = useTemplateRef<Form>('form')
const apiErrors = {
  email: 'This email is already registered'
}

const simulateApiError = async () => {
  // Simulate an API call delay
  await new Promise(resolve => setTimeout(resolve, 500))

  // Set errors returned from the "API"
  form.value?.setErrors(apiErrors)
}
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
        label="Email"
        field-name="email"
        :use-validator="true"
        :mandatory="true"
        :validator-message="{ empty: 'Email is required' }"
      />
    </template>
  </Form>
</template>
