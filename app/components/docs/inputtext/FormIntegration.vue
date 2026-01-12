<script setup lang="ts">
import { Form, InputText } from '@fewangsit/wangsvue';
import type { FormPayload } from '@fewangsit/wangsvue/form';

const existingUsernames = ['admin', 'user', 'test', 'demo'];

const checkDomainAvailability = async (value: string): Promise<boolean> => {
  await new Promise((resolve) => setTimeout(resolve, 800));
  const unavailableDomains = ['google', 'facebook', 'microsoft'];
  return !unavailableDomains.some((domain) =>
    value.toLowerCase().includes(domain),
  );
};

const onSubmit = (payload: FormPayload): void => {
  console.log('Text form submitted:', payload.formValues);
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
    submit-btn-label="Save Profile"
  >
    <template #fields="{ formValues }">
      <InputText
        :existing-values="existingUsernames"
        :validator-message="{
          empty: 'Username is required',
          exceed: 'Username must not exceed 20 characters',
          exist: 'This username is already taken',
        }"
        field-info="Will be converted to uppercase"
        field-name="username"
        label="Username"
        mandatory
        max-length="20"
        placeholder="Choose username"
        prevent-input-on-max-length
        use-validator
      />

      <InputText
        :allowed-characters="/^[a-zA-Z0-9]*$/"
        :check-availability="checkDomainAvailability"
        :validator-message="{
          empty: 'Company domain is required',
          exist: 'This domain name is not available',
        }"
        field-info="Only letters and numbers allowed"
        field-name="companyDomain"
        label="Company Domain"
        mandatory
        placeholder="Enter company domain"
        use-validator
      />

      <div class="col-span-2">
        <InputText
          :allowed-characters="/^[a-zA-Z0-9\s.,!?-]*$/"
          :validator-message="{
            exceed: 'Bio must not exceed 200 characters',
          }"
          field-info="Letters, numbers, spaces and basic punctuation only"
          field-name="bio"
          label="Bio"
          max-length="200"
          placeholder="Tell us about yourself"
          prevent-input-on-max-length
          use-validator
        />
      </div>

      <InputText
        :validator-message="{
          invalidFormat: 'Please enter a valid URL with protocol',
        }"
        field-info="Optional website URL"
        field-name="website"
        label="Website"
        placeholder="https://example.com"
        type="url"
        use-protocol
        use-validator
      />

      <InputText
        :allowed-characters="/^[0-9+\-\s()]*$/"
        field-info="Numbers, +, -, spaces, parentheses only"
        field-name="phone"
        label="Phone Number"
        placeholder="Enter phone number"
        use-validator
        validate-on-blur
      />

      <!-- Conditional field using formValues -->
      <div v-if="formValues.companyDomain" class="col-span-2">
        <InputText
          :validator-message="{
            exceed: 'Description must not exceed 500 characters',
          }"
          field-info="Shown because company domain is provided"
          field-name="companyDescription"
          label="Company Description"
          max-length="500"
          placeholder="Describe your company"
          use-validator
        />
      </div>
    </template>
  </Form>
</template>
