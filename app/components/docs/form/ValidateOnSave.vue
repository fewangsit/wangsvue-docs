<script setup lang="ts">
import { Form, InputText } from '@fewangsit/wangsvue'
import type { FormPayload } from '@fewangsit/wangsvue/form'

const onSave = (payload: FormPayload) => {
  console.log('Form saved:', payload)
}
</script>

<template>
  <Form
    :buttons-template="['save']"
    :validate-on-save="true"
    @save="onSave"
  >
    <template #fields>
      <InputText
        label="Username"
        field-name="username"
        :use-validator="true"
        :mandatory="true"
        :validator-message="{ empty: 'Username is required' }"
      />
    </template>
  </Form>
</template>
