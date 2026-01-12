<script setup lang="ts">
import { Button, Dialog } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const draggableVisible = ref(false);
const nonDraggableVisible = ref(false);
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <Button @click="draggableVisible = true" label="Show Draggable Dialog" />

    <Button
      @click="nonDraggableVisible = true"
      label="Show Non-Draggable Dialog"
    />

    <!-- Draggable Dialog -->
    <Dialog
      v-model:visible="draggableVisible"
      class="w-[50vw]"
      draggable
      header="Draggable Dialog"
      keep-in-view-port
    >
      <p class="mb-4">
        This dialog can be dragged around the screen by clicking and dragging
        the header.
      </p>

      <p>The dialog is constrained to stay within the viewport boundaries.</p>
    </Dialog>

    <!-- Non-Draggable Dialog -->
    <Dialog
      v-model:visible="nonDraggableVisible"
      :draggable="false"
      class="w-[50vw]"
      header="Non-Draggable Dialog"
    >
      <p class="mb-4">This dialog cannot be moved from its position.</p>

      <p>The header is not interactive for dragging.</p>
    </Dialog>
  </div>
</template>
