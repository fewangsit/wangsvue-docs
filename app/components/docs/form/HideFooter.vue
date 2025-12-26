<script setup lang="ts">
import { Form, InputText, Button } from '@fewangsit/wangsvue'
import { useTemplateRef } from 'vue'

const form = useTemplateRef<Form>('form')
const onSubmit = () => {
  form.value?.submit()
}

const onClear = () => {
  form.value?.clearField()
}
</script>

<template>
  <Form
    ref="form"
    hide-footer
  >
    <template #fields>
      <InputText
        label="Message"
        field-name="message"
        :use-validator="true"
        :mandatory="true"
        :validator-message="{ empty: 'Message is required' }"
      />
    </template>
  </Form>
  <div class="flex gap-2 mt-4">
    <Button
      label="Clear"
      severity="secondary"
      @click="onClear"
    />
    <Button
      label="Submit"
      @click="onSubmit"
    />
  </div>
</template>
