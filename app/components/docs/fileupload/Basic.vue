<script setup lang="ts">
import { ref } from 'vue'
import { FileUpload } from '@fewangsit/wangsvue'

const selectedFile = ref<File | null>(null)

const onFileSelect = (file: File) => {
  selectedFile.value = file
  console.log('File selected:', file.name)
}
</script>

<template>
  <div class="space-y-4">
    <FileUpload
      label="Upload Document"
      placeholder="Select a file"
      @select="onFileSelect"
    />

    <div class="text-sm text-gray-600">
      <p>Selected File: {{ selectedFile ? selectedFile.name : 'None' }}</p>
      <p v-if="selectedFile">
        Size: {{ (selectedFile.size / 1024).toFixed(2) }} KB
      </p>
    </div>
  </div>
</template>
