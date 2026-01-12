<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content';
import { findPageHeadline } from '@nuxt/content/utils';

definePageMeta({
  layout: 'docs',
});

const route = useRoute();
const { toc } = useAppConfig();
const navigation = inject<Ref<ContentNavigationItem[]>>('navigation');

const { data: page } = await useAsyncData(route.path, () =>
  queryCollection('docs').path(route.path).first(),
);
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true,
  });
}

const { data: surround } = await useAsyncData(`${route.path}-surround`, () => {
  return queryCollectionItemSurroundings('docs', route.path, {
    fields: ['description'],
  });
});

const title = page.value.seo?.title || page.value.title;
const description = page.value.seo?.description || page.value.description;

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
});

const headline = computed(() =>
  findPageHeadline(navigation?.value, page.value?.path),
);

defineOgImageComponent('Docs', {
  headline: headline.value,
});

const links = computed(() => {
  const l = [];
  if (toc?.bottom?.edit) {
    l.push({
      icon: 'i-lucide-external-link',
      label: 'Edit this page',
      to: `${toc.bottom.edit}/${page?.value?.stem}.${page?.value?.extension}`,
      target: '_blank',
    });
  }

  return [...l, ...(toc?.bottom?.l || [])].filter(Boolean);
});
</script>

<template>
  <UPage v-if="page">
    <UPageHeader
      :description="page.description"
      :headline="headline"
      :title="page.title"
    >
      <template #links>
        <UButton
          :key="index"
          v-for="(link, index) in page.links"
          v-bind="link"
        />

        <PageHeaderLinks />
      </template>
    </UPageHeader>

    <UPageBody>
      <ContentRenderer v-if="page" :value="page" />

      <USeparator v-if="surround?.length" />

      <UContentSurround :surround="surround" />
    </UPageBody>

    <template #right v-if="page?.body?.toc?.links?.length">
      <UContentToc :links="page.body?.toc?.links" :title="toc?.title">
        <template #bottom v-if="toc?.bottom">
          <div
            :class="{ 'mt-6!': page.body?.toc?.links?.length }"
            class="hidden lg:block space-y-6"
          >
            <USeparator v-if="page.body?.toc?.links?.length" type="dashed" />

            <UPageLinks :links="links" :title="toc.bottom.title" />
          </div>
        </template>
      </UContentToc>
    </template>
  </UPage>
</template>
