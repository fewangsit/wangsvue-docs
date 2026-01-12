<script setup lang="ts">
import { Button, Form, InputText } from '@fewangsit/wangsvue';
import { useTemplateRef } from 'vue';

const form = useTemplateRef<Form>('form');
const onSubmit = (): void => {
  form.value?.submit();
};

const onClear = (): void => {
  form.value?.clearField();
};
</script>

<template>
  <Form ref="form" hide-footer>
    <template #fields>
      <InputText
        :validator-message="{ empty: 'Message is required' }"
        field-name="message"
        label="Message"
        mandatory
        use-validator
      />
    </template>
  </Form>

  <div class="flex gap-2 mt-4">
    <Button @click="onClear" label="Clear" severity="secondary" />

    <Button @click="onSubmit" label="Submit" />
  </div>
</template>
