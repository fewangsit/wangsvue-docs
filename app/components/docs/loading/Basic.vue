<script setup lang="ts">
import { Button, Loading, useLoadingStore } from '@fewangsit/wangsvue';

const { setLoading } = useLoadingStore();

const showLoading = (): void => {
  setLoading(true);
  setTimeout(() => {
    setLoading(false);
  }, 2000);
};
</script>

<template>
  <Button @click="showLoading" label="Show Loading (2s)" severity="primary" />

  <Loading />
</template>
