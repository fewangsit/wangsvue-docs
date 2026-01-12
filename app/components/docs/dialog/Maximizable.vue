<script setup lang="ts">
import { Button, Dialog } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const visible = ref(false);
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <Button @click="visible = true" label="Show Maximizable Dialog" />

    <Dialog
      v-model:visible="visible"
      class="w-[50vw]"
      header="Maximizable Dialog"
      maximizable
    >
      <p class="mb-4">
        This dialog can be maximized to fill the entire screen.
      </p>

      <p class="mb-4">
        Click the maximize button in the header to toggle between normal and
        maximized states.
      </p>

      <p>
        When maximized, the dialog will take up the full viewport. Click the
        minimize button to restore it to its original size.
      </p>
    </Dialog>
  </div>
</template>
