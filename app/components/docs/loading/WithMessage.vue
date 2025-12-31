<script setup lang="ts">
import { useLoadingStore, Button } from '@fewangsit/wangsvue'

const { setLoading } = useLoadingStore()

const showLoadingWithMessage = () => {
  setLoading(true, 'Processing your request...')
  setTimeout(() => {
    setLoading(false)
  }, 3000)
}
</script>

<template>
  <Button
    label="Show Loading with Message (3s)"
    severity="success"
    @click="showLoadingWithMessage"
  />

  <Loading />
</template>
