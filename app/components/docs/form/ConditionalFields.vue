<script setup lang="ts">
import { Form, Dropdown, InputPassword } from '@fewangsit/wangsvue'

const onSubmit = (payload: { formValues: Record<string, unknown>, stayAfterSubmit: boolean }) => {
  console.log('Form submitted:', payload)
}
</script>

<template>
  <Form @submit="onSubmit">
    <template #fields="{ formValues }">
      <Dropdown
        label="User Type"
        field-name="userType"
        :use-validator="true"
        :mandatory="true"
        :validator-message="{ empty: 'User type is required' }"
        :options="[
          { label: 'User', value: 'user' },
          { label: 'Admin', value: 'admin' }
        ]"
        option-label="label"
        option-value="value"
      />
      <InputPassword
        v-if="formValues.userType === 'admin'"
        label="Admin Password"
        field-name="adminPassword"
        placeholder="Enter admin password"
        :use-validator="true"
        :mandatory="true"
        :validator-message="{ empty: 'Admin password is required' }"
      />
    </template>
  </Form>
</template>
