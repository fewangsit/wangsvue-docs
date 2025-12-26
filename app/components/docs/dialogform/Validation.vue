<script setup lang="ts">
import { ref } from 'vue'
import { DialogForm, InputText, Button } from '@fewangsit/wangsvue'

const visible = ref(false)

const onSubmit = (payload: { formValues: Record<string, unknown>, stayAfterSubmit: boolean }) => {
  console.log('Form submitted:', payload.formValues)
}
</script>

<template>
  <Button
    label="Open Dialog"
    @click="visible = true"
  />
  <DialogForm
    v-model:visible="visible"
    header="Validation Dialog"
    :buttons-template="['submit', 'clear']"
    @submit="onSubmit"
  >
    <template #fields>
      <InputText
        label="Name"
        field-name="name"
        :use-validator="true"
        :mandatory="true"
        :validator-message="{ empty: 'Name is required' }"
      />
    </template>
  </DialogForm>
</template>
