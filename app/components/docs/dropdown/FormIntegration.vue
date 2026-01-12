<script setup lang="ts">
import { Dropdown, Form } from '@fewangsit/wangsvue';
import type { FormPayload } from '@fewangsit/wangsvue/form';

const options = ['Manager', 'Developer', 'Designer', 'Analyst'];

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
      <Dropdown
        :options="options"
        :validator-message="{ empty: 'Job role is required' }"
        field-name="jobRole"
        label="Job Role"
        mandatory
        placeholder="Select your role"
        use-validator
      />
    </template>
  </Form>
</template>
