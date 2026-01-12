<script setup lang="ts">
import { Calendar, Form } from '@fewangsit/wangsvue';
import type { FormPayload } from '@fewangsit/wangsvue/form';

const onSubmit = (payload: FormPayload): void => {
  console.log('Form submitted:', payload.formValues);
};
</script>

<template>
  <Form
    :buttons-template="['submit', 'clear']"
    @submit="onSubmit"
    hide-stay-checkbox
  >
    <template #fields>
      <Calendar
        :validator-message="{ empty: 'Event date is required' }"
        field-name="eventDate"
        label="Event Date"
        mandatory
        placeholder="Select event date"
        use-validator
      />
    </template>
  </Form>
</template>
