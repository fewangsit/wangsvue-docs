<script setup lang="ts">
import { FileUpload } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const selectedFiles = ref<File[]>([]);

const onFilesSelect = (files: File[]): void => {
  selectedFiles.value = files;
  console.log(
    'Files selected:',
    files.map((f) => f.name),
  );
};
</script>

<template>
  <div class="space-y-4">
    <FileUpload
      @select="onFilesSelect"
      label="Upload Multiple Files"
      multiple
      placeholder="Select multiple files"
    />

    <div class="text-sm text-gray-600">
      <p>Selected Files: {{ selectedFiles.length }} file(s)</p>

      <ul v-if="selectedFiles.length > 0" class="mt-2 space-y-1">
        <li
          :key="file.name"
          v-for="file in selectedFiles"
          class="flex justify-between"
        >
          <span>{{ file.name }}</span>

          <span>{{ (file.size / 1024).toFixed(2) }} KB</span>
        </li>
      </ul>
    </div>
  </div>
</template>
