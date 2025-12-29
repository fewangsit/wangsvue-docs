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
