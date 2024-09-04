<template>
  <div class="sm-pagination">
    <Button
      label="<"
      :disabled="search.isLoading || !info?.prev"
      circle
      flat
      title="previous"
      @click="handlePagination('prev')"
    />
    <Button
      circle
      :label="search.page"
      title="current page"
    />
    <Button
      circle
      label=">"
      title="next"
      flat
      :disabled="search.isLoading || !info?.next"
      @click="handlePagination('next')"
    />
  </div>
</template>

<script setup lang="ts">
import { useFilters } from '@/composables';
import Button from './Button.vue';
import type { Pagination } from '@/models';

const {search, onSearchCharacters} = useFilters()

defineProps<{
  info: Pagination
}>()

function handlePagination(direction: 'next' | 'prev') {
  if (direction === 'next') {
    search.page++
  } else {
    search.page--
  }

  onSearchCharacters()
}
</script>

<style scoped lang="scss">
.sm-pagination {
  &>button {
    margin-left: 8px;
  }
}
</style>
