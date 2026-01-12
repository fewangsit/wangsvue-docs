<script setup lang="ts">
import { Badge } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const restoreLabel = ref('Edit me (restores on empty)');

const onLabelUpdate = (
  newLabel: string | null,
  prevLabel: string | null,
): void => {
  console.log('Label updated:', { newLabel, prevLabel });
};
</script>

<template>
  <div class="flex flex-col gap-4">
    <Badge
      :label="restoreLabel"
      @update:label="onLabelUpdate"
      class="w-max"
      editable
      format="nowrap"
      restore-on-empty
      severity="success"
    />

    <p>
      This badge will restores to previous value if left empty
      (restoreOnEmpty=true)
    </p>
  </div>
</template>
