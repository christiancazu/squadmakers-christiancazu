<template>
  <div class="sm-filters">
    <h1 class="sm-filters__title">
      Filters
    </h1>
    <div class="sm-filters__content">
      <Multiselect
        v-model="search.filters"
        mode="tags"
        placeholder="Search by status, species, or type"
        :options="filters"
      />
    </div>

    <div class="sm-filters__actions">
      <div>
        <Button
          label="Cancel"
          flat
          @click="handleClose"
        />
      </div>
      <div>
        <Button
          label="Search"
          @click="handleSearch"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Multiselect from '@vueform/multiselect';

import Button from './Button.vue';
import { useFilters } from '@/composables';

defineProps<{
  handleClose: () => void
  handleSearch: () => void
}>()

const { search } = useFilters()

const filters = ['status', 'species', 'type']
</script>

<style scoped lang="scss">
.sm-filters {
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  &__title {
    margin-bottom: 16px;
  }

  &__content {
    max-width: 1030px;
    justify-items: center;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 16px;
  }

  &__actions {
    display: flex;
    justify-content: flex-end;
    margin-top: auto;


    & > div {
      margin-left: 16px;
    }
  }
}
</style>

<style src="@vueform/multiselect/themes/default.css"></style>
