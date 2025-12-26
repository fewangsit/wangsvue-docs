<script setup lang="ts">
import { ref } from 'vue'
import { DialogConfirm, Button } from '@fewangsit/wangsvue'

const shortVisible = ref(false)
const longVisible = ref(false)
const customVisible = ref(false)
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <Button
      label="Short Message"
      @click="shortVisible = true"
    />
    <Button
      label="Long Message"
      @click="longVisible = true"
    />
    <Button
      label="Custom Labels"
      @click="customVisible = true"
    />

    <!-- Short Message -->
    <DialogConfirm
      v-model:visible="shortVisible"
      header="Quick Action"
      severity="primary"
      message="Proceed with this action?"
      @confirm="shortVisible = false"
      @close="shortVisible = false"
    />

    <!-- Long Message -->
    <DialogConfirm
      v-model:visible="longVisible"
      header="Important Notice"
      severity="danger"
      message="This action will permanently remove all selected items from your account. Once deleted, these items cannot be recovered. Please make sure you have backed up any important data before proceeding. Are you absolutely certain you want to continue?"
      @confirm="longVisible = false"
      @close="longVisible = false"
    />

    <!-- Custom Labels -->
    <DialogConfirm
      v-model:visible="customVisible"
      header="Export Data"
      severity="success"
      message="Ready to export your data to CSV format?"
      confirm-label="Export Now"
      close-label="Not Now"
      @confirm="customVisible = false"
      @close="customVisible = false"
    />
  </div>
</template>
