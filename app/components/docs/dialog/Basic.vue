<script setup lang="ts">
import { ref } from 'vue'
import { Dialog, Button } from '@fewangsit/wangsvue'

const visible = ref(false)

const showDialog = () => {
  visible.value = true
}

const hideDialog = () => {
  visible.value = false
}
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <Button
      label="Show Dialog"
      @click="showDialog"
    />

    <Dialog
      v-model:visible="visible"
      header="Basic Dialog"
      footer="Dialog Footer"
      :style="{ width: '50vw' }"
    >
      <p class="mb-4">
        This is a basic dialog with header, content, and footer sections.
      </p>
      <p>
        You can close this dialog by clicking the X button or pressing Escape.
      </p>

      <template #footer>
        <div class="flex justify-end gap-2">
          <Button
            label="Cancel"
            severity="secondary"
            @click="hideDialog"
          />
          <Button
            label="Save"
            @click="hideDialog"
          />
        </div>
      </template>
    </Dialog>
  </div>
</template>
