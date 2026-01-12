<script setup lang="ts">
import { Button, DialogForm, InputText } from '@fewangsit/wangsvue';
import type { FormPayload } from '@fewangsit/wangsvue/form';
import { ref } from 'vue';

const visible = ref(false);
const form = useTemplateRef<DialogForm>('dialogForm');

const onSubmit = (payload: FormPayload): void => {
  console.log('Form submitted:', payload.formValues);
};

const clearFields = (): void => {
  form.value?.clearField();
};
</script>

<template>
  <Button @click="visible = true" label="Open Dialog" />

  <DialogForm
    ref="dialogForm"
    v-model:visible="visible"
    @submit="onSubmit"
    header="Custom Buttons Dialog"
  >
    <template #fields>
      <InputText
        :mandatory="false"
        field-name="name"
        label="Name"
        use-validator
      />
    </template>

    <template #actionButtons="{ submit }">
      <Button @click="clearFields" label="Clear" severity="secondary" />

      <Button @click="submit" class="mr-2" label="Custom Save" />
    </template>
  </DialogForm>
</template>
