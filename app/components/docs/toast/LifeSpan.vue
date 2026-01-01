<script setup lang="ts">
import { Toast, Button, useToast } from '@fewangsit/wangsvue'

const toast = useToast()

const showShort = () => {
  toast.add({
    severity: 'info',
    message: 'This toast will disappear in 1 second',
    life: 1000
  })
}

const showLong = () => {
  toast.add({
    severity: 'info',
    message: 'This toast will stay for 10 seconds',
    life: 10000
  })
}

const showInfinitely = () => {
  toast.add({
    severity: 'info',
    message: 'This toast will stay for infinitely',
    life: 0
  })
}
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <Button
      label="Short (1s)"
      @click="showShort"
    />
    <Button
      label="Long (10s)"
      @click="showLong"
    />
    <Button
      label="Infinitely"
      @click="showInfinitely"
    />

    <Toast />
  </div>
</template>
