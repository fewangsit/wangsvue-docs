<script setup lang="ts">
import { ref } from 'vue'
import { DialogForm, InputText, Button } from '@fewangsit/wangsvue'
import type { FormPayload } from '@fewangsit/wangsvue/form'

const visible = ref(false)

const onSubmit = (payload: FormPayload) => {
  console.log('Form submitted:', payload.formValues)
}
</script>

<template>
  <Button
    label="Open Dialog with Aside"
    @click="visible = true"
  />
  <DialogForm
    v-model:visible="visible"
    header="Dialog with Aside Right"
    :buttons-template="['submit', 'clear']"
    :aside-right-width="300"
    width="medium"
    @submit="onSubmit"
  >
    <template #fields>
      <InputText
        label="Name"
        field-name="name"
        :use-validator="true"
        :mandatory="true"
        :validator-message="{ empty: 'Name is required' }"
      />
      <InputText
        label="Description"
        field-name="description"
        :use-validator="true"
        :mandatory="false"
      />
    </template>

    <template #aside-right>
      <div class="p-4">
        <h5 class="font-semibold mb-2">
          Preview
        </h5>
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
          <p class="text-xs text-gray-500">
            Aside width: 300px
          </p>
        </div>
      </div>
    </template>
  </DialogForm>
</template>
