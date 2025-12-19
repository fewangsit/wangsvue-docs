<template>
  <div class="flex flex-wrap gap-3">
    <Button
      icon="save"
      label="Save"
    />
    <Button
      icon="download"
      label="Download"
      icon-pos="right"
    />
    <Button
      icon="search"
      tooltip="Search"
    />
    <Button
      icon="settings"
      label="Settings"
      icon-pos="top"
    />
  </div>
</template>

<script setup lang="ts">
import { Button } from '@fewangsit/wangsvue'
</script>
