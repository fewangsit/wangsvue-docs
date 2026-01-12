<script setup lang="ts">
import { eventBus, FilterContainer } from '@fewangsit/wangsvue';
import type { Option } from '@fewangsit/wangsvue/dropdown';
import type { FilterField } from '@fewangsit/wangsvue/filtercontainer';

interface DemoQueryParams {
  priority?: string;
}

interface DemoOptionsQueryParams {
  priorityOptions?: string;
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

// Code from @someproject/api-services, this is just a mockup to demostrate the async fetchOptionFn
const APIServices = {
  getPriorityOptions: (_params: DemoOptionsQueryParams): Promise<Option[]> => {
    console.log(_params); // In real world, you should use the params to filter the options.
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { label: 'Low', value: 'low' },
          { label: 'Medium', value: 'medium' },
          { label: 'High', value: 'high' },
        ]);
      }, 300);
    });
  },
};

const fields: FilterField<DemoQueryParams, DemoOptionsQueryParams>[] = [
  {
    type: 'dropdown',
    field: 'priority',
    label: 'Priority',
    fetchOptionFn: APIServices.getPriorityOptions,
    optionLabel: 'label',
    optionValue: 'value',
  },
];
</script>

<template>
  <FilterContainer :fields="fields" @apply="console.log" />
</template>
