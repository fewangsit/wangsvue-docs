<script setup lang="ts">
import { Form, Textarea } from '@fewangsit/wangsvue'
import type { FormPayload } from '@fewangsit/wangsvue/form'

const onSubmit = (payload: FormPayload) => {
  console.log('Textarea form submitted:', payload.formValues)
}

const onCancel = () => {
  console.log('Form cancelled')
}
</script>

<template>
  <Form
    :column-per-row="1"
    :buttons-template="['submit', 'cancel', 'clear']"
    submit-btn-label="Save Content"
    @submit="onSubmit"
    @cancel="onCancel"
  >
    <template #fields="{ formValues }">
      <Textarea
        label="Description"
        field-name="description"
        :use-validator="true"
        :mandatory="true"
        :maxlength="1000"
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
        label="Additional Notes"
        field-name="notes"
        :use-validator="true"
        :maxlength="500"
        :prevent-input-on-max-length="false"
        :auto-resize="true"
        :rows="3"
        placeholder="Any additional notes (optional)"
        :validator-message="{
          exceed: 'Notes must not exceed 500 characters'
        }"
      />

      <Textarea
        label="Comments"
        field-name="comments"
        :use-validator="true"
        :maxlength="300"
        :prevent-input-on-max-length="false"
        :auto-resize="true"
        :rows="2"
        placeholder="Internal comments"
        field-info="Only visible to team members"
        :validator-message="{
          exceed: 'Comments must not exceed 300 characters'
        }"
      />

      <!-- Conditional field using formValues -->
      <div v-if="formValues.description">
        <Textarea
          label="Summary"
          field-name="summary"
          :use-validator="true"
          :maxlength="200"
          :auto-resize="true"
          :rows="2"
          placeholder="Brief summary of the description"
          field-info="Shown because description is provided"
          :validator-message="{
            exceed: 'Summary must not exceed 200 characters'
          }"
        />
      </div>
    </template>
  </Form>
</template>
