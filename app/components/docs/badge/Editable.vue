<script setup lang="ts">
import { ref } from 'vue'
import { Badge } from '@fewangsit/wangsvue'

const restoreLabel = ref('Edit me (restores on empty)')

const onLabelUpdate = (newLabel: string | null, prevLabel: string | null) => {
  console.log('Label updated:', { newLabel, prevLabel })
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <Badge
      :label="restoreLabel"
      severity="success"
      :editable="true"
      :restore-on-empty="true"
      format="nowrap"
      class="w-max"
      @update:label="onLabelUpdate"
    />

    <p>
      This badge will restores to previous value if left empty (restoreOnEmpty=true)
    </p>
  </div>
</template>
