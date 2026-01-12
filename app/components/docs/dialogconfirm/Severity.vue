<script setup lang="ts">
import { Button, DialogConfirm } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const dangerVisible = ref(false);
const successVisible = ref(false);
const primaryVisible = ref(false);
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <Button @click="dangerVisible = true" label="Danger" severity="danger" />

    <Button @click="successVisible = true" label="Success" severity="success" />

    <Button @click="primaryVisible = true" label="Primary" severity="primary" />

    <!-- Danger Severity -->
    <DialogConfirm
      v-model:visible="dangerVisible"
      @close="dangerVisible = false"
      @confirm="dangerVisible = false"
      confirm-label="Delete Account"
      header="Delete Account"
      message="This will permanently delete your account and all associated data."
      severity="danger"
    />

    <!-- Success Severity -->
    <DialogConfirm
      v-model:visible="successVisible"
      @close="successVisible = false"
      @confirm="successVisible = false"
      confirm-label="Continue"
      header="Save Changes"
      message="Your changes have been saved successfully."
      severity="success"
    />

    <!-- Primary Severity -->
    <DialogConfirm
      v-model:visible="primaryVisible"
      @close="primaryVisible = false"
      @confirm="primaryVisible = false"
      confirm-label="Update"
      header="Update Profile"
      message="Do you want to update your profile information?"
      severity="primary"
    />
  </div>
</template>
