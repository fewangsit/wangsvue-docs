<script setup lang="ts">
import { ref } from 'vue'
import { Dialog, Button } from '@fewangsit/wangsvue'

const modalVisible = ref(false)
const nonModalVisible = ref(false)
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <Button
      label="Show Modal Dialog"
      @click="modalVisible = true"
    />
    <Button
      label="Show Non-Modal Dialog"
      @click="nonModalVisible = true"
    />

    <!-- Modal Dialog -->
    <Dialog
      v-model:visible="modalVisible"
      header="Modal Dialog"
      :modal="true"
      :style="{ width: '50vw' }"
    >
      <p class="mb-4">
        This is a modal dialog that blocks interaction with the background content.
      </p>
      <p>
        The background is dimmed and you cannot interact with other elements until you close this dialog.
      </p>
    </Dialog>

    <!-- Non-Modal Dialog -->
    <Dialog
      v-model:visible="nonModalVisible"
      header="Non-Modal Dialog"
      :modal="false"
      :style="{ width: '50vw' }"
    >
      <p class="mb-4">
        This is a non-modal dialog that allows interaction with background content.
      </p>
      <p>
        You can still interact with other elements on the page while this dialog is open.
      </p>
    </Dialog>
  </div>
</template>
