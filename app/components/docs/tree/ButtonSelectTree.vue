<script setup lang="ts">
import { ButtonSelectTree, Form } from '@fewangsit/wangsvue';
import type { FormPayload } from '@fewangsit/wangsvue/form';

import { fetchTree } from './mockData';

const onSubmit = (payload: FormPayload): void => {
  console.log('Form submitted:', payload);
};
</script>

<template>
  <Form :buttons-template="['submit', 'clear']" @submit="onSubmit">
    <template #fields>
      <ButtonSelectTree
        :fetch-tree="fetchTree"
        field-name="category"
        label="Select Category"
        mandatory
        type="category"
        use-validator
      />
    </template>
  </Form>
</template>
