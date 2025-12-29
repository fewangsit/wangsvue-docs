<script setup lang="ts">
import { Form, InputEmail } from '@fewangsit/wangsvue'
import type { FormPayload } from '@fewangsit/wangsvue/form'

const checkEmailAvailability = async (email: string): Promise<boolean> => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 800))
  const existingEmails = ['admin@test.com', 'user@test.com']
  return !existingEmails.includes(email.toLowerCase())
}

const onSubmit = (payload: FormPayload) => {
  console.log('Email form submitted:', payload.formValues)
}

const onCancel = () => {
  console.log('Form cancelled')
}
</script>

<template>
  <Form
    :column-per-row="2"
    :buttons-template="['submit', 'cancel', 'clear']"
    submit-btn-label="Save Emails"
    @submit="onSubmit"
    @cancel="onCancel"
  >
    <template #fields="{ formValues }">
      <div class="col-span-2">
        <InputEmail
          label="Primary Email"
          field-name="primaryEmail"
          :use-validator="true"
          :mandatory="true"
          :check-availability="checkEmailAvailability"
          field-info="This will be your login email"
          :validator-message="{
            empty: 'Email address is required',
            invalidFormat: 'Please enter a valid email address',
            exist: 'This email is already registered'
          }"
        />
      </div>

      <InputEmail
        label="Recovery Email"
        field-name="recoveryEmail"
        :use-validator="true"
        field-info="Optional backup email for account recovery"
        :validator-message="{
          invalidFormat: 'Please enter a valid email address'
        }"
      />

      <InputEmail
        label="Work Email"
        field-name="workEmail"
        :use-validator="true"
        field-info="Optional work email for professional contacts"
        :validator-message="{
          invalidFormat: 'Please enter a valid email address'
        }"
      />

      <!-- Conditional field using formValues -->
      <div
        v-if="formValues.primaryEmail"
        class="col-span-2"
      >
        <InputEmail
          label="Notification Email"
          field-name="notificationEmail"
          :use-validator="true"
          field-info="Shown because primary email is provided"
          :validator-message="{
            invalidFormat: 'Please enter a valid email address'
          }"
        />
      </div>
    </template>
  </Form>
</template>
