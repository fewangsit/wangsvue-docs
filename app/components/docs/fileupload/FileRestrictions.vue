<script setup lang="ts">
import { FileUpload } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const selectedImageFile = ref<File | null>(null);
const selectedDocFile = ref<File | null>(null);

const onImageSelect = (file: File): void => {
  selectedImageFile.value = file;
};

const onDocSelect = (file: File): void => {
  selectedDocFile.value = file;
};

const onError = (error: unknown): void => {
  console.error('File upload error:', error);
};
</script>

<template>
  <div class="space-y-6">
    <div>
      <h4 class="text-sm font-medium text-gray-700 mb-2">
        Images Only (Max 2MB)
      </h4>

      <FileUpload
        :max-file-size="2097152"
        @error="onError"
        @select="onImageSelect"
        accept="image/*"
        file-extensions="JPG, PNG, GIF"
        file-requirements="Max size: 2MB"
        label="Upload Image"
        placeholder="Select image file"
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
        :max-file-size="5242880"
        @error="onError"
        @select="onDocSelect"
        accept=".pdf,.doc,.docx,.txt"
        file-extensions="PDF, DOC, DOCX, TXT"
        file-requirements="Max size: 5MB"
        label="Upload Document"
        placeholder="Select document file"
      />

      <div class="mt-2 text-xs text-gray-600">
        Selected: {{ selectedDocFile ? selectedDocFile.name : 'None' }}
      </div>
    </div>
  </div>
</template>
