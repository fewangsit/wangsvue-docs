<script setup lang="ts">
import { Form, InputText, InputBadge, Textarea } from '@fewangsit/wangsvue'

const onSubmit = (payload: { formValues: Record<string, unknown> }) => {
  console.log('Project form submitted:', payload.formValues)
}

const onCancel = () => {
  console.log('Form cancelled')
}
</script>

<template>
  <Form
    :column-per-row="1"
    submit-btn-label="Create Project"
    @submit="onSubmit"
    @cancel="onCancel"
  >
    <template #fields="{ formValues }">
      <InputText
        v-model="formValues.projectName"
        label="Project Name"
        field-name="projectName"
        :use-validator="true"
        :mandatory="true"
        :validator-message="{
          empty: 'Project name is required'
        }"
      />

      <InputBadge
        v-model="formValues.technologies"
        label="Technologies"
        field-name="technologies"
        :use-validator="true"
        :mandatory="true"
        placeholder="Enter technologies used"
        field-info="Press Enter to add each technology"
        :validator-message="{
          empty: 'At least one technology is required'
        }"
      />

      <InputBadge
        v-model="formValues.tags"
        label="Project Tags"
        field-name="tags"
        :use-validator="true"
        placeholder="Enter project tags"
        field-info="Optional tags for categorization"
      />

      <InputBadge
        v-model="formValues.teamMembers"
        type="email"
        label="Team Members"
        field-name="teamMembers"
        :use-validator="true"
        placeholder="Enter team member emails"
        field-info="Email addresses of team members"
      />

      <Textarea
        v-model="formValues.description"
        label="Project Description"
        field-name="description"
        :use-validator="true"
        :mandatory="true"
        :max-input="2000"
        :auto-resize="true"
        :rows="4"
        placeholder="Describe your project"
        :validator-message="{
          empty: 'Project description is required',
          exceed: 'Description must not exceed 2000 characters'
        }"
      />
    </template>
  </Form>
</template>
