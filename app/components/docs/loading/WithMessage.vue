<script setup lang="ts">
import { useLoadingStore, Button } from '@fewangsit/wangsvue'

const { loading, message, setLoading } = useLoadingStore()

const showLoadingWithMessage = () => {
  setLoading(true, 'Processing your request...')
  setTimeout(() => {
    setLoading(false)
  }, 3000)
}
</script>

<template>
  <div class="space-y-4">
    <div class="p-4 rounded-lg">
      <p class="text-sm text-gray-600 mb-2">
        Loading State: {{ loading ? 'Active' : 'Inactive' }}
      </p>
      <p class="text-sm text-gray-600 mb-4">
        Message: {{ message || 'No message' }}
      </p>
      <Button
        label="Show Loading with Message (3s)"
        severity="success"
        :disabled="loading"
        @click="showLoadingWithMessage"
      />
    </div>
  </div>

  <Loading />
</template>
