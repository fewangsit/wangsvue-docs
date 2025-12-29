<script setup lang="ts">
import { ref } from 'vue'
import { DialogForm, InputText, DialogConfirm, Button } from '@fewangsit/wangsvue'

const visible = ref(false)

const handleFormSubmit = async (formValues: Record<string, unknown>) => {
  console.log('Form submitted via confirm:', formValues)
  // Here you would typically make an API call
  // await api.submitForm(formValues)
}
</script>

<template>
  <Button
    label="Open Dialog with Confirm"
    @click="visible = true"
  />
  <DialogForm
    v-model:visible="visible"
    header="Dialog with Confirmation"
    :buttons-template="['submit', 'clear']"
  >
    <template #fields>
      <InputText
        label="Name"
        field-name="name"
        :use-validator="true"
        :mandatory="true"
        :validator-message="{ empty: 'Name is required' }"
      />
      <InputText
        label="Description"
        field-name="description"
        :use-validator="true"
        :mandatory="false"
      />
    </template>

    <template #confirm="{ visible: confirmVisible, hide, submit }">
      <DialogConfirm
        :visible="confirmVisible"
        header="Confirm Submission"
        severity="primary"
        message="Are you sure you want to submit this form?"
        confirm-label="Yes, Submit"
        close-label="Cancel"
        @confirm="submit(handleFormSubmit)"
        @close="hide"
      />
    </template>
  </DialogForm>
</template>
