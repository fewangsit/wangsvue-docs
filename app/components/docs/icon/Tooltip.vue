<script setup lang="ts">
import { Icon } from '@fewangsit/wangsvue'
</script>

<template>
  <div class="flex flex-wrap gap-6 items-center">
    <Icon
      icon="info"
      info="This is helpful information"
      severity="info"
    />
    <Icon
      icon="settings"
      info="Open settings panel"
      tooltip-pos="top"
      severity="primary"
    />
    <Icon
      icon="user"
      info="User profile"
      tooltip-pos="right"
      severity="secondary"
    />
    <Icon
      icon="bell"
      info="View notifications"
      tooltip-pos="left"
      severity="warning"
    />
  </div>
</template>
