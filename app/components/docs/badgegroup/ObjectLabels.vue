<script setup lang="ts">
import { BadgeGroup } from '@fewangsit/wangsvue';
import type { ObjectBadge } from '@fewangsit/wangsvue/badgegroup';

const objectLabels: ObjectBadge[] = [
  {
    text: 'Critical',
    severity: 'danger' as const,
    tooltip: 'High priority issue',
  },
  {
    text: 'In Progress',
    severity: 'warning' as const,
    tooltip: 'Currently being worked on',
  },
  { text: 'Completed', severity: 'success' as const, tooltip: 'Task finished' },
  { text: 'Blocked', severity: 'dark' as const, tooltip: 'Cannot proceed' },
];

const statusLabels = [
  { text: 'Active', severity: 'success' as const },
  { text: 'Pending', severity: 'warning' as const },
  { text: 'Inactive', severity: 'danger' as const },
  { text: 'Draft', severity: 'primary' as const },
];
</script>

<template>
  <div class="flex flex-col gap-4">
    <div>
      <h3 class="mb-2 font-semibold">Task Status with Tooltips</h3>

      <BadgeGroup
        :labels="objectLabels"
        :limit="3"
        header-label="All Task Status"
      />
    </div>

    <div>
      <h3 class="mb-2 font-semibold">User Status</h3>

      <BadgeGroup :labels="statusLabels" header-label="User Status List" />
    </div>

    <p class="text-sm text-gray-600">
      Object labels allow custom severity and tooltips per badge
    </p>
  </div>
</template>
