<script setup lang="ts">
import { useLoadingStore, Button, Loading } from '@fewangsit/wangsvue'

const { setLoading } = useLoadingStore()

const showLoading = () => {
  setLoading(true)
  setTimeout(() => {
    setLoading(false)
  }, 2000)
}
</script>

<template>
  <Button
    label="Show Loading (2s)"
    severity="primary"
    @click="showLoading"
  />

  <Loading />
</template>
