<script setup lang="ts">
import { ref } from 'vue'
import { Calendar } from '@fewangsit/wangsvue'

const dateTime = ref<Date | null>(null)
const dateTimeRange = ref<Date[]>([])
</script>

<template>
  <div class="space-y-6">
    <div>
      <h4 class="text-sm font-medium text-gray-700 mb-2">
        Date and Time Selection
      </h4>
      <Calendar
        v-model="dateTime"
        :show-time="true"
        hour-format="24"
        label="Date & Time"
        placeholder="Select date and time"
      />
      <div class="mt-2 text-xs text-gray-600">
        Selected: {{ dateTime ? dateTime.toLocaleString() : 'None' }}
      </div>
    </div>

    <div>
      <h4 class="text-sm font-medium text-gray-700 mb-2">
        Date Range with Time
      </h4>
      <Calendar
        v-model="dateTimeRange"
        selection-mode="range"
        :show-time="true"
        hour-format="12"
        :show-buttons="true"
        label="Date & Time Range"
        placeholder="Select date and time range"
      />
      <div class="mt-2 text-xs text-gray-600">
        Selected: {{ dateTimeRange.length > 0 ? `${dateTimeRange[0]?.toLocaleString()} - ${dateTimeRange[1]?.toLocaleString() || 'End date'}` : 'None' }}
      </div>
    </div>
  </div>
</template>
