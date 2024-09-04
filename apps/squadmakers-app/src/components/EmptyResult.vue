<template>
  <div class="sm-empty-filters">
    <div class="sm-empty-filters__content">
      <p class="sm-empty-filters__content__title">
        Uh-oh!
      </p>
      <p class="sm-empty-filters__content__subtitle">
        ¡You seem lost on your journey!
      </p>
      <Button
        label="Clear filters"
        @click="handleClearFilters"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFilters } from '@/composables';
import Button from './Button.vue';

defineEmits(['clearFilters'])

const { search } = useFilters()

function handleClearFilters() {
  search.filters = []
  search.gender = 'all'
  search.text = ''
}
</script>

<style scoped lang="scss">
.sm-empty-filters {
  display: flex;
  justify-content: center;

  &__content {
    text-align: center;

    &__title {
      font-size: 36px;
      font-weight: 700;
      color: #353535;
      margin-bottom: 8px;
    }

    &__subtitle {
      font-size: 20px;
      font-weight: 500;
      color: #5F5F5F;
      margin-bottom: 16px;
    }
  }
}
</style>
