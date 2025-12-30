<script setup lang="ts">
import { useLoadingStore, Button, Loading } from '@fewangsit/wangsvue'

const { loading, setLoading } = useLoadingStore()

const showLoading = () => {
  setLoading(true)
  setTimeout(() => {
    setLoading(false)
  }, 2000)
}
</script>

<template>
  <div class="space-y-4">
    <div class="p-4 rounded-lg">
      <p class="text-sm text-gray-600 mb-2">
        Loading State: {{ loading ? 'Active' : 'Inactive' }}
      </p>
      <Button
        label="Show Loading (2s)"
        severity="primary"
        :disabled="loading"
        @click="showLoading"
      />
    </div>
  </div>

  <Loading />
</template>
