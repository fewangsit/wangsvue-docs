<script setup lang="ts">
import { Button, DialogConfirm } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const bodyVisible = ref(false);
const footerVisible = ref(false);

const handleCustomAction = (): void => {
  console.log('Custom action performed');
  footerVisible.value = false;
};
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <Button @click="bodyVisible = true" label="Custom Body" />

    <Button @click="footerVisible = true" label="Custom Footer" />

    <!-- Custom Body -->
    <DialogConfirm
      v-model:visible="bodyVisible"
      @close="bodyVisible = false"
      @confirm="bodyVisible = false"
      header="Terms and Conditions"
      severity="primary"
    >
      <template #body>
        <div class="space-y-4">
          <div class="bg-blue-50 p-4 rounded-lg">
            <h4 class="font-semibold text-blue-800 mb-2">Important Notice</h4>

            <p class="text-blue-700">
              By proceeding, you agree to our updated terms and conditions.
            </p>
          </div>

          <div class="space-y-2">
            <label class="flex items-center gap-2">
              <input class="rounded" type="checkbox" />

              <span class="text-sm">I have read and agree to the terms</span>
            </label>

            <label class="flex items-center gap-2">
              <input class="rounded" type="checkbox" />

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
      message="Choose your preferred action:"
      severity="primary"
    >
      <template #footer>
        <div class="flex justify-between items-center w-full">
          <Button
            @click="footerVisible = false"
            label="Skip"
            severity="secondary"
            text
          />

          <div class="flex gap-2">
            <Button
              @click="handleCustomAction"
              label="Save Draft"
              severity="secondary"
            />

            <Button
              @click="handleCustomAction"
              label="Publish"
              severity="success"
            />

            <Button
              @click="handleCustomAction"
              label="Schedule"
              severity="primary"
            />
          </div>
        </div>
      </template>
    </DialogConfirm>
  </div>
</template>
