<script setup lang="ts">
import { ref } from 'vue'
import { DialogForm, InputText, Button, InputEmail } from '@fewangsit/wangsvue'
import type { FormPayload } from '@fewangsit/wangsvue/form'

const visible = ref(false)

const onSubmit = (payload: FormPayload) => {
  console.log('Form submitted:', payload.formValues)
  console.log('Stay after submit:', payload.stayAfterSubmit)
  visible.value = payload.stayAfterSubmit
}
</script>

<template>
  <Button
    label="Open Dialog"
    @click="visible = true"
  />
  <DialogForm
    v-model:visible="visible"
    header="Stay After Submit Dialog"
    :buttons-template="['submit', 'clear']"
    :show-stay-checkbox="true"
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
      <InputEmail
        label="Email"
        field-name="email"
        :use-validator="true"
        :mandatory="true"
        :validator-message="{ empty: 'Email is required' }"
      />
    </template>
  </DialogForm>
</template>
