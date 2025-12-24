<script setup lang="ts">
import { ref } from 'vue'
import { Dialog, Button } from '@fewangsit/wangsvue'

const centerVisible = ref(false)
const topVisible = ref(false)
const bottomVisible = ref(false)
const leftVisible = ref(false)
const rightVisible = ref(false)
const topLeftVisible = ref(false)
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <Button
      label="Center"
      size="small"
      @click="centerVisible = true"
    />
    <Button
      label="Top"
      size="small"
      @click="topVisible = true"
    />
    <Button
      label="Bottom"
      size="small"
      @click="bottomVisible = true"
    />
    <Button
      label="Left"
      size="small"
      @click="leftVisible = true"
    />
    <Button
      label="Right"
      size="small"
      @click="rightVisible = true"
    />
    <Button
      label="Top Left"
      size="small"
      @click="topLeftVisible = true"
    />

    <!-- Center Position -->
    <Dialog
      v-model:visible="centerVisible"
      header="Center Position"
      position="center"
      :style="{ width: '30vw' }"
    >
      <p>Dialog positioned at the center of the screen.</p>
    </Dialog>

    <!-- Top Position -->
    <Dialog
      v-model:visible="topVisible"
      header="Top Position"
      position="top"
      :style="{ width: '30vw' }"
    >
      <p>Dialog positioned at the top of the screen.</p>
    </Dialog>

    <!-- Bottom Position -->
    <Dialog
      v-model:visible="bottomVisible"
      header="Bottom Position"
      position="bottom"
      :style="{ width: '30vw' }"
    >
      <p>Dialog positioned at the bottom of the screen.</p>
    </Dialog>

    <!-- Left Position -->
    <Dialog
      v-model:visible="leftVisible"
      header="Left Position"
      position="left"
      :style="{ width: '30vw' }"
    >
      <p>Dialog positioned at the left side of the screen.</p>
    </Dialog>

    <!-- Right Position -->
    <Dialog
      v-model:visible="rightVisible"
      header="Right Position"
      position="right"
      :style="{ width: '30vw' }"
    >
      <p>Dialog positioned at the right side of the screen.</p>
    </Dialog>

    <!-- Top Left Position -->
    <Dialog
      v-model:visible="topLeftVisible"
      header="Top Left Position"
      position="topleft"
      :style="{ width: '30vw' }"
    >
      <p>Dialog positioned at the top-left corner of the screen.</p>
    </Dialog>
  </div>
</template>
