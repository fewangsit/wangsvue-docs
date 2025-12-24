<script setup lang="ts">
import { Form, InputURL } from '@fewangsit/wangsvue'

const onSubmit = (payload: { formValues: Record<string, unknown> }) => {
  console.log('URL form submitted:', payload.formValues)
}

const onCancel = () => {
  console.log('Form cancelled')
}
</script>

<template>
  <Form
    :column-per-row="2"
    :buttons-template="['submit', 'cancel', 'clear']"
    submit-btn-label="Save URLs"
    @submit="onSubmit"
    @cancel="onCancel"
  >
    <template #fields="{ formValues }">
      <div class="col-span-2">
        <InputURL
          label="Company Website"
          field-name="website"
          :use-validator="true"
          :mandatory="true"
          :use-protocol="true"
          :validator-message="{
            empty: 'Company website is required',
            invalidFormat: 'Please enter a valid URL with protocol'
          }"
        />
      </div>

      <InputURL
        label="LinkedIn Profile"
        field-name="linkedinUrl"
        :use-validator="true"
        :use-protocol="true"
        field-info="Optional LinkedIn company page"
        :validator-message="{
          invalidFormat: 'Please enter a valid LinkedIn URL'
        }"
      />

      <InputURL
        label="Company Blog"
        field-name="blogUrl"
        :use-validator="true"
        :use-protocol="true"
        field-info="Optional company blog URL"
        :validator-message="{
          invalidFormat: 'Please enter a valid blog URL'
        }"
      />

      <InputURL
        label="Support Portal"
        field-name="supportUrl"
        :use-validator="true"
        :use-protocol="true"
        field-info="Customer support portal URL"
        :validator-message="{
          invalidFormat: 'Please enter a valid support URL'
        }"
      />

      <InputURL
        label="API Endpoint"
        field-name="apiUrl"
        :use-validator="true"
        :use-protocol="true"
        field-info="Optional API endpoint URL"
        :validator-message="{
          invalidFormat: 'Please enter a valid API URL'
        }"
      />

      <!-- Conditional field using formValues -->
      <div
        v-if="formValues.website"
        class="col-span-2"
      >
        <InputURL
          label="Documentation URL"
          field-name="docsUrl"
          :use-validator="true"
          :use-protocol="true"
          field-info="Shown because company website is provided"
          :validator-message="{
            invalidFormat: 'Please enter a valid documentation URL'
          }"
        />
      </div>
    </template>
  </Form>
</template>
