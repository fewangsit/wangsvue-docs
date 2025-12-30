<script setup lang="ts">
import { Toast, Button, useToast } from '@fewangsit/wangsvue'

const toast = useToast()

const showCustomMessage = () => {
  toast.add({
    severity: 'info',
    message: 'This toast uses a custom message template',
    life: 5000,
    group: 'custom'
  })
}

const showCustomContainer = () => {
  toast.add({
    severity: 'success',
    message: 'This toast uses a custom container template',
    life: 5000,
    group: 'container'
  })
}
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <Button
      label="Custom Message"
      @click="showCustomMessage"
    />
    <Button
      label="Custom Container"
      @click="showCustomContainer"
    />

    <!-- Custom Message Template -->
    <Toast group="custom">
      <template #message="{ message }">
        <div class="flex items-center gap-3 p-4">
          <div class="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
            <i class="wangs-icon-info text-white" />
          </div>
          <div class="flex-1">
            <h4 class="font-semibold text-blue-900">
              Custom Message
            </h4>
            <p class="text-sm text-blue-700">
              {{ message }}
            </p>
            <div class="mt-2 flex gap-2">
              <Button
                label="Action"
                size="small"
                severity="primary"
              />
              <Button
                label="Dismiss"
                size="small"
                severity="secondary"
                text
              />
            </div>
          </div>
        </div>
      </template>
    </Toast>

    <!-- Custom Container Template -->
    <Toast group="container">
      <template #container="{ message, closeCallback }">
        <div class="bg-linear-to-r from-green-400 to-green-600 text-white p-4 rounded-lg shadow-lg">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <i class="wangs-icon-check text-2xl" />
              <div>
                <h4 class="font-bold">
                  Success
                </h4>
                <p class="text-sm opacity-90">
                  {{ message }}
                </p>
              </div>
            </div>
            <button
              class="text-white hover:text-green-200"
              @click="closeCallback"
            >
              <i class="wangs-icon-close" />
            </button>
          </div>
        </div>
      </template>
    </Toast>
  </div>
</template>
