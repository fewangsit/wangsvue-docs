<script setup lang="ts">
import { Form, InputText } from '@fewangsit/wangsvue';
import { useTemplateRef } from 'vue';

const form = useTemplateRef<Form>('form');
const existingData = {
  name: 'John Doe',
  email: 'john@example.com',
};

const loadData = (): void => {
  form.value?.setValues(existingData);
};
</script>

<template>
  <div>
    <button
      @click="loadData"
      class="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
    >
      Load Existing Data
    </button>

    <Form ref="form">
      <template #fields>
        <InputText
          :validator-message="{ empty: 'Name is required' }"
          field-name="name"
          label="Name"
          mandatory
          use-validator
        />

        <InputText
          :validator-message="{
            empty: 'Email is required',
            invalidFormat: 'Invalid email',
          }"
          field-name="email"
          label="Email"
          mandatory
          use-validator
        />
      </template>
    </Form>
  </div>
</template>
