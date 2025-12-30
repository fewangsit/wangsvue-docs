<script setup lang="ts">
import { Toast, Button, useToast } from '@fewangsit/wangsvue'

const toast = useToast()

const showTopLeft = () => {
  toast.add({
    severity: 'info',
    message: 'Toast positioned at top-left',
    life: 3000,
    group: 'tl'
  })
}

const showTopCenter = () => {
  toast.add({
    severity: 'info',
    message: 'Toast positioned at top-center',
    life: 3000,
    group: 'tc'
  })
}

const showTopRight = () => {
  toast.add({
    severity: 'info',
    message: 'Toast positioned at top-right',
    life: 3000,
    group: 'tr'
  })
}

const showBottomLeft = () => {
  toast.add({
    severity: 'info',
    message: 'Toast positioned at bottom-left',
    life: 3000,
    group: 'bl'
  })
}

const showBottomRight = () => {
  toast.add({
    severity: 'info',
    message: 'Toast positioned at bottom-right',
    life: 3000,
    group: 'br'
  })
}
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <Button
      label="Top Left"
      size="small"
      @click="showTopLeft"
    />
    <Button
      label="Top Center"
      size="small"
      @click="showTopCenter"
    />
    <Button
      label="Top Right"
      size="small"
      @click="showTopRight"
    />
    <Button
      label="Bottom Left"
      size="small"
      @click="showBottomLeft"
    />
    <Button
      label="Bottom Right"
      size="small"
      @click="showBottomRight"
    />

    <!-- Toast containers for different positions -->
    <Toast
      group="tl"
      position="top-left"
    />
    <Toast
      group="tc"
      position="top-center"
    />
    <Toast
      group="tr"
      position="top-right"
    />
    <Toast
      group="bl"
      position="bottom-left"
    />
    <Toast
      group="br"
      position="bottom-right"
    />
  </div>
</template>
