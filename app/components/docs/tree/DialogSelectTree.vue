<script setup lang="ts">
import { Button, DialogSelectTree } from '@fewangsit/wangsvue';
import type { TreeNode, TreeSelectionKeys } from '@fewangsit/wangsvue/basetree';
import { ref } from 'vue';

import { fetchTree } from './mockData';

interface TreeSelectPayload {
  keys?: TreeSelectionKeys | undefined;
  selectedNodes?: TreeNode[] | undefined;
  singleNode?: TreeNode | undefined;
}

const visible = ref(false);
const selectedKeys = ref<TreeSelectionKeys>({});

const onSelect = (event: TreeSelectPayload): void => {
  selectedKeys.value = event.keys || {};
};
</script>

<template>
  <div class="flex flex-col gap-4 items-start">
    <Button @click="visible = true" label="Show Dialog" />

    <div v-if="Object.keys(selectedKeys).length" class="text-sm">
      Selected: {{ Object.keys(selectedKeys) }}
    </div>

    <DialogSelectTree
      v-model:visible="visible"
      :fetch-tree="fetchTree"
      @select="onSelect"
      type="category"
    />
  </div>
</template>
