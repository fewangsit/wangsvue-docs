<script setup lang="ts">
import { Button, useLoadingStore } from '@fewangsit/wangsvue';

const { setLoading } = useLoadingStore();

const showLoadingWithMessage = (): void => {
  setLoading(true, 'Processing your request...');
  setTimeout(() => {
    setLoading(false);
  }, 3000);
};
</script>

<template>
  <Button
    @click="showLoadingWithMessage"
    label="Show Loading with Message (3s)"
    severity="success"
  />

  <Loading />
</template>
