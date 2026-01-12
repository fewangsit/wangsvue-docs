<script setup lang="ts">
import { Button, Dialog } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const centerVisible = ref(false);
const topVisible = ref(false);
const bottomVisible = ref(false);
const leftVisible = ref(false);
const rightVisible = ref(false);
const topLeftVisible = ref(false);
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <Button @click="centerVisible = true" label="Center" size="small" />

    <Button @click="topVisible = true" label="Top" size="small" />

    <Button @click="bottomVisible = true" label="Bottom" size="small" />

    <Button @click="leftVisible = true" label="Left" size="small" />

    <Button @click="rightVisible = true" label="Right" size="small" />

    <Button @click="topLeftVisible = true" label="Top Left" size="small" />

    <!-- Center Position -->
    <Dialog
      v-model:visible="centerVisible"
      class="w-[30vw]"
      header="Center Position"
      position="center"
    >
      <p>Dialog positioned at the center of the screen.</p>
    </Dialog>

    <!-- Top Position -->
    <Dialog
      v-model:visible="topVisible"
      class="w-[30vw]"
      header="Top Position"
      position="top"
    >
      <p>Dialog positioned at the top of the screen.</p>
    </Dialog>

    <!-- Bottom Position -->
    <Dialog
      v-model:visible="bottomVisible"
      class="w-[30vw]"
      header="Bottom Position"
      position="bottom"
    >
      <p>Dialog positioned at the bottom of the screen.</p>
    </Dialog>

    <!-- Left Position -->
    <Dialog
      v-model:visible="leftVisible"
      class="w-[30vw]"
      header="Left Position"
      position="left"
    >
      <p>Dialog positioned at the left side of the screen.</p>
    </Dialog>

    <!-- Right Position -->
    <Dialog
      v-model:visible="rightVisible"
      class="w-[30vw]"
      header="Right Position"
      position="right"
    >
      <p>Dialog positioned at the right side of the screen.</p>
    </Dialog>

    <!-- Top Left Position -->
    <Dialog
      v-model:visible="topLeftVisible"
      class="w-[30vw]"
      header="Top Left Position"
      position="topleft"
    >
      <p>Dialog positioned at the top-left corner of the screen.</p>
    </Dialog>
  </div>
</template>
