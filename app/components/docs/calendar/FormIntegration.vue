<script setup lang="ts">
import { Form, Calendar } from '@fewangsit/wangsvue'
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
      <Calendar
        label="Event Date"
        field-name="eventDate"
        :use-validator="true"
        :mandatory="true"
        :validator-message="{ empty: 'Event date is required' }"
        placeholder="Select event date"
      />
    </template>
  </Form>
</template>
