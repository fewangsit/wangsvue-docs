<script setup lang="ts">
import { ref } from 'vue'
import { Calendar } from '@fewangsit/wangsvue'

const restrictedDate = ref<Date | null>(null)
const weekdaysOnly = ref<Date | null>(null)
const excludedDatesSelection = ref<Date | null>(null)

// Set min date to today and max date to 30 days from now
const today = new Date()
const maxDate = new Date()
maxDate.setDate(today.getDate() + 30)

// Exclude weekends (Saturday and Sunday after today for thirty days)
const excludedDates = []
for (let i = 0; i < 30; i++) {
  const date = new Date()
  date.setDate(today.getDate() + i)
  if (date.getDay() === 0 || date.getDay() === 6) { // Sunday = 0, Saturday = 6
    excludedDates.push(date)
  }
}
</script>

<template>
  <div class="space-y-6">
    <div>
      <h4 class="text-sm font-medium text-gray-700 mb-2">
        Min/Max Date Restrictions
      </h4>
      <Calendar
        v-model="restrictedDate"
        :min-date="today"
        :max-date="maxDate"
        label="Restricted Date Range"
        placeholder="Select date (next 30 days only)"
      />
      <div class="mt-2 text-xs text-gray-600">
        Selected: {{ restrictedDate ? restrictedDate.toLocaleDateString() : 'None' }}
      </div>
      <div class="mt-1 text-xs text-gray-500">
        Allowed: {{ today.toLocaleDateString() }} - {{ maxDate.toLocaleDateString() }}
      </div>
    </div>

    <div>
      <h4 class="text-sm font-medium text-gray-700 mb-2">
        Weekdays Only
      </h4>
      <Calendar
        v-model="weekdaysOnly"
        :only-weekdays="true"
        label="Weekdays Only"
        placeholder="Select weekday only"
      />
      <div class="mt-2 text-xs text-gray-600">
        Selected: {{ weekdaysOnly ? weekdaysOnly.toLocaleDateString() : 'None' }}
      </div>
    </div>

    <div>
      <h4 class="text-sm font-medium text-gray-700 mb-2">
        Excluded Dates
      </h4>
      <Calendar
        v-model="excludedDatesSelection"
        :exclude-dates="excludedDates"
        label="Exclude Weekends (One Month After Today)"
        placeholder="Select date (weekends, one month after today are excluded)"
      />
      <div class="mt-2 text-xs text-gray-600">
        Selected: {{ excludedDatesSelection ? excludedDatesSelection.toLocaleDateString() : 'None' }}
      </div>
      <div class="mt-1 text-xs text-gray-500">
        Weekends, one month after today are excluded from selection
      </div>
    </div>
  </div>
</template>
