<script setup lang="ts">
import { ButtonFilter, FilterContainer } from '@fewangsit/wangsvue';
import type { FilterField } from '@fewangsit/wangsvue/filtercontainer';

interface DemoQueryParams {
  status?: string;
}

const fields: FilterField<DemoQueryParams>[] = [
  {
    type: 'dropdown',
    field: 'status',
    label: 'Status',
    fetchOptionFn: () => [
      { label: 'Active', value: 'active' },
      { label: 'Inactive', value: 'inactive' },
    ],
    optionLabel: 'label',
    optionValue: 'value',
  },
];
</script>

<template>
  <div>
    <ButtonFilter table-name="tablename" />

    <FilterContainer
      :fields="fields"
      @apply="console.log"
      table-name="tablename"
    />
  </div>
</template>
