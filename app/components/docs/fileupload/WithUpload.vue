<script setup lang="ts">
import { ref } from 'vue'
import { FileUpload } from '@fewangsit/wangsvue'

const selectedFiles = ref<File[]>([])
const isUploading = ref(false)
const uploadStatus = ref('')

const onFilesSelect = (files: File[]) => {
  selectedFiles.value = files
  uploadStatus.value = ''
}

const uploadFiles = async (files: File[]) => {
  isUploading.value = true
  uploadStatus.value = 'Uploading files...'

  try {
    // Simulate file upload with progress
    for (let i = 0; i < files.length; i++) {
      uploadStatus.value = `Uploading ${files[i]?.name} (${i + 1}/${files.length})`

      // Simulate upload delay
      await new Promise(resolve => setTimeout(resolve, 1500))
    }

    uploadStatus.value = `Successfully uploaded ${files.length} file(s)!`
  } catch (error) {
    uploadStatus.value = 'Upload failed. Please try again.'
    console.error('Upload error:', error)
  } finally {
    isUploading.value = false
  }
}

const onUploadComplete = () => {
  console.log('Upload completed successfully')
}

const onUploadError = (error: unknown) => {
  console.error('Upload error:', error)
  uploadStatus.value = 'Upload failed. Please try again.'
}
</script>

<template>
  <div class="space-y-4">
    <FileUpload
      :multiple="true"
      :with-upload="true"
      :upload-function="uploadFiles"
      label="Upload Files with Progress"
      placeholder="Select files to upload"
      upload-label="Start Upload"
      @select="onFilesSelect"
      @upload="onUploadComplete"
      @error="onUploadError"
    />

    <div class="text-sm text-gray-600">
      <p>Selected Files: {{ selectedFiles.length }} file(s)</p>
      <p
        v-if="uploadStatus"
        class="mt-2 font-medium"
        :class="{
          'text-blue-600': isUploading,
          'text-green-600': uploadStatus.includes('Successfully'),
          'text-red-600': uploadStatus.includes('failed')
        }"
      >
        {{ uploadStatus }}
      </p>
    </div>
  </div>
</template>
