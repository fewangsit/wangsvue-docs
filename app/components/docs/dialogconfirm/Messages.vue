<script setup lang="ts">
import { Button, DialogConfirm } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const shortVisible = ref(false);
const longVisible = ref(false);
const customVisible = ref(false);
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <Button @click="shortVisible = true" label="Short Message" />

    <Button @click="longVisible = true" label="Long Message" />

    <Button @click="customVisible = true" label="Custom Labels" />

    <!-- Short Message -->
    <DialogConfirm
      v-model:visible="shortVisible"
      @close="shortVisible = false"
      @confirm="shortVisible = false"
      header="Quick Action"
      message="Proceed with this action?"
      severity="primary"
    />

    <!-- Long Message -->
    <DialogConfirm
      v-model:visible="longVisible"
      @close="longVisible = false"
      @confirm="longVisible = false"
      header="Important Notice"
      message="This action will permanently remove all selected items from your account. Once deleted, these items cannot be recovered. Please make sure you have backed up any important data before proceeding. Are you absolutely certain you want to continue?"
      severity="danger"
    />

    <!-- Custom Labels -->
    <DialogConfirm
      v-model:visible="customVisible"
      @close="customVisible = false"
      @confirm="customVisible = false"
      close-label="Not Now"
      confirm-label="Export Now"
      header="Export Data"
      message="Ready to export your data to CSV format?"
      severity="success"
    />
  </div>
</template>
