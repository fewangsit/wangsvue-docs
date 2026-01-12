<script setup lang="ts">
import { Timeline } from '@fewangsit/wangsvue';
import type { TimelineItem } from '@fewangsit/wangsvue/timeline';

const events: TimelineItem[] = [
  {
    _id: '1',
    action: 'Project Created',
    createdAt: '2024-01-15T10:30:00Z',
    username: 'john.doe',
    user: {
      _id: 'user1',
      nickName: 'John Doe',
    },
    detail: 'Project setup and initial configuration completed successfully.',
  },
  {
    _id: '2',
    action: 'Team Meeting',
    createdAt: '2024-01-16T14:20:00Z',
    username: 'jane.smith',
    user: {
      _id: 'user2',
      nickName: 'Jane Smith',
    },
    detail:
      'Discussed project milestones and assigned responsibilities to team members.',
  },
  {
    _id: '3',
    action: 'Code Review',
    createdAt: '2024-01-17T09:15:00Z',
    username: 'mike.wilson',
    user: {
      _id: 'user3',
      nickName: 'Mike Wilson',
    },
    detail:
      'Reviewed pull request #123 and provided feedback for improvements.',
  },
];
</script>

<template>
  <Timeline :value="events">
    <template #date="{ date }">
      <span class="text-sm font-medium text-blue-600">
        📅 {{ new Date(date).toLocaleDateString() }}
      </span>
    </template>

    <template #user="{ user }">
      <span
        class="inline-flex items-center gap-2 text-sm font-semibold text-green-700"
      >
        👤 {{ user }}
      </span>
    </template>

    <template #detail="{ value }">
      <div class="p-3 bg-gray-50 rounded-lg border-l-4 border-blue-400">
        <p class="text-sm text-gray-700">💬 {{ value }}</p>
      </div>
    </template>
  </Timeline>
</template>
