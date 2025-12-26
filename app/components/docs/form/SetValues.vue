<script setup lang="ts">
import { Form, InputText } from '@fewangsit/wangsvue'
import { useTemplateRef } from 'vue'

const form = useTemplateRef<Form>('form')
const existingData = {
  name: 'John Doe',
  email: 'john@example.com'
}

const loadData = () => {
  form.value?.setValues(existingData)
}
</script>

<template>
  <div>
    <button
      class="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
      @click="loadData"
    >
      Load Existing Data
    </button>
    <Form ref="form">
      <template #fields>
        <InputText
          label="Name"
          field-name="name"
          :use-validator="true"
          :mandatory="true"
          :validator-message="{ empty: 'Name is required' }"
        />
        <InputText
          label="Email"
          field-name="email"
          :use-validator="true"
          :mandatory="true"
          :validator-message="{ empty: 'Email is required', invalidFormat: 'Invalid email' }"
        />
      </template>
    </Form>
  </div>
</template>
