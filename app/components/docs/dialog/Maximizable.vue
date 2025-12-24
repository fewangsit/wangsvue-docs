<script setup lang="ts">
import { ref } from 'vue'
import { Dialog, Button } from '@fewangsit/wangsvue'

const visible = ref(false)
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <Button
      label="Show Maximizable Dialog"
      @click="visible = true"
    />

    <Dialog
      v-model:visible="visible"
      header="Maximizable Dialog"
      :maximizable="true"
      :style="{ width: '50vw' }"
    >
      <p class="mb-4">
        This dialog can be maximized to fill the entire screen.
      </p>
      <p class="mb-4">
        Click the maximize button in the header to toggle between normal and maximized states.
      </p>
      <p>
        When maximized, the dialog will take up the full viewport. Click the minimize button to restore it to its original size.
      </p>
    </Dialog>
  </div>
</template>
