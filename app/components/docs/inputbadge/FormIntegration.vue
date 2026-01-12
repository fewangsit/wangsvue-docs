<script setup lang="ts">
import { Form, InputBadge } from '@fewangsit/wangsvue';
import type { FormPayload } from '@fewangsit/wangsvue/form';

const onSubmit = (payload: FormPayload): void => {
  console.log('Form submitted:', payload.formValues);
};

const onCancel = (): void => {
  console.log('Form cancelled');
};
</script>

<template>
  <Form
    :buttons-template="['submit', 'cancel', 'clear']"
    :column-per-row="1"
    @cancel="onCancel"
    @submit="onSubmit"
    hide-stay-checkbox
    submit-btn-label="Save Tags"
  >
    <template #fields="{ formValues }">
      <InputBadge
        :initial-value="['JavaScript', 'Vue.js']"
        :validator-message="{
          empty: 'At least one skill is required',
        }"
        field-info="Press Enter to add each skill"
        field-name="skills"
        label="Skills"
        mandatory
        placeholder="Enter your skills"
        use-validator
      />

      <InputBadge
        :editable-values="['Frontend', 'Backend']"
        :initial-value="['Non Editable Tag']"
        :removable-values="['Frontend', 'Backend', 'Database']"
        field-info="Optional tags for categorization"
        field-name="projectTags"
        label="Project Tags"
        placeholder="Enter project tags"
        remove-button-variant="disabled"
        use-validator
      />

      <!-- Example of conditional rendering based on form values -->
      <InputBadge
        v-if="
          formValues.skills &&
          (formValues.skills as string[]).includes('Vue.js')
        "
        :initial-value="['Nuxt.js', 'Pinia']"
        field-info="Shown because Vue.js is in your skills"
        field-name="vueLibraries"
        label="Vue.js Libraries"
        placeholder="Enter Vue.js related libraries"
        use-validator
      />
    </template>
  </Form>
</template>
