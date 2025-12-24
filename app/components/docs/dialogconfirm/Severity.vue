<script setup lang="ts">
import { ref } from 'vue'
import { DialogConfirm, Button } from '@fewangsit/wangsvue'

const dangerVisible = ref(false)
const successVisible = ref(false)
const primaryVisible = ref(false)
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <Button
      label="Danger"
      severity="danger"
      @click="dangerVisible = true"
    />
    <Button
      label="Success"
      severity="success"
      @click="successVisible = true"
    />
    <Button
      label="Primary"
      severity="primary"
      @click="primaryVisible = true"
    />

    <!-- Danger Severity -->
    <DialogConfirm
      v-model:visible="dangerVisible"
      header="Delete Account"
      severity="danger"
      message="This will permanently delete your account and all associated data."
      confirm-label="Delete Account"
      @confirm="dangerVisible = false"
      @close="dangerVisible = false"
    />

    <!-- Success Severity -->
    <DialogConfirm
      v-model:visible="successVisible"
      header="Save Changes"
      severity="success"
      message="Your changes have been saved successfully."
      confirm-label="Continue"
      @confirm="successVisible = false"
      @close="successVisible = false"
    />

    <!-- Primary Severity -->
    <DialogConfirm
      v-model:visible="primaryVisible"
      header="Update Profile"
      severity="primary"
      message="Do you want to update your profile information?"
      confirm-label="Update"
      @confirm="primaryVisible = false"
      @close="primaryVisible = false"
    />
  </div>
</template>
