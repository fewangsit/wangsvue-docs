<script setup lang="ts">
import { ref } from 'vue'
import { DialogForm, InputText, InputEmail, Button } from '@fewangsit/wangsvue'

const visible1 = ref(false)
const visible2 = ref(false)

const onSubmit = (payload: { formValues: Record<string, unknown>, stayAfterSubmit: boolean }) => {
  console.log('Form submitted:', payload.formValues)
  console.log('Stay after submit:', payload.stayAfterSubmit)
  // For resetAfterSubmit=true demo, form resets automatically
}

const onSubmitNoReset = (payload: { formValues: Record<string, unknown>, stayAfterSubmit: boolean }) => {
  console.log('Form submitted (no reset):', payload.formValues)
  console.log('Stay after submit:', payload.stayAfterSubmit)
}
</script>

<template>
  <div>
    <div class="mb-4">
      <h4 class="text-lg font-semibold mb-2">
        Reset After Submit (Default)
      </h4>
      <p class="text-sm text-gray-600 mb-2">
        Form fields are automatically cleared after successful submission.
      </p>
      <Button
        label="Open Dialog (Reset)"
        @click="visible1 = true"
      />
    </div>

    <div class="mb-4">
      <h4 class="text-lg font-semibold mb-2">
        No Reset After Submit
      </h4>
      <p class="text-sm text-gray-600 mb-2">
        Form fields retain their values after submission.
      </p>
      <Button
        label="Open Dialog (No Reset)"
        @click="visible2 = true"
      />
    </div>

    <!-- Reset After Submit Dialog -->
    <DialogForm
      v-model:visible="visible1"
      header="Reset After Submit Dialog"
      :buttons-template="['submit', 'clear']"
      :reset-after-submit="true"
      :close-on-submit="false"
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

    <!-- No Reset After Submit Dialog -->
    <DialogForm
      v-model:visible="visible2"
      header="No Reset After Submit Dialog"
      :buttons-template="['submit', 'clear']"
      :reset-after-submit="false"
      :close-on-submit="false"
      @submit="onSubmitNoReset"
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
  </div>
</template>
