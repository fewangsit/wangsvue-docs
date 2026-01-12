<script setup lang="ts">
import { Form, MultiSelect } from '@fewangsit/wangsvue';
import type { FormPayload } from '@fewangsit/wangsvue/form';

const options = ['JavaScript', 'TypeScript', 'Python', 'Java', 'C#', 'Go'];

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
      <MultiSelect
        :options="options"
        :validator-message="{ empty: 'At least one language is required' }"
        field-name="languages"
        label="Programming Languages"
        mandatory
        placeholder="Select languages"
        use-validator
      />
    </template>
  </Form>
</template>
