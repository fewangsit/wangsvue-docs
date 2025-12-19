<template>
  <div class="flex gap-3">
    <Button
      icon="info"
      tooltip="This is helpful information"
    />
    <Button
      icon="add"
      tooltip="Add new Item"
      tooltip-pos="top"
    />
    <Button
      icon="settings"
      tooltip="Open settings"
      tooltip-pos="left"
    />
    <Button
      icon="user"
      tooltip="User profile"
      tooltip-pos="right"
    />
  </div>
</template>

<script setup lang="ts">
import { Button } from '@fewangsit/wangsvue'
</script>
