<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content';

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation');

const { header } = useAppConfig();
</script>

<template>
  <UHeader :to="header?.to || '/'" :ui="{ center: 'flex-1' }">
    <UContentSearchButton
      v-if="header?.search"
      :collapsed="false"
      class="w-full"
    />

    <template
      #title
      v-if="header?.logo?.dark || header?.logo?.light || header?.title"
    >
      <UColorModeImage
        v-if="header?.logo?.dark || header?.logo?.light"
        :alt="header?.logo?.alt"
        :dark="header?.logo?.dark!"
        :light="header?.logo?.light!"
        class="h-6 w-auto shrink-0"
      />

      <span v-else-if="header?.title">
        {{ header.title }}
      </span>
    </template>

    <template #left v-else>
      <NuxtLink :to="header?.to || '/'">
        <AppLogo class="w-auto h-6 shrink-0" />
      </NuxtLink>

      <TemplateMenu />
    </template>

    <template #right>
      <UContentSearchButton v-if="header?.search" class="lg:hidden" />

      <UColorModeButton v-if="header?.colorMode" />

      <template v-if="header?.links">
        <UButton
          :key="index"
          v-for="(link, index) of header.links"
          v-bind="{ color: 'neutral', variant: 'ghost', ...link }"
        />
      </template>
    </template>

    <template #body>
      <UContentNavigation :navigation="navigation" highlight />
    </template>
  </UHeader>
</template>
