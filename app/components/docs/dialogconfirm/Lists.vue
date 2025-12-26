<script setup lang="ts">
import { ref } from 'vue'
import { DialogConfirm, Button } from '@fewangsit/wangsvue'

const stringListVisible = ref(false)
const objectListVisible = ref(false)

const stringItems = ['Document 1.pdf', 'Image 2.jpg', 'Spreadsheet 3.xlsx', 'Presentation 4.pptx']

const objectItems = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com' }
]
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <Button
      label="Delete Files"
      severity="danger"
      @click="stringListVisible = true"
    />
    <Button
      label="Remove Users"
      severity="danger"
      @click="objectListVisible = true"
    />

    <!-- String List -->
    <DialogConfirm
      v-model:visible="stringListVisible"
      header="Delete Files"
      severity="danger"
      message="The following files will be permanently deleted:"
      :list="stringItems"
      confirm-label="Delete All"
      @confirm="stringListVisible = false"
      @close="stringListVisible = false"
    />

    <!-- Object List -->
    <DialogConfirm
      v-model:visible="objectListVisible"
      header="Remove Users"
      severity="danger"
      message="The following users will be removed from the system:"
      :list="objectItems"
      list-label="name"
      confirm-label="Remove Users"
      @confirm="objectListVisible = false"
      @close="objectListVisible = false"
    />
  </div>
</template>
