<script setup lang="ts">
import { eventBus, FilterContainer } from '@fewangsit/wangsvue';
import type { FilterField } from '@fewangsit/wangsvue/filtercontainer';

interface DemoQueryParams {
  date?: string;
}

onMounted(() => {
  /*
   * The visibility of filter container is controlled by the show property, this is just a demo to show how to show the filter container
   * In real world, you should not show the filter container immediately after the page is loaded, instead, you should show it when the user clicks on the filter button
   * There is ButtonFilter component to help you do this.
   */
  eventBus.emit('show-filter', {
    tableName: 'datatable',
    show: true,
  });
});

const fields: FilterField<DemoQueryParams>[] = [
  {
    type: 'calendar',
    field: 'date',
    label: 'Date Filter',
  },
];
</script>

<template>
  <FilterContainer :fields="fields" @apply="console.log" />
</template>
