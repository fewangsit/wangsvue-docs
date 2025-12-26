<script setup lang="ts">
import { Form, InputText } from '@fewangsit/wangsvue'

const onSubmit = (payload: { formValues: Record<string, unknown>, stayAfterSubmit: boolean }) => {
  console.log('Form submitted:', payload)
}
</script>

<template>
  <Form
    :buttons-template="['submit']"
    @submit="onSubmit"
  >
    <template #fields>
      <InputText
        label="Name"
        field-name="name"
        :use-validator="true"
        :mandatory="true"
        :validator-message="{ empty: 'Name is required' }"
      />
    </template>
  </Form>
</template>
