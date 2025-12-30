<script setup lang="ts">
import { Toast, Button, useToast } from '@fewangsit/wangsvue'

const toast = useToast()

const showClosable = () => {
  toast.add({
    severity: 'info',
    message: 'This toast can be closed manually',
    life: 0 // Infinite duration
  })
}

const showAutoClose = () => {
  toast.add({
    severity: 'success',
    message: 'This toast will auto-close in 3 seconds',
    life: 3000
  })
}
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <Button
      label="Closable Toast"
      @click="showClosable"
    />
    <Button
      label="Auto-Close Toast"
      @click="showAutoClose"
    />

    <Toast />
  </div>
</template>
