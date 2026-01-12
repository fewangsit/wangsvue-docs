<script setup lang="ts">
import { InputText } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const username = ref('');

const checkUsernameAvailability = async (value: string): Promise<boolean> => {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Simulate unavailable usernames
  const unavailableUsernames = ['admin', 'user', 'test', 'demo', 'guest'];

  return !unavailableUsernames.includes(value.toLowerCase());
};
</script>

<template>
  <div class="flex flex-col gap-4">
    <InputText
      v-model="username"
      :check-availability="checkUsernameAvailability"
      :validator-message="{
        empty: 'Username is required',
        exist: 'This username is already taken',
      }"
      field-name="username"
      label="Username"
      mandatory
      placeholder="Check username availability"
      use-validator
    />

    <div class="text-sm text-gray-600">
      <p>
        <strong>checkAvailability function</strong>: Async validation for value
        availability
      </p>

      <p class="text-xs mt-1">
        Try: admin, user, test, demo, guest (unavailable)
      </p>

      <p class="text-xs">
        Uses 'exist' validation message when value is not available
      </p>
    </div>
  </div>
</template>
