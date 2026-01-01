<script setup lang="ts">
import { Form, Editor } from '@fewangsit/wangsvue'
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
      <Editor
        label="Article Content"
        field-name="content"
        :use-validator="true"
        :mandatory="true"
        :validator-message="{ empty: 'Content is required' }"
        placeholder="Write your article content here..."
      />
    </template>
  </Form>
</template>
