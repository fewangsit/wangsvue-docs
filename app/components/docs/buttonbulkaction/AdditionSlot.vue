<script setup lang="ts">
import { ButtonBulkAction, InputText } from '@fewangsit/wangsvue';
import type { MenuItem } from '@fewangsit/wangsvue/menuitem';
import { ref } from 'vue';

interface DataItem {
  id: number;
  name: string;
  status: string;
}

const selectedData = ref<DataItem[]>([
  { id: 1, name: 'Item 1', status: 'active' },
  { id: 2, name: 'Item 2', status: 'inactive' },
]);

const tagValue = shallowRef<string>('');

const options: MenuItem[] = [
  {
    label: 'Add Tag',
    icon: 'price-tag-3',
    useAdditionSlot: true,
    command: (): void => {
      console.log('Add tag action executed');
    },
  },
  {
    label: 'Delete',
    icon: 'delete-bin',
    command: (): void => {
      console.log('Delete action executed');
    },
  },
  {
    label: 'Export',
    icon: 'download',
    command: (): void => {
      console.log('Export action executed');
    },
  },
];

const handleApply = (): void => {
  console.log('Apply clicked with tag:', tagValue.value);
};
</script>

<template>
  <div class="flex">
    <ButtonBulkAction
      v-model:selected-data="selectedData"
      :options="options"
      @apply="handleApply"
      select-menu-type="dropdown"
      table-name="addition-slot-table"
    >
      <template #addition="{ selectedOption }">
        <div v-if="selectedOption?.label === 'Add Tag'" class="p-3">
          <InputText
            v-model="tagValue"
            class="w-full"
            placeholder="Enter tag name"
          />
        </div>
      </template>
    </ButtonBulkAction>
  </div>
</template>
