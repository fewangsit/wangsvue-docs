<script setup lang="ts">
import { Form, InputRangeNumber } from '@fewangsit/wangsvue'
import type { FormPayload } from '@fewangsit/wangsvue/form'

const onSubmit = (payload: FormPayload) => {
  console.log('Form submitted:', payload.formValues)
}
</script>

<template>
  <Form
    :buttons-template="['submit', 'clear']"
    hide-stay-checkbox
    @submit="onSubmit"
  >
    <template #fields>
      <InputRangeNumber
        label="Salary Range (USD)"
        min-placeholder="Minimum salary"
        max-placeholder="Maximum salary"
        :use-validator="true"
        :mandatory="true"
        min-field-name="minSalary"
        max-field-name="maxSalary"
        :validator-message="{ empty: 'Salary range is required' }"
      />
    </template>
  </Form>
</template>
