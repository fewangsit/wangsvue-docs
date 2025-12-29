<script setup lang="ts">
import { Form, ImageCompressor } from '@fewangsit/wangsvue'
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
      <ImageCompressor
        label="Profile Photo"
        field-name="profilePhoto"
        :use-validator="true"
        :mandatory="true"
        :validator-message="{ empty: 'Profile photo is required' }"
      />
    </template>
  </Form>
</template>
