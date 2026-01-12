<script setup lang="ts">
import { Button, Dialog } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const modalVisible = ref(false);
const nonModalVisible = ref(false);
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <Button @click="modalVisible = true" label="Show Modal Dialog" />

    <Button @click="nonModalVisible = true" label="Show Non-Modal Dialog" />

    <!-- Modal Dialog -->
    <Dialog
      v-model:visible="modalVisible"
      class="w-[50vw]"
      header="Modal Dialog"
      modal
    >
      <p class="mb-4">
        This is a modal dialog that blocks interaction with the background
        content.
      </p>

      <p>
        The background is dimmed and you cannot interact with other elements
        until you close this dialog.
      </p>
    </Dialog>

    <!-- Non-Modal Dialog -->
    <Dialog
      v-model:visible="nonModalVisible"
      :modal="false"
      class="w-[50vw]"
      header="Non-Modal Dialog"
    >
      <p class="mb-4">
        This is a non-modal dialog that allows interaction with background
        content.
      </p>

      <p>
        You can still interact with other elements on the page while this dialog
        is open.
      </p>
    </Dialog>
  </div>
</template>
