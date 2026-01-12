<script setup lang="ts">
import { FileUpload } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const selectedFiles = ref<File[]>([]);
const isUploading = ref(false);
const uploadStatus = ref('');

const onFilesSelect = (files: File[]): void => {
  selectedFiles.value = files;
  uploadStatus.value = '';
};

const uploadFiles = async (files: File[]): Promise<void> => {
  isUploading.value = true;
  uploadStatus.value = 'Uploading files...';

  try {
    // Simulate file upload with progress
    for (let i = 0; i < files.length; i++) {
      uploadStatus.value = `Uploading ${files[i]?.name} (${i + 1}/${files.length})`;

      // Simulate upload delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
    }

    uploadStatus.value = `Successfully uploaded ${files.length} file(s)!`;
  } catch (error) {
    uploadStatus.value = 'Upload failed. Please try again.';
    console.error('Upload error:', error);
  } finally {
    isUploading.value = false;
  }
};

const onUploadComplete = (): void => {
  console.log('Upload completed successfully');
};

const onUploadError = (error: unknown): void => {
  console.error('Upload error:', error);
  uploadStatus.value = 'Upload failed. Please try again.';
};
</script>

<template>
  <div class="space-y-4">
    <FileUpload
      :upload-function="uploadFiles"
      @error="onUploadError"
      @select="onFilesSelect"
      @upload="onUploadComplete"
      label="Upload Files with Progress"
      multiple
      placeholder="Select files to upload"
      upload-label="Start Upload"
      with-upload
    />

    <div class="text-sm text-gray-600">
      <p>Selected Files: {{ selectedFiles.length }} file(s)</p>

      <p
        v-if="uploadStatus"
        :class="{
          'text-blue-600': isUploading,
          'text-green-600': uploadStatus.includes('Successfully'),
          'text-red-600': uploadStatus.includes('failed'),
        }"
        class="mt-2 font-medium"
      >
        {{ uploadStatus }}
      </p>
    </div>
  </div>
</template>
