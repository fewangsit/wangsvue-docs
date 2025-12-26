<script setup lang="ts">
import { Form, InputText } from '@fewangsit/wangsvue'
import type { FormPayload } from '@fewangsit/wangsvue/form'

const onSubmit = (payload: FormPayload) => {
  console.log('Form submitted:', payload)
}
</script>

<template>
  <Form
    :column-per-row="2"
    @submit="onSubmit"
  >
    <template #fields>
      <InputText
        label="First Name"
        field-name="firstName"
        :use-validator="true"
        :mandatory="true"
        :validator-message="{ empty: 'First name is required' }"
      />
      <InputText
        label="Last Name"
        field-name="lastName"
        :use-validator="true"
        :mandatory="true"
        :validator-message="{ empty: 'Last name is required' }"
      />
    </template>
  </Form>
</template>
