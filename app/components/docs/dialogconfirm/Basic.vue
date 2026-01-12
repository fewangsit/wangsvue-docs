<script setup lang="ts">
import { Button, DialogConfirm } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const visible = ref(false);

const showConfirm = (): void => {
  visible.value = true;
};

const handleConfirm = (): void => {
  console.log('Confirmed!');
  visible.value = false;
};

const handleClose = (): void => {
  console.log('Cancelled!');
  visible.value = false;
};
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <Button @click="showConfirm" label="Show Confirmation" />

    <DialogConfirm
      v-model:visible="visible"
      @close="handleClose"
      @confirm="handleConfirm"
      close-label="Cancel"
      confirm-label="Delete"
      header="Delete Item"
      message="Are you sure you want to delete this item? This action cannot be undone."
      severity="danger"
    />
  </div>
</template>
