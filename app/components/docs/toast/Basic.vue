<script setup lang="ts">
import { Toast, Button, useToast } from '@fewangsit/wangsvue'

const toast = useToast()

const showBasic = () => {
  toast.add({
    severity: 'info',
    message: 'This is a basic toast message.',
    life: 3000
  })
}
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <Button
      label="Show Toast"
      @click="showBasic"
    />

    <Toast />
  </div>
</template>
