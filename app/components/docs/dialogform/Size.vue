<script setup lang="ts">
import { ref } from 'vue'
import { DialogForm, InputText, Button } from '@fewangsit/wangsvue'

const visibleSmall = ref(false)
const visibleMedium = ref(false)
const visibleLarge = ref(false)

const onSubmit = (payload: { formValues: Record<string, unknown>, stayAfterSubmit: boolean }) => {
  console.log('Form submitted:', payload.formValues)
}
</script>

<template>
  <div>
    <Button
      label="Small (default)"
      class="mb-2"
      @click="visibleSmall = true"
    />
    <DialogForm
      v-model:visible="visibleSmall"
      header="Small Dialog"
      width="small"
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
      label="Medium"
      class="mb-2 ml-2"
      @click="visibleMedium = true"
    />
    <DialogForm
      v-model:visible="visibleMedium"
      header="Medium Dialog"
      width="medium"
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
      class="mb-2 ml-2"
      label="Large"
      @click="visibleLarge = true"
    />
    <DialogForm
      v-model:visible="visibleLarge"
      header="Large Dialog"
      width="large"
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
