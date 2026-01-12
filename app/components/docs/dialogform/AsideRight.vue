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
  <Button @click="visible = true" label="Open Dialog with Aside" />

  <DialogForm
    v-model:visible="visible"
    :aside-right-width="300"
    :buttons-template="['submit', 'clear']"
    @submit="onSubmit"
    header="Dialog with Aside Right"
    width="medium"
  >
    <template #fields>
      <InputText
        :validator-message="{ empty: 'Name is required' }"
        field-name="name"
        label="Name"
        mandatory
        use-validator
      />

      <InputText
        :mandatory="false"
        field-name="description"
        label="Description"
        use-validator
      />
    </template>

    <template #aside-right>
      <div class="p-4">
        <h5 class="font-semibold mb-2">Preview</h5>

        <p class="text-sm text-gray-600 mb-2">
          This is the aside right content. It can contain:
        </p>

        <ul class="text-sm space-y-1">
          <li>• Summary information</li>

          <li>• Preview panels</li>

          <li>• Additional controls</li>

          <li>• Help content</li>
        </ul>

        <div class="mt-4 p-3 bg-gray-50 rounded">
          <p class="text-xs text-gray-500">Aside width: 300px</p>
        </div>
      </div>
    </template>
  </DialogForm>
</template>
