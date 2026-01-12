<script setup lang="ts">
import { Button, Card } from '@fewangsit/wangsvue';
</script>

<template>
  <div class="flex flex-wrap gap-4">
    <Card class="w-80">
      <template #content>
        <p>
          This card demonstrates the footer slot, which is perfect for action
          buttons or additional information at the bottom of the card.
        </p>
      </template>

      <template #footer>
        <div class="flex gap-2 pt-4 border-t">
          <Button label="Save" severity="primary" size="small" />

          <Button label="Cancel" severity="secondary" size="small" />
        </div>
      </template>
    </Card>
  </div>
</template>
