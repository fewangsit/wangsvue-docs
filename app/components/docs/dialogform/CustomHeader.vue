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
    :buttons-template="['submit', 'clear']"
    @submit="onSubmit"
  >
    <template #header>
      <div class="flex items-center">
        <span class="text-2xl mr-2">👋</span>
        <span>Custom Header</span>
      </div>
    </template>
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
