<script setup lang="ts">
import { ref } from 'vue'
import { Badge } from '@fewangsit/wangsvue'

const removableBadges = ref([
  { id: 1, label: 'JavaScript', severity: 'primary' as const },
  { id: 2, label: 'Vue.js', severity: 'success' as const },
  { id: 3, label: 'TypeScript', severity: 'info' as const },
  { id: 4, label: 'Nuxt.js', severity: 'warning' as const }
])

const removeBadge = (id: number) => {
  removableBadges.value = removableBadges.value.filter(badge => badge.id !== id)
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <div>
      <h3 class="mb-2 font-semibold">
        Removable Badges
      </h3>
      <div class="flex flex-wrap gap-3">
        <Badge
          v-for="badge in removableBadges"
          :key="badge.id"
          :label="badge.label"
          :severity="badge.severity"
          :removable="true"
          @remove="removeBadge(badge.id)"
        />
      </div>
      <p class="text-xs text-gray-500 mt-1">
        Click the × icon to remove badges
      </p>
    </div>

    <div>
      <h3 class="mb-2 font-semibold">
        Remove Button States
      </h3>
      <div class="flex flex-wrap gap-3">
        <Badge
          label="Removable"
          severity="success"
          :removable="true"
        />
        <Badge
          label="Not Removable"
          severity="info"
          :removable="false"
        />
        <Badge
          label="Remove Disabled"
          severity="warning"
          :removable="false"
          :disable-remove-button="true"
        />
        <Badge
          label="Fully Disabled"
          severity="danger"
          :removable="true"
          :disabled="true"
        />
      </div>
      <p class="text-xs text-gray-500 mt-1">
        Different states: removable, not removable, remove button disabled, fully disabled
      </p>
    </div>

    <div>
      <h3 class="mb-2 font-semibold">
        Interactive Remove with Events
      </h3>
      <div class="flex flex-wrap gap-3">
        <Badge
          label="Remove with Alert"
          severity="primary"
          :removable="true"
          @remove="() => alert('Badge removed!')"
        />
        <Badge
          label="Remove with Console"
          severity="success"
          :removable="true"
          @remove="() => console.log('Badge removed via console')"
        />
      </div>
      <p class="text-xs text-gray-500 mt-1">
        These badges trigger different actions when removed
      </p>
    </div>

    <p class="text-sm text-gray-600">
      The remove event is emitted when the × icon is clicked, allowing custom removal logic
    </p>
  </div>
</template>
