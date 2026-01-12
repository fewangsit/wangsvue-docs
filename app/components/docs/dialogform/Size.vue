<script setup lang="ts">
import { Button, DialogForm, InputText } from '@fewangsit/wangsvue';
import type { FormPayload } from '@fewangsit/wangsvue/form';
import { ref } from 'vue';

const visibleSmall = ref(false);
const visibleMedium = ref(false);
const visibleLarge = ref(false);

const onSubmit = (payload: FormPayload): void => {
  console.log('Form submitted:', payload.formValues);
};
</script>

<template>
  <div>
    <Button @click="visibleSmall = true" class="mb-2" label="Small (default)" />

    <DialogForm
      v-model:visible="visibleSmall"
      :buttons-template="['submit']"
      @submit="onSubmit"
      header="Small Dialog"
      width="small"
    >
      <template #fields>
        <InputText field-name="name" label="Name" />
      </template>
    </DialogForm>

    <Button @click="visibleMedium = true" class="mb-2 ml-2" label="Medium" />

    <DialogForm
      v-model:visible="visibleMedium"
      :buttons-template="['submit']"
      @submit="onSubmit"
      header="Medium Dialog"
      width="medium"
    >
      <template #fields>
        <InputText field-name="name" label="Name" />
      </template>
    </DialogForm>

    <Button @click="visibleLarge = true" class="mb-2 ml-2" label="Large" />

    <DialogForm
      v-model:visible="visibleLarge"
      :buttons-template="['submit']"
      @submit="onSubmit"
      header="Large Dialog"
      width="large"
    >
      <template #fields>
        <InputText field-name="name" label="Name" />
      </template>
    </DialogForm>
  </div>
</template>
