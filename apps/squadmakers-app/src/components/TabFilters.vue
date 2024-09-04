<template>
  <section class="sm-tab-filters">
    <div class="sm-tab-filters__container">
      <div
        v-for="(filter, index) in filters"
        :key="index"
        class="sm-tab-filters__container__items"
        @click="handleActiveTab(filter)"
      >
        <div class="sm-tab-filters__container__items__label">
          {{ filter }}
        </div>
        <div
          v-if="search.gender === filter"
          class="sm-tab-filters__container__items__active"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useFilters } from '@/composables';

const filters = ['all', 'unknown', 'female', 'male', 'genderless']

const { search, onSearchCharacters } = useFilters()

function handleActiveTab(gender: string) {
  search.gender = gender
  search.page = 1
  onSearchCharacters()
}
</script>

<style scoped lang="scss">
.sm-tab-filters {
  height: 80px;
  background-color: #F2F2F2;
  display: flex;
  justify-content: center;

  &__container {
    max-width: 1030px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    &__items {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1 1 0px;
      font-size: 18px;
      line-height: 21.94px;
      position: relative;
      width: 100%;
      cursor: pointer;

      &:hover {
        filter: brightness(95%);
        background-color: #F2F2F3;
      }


      &__label {
        display: flex;
        justify-content: center;
        text-transform: capitalize;
      }

      &__active {
        height: 4px;
        width: 100%;
        position: absolute;
        bottom: 0;
        background-color: #34C759;
      }
    }
  }
}
</style>
