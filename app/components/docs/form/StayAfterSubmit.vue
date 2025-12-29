<script setup lang="ts">
import { Form, InputText } from '@fewangsit/wangsvue'
import type { FormPayload } from '@fewangsit/wangsvue/form'

const onSubmit = (payload: FormPayload) => {
  console.log('Form submitted, stay after submit:', payload.stayAfterSubmit)
}
</script>

<template>
  <Form @submit="onSubmit">
    <template #fields>
      <InputText
        label="Feedback"
        field-name="feedback"
        :use-validator="true"
        :mandatory="true"
        :validator-message="{ empty: 'Feedback is required' }"
      />
    </template>
  </Form>
</template>
