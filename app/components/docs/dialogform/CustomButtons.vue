<script setup lang="ts">
import { ref } from 'vue'
import { DialogForm, InputText, Button } from '@fewangsit/wangsvue'
import type { FormPayload } from '@fewangsit/wangsvue/form'

const visible = ref(false)
const form = useTemplateRef<DialogForm>('dialogForm')

const onSubmit = (payload: FormPayload) => {
  console.log('Form submitted:', payload.formValues)
}

const clearFields = () => {
  form.value?.clearField()
}
</script>

<template>
  <Button
    label="Open Dialog"
    @click="visible = true"
  />
  <DialogForm
    ref="dialogForm"
    v-model:visible="visible"
    header="Custom Buttons Dialog"
    @submit="onSubmit"
  >
    <template #fields>
      <InputText
        label="Name"
        field-name="name"
        :use-validator="true"
        :mandatory="false"
      />
    </template>
    <template #actionButtons="{ submit }">
      <Button
        label="Clear"
        severity="secondary"
        @click="clearFields"
      />
      <Button
        label="Custom Save"
        class="mr-2"
        @click="submit"
      />
    </template>
  </DialogForm>
</template>
