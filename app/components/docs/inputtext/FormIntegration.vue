<script setup lang="ts">
import { Form, InputText } from '@fewangsit/wangsvue'

const existingUsernames = ['admin', 'user', 'test', 'demo']
const existingEmails = ['admin@company.com', 'user@company.com']

const checkDomainAvailability = async (value: string): Promise<boolean> => {
  await new Promise(resolve => setTimeout(resolve, 800))
  const unavailableDomains = ['google', 'facebook', 'microsoft']
  return !unavailableDomains.some(domain => value.toLowerCase().includes(domain))
}

const onSubmit = (payload: { formValues: Record<string, unknown> }) => {
  console.log('Form submitted:', payload.formValues)
}

const onCancel = () => {
  console.log('Form cancelled')
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
      <!-- Basic required field -->
      <InputText
        label="Full Name"
        field-name="fullName"
        :use-validator="true"
        :mandatory="true"
        :max-length="50"
        placeholder="Enter your full name"
        :validator-message="{
          empty: 'Full name is required',
          exceed: 'Name must not exceed 50 characters'
        }"
      />

      <!-- Username with existing values check -->
      <InputText
        label="Username"
        field-name="username"
        :use-validator="true"
        :mandatory="true"
        :max-length="20"
        :auto-uppercase="true"
        :existing-values="existingUsernames"
        :prevent-input-on-max-length="true"
        placeholder="Choose username"
        field-info="Will be converted to uppercase"
        :validator-message="{
          empty: 'Username is required',
          exceed: 'Username must not exceed 20 characters',
          exist: 'This username is already taken'
        }"
      />

      <!-- Email with async availability check -->
      <InputText
        label="Email Address"
        field-name="email"
        :use-validator="true"
        :mandatory="true"
        :max-length="100"
        :existing-values="existingEmails"
        :validate-on-blur="true"
        placeholder="Enter email address"
        field-info="Validation occurs on blur"
        :validator-message="{
          empty: 'Email is required',
          exceed: 'Email must not exceed 100 characters',
          exist: 'This email is already registered'
        }"
      />

      <!-- Domain with async check -->
      <InputText
        label="Company Domain"
        field-name="companyDomain"
        :use-validator="true"
        :mandatory="true"
        :check-availability="checkDomainAvailability"
        :allowed-characters="/^[a-zA-Z0-9]*$/"
        placeholder="Enter company domain"
        field-info="Only letters and numbers allowed"
        :validator-message="{
          empty: 'Company domain is required',
          exist: 'This domain name is not available'
        }"
      />

      <!-- Bio with character restrictions -->
      <div class="col-span-2">
        <InputText
          label="Bio"
          field-name="bio"
          :use-validator="true"
          :max-length="200"
          :prevent-input-on-max-length="true"
          :allowed-characters="/^[a-zA-Z0-9\s.,!?-]*$/"
          placeholder="Tell us about yourself"
          field-info="Letters, numbers, spaces and basic punctuation only"
          :validator-message="{
            exceed: 'Bio must not exceed 200 characters'
          }"
        />
      </div>

      <!-- Website URL -->
      <InputText
        label="Website"
        field-name="website"
        :use-validator="true"
        type="url"
        :use-protocol="true"
        placeholder="https://example.com"
        field-info="Optional website URL"
        :validator-message="{
          invalidFormat: 'Please enter a valid URL with protocol'
        }"
      />

      <!-- Phone with validation on blur -->
      <InputText
        label="Phone Number"
        field-name="phone"
        :use-validator="true"
        :allowed-characters="/^[0-9+\-\s()]*$/"
        :validate-on-blur="true"
        placeholder="Enter phone number"
        field-info="Numbers, +, -, spaces, parentheses only"
      />

      <!-- Conditional field based on other form values -->
      <div
        v-if="formValues.companyDomain"
        class="col-span-2"
      >
        <InputText
          label="Company Description"
          field-name="companyDescription"
          :use-validator="true"
          :max-length="500"
          placeholder="Describe your company"
          field-info="Shown because company domain is provided"
          :validator-message="{
            exceed: 'Description must not exceed 500 characters'
          }"
        />
      </div>
    </template>
  </Form>
</template>
