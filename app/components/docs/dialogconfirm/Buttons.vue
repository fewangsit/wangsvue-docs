<script setup lang="ts">
import { ref } from 'vue'
import { DialogConfirm, Button } from '@fewangsit/wangsvue'

const disabledVisible = ref(false)
const noCloseVisible = ref(false)
const noActionVisible = ref(false)
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <Button
      label="Disabled Confirm"
      @click="disabledVisible = true"
    />
    <Button
      label="No Close Button"
      @click="noCloseVisible = true"
    />
    <Button
      label="No Action"
      @click="noActionVisible = true"
    />

    <!-- Disabled Confirm Button -->
    <DialogConfirm
      v-model:visible="disabledVisible"
      header="Processing Required"
      severity="primary"
      message="Please complete the required fields before proceeding."
      :disable-confirm-button="true"
      confirm-label="Proceed"
      @confirm="disabledVisible = false"
      @close="disabledVisible = false"
    />

    <!-- No Close Button -->
    <DialogConfirm
      v-model:visible="noCloseVisible"
      header="Mandatory Action"
      severity="danger"
      message="This action is required and cannot be cancelled."
      :show-close-button="false"
      confirm-label="Accept"
      @confirm="noCloseVisible = false"
    />

    <!-- No Action (Info Only) -->
    <DialogConfirm
      v-model:visible="noActionVisible"
      header="Information"
      severity="success"
      message="Your request has been processed successfully."
      :actionable="false"
      @close="noActionVisible = false"
    />
  </div>
</template>
