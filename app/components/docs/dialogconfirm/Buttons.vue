<script setup lang="ts">
import { Button, DialogConfirm } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const disabledVisible = ref(false);
const noCloseVisible = ref(false);
const noActionVisible = ref(false);
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <Button @click="disabledVisible = true" label="Disabled Confirm" />

    <Button @click="noCloseVisible = true" label="No Close Button" />

    <Button @click="noActionVisible = true" label="No Action" />

    <!-- Disabled Confirm Button -->
    <DialogConfirm
      v-model:visible="disabledVisible"
      @close="disabledVisible = false"
      @confirm="disabledVisible = false"
      confirm-label="Proceed"
      disable-confirm-button
      header="Processing Required"
      message="Please complete the required fields before proceeding."
      severity="primary"
    />

    <!-- No Close Button -->
    <DialogConfirm
      v-model:visible="noCloseVisible"
      :show-close-button="false"
      @confirm="noCloseVisible = false"
      confirm-label="Accept"
      header="Mandatory Action"
      message="This action is required and cannot be cancelled."
      severity="danger"
    />

    <!-- No Action (Info Only) -->
    <DialogConfirm
      v-model:visible="noActionVisible"
      :actionable="false"
      @close="noActionVisible = false"
      header="Information"
      message="Your request has been processed successfully."
      severity="success"
    />
  </div>
</template>
