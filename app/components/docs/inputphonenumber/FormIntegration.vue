<script setup lang="ts">
import { Form, InputPhoneNumber } from '@fewangsit/wangsvue'

const onSubmit = (payload: { formValues: Record<string, unknown> }) => {
  console.log('Contact form submitted:', payload.formValues)
}
</script>

<template>
  <Form
    :column-per-row="2"
    submit-btn-label="Save Contact"
    :buttons-template="['clear', 'submit']"
    @submit="onSubmit"
  >
    <template #fields>
      <InputPhoneNumber
        label="Phone Number"
        field-name="phone"
        :use-validator="true"
        :mandatory="true"
        :max-digit="14"
        :validator-message="{
          empty: 'Phone number is required'
        }"
      />
    </template>
  </Form>
</template>
