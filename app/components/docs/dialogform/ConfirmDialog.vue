<script setup lang="ts">
import {
  Button,
  DialogConfirm,
  DialogForm,
  InputText,
} from '@fewangsit/wangsvue';
import { ref } from 'vue';

const visible = ref(false);

const handleFormSubmit = async (
  formValues: Record<string, unknown>,
): Promise<void> => {
  console.log('Form submitted via confirm:', formValues);
  /*
   * Here you would typically make an API call
   * await api.submitForm(formValues)
   */
};
</script>

<template>
  <Button @click="visible = true" label="Open Dialog with Confirm" />

  <DialogForm
    v-model:visible="visible"
    :buttons-template="['submit', 'clear']"
    header="Dialog with Confirmation"
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

    <template #confirm="{ visible: confirmVisible, hide, submit }">
      <DialogConfirm
        :visible="confirmVisible"
        @close="hide"
        @confirm="submit(handleFormSubmit)"
        close-label="Cancel"
        confirm-label="Yes, Submit"
        header="Confirm Submission"
        message="Are you sure you want to submit this form?"
        severity="primary"
      />
    </template>
  </DialogForm>
</template>
