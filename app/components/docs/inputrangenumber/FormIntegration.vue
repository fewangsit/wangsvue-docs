<script setup lang="ts">
import { Form, InputText, InputRangeNumber } from '@fewangsit/wangsvue'

const onSubmit = (payload: { formValues: Record<string, unknown> }) => {
  console.log('Job posting submitted:', payload.formValues)
}

const onCancel = () => {
  console.log('Form cancelled')
}
</script>

<template>
  <Form
    :column-per-row="1"
    submit-btn-label="Post Job"
    @submit="onSubmit"
    @cancel="onCancel"
  >
    <template #fields="{ formValues }">
      <InputText
        v-model="formValues.jobTitle"
        label="Job Title"
        field-name="jobTitle"
        :use-validator="true"
        :mandatory="true"
        :validator-message="{
          empty: 'Job title is required'
        }"
      />

      <InputRangeNumber
        v-model="formValues.salaryRange"
        label="Salary Range (USD)"
        min-placeholder="Minimum salary"
        max-placeholder="Maximum salary"
        :use-validator="true"
        :mandatory="true"
        min-field-name="minSalary"
        max-field-name="maxSalary"
        field-info="Annual salary range in USD"
        :validator-message="{
          empty: 'Salary range is required'
        }"
      />

      <InputRangeNumber
        v-model="formValues.experienceRange"
        label="Experience Required (Years)"
        min-placeholder="Minimum years"
        max-placeholder="Maximum years"
        :use-validator="true"
        min-field-name="minExperience"
        max-field-name="maxExperience"
        field-info="Years of experience required"
      />

      <InputRangeNumber
        v-model="formValues.ageRange"
        label="Preferred Age Range"
        min-placeholder="Minimum age"
        max-placeholder="Maximum age"
        :use-validator="true"
        min-field-name="minAge"
        max-field-name="maxAge"
        field-info="Optional preferred age range"
      />
    </template>
  </Form>
</template>
