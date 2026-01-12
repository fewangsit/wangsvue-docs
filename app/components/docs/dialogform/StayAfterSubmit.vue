<script setup lang="ts">
import { Button, DialogForm, InputEmail, InputText } from '@fewangsit/wangsvue';
import type { FormPayload } from '@fewangsit/wangsvue/form';
import { ref } from 'vue';

const visible = ref(false);

const onSubmit = (payload: FormPayload): void => {
  console.log('Form submitted:', payload.formValues);
  console.log('Stay after submit:', payload.stayAfterSubmit);
  visible.value = payload.stayAfterSubmit;
};
</script>

<template>
  <Button @click="visible = true" label="Open Dialog" />

  <DialogForm
    v-model:visible="visible"
    :buttons-template="['submit', 'clear']"
    @submit="onSubmit"
    header="Stay After Submit Dialog"
    show-stay-checkbox
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
</template>
