<script setup lang="ts">
import { Badge } from '@fewangsit/wangsvue'
import type { BadgeProps } from '@fewangsit/wangsvue/badge'

const statusLabels = ['Active', 'Pending', 'Completed', 'Failed', 'Draft']
const priorityLabels = ['Low', 'Medium', 'High', 'Critical', 'Urgent']

// Dynamic severity based on status
const getStatusSeverity = (label?: string): BadgeProps['severity'] => {
  switch (label?.toLowerCase()) {
    case 'active': return 'success'
    case 'pending': return 'warning'
    case 'completed': return 'info'
    case 'failed': return 'danger'
    case 'draft': return 'dark'
    default: return 'primary'
  }
}

// Dynamic severity based on priority
const getPrioritySeverity = (label?: string): BadgeProps['severity'] => {
  switch (label?.toLowerCase()) {
    case 'low': return 'success'
    case 'medium': return 'info'
    case 'high': return 'warning'
    case 'critical': return 'danger'
    case 'urgent': return 'danger'
    default: return 'primary'
  }
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <div>
      <h3 class="mb-2 font-semibold">
        Status-based Dynamic Severity
      </h3>
      <div class="flex flex-wrap gap-3">
        <Badge
          v-for="status in statusLabels"
          :key="status"
          :label="status"
          :get-severity="getStatusSeverity"
        />
      </div>
    </div>

    <div>
      <h3 class="mb-2 font-semibold">
        Priority-based Dynamic Severity
      </h3>
      <div class="flex flex-wrap gap-3">
        <Badge
          v-for="priority in priorityLabels"
          :key="priority"
          :label="priority"
          :get-severity="getPrioritySeverity"
        />

        <Badge
          label="Menunggu Approval"
        />
      </div>
    </div>

    <p class="text-sm text-gray-600">
      getSeverity function is a project level configuration function to determines a sets of predefined badge label with its severity.
    </p>
  </div>
</template>
