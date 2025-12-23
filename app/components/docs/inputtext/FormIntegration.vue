<script setup lang="ts">
import { Form, InputText } from '@fewangsit/wangsvue'

const onSubmit = (payload: { formValues: Record<string, unknown> }) => {
  console.log('Form submitted:', payload.formValues)
}

const onCancel = () => {
  console.log('Form cancelled')
}
</script>

<template>
  <Form
    :column-per-row="2"
    @submit="onSubmit"
    @cancel="onCancel"
  >
    <template #fields="{ formValues }">
      <InputText
        v-model="formValues.firstName"
        label="First Name"
        field-name="firstName"
        :use-validator="true"
        :mandatory="true"
        :max-length="50"
        :validator-message="{
          empty: 'First name is required',
          exceed: 'First name must not exceed 50 characters'
        }"
      />

      <InputText
        v-model="formValues.lastName"
        label="Last Name"
        field-name="lastName"
        :use-validator="true"
        :mandatory="true"
        :max-length="50"
        :validator-message="{
          empty: 'Last name is required',
          exceed: 'Last name must not exceed 50 characters'
        }"
      />

      <InputText
        v-model="formValues.username"
        label="Username"
        field-name="username"
        :use-validator="true"
        :mandatory="true"
        :max-length="30"
        :auto-uppercase="true"
        :allowed-characters="/^[a-zA-Z0-9_]*$/"
        :allow-special-characters="false"
        :validator-message="{
          empty: 'Username is required',
          exceed: 'Username must not exceed 30 characters'
        }"
      />

      <InputText
        v-model="formValues.displayName"
        label="Display Name"
        field-name="displayName"
        :use-validator="true"
        :max-length="100"
        field-info="This will be shown to other users"
        placeholder="Enter display name (optional)"
      />
    </template>
  </Form>
</template>
