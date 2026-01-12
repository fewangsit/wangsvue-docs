<script setup lang="ts">
import { Button, DialogForm, InputEmail, InputText } from '@fewangsit/wangsvue';
import type { FormPayload } from '@fewangsit/wangsvue/form';
import { ref } from 'vue';

const visible1 = ref(false);
const visible2 = ref(false);

const onSubmit = (payload: FormPayload): void => {
  console.log('Form submitted:', payload.formValues);
  console.log('Stay after submit:', payload.stayAfterSubmit);
  // For resetAfterSubmit=true demo, form resets automatically
};

const onSubmitNoReset = (payload: FormPayload): void => {
  console.log('Form submitted (no reset):', payload.formValues);
  console.log('Stay after submit:', payload.stayAfterSubmit);
};
</script>

<template>
  <div>
    <div class="mb-4">
      <h4 class="text-lg font-semibold mb-2">Reset After Submit (Default)</h4>

      <p class="text-sm text-gray-600 mb-2">
        Form fields are automatically cleared after successful submission.
      </p>

      <Button @click="visible1 = true" label="Open Dialog (Reset)" />
    </div>

    <div class="mb-4">
      <h4 class="text-lg font-semibold mb-2">No Reset After Submit</h4>

      <p class="text-sm text-gray-600 mb-2">
        Form fields retain their values after submission.
      </p>

      <Button @click="visible2 = true" label="Open Dialog (No Reset)" />
    </div>

    <!-- Reset After Submit Dialog -->
    <DialogForm
      v-model:visible="visible1"
      :buttons-template="['submit', 'clear']"
      :close-on-submit="false"
      @submit="onSubmit"
      header="Reset After Submit Dialog"
      reset-after-submit
    >
      <template #fields>
        <InputText
          :validator-message="{ empty: 'Name is required' }"
          field-name="name"
          label="Name"
          mandatory
          use-validator
        />

        <InputEmail
          :validator-message="{ empty: 'Email is required' }"
          field-name="email"
          label="Email"
          mandatory
          use-validator
        />
      </template>
    </DialogForm>

    <!-- No Reset After Submit Dialog -->
    <DialogForm
      v-model:visible="visible2"
      :buttons-template="['submit', 'clear']"
      :close-on-submit="false"
      :reset-after-submit="false"
      @submit="onSubmitNoReset"
      header="No Reset After Submit Dialog"
    >
      <template #fields>
        <InputText
          :validator-message="{ empty: 'Name is required' }"
          field-name="name"
          label="Name"
          mandatory
          use-validator
        />

        <InputEmail
          :validator-message="{ empty: 'Email is required' }"
          field-name="email"
          label="Email"
          mandatory
          use-validator
        />
      </template>
    </DialogForm>
  </div>
</template>
