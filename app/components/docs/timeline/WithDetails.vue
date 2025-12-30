<script setup lang="ts">
import { Timeline } from '@fewangsit/wangsvue'
import type { TimelineItem } from '@fewangsit/wangsvue/timeline'

const events: TimelineItem[] = [
  {
    _id: '1',
    action: 'Project Created',
    createdAt: '2024-01-15T10:30:00Z',
    username: 'john.doe',
    detail: {
      type: 'text',
      value: 'New project "Website Redesign" has been created with initial requirements.'
    }
  },
  {
    _id: '2',
    action: 'Task Assigned',
    createdAt: '2024-01-15T14:20:00Z',
    username: 'jane.smith',
    detail: {
      type: 'bullet',
      value: [
        'Frontend Development',
        'UI/UX Design',
        'Backend Integration'
      ]
    }
  },
  {
    _id: '3',
    action: 'Status Updated',
    createdAt: '2024-01-16T09:15:00Z',
    username: 'mike.wilson',
    detail: {
      type: 'badge',
      label: 'In Progress',
      severity: 'warning'
    }
  },
  {
    _id: '4',
    action: 'Project Completed',
    createdAt: '2024-01-17T16:45:00Z',
    username: 'sarah.johnson',
    detail: {
      type: 'badge',
      label: 'Completed',
      severity: 'success'
    }
  }
]
</script>

<template>
  <Timeline :value="events" />
</template>
