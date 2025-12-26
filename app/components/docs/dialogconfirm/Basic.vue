<script setup lang="ts">
import { ref } from 'vue'
import { DialogConfirm, Button } from '@fewangsit/wangsvue'

const visible = ref(false)

const showConfirm = () => {
  visible.value = true
}

const handleConfirm = () => {
  console.log('Confirmed!')
  visible.value = false
}

const handleClose = () => {
  console.log('Cancelled!')
  visible.value = false
}
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <Button
      label="Show Confirmation"
      @click="showConfirm"
    />

    <DialogConfirm
      v-model:visible="visible"
      header="Delete Item"
      severity="danger"
      message="Are you sure you want to delete this item? This action cannot be undone."
      confirm-label="Delete"
      close-label="Cancel"
      @confirm="handleConfirm"
      @close="handleClose"
    />
  </div>
</template>
