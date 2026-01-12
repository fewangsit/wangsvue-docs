<script setup lang="ts">
import { Form, Textarea } from '@fewangsit/wangsvue';
import type { FormPayload } from '@fewangsit/wangsvue/form';

const onSubmit = (payload: FormPayload): void => {
  console.log('Textarea form submitted:', payload.formValues);
};

const onCancel = (): void => {
  console.log('Form cancelled');
};
</script>

<template>
  <Form
    :buttons-template="['submit', 'cancel', 'clear']"
    :column-per-row="1"
    @cancel="onCancel"
    @submit="onSubmit"
    submit-btn-label="Save Content"
  >
    <template #fields="{ formValues }">
      <Textarea
        :maxlength="1000"
        :rows="4"
        :validator-message="{
          empty: 'Description is required',
          exceed: 'Description must not exceed 1000 characters',
        }"
        auto-resize
        field-info="This will be visible to all users"
        field-name="description"
        label="Description"
        mandatory
        placeholder="Provide a detailed description"
        use-validator
      />

      <Textarea
        :maxlength="500"
        :prevent-input-on-max-length="false"
        :rows="3"
        :validator-message="{
          exceed: 'Notes must not exceed 500 characters',
        }"
        auto-resize
        field-name="notes"
        label="Additional Notes"
        placeholder="Any additional notes (optional)"
        use-validator
      />

      <Textarea
        :maxlength="300"
        :prevent-input-on-max-length="false"
        :rows="2"
        :validator-message="{
          exceed: 'Comments must not exceed 300 characters',
        }"
        auto-resize
        field-info="Only visible to team members"
        field-name="comments"
        label="Comments"
        placeholder="Internal comments"
        use-validator
      />

      <!-- Conditional field using formValues -->
      <div v-if="formValues.description">
        <Textarea
          :maxlength="200"
          :rows="2"
          :validator-message="{
            exceed: 'Summary must not exceed 200 characters',
          }"
          auto-resize
          field-info="Shown because description is provided"
          field-name="summary"
          label="Summary"
          placeholder="Brief summary of the description"
          use-validator
        />
      </div>
    </template>
  </Form>
</template>
