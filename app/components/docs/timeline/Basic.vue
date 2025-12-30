<script setup lang="ts">
import { Timeline } from '@fewangsit/wangsvue'
import type { TimelineItem } from '@fewangsit/wangsvue/timeline'

const events: TimelineItem[] = [
  {
    _id: '1',
    action: 'Project Created',
    createdAt: '2024-01-15T10:30:00Z'
  },
  {
    _id: '2',
    action: 'Task Assigned',
    createdAt: '2024-01-15T14:20:00Z'
  },
  {
    _id: '3',
    action: 'Status Updated',
    createdAt: '2024-01-16T09:15:00Z'
  },
  {
    _id: '4',
    action: 'Project Completed',
    createdAt: '2024-01-17T16:45:00Z'
  }
]
</script>

<template>
  <Timeline :value="events" />
</template>
