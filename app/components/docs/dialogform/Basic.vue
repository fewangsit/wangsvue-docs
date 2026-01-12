<script setup lang="ts">
import { Button, DialogForm, InputText } from '@fewangsit/wangsvue';
import type { FormPayload } from '@fewangsit/wangsvue/form';
import { ref } from 'vue';

const visible = ref(false);

const onSubmit = (payload: FormPayload): void => {
  console.log('Form submitted:', payload.formValues);
};
</script>

<template>
  <Button @click="visible = true" label="Open Dialog" />

  <DialogForm
    v-model:visible="visible"
    :buttons-template="['submit', 'clear']"
    @submit="onSubmit"
    header="Basic Dialog Form"
  >
    <template #fields>
      <InputText
        :mandatory="false"
        field-name="name"
        label="Name"
        use-validator
      />
    </template>
  </DialogForm>
</template>
