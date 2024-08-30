<template>
  <div class="sm-filters">
    <h1 class="sm-filters__title">
      Filters
    </h1>
    <div class="sm-filters__content">
      <FilterSelect
        id="filter-status"
        v-model="filters.status"
        placeholder="Select status"
        :options="filterStatus"
      />

      <FilterSelect
        id="filter-species"
        v-model="filters.species"
        placeholder="Select species"
        :options="filterSpecies"
      />

      <FilterSelect
        id="filter-types"
        v-model="filters.type"
        placeholder="Select type"
        :options="filterTypes"
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
import FilterSelect from './FilterSelect.vue';
import Button from './Button.vue';
import { useFilters } from '@/composables';

defineProps<{
  handleClose: () => void
  handleSearch: () => void
}>()

const { filters } = useFilters()

const filterStatus = ['Alive', 'Dead', 'Unknown']
const filterSpecies = ['Human', 'Humanoid']
const filterTypes = ['Planet', 'Space station', 'Dimension C', 'Rick\'s Toxic Side']
</script>

<style scoped lang="scss">
.sm-filters {
  &__title {
    margin-bottom: 32px;
  }

  &__content {
    max-width: 1030px;
    margin: auto;
    justify-items: center;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 16px;
  }

  &__actions {
    display: flex;
    justify-content: flex-end;
    margin-top: 32px;

    & > div {
      margin-left: 16px;
    }
  }
}
</style>
