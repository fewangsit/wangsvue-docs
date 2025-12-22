<!-- eslint-disable vue/no-v-text-v-html-on-component -->
<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="component-demo border rounded-lg overflow-hidden my-6">
    <!-- Preview Section -->
    <div class="p-6">
      <div
        v-if="title"
        class="mb-4"
      >
        <h3 class="text-lg font-semibold text-gray-900">
          {{ title }}
        </h3>
        <p
          v-if="description"
          class="text-sm text-gray-600 mt-1"
        >
          {{ description }}
        </p>
      </div>

      <!-- Component Preview with isolated WangsVue styles -->
      <div class="preview-container wangsvue-isolated">
        <ClientOnly>
          <div
            v-if="loadingError"
            class="text-red-500 p-4 bg-red-50 rounded"
          >
            <p class="font-medium">
              Failed to load component: {{ src }}
            </p>
            <p class="text-sm mt-1">
              {{ loadingError }}
            </p>
          </div>
          <div
            v-else-if="isLoading"
            class="text-gray-500 p-4"
          >
            Loading component...
          </div>
          <component
            :is="dynamicComponent"
            v-else-if="dynamicComponent"
          />
          <div
            v-else
            class="text-gray-500 p-4"
          >
            Component not found: {{ src }}
          </div>
          <template #fallback>
            <div class="text-gray-500 p-4">
              Loading component...
            </div>
          </template>
        </ClientOnly>
      </div>
    </div>

    <div
      v-if="showCode && sourceCode"
      class="border-t"
    >
      <div class="p-4">
        <div class="flex items-center justify-between mb-3">
          <h4 class="text-sm font-medium text-gray-700">
            Source Code
          </h4>
          <button
            class="text-xs px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded transition-colors"
            @click="copyToClipboard"
          >
            {{ copied ? "Copied!" : "Copy" }}
          </button>
        </div>
        <div
          v-html="highlightedCode"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Component } from 'vue'
import { componentRegistry } from '../docs'

interface Props {
  src: string
  title?: string
  description?: string
  showCode?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  showCode: true
})

const dynamicComponent = ref<Component | null>(null)
const isLoading = ref(true)
const loadingError = ref('')
const sourceCode = ref('')
const highlightedCode = ref('')
const fileName = ref('')
const isLoadingSource = ref(false)
const sourceCodeError = ref('')
const copied = ref(false)

// Load component dynamically
const loadComponent = async () => {
  try {
    isLoading.value = true
    loadingError.value = ''

    // Check if component exists in registry
    const componentLoader
      = componentRegistry[props.src as keyof typeof componentRegistry]
    if (!componentLoader) {
      throw new Error(`Component "${props.src}" not found in registry`)
    }

    // Import the component
    const module = await componentLoader()
    dynamicComponent.value = module.default
  } catch (error) {
    console.error('Failed to load component:', error)
    loadingError.value
      = error instanceof Error ? error.message : 'Unknown error'
  } finally {
    isLoading.value = false
  }
}

// Load source code
const loadSourceCode = async () => {
  if (!props.showCode) return

  try {
    isLoadingSource.value = true
    sourceCodeError.value = ''

    // Fetch source code from API
    const response = await $fetch<{ sourceCode: string, path: string }>(
      `/api/component-source?src=${encodeURIComponent(props.src)}`
    )

    sourceCode.value = response.sourceCode
    fileName.value = response.path

    const responsePost = await $fetch<{ html: string, path: string }>(
      `/api/highlight-code`,
      {
        method: 'POST',
        body: {
          code: sourceCode.value,
          lang: 'vue'
        }
      }
    )

    highlightedCode.value = responsePost.html
  } catch (error) {
    console.error('Failed to load source code:', error)
    sourceCodeError.value
      = error instanceof Error ? error.message : 'Unknown error'
  } finally {
    isLoadingSource.value = false
  }
}

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(sourceCode.value)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (error) {
    console.error('Failed to copy to clipboard:', error)
  }
}

onMounted(() => {
  loadComponent()
  loadSourceCode()
})
</script>

<style scoped>
:deep(.shiki span.line) {
  display: inline !important;
}
</style>
