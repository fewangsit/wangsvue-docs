<script setup lang="ts">
import { Button, DialogForm, InputText } from '@fewangsit/wangsvue';
import type { FormPayload } from '@fewangsit/wangsvue/form';
import { ref } from 'vue';

const visiblePrimary = ref(false);
const visibleSuccess = ref(false);
const visibleDanger = ref(false);

const onSubmit = (payload: FormPayload): void => {
  console.log('Form submitted:', payload.formValues);
};
</script>

<template>
  <div>
    <Button @click="visiblePrimary = true" class="mb-2" label="Primary" />

    <DialogForm
      v-model:visible="visiblePrimary"
      :buttons-template="['submit']"
      @submit="onSubmit"
      header="Primary Dialog"
      severity="primary"
    >
      <template #fields>
        <InputText field-name="name" label="Name" />
      </template>
    </DialogForm>

    <Button @click="visibleSuccess = true" class="mb-2 ml-2" label="Success" />

    <DialogForm
      v-model:visible="visibleSuccess"
      :buttons-template="['submit']"
      @submit="onSubmit"
      header="Success Dialog"
      severity="success"
    >
      <template #fields>
        <InputText field-name="name" label="Name" />
      </template>
    </DialogForm>

    <Button @click="visibleDanger = true" class="mb-2 ml-2" label="Danger" />

    <DialogForm
      v-model:visible="visibleDanger"
      :buttons-template="['submit']"
      @submit="onSubmit"
      header="Danger Dialog"
      severity="danger"
    >
      <template #fields>
        <InputText field-name="name" label="Name" />
      </template>
    </DialogForm>
  </div>
</template>
