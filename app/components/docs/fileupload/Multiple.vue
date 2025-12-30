<script setup lang="ts">
import { ref } from 'vue'
import { FileUpload } from '@fewangsit/wangsvue'

const selectedFiles = ref<File[]>([])

const onFilesSelect = (files: File[]) => {
  selectedFiles.value = files
  console.log('Files selected:', files.map(f => f.name))
}
</script>

<template>
  <div class="space-y-4">
    <FileUpload
      :multiple="true"
      label="Upload Multiple Files"
      placeholder="Select multiple files"
      @select="onFilesSelect"
    />

    <div class="text-sm text-gray-600">
      <p>Selected Files: {{ selectedFiles.length }} file(s)</p>
      <ul
        v-if="selectedFiles.length > 0"
        class="mt-2 space-y-1"
      >
        <li
          v-for="file in selectedFiles"
          :key="file.name"
          class="flex justify-between"
        >
          <span>{{ file.name }}</span>
          <span>{{ (file.size / 1024).toFixed(2) }} KB</span>
        </li>
      </ul>
    </div>
  </div>
</template>
