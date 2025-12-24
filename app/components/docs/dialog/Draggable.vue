<script setup lang="ts">
import { ref } from 'vue'
import { Dialog, Button } from '@fewangsit/wangsvue'

const draggableVisible = ref(false)
const nonDraggableVisible = ref(false)
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <Button
      label="Show Draggable Dialog"
      @click="draggableVisible = true"
    />
    <Button
      label="Show Non-Draggable Dialog"
      @click="nonDraggableVisible = true"
    />

    <!-- Draggable Dialog -->
    <Dialog
      v-model:visible="draggableVisible"
      header="Draggable Dialog"
      :draggable="true"
      :keep-in-view-port="true"
      :style="{ width: '50vw' }"
    >
      <p class="mb-4">
        This dialog can be dragged around the screen by clicking and dragging the header.
      </p>
      <p>
        The dialog is constrained to stay within the viewport boundaries.
      </p>
    </Dialog>

    <!-- Non-Draggable Dialog -->
    <Dialog
      v-model:visible="nonDraggableVisible"
      header="Non-Draggable Dialog"
      :draggable="false"
      :style="{ width: '50vw' }"
    >
      <p class="mb-4">
        This dialog cannot be moved from its position.
      </p>
      <p>
        The header is not interactive for dragging.
      </p>
    </Dialog>
  </div>
</template>
