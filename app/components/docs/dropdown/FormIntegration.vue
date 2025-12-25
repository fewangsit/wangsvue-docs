<script setup lang="ts">
import { Form, Dropdown } from '@fewangsit/wangsvue'

const options = ['Manager', 'Developer', 'Designer', 'Analyst']

const onSubmit = (payload: { formValues: Record<string, unknown> }) => {
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
      <Dropdown
        label="Job Role"
        field-name="jobRole"
        :options="options"
        :use-validator="true"
        :mandatory="true"
        :validator-message="{ empty: 'Job role is required' }"
        placeholder="Select your role"
      />
    </template>
  </Form>
</template>
