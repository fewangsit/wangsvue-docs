<script setup lang="ts">
import { Form, InputText, Textarea } from '@fewangsit/wangsvue'

const onSubmit = (payload: { formValues: Record<string, unknown> }) => {
  console.log('Form submitted:', payload.formValues)
}

const onCancel = () => {
  console.log('Form cancelled')
}
</script>

<template>
  <Form
    :column-per-row="1"
    @submit="onSubmit"
    @cancel="onCancel"
  >
    <template #fields="{ formValues }">
      <InputText
        v-model="formValues.title"
        label="Title"
        field-name="title"
        :use-validator="true"
        :mandatory="true"
        :max-length="100"
        :validator-message="{
          empty: 'Title is required',
          exceed: 'Title must not exceed 100 characters'
        }"
      />

      <Textarea
        v-model="formValues.description"
        label="Description"
        field-name="description"
        :use-validator="true"
        :mandatory="true"
        :max-input="1000"
        :auto-resize="true"
        :rows="4"
        placeholder="Provide a detailed description"
        field-info="This will be visible to all users"
        :validator-message="{
          empty: 'Description is required',
          exceed: 'Description must not exceed 1000 characters'
        }"
      />

      <Textarea
        v-model="formValues.notes"
        label="Additional Notes"
        field-name="notes"
        :use-validator="true"
        :max-input="500"
        :auto-resize="true"
        :rows="3"
        placeholder="Any additional notes (optional)"
        :validator-message="{
          exceed: 'Notes must not exceed 500 characters'
        }"
      />
    </template>
  </Form>
</template>
