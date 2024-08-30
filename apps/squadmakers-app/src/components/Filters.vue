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
        :options="filterStatus"
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
import Button from './Button.vue';
import { useFilters } from '@/composables';
import Multiselect from '@vueform/multiselect';

defineProps<{
  handleClose: () => void
  handleSearch: () => void
}>()

const { search } = useFilters()

const filterStatus = ['status', 'species', 'type']
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

<style src="@vueform/multiselect/themes/default.css"></style>
