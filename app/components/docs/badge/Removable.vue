<script setup lang="ts">
import { Badge } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const removableBadges = ref([
  { id: 1, label: 'JavaScript', severity: 'primary' as const },
  { id: 2, label: 'Vue.js', severity: 'success' as const },
  { id: 3, label: 'TypeScript', severity: 'info' as const },
  { id: 4, label: 'Nuxt.js', severity: 'warning' as const },
]);

const removeBadge = (id: number): void => {
  removableBadges.value = removableBadges.value.filter(
    (badge) => badge.id !== id,
  );
};
</script>

<template>
  <div class="flex flex-col gap-4">
    <div>
      <h3 class="mb-2 font-semibold">Removable Badges</h3>

      <div class="flex flex-wrap gap-3">
        <Badge
          :key="badge.id"
          v-for="badge in removableBadges"
          :label="badge.label"
          :severity="badge.severity"
          @remove="removeBadge(badge.id)"
          removable
        />
      </div>

      <p class="text-xs text-gray-500 mt-1">
        Click the × icon to remove badges
      </p>
    </div>

    <div>
      <h3 class="mb-2 font-semibold">Remove Button States</h3>

      <div class="flex flex-wrap gap-3">
        <Badge label="Removable" removable severity="success" />

        <Badge :removable="false" label="Not Removable" severity="info" />

        <Badge
          :removable="false"
          disable-remove-button
          label="Remove Disabled"
          severity="warning"
        />

        <Badge disabled label="Fully Disabled" removable severity="danger" />
      </div>

      <p class="text-xs text-gray-500 mt-1">
        Different states: removable, not removable, remove button disabled,
        fully disabled
      </p>
    </div>

    <div>
      <h3 class="mb-2 font-semibold">Interactive Remove with Events</h3>

      <div class="flex flex-wrap gap-3">
        <Badge
          @remove="() => alert('Badge removed!')"
          label="Remove with Alert"
          removable
          severity="primary"
        />

        <Badge
          @remove="() => console.log('Badge removed via console')"
          label="Remove with Console"
          removable
          severity="success"
        />
      </div>

      <p class="text-xs text-gray-500 mt-1">
        These badges trigger different actions when removed
      </p>
    </div>

    <p class="text-sm text-gray-600">
      The remove event is emitted when the × icon is clicked, allowing custom
      removal logic
    </p>
  </div>
</template>
