<script setup lang="ts">
import { Form, InputPhoneNumber } from '@fewangsit/wangsvue'
import type { FormPayload } from '@fewangsit/wangsvue/form'

const onSubmit = (payload: FormPayload) => {
  console.log('Form submitted:', payload.formValues)
}
</script>

<template>
  <Form
    :buttons-template="['submit', 'clear']"
    @submit="onSubmit"
  >
    <template #fields>
      <InputPhoneNumber
        label="Phone Number"
        field-name="phone"
        :use-validator="true"
        :mandatory="true"
        :validator-message="{
          empty: 'Phone number is required'
        }"
      />
    </template>
  </Form>
</template>
