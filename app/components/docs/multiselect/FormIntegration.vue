<script setup lang="ts">
import { Form, MultiSelect } from '@fewangsit/wangsvue'

const options = ['JavaScript', 'TypeScript', 'Python', 'Java', 'C#', 'Go']

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
      <MultiSelect
        label="Programming Languages"
        field-name="languages"
        :options="options"
        :use-validator="true"
        :mandatory="true"
        :validator-message="{ empty: 'At least one language is required' }"
        placeholder="Select languages"
      />
    </template>
  </Form>
</template>
