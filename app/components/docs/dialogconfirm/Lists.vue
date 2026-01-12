<script setup lang="ts">
import { Button, DialogConfirm } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const stringListVisible = ref(false);
const objectListVisible = ref(false);

const stringItems = [
  'Document 1.pdf',
  'Image 2.jpg',
  'Spreadsheet 3.xlsx',
  'Presentation 4.pptx',
];

const objectItems = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
];
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <Button
      @click="stringListVisible = true"
      label="Delete Files"
      severity="danger"
    />

    <Button
      @click="objectListVisible = true"
      label="Remove Users"
      severity="danger"
    />

    <!-- String List -->
    <DialogConfirm
      v-model:visible="stringListVisible"
      :list="stringItems"
      @close="stringListVisible = false"
      @confirm="stringListVisible = false"
      confirm-label="Delete All"
      header="Delete Files"
      message="The following files will be permanently deleted:"
      severity="danger"
    />

    <!-- Object List -->
    <DialogConfirm
      v-model:visible="objectListVisible"
      :list="objectItems"
      @close="objectListVisible = false"
      @confirm="objectListVisible = false"
      confirm-label="Remove Users"
      header="Remove Users"
      list-label="name"
      message="The following users will be removed from the system:"
      severity="danger"
    />
  </div>
</template>
