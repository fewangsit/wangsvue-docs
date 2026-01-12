<script setup lang="ts">
import { Button } from '@fewangsit/wangsvue';
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <Button icon="save" label="Save" />

    <Button icon="download" icon-pos="right" label="Download" />

    <Button icon="search" tooltip="Search" />

    <Button icon="settings" icon-pos="top" label="Settings" />
  </div>
</template>
