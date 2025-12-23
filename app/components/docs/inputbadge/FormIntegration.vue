<script setup lang="ts">
import { Form, InputBadge } from '@fewangsit/wangsvue'

const onSubmit = (payload: { formValues: Record<string, unknown> }) => {
  console.log('Form submitted:', payload.formValues)
}

const onCancel = () => {
  console.log('Form cancelled')
}
</script>

<template>
  <Form
    :column-per-row="1"
    submit-btn-label="Save Tags"
    :buttons-template="['submit', 'cancel', 'clear']"
    :hide-stay-checkbox="true"
    @submit="onSubmit"
    @cancel="onCancel"
  >
    <template #fields="{ formValues }">
      <InputBadge
        label="Skills"
        field-name="skills"
        :use-validator="true"
        :mandatory="true"
        :initial-value="['JavaScript', 'Vue.js']"
        placeholder="Enter your skills"
        field-info="Press Enter to add each skill"
        :validator-message="{
          empty: 'At least one skill is required'
        }"
      />

      <InputBadge
        :use-validator="true"
        :initial-value="['Non Editable Tag']"
        :editable-values="['Frontend', 'Backend']"
        :removable-values="['Frontend', 'Backend', 'Database']"
        label="Project Tags"
        field-name="projectTags"
        placeholder="Enter project tags"
        field-info="Optional tags for categorization"
        remove-button-variant="disabled"
      />

      <!-- Example of conditional rendering based on form values -->
      <InputBadge
        v-if="formValues.skills && (formValues.skills as string[]).includes('Vue.js')"
        label="Vue.js Libraries"
        field-name="vueLibraries"
        :use-validator="true"
        :initial-value="['Nuxt.js', 'Pinia']"
        placeholder="Enter Vue.js related libraries"
        field-info="Shown because Vue.js is in your skills"
      />
    </template>
  </Form>
</template>
