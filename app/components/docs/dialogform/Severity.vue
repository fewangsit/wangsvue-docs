<script setup lang="ts">
import { ref } from 'vue'
import { DialogForm, InputText, Button } from '@fewangsit/wangsvue'
import type { FormPayload } from '@fewangsit/wangsvue/form'

const visiblePrimary = ref(false)
const visibleSuccess = ref(false)
const visibleDanger = ref(false)

const onSubmit = (payload: FormPayload) => {
  console.log('Form submitted:', payload.formValues)
}
</script>

<template>
  <div>
    <Button
      label="Primary"
      class="mb-2"
      @click="visiblePrimary = true"
    />
    <DialogForm
      v-model:visible="visiblePrimary"
      :severity="'primary'"
      header="Primary Dialog"
      :buttons-template="['submit']"
      @submit="onSubmit"
    >
      <template #fields>
        <InputText
          label="Name"
          field-name="name"
        />
      </template>
    </DialogForm>

    <Button
      label="Success"
      class="mb-2 ml-2"
      @click="visibleSuccess = true"
    />
    <DialogForm
      v-model:visible="visibleSuccess"
      :severity="'success'"
      header="Success Dialog"
      :buttons-template="['submit']"
      @submit="onSubmit"
    >
      <template #fields>
        <InputText
          label="Name"
          field-name="name"
        />
      </template>
    </DialogForm>

    <Button
      label="Danger"
      class="mb-2 ml-2"
      @click="visibleDanger = true"
    />

    <DialogForm
      v-model:visible="visibleDanger"
      :severity="'danger'"
      header="Danger Dialog"
      :buttons-template="['submit']"
      @submit="onSubmit"
    >
      <template #fields>
        <InputText
          label="Name"
          field-name="name"
        />
      </template>
    </DialogForm>
  </div>
</template>
