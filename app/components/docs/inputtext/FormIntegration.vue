<script setup lang="ts">
import { Form, InputText } from '@fewangsit/wangsvue'
import type { FormPayload } from '@fewangsit/wangsvue/form'

const existingUsernames = ['admin', 'user', 'test', 'demo']

const checkDomainAvailability = async (value: string): Promise<boolean> => {
  await new Promise(resolve => setTimeout(resolve, 800))
  const unavailableDomains = ['google', 'facebook', 'microsoft']
  return !unavailableDomains.some(domain => value.toLowerCase().includes(domain))
}

const onSubmit = (payload: FormPayload) => {
  console.log('Text form submitted:', payload.formValues)
}

const onCancel = () => {
  console.log('Form cancelled')
}
</script>

<template>
  <Form
    :column-per-row="2"
    :buttons-template="['submit', 'cancel', 'clear']"
    submit-btn-label="Save Profile"
    @submit="onSubmit"
    @cancel="onCancel"
  >
    <template #fields="{ formValues }">
      <InputText
        label="Username"
        field-name="username"
        :use-validator="true"
        :mandatory="true"
        :max-length="20"
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

      <InputText
        label="Phone Number"
        field-name="phone"
        :use-validator="true"
        :allowed-characters="/^[0-9+\-\s()]*$/"
        :validate-on-blur="true"
        placeholder="Enter phone number"
        field-info="Numbers, +, -, spaces, parentheses only"
      />

      <!-- Conditional field using formValues -->
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
