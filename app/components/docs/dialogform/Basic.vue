<script setup lang="ts">
import { ref } from 'vue'
import { DialogForm, InputText, Button } from '@fewangsit/wangsvue'
import type { FormPayload } from '@fewangsit/wangsvue/form'

const visible = ref(false)

const onSubmit = (payload: FormPayload) => {
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
    header="Basic Dialog Form"
    :buttons-template="['submit', 'clear']"
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
  </DialogForm>
</template>
