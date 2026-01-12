<script setup lang="ts">
import { Badge, Button, Card } from '@fewangsit/wangsvue';
</script>

<template>
  <div class="flex flex-wrap gap-4">
    <Card class="w-96">
      <template #header>
        <div class="relative">
          <img
            alt="Product"
            class="w-full h-48 object-cover"
            src="https://via.placeholder.com/384x200/10B981/FFFFFF?text=Product+Image"
          />

          <Badge
            class="absolute top-2 right-2"
            label="New"
            severity="success"
          />
        </div>
      </template>

      <template #title>
        <h3 class="text-xl font-bold text-gray-900">Premium Product</h3>
      </template>

      <template #subtitle>
        <p class="text-sm text-gray-600">
          High-quality item with excellent features
        </p>
      </template>

      <template #content>
        <div class="space-y-3">
          <p class="text-gray-700">
            This comprehensive card example showcases all available slots
            working together to create a rich, structured layout.
          </p>

          <div class="flex items-center gap-2">
            <span class="text-2xl font-bold text-green-600">$299</span>

            <span class="text-sm text-gray-500 line-through">$399</span>
          </div>
        </div>
      </template>

      <template #footer>
        <div class="flex justify-between items-center pt-4 border-t">
          <div class="flex gap-2">
            <Button label="Add to Cart" severity="primary" size="small" />

            <Button label="Wishlist" severity="secondary" size="small" />
          </div>

          <span class="text-xs text-gray-500">Free shipping</span>
        </div>
      </template>
    </Card>
  </div>
</template>
