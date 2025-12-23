<script setup lang="ts">
import { Form, InputText, InputURL, Textarea } from '@fewangsit/wangsvue'

const onSubmit = (payload: { formValues: Record<string, unknown> }) => {
  console.log('Company profile submitted:', payload.formValues)
}

const onCancel = () => {
  console.log('Form cancelled')
}
</script>

<template>
  <Form
    :column-per-row="2"
    submit-btn-label="Save Profile"
    @submit="onSubmit"
    @cancel="onCancel"
  >
    <template #fields="{ formValues }">
      <InputText
        v-model="formValues.companyName"
        label="Company Name"
        field-name="companyName"
        :use-validator="true"
        :mandatory="true"
        :validator-message="{
          empty: 'Company name is required'
        }"
      />

      <InputText
        v-model="formValues.industry"
        label="Industry"
        field-name="industry"
        :use-validator="true"
        :mandatory="true"
        :validator-message="{
          empty: 'Industry is required'
        }"
      />

      <InputURL
        v-model="formValues.website"
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

      <InputURL
        v-model="formValues.linkedinUrl"
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
        v-model="formValues.blogUrl"
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
        v-model="formValues.supportUrl"
        label="Support Portal"
        field-name="supportUrl"
        :use-validator="true"
        :use-protocol="true"
        field-info="Customer support portal URL"
        :validator-message="{
          invalidFormat: 'Please enter a valid support URL'
        }"
      />

      <div class="col-span-2">
        <Textarea
          v-model="formValues.description"
          label="Company Description"
          field-name="description"
          :use-validator="true"
          :max-input="1000"
          :auto-resize="true"
          :rows="4"
          placeholder="Brief description of your company"
          :validator-message="{
            exceed: 'Description must not exceed 1000 characters'
          }"
        />
      </div>
    </template>
  </Form>
</template>
