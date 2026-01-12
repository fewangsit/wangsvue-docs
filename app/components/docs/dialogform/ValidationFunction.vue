<script setup lang="ts">
import { Button, DialogForm, InputText } from '@fewangsit/wangsvue';
import type { FormPayload } from '@fewangsit/wangsvue/form';
import { ref } from 'vue';

const visible = ref(false);
const invalid = ref(false);
const validationMessage = ref('');
const dialogForm = useTemplateRef('dialogForm');

const onSubmit = (payload: FormPayload): void => {
  console.log('Form submitted:', payload.formValues);
};

// Custom validation function that runs after built-in validation
const customValidation = async (
  values: FormPayload['formValues'],
): Promise<void> => {
  console.log('Running custom validation with values:', values);

  // Reset validation state
  invalid.value = false;
  validationMessage.value = '';

  // Example: Check if name contains forbidden words
  const name = values.name as string;
  if (name && name.toLowerCase().includes('admin')) {
    invalid.value = true;
    dialogForm.value?.setErrors({ name: 'Name cannot contain "admin"' });
    validationMessage.value = 'Name cannot contain "admin"';
    return;
  }

  // Example: Simulate async validation (e.g., API call)
  if (name && name.length > 0) {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Example: Check if name is already taken
    const existingNames = ['john', 'jane', 'bob'];
    if (existingNames.includes(name.toLowerCase())) {
      invalid.value = true;
      dialogForm.value?.setErrors({ name: 'This name is already taken' });
      validationMessage.value = 'This name is already taken';
      return;
    }
  }

  // If we reach here, validation passed
  console.log('Custom validation passed');
};

watch(
  () => dialogForm.value?.form?.values,
  () => {
    // Reset validation state on input change
    if (invalid.value) {
      invalid.value = false;
      validationMessage.value = '';
    }
  },
  { deep: true },
);
</script>

<template>
  <Button @click="visible = true" label="Open Dialog with Custom Validation" />

  <DialogForm
    ref="dialogForm"
    v-model:visible="visible"
    :buttons-template="['submit', 'clear']"
    :invalid="invalid"
    :reset-after-submit="false"
    :validation-function="customValidation"
    :validator-message="validationMessage"
    @submit="onSubmit"
    header="Dialog with Custom Validation"
  >
    <template #fields>
      <InputText
        :validator-message="{ empty: 'Name is required' }"
        field-name="name"
        label="Name"
        mandatory
        use-validator
      />

      <span class="font-light">Tip: Type 'admin' to make validation fail</span>
    </template>
  </DialogForm>
</template>
