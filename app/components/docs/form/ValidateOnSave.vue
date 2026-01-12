<script setup lang="ts">
import { Form, InputText } from '@fewangsit/wangsvue';
import type { FormPayload } from '@fewangsit/wangsvue/form';

const onSave = (payload: FormPayload): void => {
  console.log('Form saved:', payload);
};
</script>

<template>
  <Form :buttons-template="['save']" @save="onSave" validate-on-save>
    <template #fields>
      <InputText
        :validator-message="{ empty: 'Username is required' }"
        field-name="username"
        label="Username"
        mandatory
        use-validator
      />
    </template>
  </Form>
</template>
