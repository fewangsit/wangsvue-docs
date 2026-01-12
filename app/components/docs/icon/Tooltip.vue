<script setup lang="ts">
import { Icon } from '@fewangsit/wangsvue';
</script>

<template>
  <div class="flex flex-wrap gap-6 items-center">
    <Icon icon="info" info="This is helpful information" severity="info" />

    <Icon
      icon="settings"
      info="Open settings panel"
      severity="primary"
      tooltip-pos="top"
    />

    <Icon
      icon="user"
      info="User profile"
      severity="secondary"
      tooltip-pos="right"
    />

    <Icon
      icon="bell"
      info="View notifications"
      severity="warning"
      tooltip-pos="left"
    />
  </div>
</template>
