<!-- eslint-disable vue/no-v-text-v-html-on-component -->
<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="component-demo border rounded-lg overflow-hidden my-6">
    <!-- Preview Section -->
    <div class="p-6">
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
      class="border-t relative"
    >
      <div
        v-if="showCode && sourceCode"
        class="absolute top-4 right-4 flex items-center gap-2 z-10"
      >
        <Button
          v-if="isCodeTruncated"
          :icon="isCodeExpanded ? 'arrow-up-s' : 'arrow-down'"
          severity="secondary"
          text
          rounded
          :tooltip="isCodeExpanded ? 'Collapse code' : 'Expand code'"
          tooltip-pos="left"
          class="shadow-lg bg-white/90 backdrop-blur-sm hover:bg-white"
          @click="toggleCodeExpansion"
        />
        <Button
          :icon="copied ? 'check' : 'file-copy'"
          :severity="copied ? 'success' : 'secondary'"
          text
          rounded
          :tooltip="copied ? 'Copied!' : 'Copy code'"
          tooltip-pos="left"
          class="shadow-lg bg-white/90 backdrop-blur-sm hover:bg-white"
          @click="copyToClipboard"
        />
      </div>

      <div class="p-4">
        <div
          class="relative"
          :class="{ 'code-truncated': isCodeTruncated && !isCodeExpanded }"
        >
          <div
            class="transition-all duration-300"
            v-html="displayedCode"
          />
          <div
            v-if="isCodeTruncated && !isCodeExpanded"
            class="absolute bottom-0 left-0 right-0 h-12 bg-linear-to-t from-white to-transparent pointer-events-none"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Component } from 'vue'
import { Button } from '@fewangsit/wangsvue'
import { componentRegistry } from '../docs'

interface Props {
  src: string
  title?: string
  description?: string
  showCode?: boolean
  maxLines?: number
}

const props = withDefaults(defineProps<Props>(), {
  showCode: true,
  maxLines: 10
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
const isCodeExpanded = ref(false)
const isCodeTruncated = ref(false)
const truncatedCode = ref('')

// Computed property for displayed code
const displayedCode = computed(() => {
  if (!isCodeTruncated.value || isCodeExpanded.value) {
    return highlightedCode.value
  }
  return truncatedCode.value
})

// Function to check if code should be truncated and create truncated version
const processCodeTruncation = () => {
  if (!highlightedCode.value) return

  // Count lines in the highlighted code
  const lines = highlightedCode.value.split('\n')

  if (lines.length > props.maxLines) {
    isCodeTruncated.value = true

    // Create truncated version by taking first maxLines lines
    const truncatedLines = lines.slice(0, props.maxLines)
    truncatedCode.value = truncatedLines.join('\n')
  } else {
    isCodeTruncated.value = false
  }
}

// Toggle code expansion
const toggleCodeExpansion = () => {
  isCodeExpanded.value = !isCodeExpanded.value
}

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

    // Process code truncation after highlighting is complete
    processCodeTruncation()
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

.code-truncated {
  max-height: calc(1.5rem * v-bind(maxLines));
  overflow: hidden;
}

.code-truncated :deep(.shiki) {
  padding-bottom: 3rem;
}
</style>
