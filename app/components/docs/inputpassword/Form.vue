<script setup lang="ts">
import { Form, InputPassword } from '@fewangsit/wangsvue'
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
      <InputPassword
        label="Password"
        field-name="password"
        :use-validator="true"
        :mandatory="true"
        :validator-message="{ empty: 'Password is required' }"
      />
    </template>
  </Form>
</template>
