<script setup lang="ts">
import { Form, InputNumber } from '@fewangsit/wangsvue'

const onSubmit = (payload: { formValues: Record<string, unknown> }) => {
  console.log('Form submitted:', payload.formValues)
}
</script>

<template>
  <Form
    :buttons-template="['submit', 'clear']"
    @submit="onSubmit"
  >
    <template #fields>
      <InputNumber
        label="Quantity"
        field-name="quantity"
        :use-validator="true"
        :mandatory="true"
        :min="1"
        :max="999"
        :show-buttons="true"
        :validator-message="{
          empty: 'Quantity is required'
        }"
      />
    </template>
  </Form>
</template>
