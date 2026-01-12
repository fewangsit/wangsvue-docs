<script setup lang="ts">
import {
  Button,
  DialogForm,
  InputText,
  Toast,
  useToast,
} from '@fewangsit/wangsvue';
import type { FormPayload } from '@fewangsit/wangsvue/form';
import { ref } from 'vue';

const visible = ref(false);
const toast = useToast();

const checkUsernameAvailability = async (value: string): Promise<boolean> => {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 3000));

  // Simulate unavailable usernames
  const unavailableUsernames = [
    'admin',
    'user',
    'test',
    'demo',
    'guest',
    'root',
    'system',
  ];

  return !unavailableUsernames.includes(value.toLowerCase());
};

const onSubmit = (payload: FormPayload): void => {
  console.log('Form submitted:', payload.formValues);

  // Show success toast
  toast.add({
    message: `User "${payload.formValues.username}" has been registered!`,
    severity: 'success',
    group: 'dialog-form',
  });
};
</script>

<template>
  <div>
    <Button @click="visible = true" label="Open Registration Form" />

    <DialogForm
      v-model:visible="visible"
      :buttons-template="['submit', 'clear']"
      :close-on-submit="false"
      @submit="onSubmit"
      header="User Registration"
    >
      <template #fields>
        <InputText
          :check-availability="checkUsernameAvailability"
          :validator-message="{
            empty: 'Username is required',
            exist: 'This username is already taken',
          }"
          field-name="username"
          label="Username"
          mandatory
          placeholder="Choose a username"
          use-validator
        />

        <p class="text-xs mt-1">
          <strong>Demo Tip:</strong> Enter any name and try submitting while
          "Checking availability..." is displayed. The form will wait for the
          check to complete.
        </p>
      </template>
    </DialogForm>
  </div>

  <Toast group="dialog-form" />
</template>
