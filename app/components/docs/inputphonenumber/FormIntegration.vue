<script setup lang="ts">
import { Form, InputText, InputEmail, InputPhoneNumber } from '@fewangsit/wangsvue'

const onSubmit = (payload: { formValues: Record<string, unknown> }) => {
  console.log('Contact form submitted:', payload.formValues)
}

const onCancel = () => {
  console.log('Form cancelled')
}
</script>

<template>
  <Form
    :column-per-row="2"
    submit-btn-label="Save Contact"
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

      <InputEmail
        v-model="formValues.email"
        label="Email Address"
        field-name="email"
        :use-validator="true"
        :mandatory="true"
        :validator-message="{
          empty: 'Email is required',
          invalidFormat: 'Please enter a valid email address'
        }"
      />

      <InputPhoneNumber
        v-model="formValues.phone"
        label="Phone Number"
        field-name="phone"
        :use-validator="true"
        :mandatory="true"
        :max-digit="14"
        :validator-message="{
          empty: 'Phone number is required'
        }"
      />

      <InputPhoneNumber
        v-model="formValues.workPhone"
        label="Work Phone"
        field-name="workPhone"
        :use-validator="true"
        :max-digit="14"
        field-info="Optional work phone number"
      />

      <InputPhoneNumber
        v-model="formValues.emergencyPhone"
        label="Emergency Contact"
        field-name="emergencyPhone"
        :use-validator="true"
        :max-digit="14"
        field-info="Emergency contact number"
      />
    </template>
  </Form>
</template>
