<script setup lang="ts">
import { ref } from 'vue'
import { DialogConfirm, Button } from '@fewangsit/wangsvue'

const bodyVisible = ref(false)
const footerVisible = ref(false)

const handleCustomAction = () => {
  console.log('Custom action performed')
  footerVisible.value = false
}
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <Button
      label="Custom Body"
      @click="bodyVisible = true"
    />
    <Button
      label="Custom Footer"
      @click="footerVisible = true"
    />

    <!-- Custom Body -->
    <DialogConfirm
      v-model:visible="bodyVisible"
      header="Terms and Conditions"
      severity="primary"
      @confirm="bodyVisible = false"
      @close="bodyVisible = false"
    >
      <template #body>
        <div class="space-y-4">
          <div class="bg-blue-50 p-4 rounded-lg">
            <h4 class="font-semibold text-blue-800 mb-2">
              Important Notice
            </h4>
            <p class="text-blue-700">
              By proceeding, you agree to our updated terms and conditions.
            </p>
          </div>
          <div class="space-y-2">
            <label class="flex items-center gap-2">
              <input
                type="checkbox"
                class="rounded"
              >
              <span class="text-sm">I have read and agree to the terms</span>
            </label>
            <label class="flex items-center gap-2">
              <input
                type="checkbox"
                class="rounded"
              >
              <span class="text-sm">I consent to data processing</span>
            </label>
          </div>
        </div>
      </template>
    </DialogConfirm>

    <!-- Custom Footer -->
    <DialogConfirm
      v-model:visible="footerVisible"
      header="Advanced Options"
      severity="primary"
      message="Choose your preferred action:"
    >
      <template #footer>
        <div class="flex justify-between items-center w-full">
          <Button
            label="Skip"
            severity="secondary"
            text
            @click="footerVisible = false"
          />
          <div class="flex gap-2">
            <Button
              label="Save Draft"
              severity="secondary"
              @click="handleCustomAction"
            />
            <Button
              label="Publish"
              severity="success"
              @click="handleCustomAction"
            />
            <Button
              label="Schedule"
              severity="primary"
              @click="handleCustomAction"
            />
          </div>
        </div>
      </template>
    </DialogConfirm>
  </div>
</template>
