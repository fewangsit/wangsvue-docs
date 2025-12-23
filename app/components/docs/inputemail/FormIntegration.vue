<script setup lang="ts">
import { Form, InputText, InputEmail } from '@fewangsit/wangsvue'

const checkEmailAvailability = async (email: string): Promise<boolean> => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 800))
  const existingEmails = ['admin@test.com', 'user@test.com']
  return !existingEmails.includes(email.toLowerCase())
}

const onSubmit = (payload: { formValues: Record<string, unknown> }) => {
  console.log('Registration form submitted:', payload.formValues)
}

const onCancel = () => {
  console.log('Registration cancelled')
}
</script>

<template>
  <Form
    :column-per-row="2"
    submit-btn-label="Create Account"
    @submit="onSubmit"
    @cancel="onCancel"
  >
    <template #fields="{ formValues }">
      <InputText
        v-model="formValues.firstName"
        label="First Name"
        field-name="firstName"
        :use-validator="true"
        :mandatory="true"
        :validator-message="{
          empty: 'First name is required'
        }"
      />

      <InputText
        v-model="formValues.lastName"
        label="Last Name"
        field-name="lastName"
        :use-validator="true"
        :mandatory="true"
        :validator-message="{
          empty: 'Last name is required'
        }"
      />

      <div class="col-span-2">
        <InputEmail
          v-model="formValues.email"
          label="Email Address"
          field-name="email"
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
        v-model="formValues.recoveryEmail"
        label="Recovery Email"
        field-name="recoveryEmail"
        :use-validator="true"
        field-info="Optional backup email for account recovery"
        :validator-message="{
          invalidFormat: 'Please enter a valid email address'
        }"
      />

      <InputEmail
        v-model="formValues.workEmail"
        label="Work Email"
        field-name="workEmail"
        :use-validator="true"
        field-info="Optional work email for professional contacts"
        :validator-message="{
          invalidFormat: 'Please enter a valid email address'
        }"
      />
    </template>
  </Form>
</template>
