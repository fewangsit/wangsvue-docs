<script setup lang="ts">
import { Button } from '@fewangsit/wangsvue'
</script>

<template>
  <div class="flex gap-2">
    <Button
      badge="5"
      icon="mail"
      label="Messages"
    />
    <Button
      badge="12"
      badge-severity="success"
      label="Completed"
    />
    <Button
      badge="3"
      badge-severity="warning"
      label="Pending"
    />
    <Button
      badge="!"
      badge-severity="danger"
      label="Errors"
    />
  </div>
</template>
