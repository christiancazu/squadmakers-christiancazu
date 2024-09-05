<template>
  <div class="sm-characters-view">
    <Hero />
    <TabFilters />

    <div class="sm-characters-view__content">
      <div class="sm-characters-view__content__top">
        <div class="sm-characters-view__content__top__left">
          <p>Show favorites:</p>
          <Favorite
            :is-favorite="showFavorites"
            @toggle-favorite="handleShowFavorites"
          />
        </div>
        <div
          v-if="!showFavorites && pagination"
          class="sm-characters-view__content__top__right"
        >
          <Pagination :info="pagination" />
        </div>
      </div>
      <div class="sm-characters-view__content__characters">
        <Characters
          :characters="showFavorites ? favorites : characters"
          :error="error"
          @update-favorite="handleToogleFavorite"
        />
      </div>
    </div>
  </div>

  <ModalsContainer />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useFetch } from '@vueuse/core';

import Hero from '@/components/Hero.vue';
import TabFilters from '@/components/TabFilters.vue';
import type { Character, Pagination as PaginationType } from '@/models';
import { useFilters } from '@/composables';

import { ModalsContainer } from 'vue-final-modal';
import { Favorite } from 'christiancazu-squadmakers-lib';
import Pagination from '@/components/Pagination.vue';
import Characters from '@/components/Characters.vue';
import { useFavoritesStore } from '@/stores/favorites';

const characters = ref<Character[]>([])
const pagination = ref<PaginationType>()
const showFavorites = ref(false)

const API_URL = import.meta.env.VITE_API_URL + '/character'

const url = ref(API_URL)

const favoriteStore = useFavoritesStore()
const {favorites, isFavoriteSelected}= storeToRefs(favoriteStore)

const { search } = useFilters(() => {
  const _url = new URL(API_URL)

  _url.search = new URLSearchParams({
    ...(search.text && { name: search.text }),
    page: search.page,
    ...Object.assign({}, ...search.filters.map((filter) => ({ [filter]: search.text })).filter(() => search.text)),
    ...(search.gender && search.gender !== 'all' && { gender: search.gender }),
  }).toString()

  url.value = _url.toString()

  if (!showFavorites.value) {
    executeFetchCharacters()
  }
})

const { execute: executeFetchCharacters, error, onFetchError }
  = useFetch(url, {
    immediate: false,
    afterFetch: (data) => {
      characters.value = data.data.results.map((ch: Character) => ({ ...ch, isFavorite: isFavoriteSelected.value(ch.id)  }))
      pagination.value = data.data.info
      search.isLoading = false

      return data
    },
    beforeFetch: () => {
      search.isLoading = true
    },
  }).get().json()

onFetchError(() => {
  characters.value = []
  pagination.value = null
  search.isLoading = false
  search.page = 1
})

function handleToogleFavorite(id: number) {
  const characterIndex = characters.value.findIndex((character) => character.id === id)

  if (characterIndex === -1) return

  characters.value[characterIndex].isFavorite = !characters.value[characterIndex].isFavorite
}

function handleShowFavorites() {
  showFavorites.value = !showFavorites.value
  if (!showFavorites.value) {
    executeFetchCharacters()
  }
}
</script>

<style lang="scss" scoped>
.sm-characters-view {
  max-width: 1440px;
  margin: auto;
  padding-bottom: 64px;

  &__content {
    max-width: 1030px;
    margin: auto;

    &__top {
      margin: 32px 0;
      display: flex;
      justify-content: space-between;

      &__left {
        display: flex;
        align-items: center;

        &>p {
          font-size: 14px;
          margin-right: 8px;
        }
      }
    }

    &__characters {
      display: grid;
      justify-items: center;
      grid-template-columns: repeat(auto-fit, minmax(326px, 1fr));
      gap: 16px;
    }
  }
}
</style>

<style src="christiancazu-squadmakers-lib/style.css"></style>
