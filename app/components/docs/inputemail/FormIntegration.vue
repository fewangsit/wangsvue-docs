<script setup lang="ts">
import { Form, InputEmail } from '@fewangsit/wangsvue';
import type { FormPayload } from '@fewangsit/wangsvue/form';

const checkEmailAvailability = async (email: string): Promise<boolean> => {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 800));
  const existingEmails = ['admin@test.com', 'user@test.com'];
  return !existingEmails.includes(email.toLowerCase());
};

const onSubmit = (payload: FormPayload): void => {
  console.log('Email form submitted:', payload.formValues);
};

const onCancel = (): void => {
  console.log('Form cancelled');
};
</script>

<template>
  <Form
    :buttons-template="['submit', 'cancel', 'clear']"
    :column-per-row="2"
    @cancel="onCancel"
    @submit="onSubmit"
    submit-btn-label="Save Emails"
  >
    <template #fields="{ formValues }">
      <div class="col-span-2">
        <InputEmail
          :check-availability="checkEmailAvailability"
          :validator-message="{
            empty: 'Email address is required',
            invalidFormat: 'Please enter a valid email address',
            exist: 'This email is already registered',
          }"
          field-info="This will be your login email"
          field-name="primaryEmail"
          label="Primary Email"
          mandatory
          use-validator
        />
      </div>

      <InputEmail
        :validator-message="{
          invalidFormat: 'Please enter a valid email address',
        }"
        field-info="Optional backup email for account recovery"
        field-name="recoveryEmail"
        label="Recovery Email"
        use-validator
      />

      <InputEmail
        :validator-message="{
          invalidFormat: 'Please enter a valid email address',
        }"
        field-info="Optional work email for professional contacts"
        field-name="workEmail"
        label="Work Email"
        use-validator
      />

      <!-- Conditional field using formValues -->
      <div v-if="formValues.primaryEmail" class="col-span-2">
        <InputEmail
          :validator-message="{
            invalidFormat: 'Please enter a valid email address',
          }"
          field-info="Shown because primary email is provided"
          field-name="notificationEmail"
          label="Notification Email"
          use-validator
        />
      </div>
    </template>
  </Form>
</template>
