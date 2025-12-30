<script setup lang="ts">
import { Toast, Button, useToast } from '@fewangsit/wangsvue'

const toast = useToast()

const showSuccess = () => {
  toast.add({
    severity: 'success',
    message: 'Operation completed successfully!',
    life: 3000
  })
}

const showInfo = () => {
  toast.add({
    severity: 'info',
    message: 'Here is some useful information.',
    life: 3000
  })
}

const showError = () => {
  toast.add({
    severity: 'error',
    message: 'Something went wrong!',
    life: 3000
  })
}
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <Button
      label="Success"
      severity="success"
      @click="showSuccess"
    />
    <Button
      label="Info"
      severity="info"
      @click="showInfo"
    />
    <Button
      label="Error"
      severity="danger"
      @click="showError"
    />

    <Toast />
  </div>
</template>
