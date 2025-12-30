<script setup lang="ts">
import { useLoadingStore, Button } from '@fewangsit/wangsvue'

const { loading, message, setLoading } = useLoadingStore()

const scenarios = [
  { label: 'Quick Loading (1s)', duration: 1000, message: 'Loading...' },
  { label: 'Data Processing (3s)', duration: 3000, message: 'Processing your data...' },
  { label: 'File Upload (5s)', duration: 5000, message: 'Uploading files...' }
]

const runScenario = (scenario: typeof scenarios[0]) => {
  setLoading(true, scenario.message)
  setTimeout(() => {
    setLoading(false)
  }, scenario.duration)
}
</script>

<template>
  <div class="space-y-4">
    <div class="p-4 rounded-lg">
      <h4 class="font-semibold mb-2">
        Current State
      </h4>
      <p class="text-sm text-gray-600 mb-2">
        Loading: {{ loading ? 'Active' : 'Inactive' }}
      </p>
      <p class="text-sm text-gray-600 mb-4">
        Message: {{ message || 'No message' }}
      </p>
    </div>

    <div class="space-y-2">
      <h4 class="font-semibold">
        Test Scenarios
      </h4>
      <div class="flex flex-wrap gap-2">
        <Button
          v-for="scenario in scenarios"
          :key="scenario.label"
          :label="scenario.label"
          severity="primary"
          :disabled="loading"
          @click="runScenario(scenario)"
        />
      </div>
    </div>
  </div>

  <Loading />
</template>
