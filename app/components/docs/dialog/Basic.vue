<script setup lang="ts">
import { Button, Dialog } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const visible = ref(false);

const showDialog = (): void => {
  visible.value = true;
};

const hideDialog = (): void => {
  visible.value = false;
};
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <Button @click="showDialog" label="Show Dialog" />

    <Dialog
      v-model:visible="visible"
      class="w-[50vw]"
      footer="Dialog Footer"
      header="Basic Dialog"
    >
      <p class="mb-4">
        This is a basic dialog with header, content, and footer sections.
      </p>

      <p>
        You can close this dialog by clicking the X button or pressing Escape.
      </p>

      <template #footer>
        <div class="flex justify-end gap-2">
          <Button @click="hideDialog" label="Cancel" severity="secondary" />

          <Button @click="hideDialog" label="Save" />
        </div>
      </template>
    </Dialog>
  </div>
</template>
