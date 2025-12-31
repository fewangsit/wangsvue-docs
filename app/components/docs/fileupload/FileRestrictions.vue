<script setup lang="ts">
import { ref } from 'vue'
import { FileUpload } from '@fewangsit/wangsvue'

const selectedImageFile = ref<File | null>(null)
const selectedDocFile = ref<File | null>(null)

const onImageSelect = (file: File) => {
  selectedImageFile.value = file
}

const onDocSelect = (file: File) => {
  selectedDocFile.value = file
}

const onError = (error: unknown) => {
  console.error('File upload error:', error)
}
</script>

<template>
  <div class="space-y-6">
    <div>
      <h4 class="text-sm font-medium text-gray-700 mb-2">
        Images Only (Max 2MB)
      </h4>
      <FileUpload
        accept="image/*"
        :max-file-size="2097152"
        label="Upload Image"
        placeholder="Select image file"
        file-extensions="JPG, PNG, GIF"
        file-requirements="Max size: 2MB"
        @select="onImageSelect"
        @error="onError"
      />
      <div class="mt-2 text-xs text-gray-600">
        Selected: {{ selectedImageFile ? selectedImageFile.name : 'None' }}
      </div>
    </div>

    <div>
      <h4 class="text-sm font-medium text-gray-700 mb-2">
        Documents Only (Max 5MB)
      </h4>
      <FileUpload
        accept=".pdf,.doc,.docx,.txt"
        :max-file-size="5242880"
        label="Upload Document"
        placeholder="Select document file"
        file-extensions="PDF, DOC, DOCX, TXT"
        file-requirements="Max size: 5MB"
        @select="onDocSelect"
        @error="onError"
      />
      <div class="mt-2 text-xs text-gray-600">
        Selected: {{ selectedDocFile ? selectedDocFile.name : 'None' }}
      </div>
    </div>
  </div>
</template>
