<script setup lang="ts">
import { Form, InputRangeNumber } from '@fewangsit/wangsvue';
import type { FormPayload } from '@fewangsit/wangsvue/form';

const onSubmit = (payload: FormPayload): void => {
  console.log('Form submitted:', payload.formValues);
};
</script>

<template>
  <Form
    :buttons-template="['submit', 'clear']"
    @submit="onSubmit"
    hide-stay-checkbox
  >
    <template #fields>
      <InputRangeNumber
        :validator-message="{ empty: 'Salary range is required' }"
        label="Salary Range (USD)"
        mandatory
        max-field-name="maxSalary"
        max-placeholder="Maximum salary"
        min-field-name="minSalary"
        min-placeholder="Minimum salary"
        use-validator
      />
    </template>
  </Form>
</template>
