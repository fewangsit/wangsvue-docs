<script setup lang="ts">
import { InlineMessage } from '@fewangsit/wangsvue'
import { ref } from 'vue'

const showMessage = ref(true)

const onClose = () => {
  showMessage.value = false
  setTimeout(() => {
    showMessage.value = true
  }, 2000)
}
</script>

<template>
  <div>
    <InlineMessage
      v-if="showMessage"
      severity="secondary"
      title="Dismissible Message"
      message="Click the close button to dismiss this message. It will reappear after 2 seconds."
      :removable="true"
      @close="onClose"
    />
    <p
      v-else
      class="text-gray-500 text-sm"
    >
      Message dismissed. Will reappear in 2 seconds...
    </p>
  </div>
</template>
