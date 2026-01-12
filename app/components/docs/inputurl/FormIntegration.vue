<script setup lang="ts">
import { Form, InputURL } from '@fewangsit/wangsvue';
import type { FormPayload } from '@fewangsit/wangsvue/form';

const onSubmit = (payload: FormPayload): void => {
  console.log('URL form submitted:', payload.formValues);
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
    submit-btn-label="Save URLs"
  >
    <template #fields="{ formValues }">
      <div class="col-span-2">
        <InputURL
          :validator-message="{
            empty: 'Company website is required',
            invalidFormat: 'Please enter a valid URL with protocol',
          }"
          field-name="website"
          label="Company Website"
          mandatory
          use-protocol
          use-validator
        />
      </div>

      <InputURL
        :validator-message="{
          invalidFormat: 'Please enter a valid LinkedIn URL',
        }"
        field-info="Optional LinkedIn company page"
        field-name="linkedinUrl"
        label="LinkedIn Profile"
        use-protocol
        use-validator
      />

      <InputURL
        :validator-message="{
          invalidFormat: 'Please enter a valid blog URL',
        }"
        field-info="Optional company blog URL"
        field-name="blogUrl"
        label="Company Blog"
        use-protocol
        use-validator
      />

      <InputURL
        :validator-message="{
          invalidFormat: 'Please enter a valid support URL',
        }"
        field-info="Customer support portal URL"
        field-name="supportUrl"
        label="Support Portal"
        use-protocol
        use-validator
      />

      <InputURL
        :validator-message="{
          invalidFormat: 'Please enter a valid API URL',
        }"
        field-info="Optional API endpoint URL"
        field-name="apiUrl"
        label="API Endpoint"
        use-protocol
        use-validator
      />

      <!-- Conditional field using formValues -->
      <div v-if="formValues.website" class="col-span-2">
        <InputURL
          :validator-message="{
            invalidFormat: 'Please enter a valid documentation URL',
          }"
          field-info="Shown because company website is provided"
          field-name="docsUrl"
          label="Documentation URL"
          use-protocol
          use-validator
        />
      </div>
    </template>
  </Form>
</template>
