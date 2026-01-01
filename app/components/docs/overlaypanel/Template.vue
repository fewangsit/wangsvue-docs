<script setup lang="ts">
import { OverlayPanel, Button } from '@fewangsit/wangsvue'

const customPanel = useTemplateRef<OverlayPanel>('customPanel')
const containerPanel = useTemplateRef<OverlayPanel>('containerPanel')

const showCustom = (event: Event) => {
  customPanel.value?.show(event)
}

const showContainer = (event: Event) => {
  containerPanel.value?.show(event)
}
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <Button
      label="Custom Content"
      @click="showCustom"
    />
    <Button
      label="Custom Container"
      @click="showContainer"
    />

    <!-- Custom Content -->
    <OverlayPanel ref="customPanel">
      <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
            <i class="wangs-icon-user text-white" />
          </div>
          <div>
            <h3 class="font-semibold text-blue-900">
              User Profile
            </h3>
            <p class="text-sm text-blue-700">
              Manage your account
            </p>
          </div>
        </div>
        <div class="space-y-2">
          <Button
            label="Edit Profile"
            severity="primary"
            size="small"
            class="w-full"
          />
          <Button
            label="Settings"
            severity="secondary"
            size="small"
            class="w-full"
          />
        </div>
      </div>
    </OverlayPanel>

    <!-- Custom Container -->
    <OverlayPanel ref="containerPanel">
      <template #container="{ closeCallback }">
        <div class="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
          <div class="bg-red-500 text-white p-3 flex items-center justify-between">
            <h3 class="font-semibold">
              Custom Container
            </h3>
            <button
              class="text-white hover:text-red-200"
              @click="closeCallback"
            >
              <i class="wangs-icon-close" />
            </button>
          </div>
          <div class="p-4">
            <p class="mb-3">
              This uses a custom container template with custom styling.
            </p>
            <Button
              label="Action"
              severity="danger"
              size="small"
            />
          </div>
        </div>
      </template>
    </OverlayPanel>
  </div>
</template>
