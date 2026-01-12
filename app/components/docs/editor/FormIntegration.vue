<script setup lang="ts">
import { Editor, Form } from '@fewangsit/wangsvue';
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
      <Editor
        :validator-message="{ empty: 'Content is required' }"
        field-name="content"
        label="Article Content"
        mandatory
        placeholder="Write your article content here..."
        use-validator
      />
    </template>
  </Form>
</template>
