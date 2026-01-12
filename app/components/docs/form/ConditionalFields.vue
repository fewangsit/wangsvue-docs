<script setup lang="ts">
import { Dropdown, Form, InputPassword } from '@fewangsit/wangsvue';
import type { FormPayload } from '@fewangsit/wangsvue/form';

const onSubmit = (payload: FormPayload): void => {
  console.log('Form submitted:', payload);
};
</script>

<template>
  <Form @submit="onSubmit">
    <template #fields="{ formValues }">
      <Dropdown
        :options="[
          { label: 'User', value: 'user' },
          { label: 'Admin', value: 'admin' },
        ]"
        :validator-message="{ empty: 'User type is required' }"
        field-name="userType"
        label="User Type"
        mandatory
        option-label="label"
        option-value="value"
        use-validator
      />

      <InputPassword
        v-if="formValues.userType === 'admin'"
        :validator-message="{ empty: 'Admin password is required' }"
        field-name="adminPassword"
        label="Admin Password"
        mandatory
        placeholder="Enter admin password"
        use-validator
      />
    </template>
  </Form>
</template>
