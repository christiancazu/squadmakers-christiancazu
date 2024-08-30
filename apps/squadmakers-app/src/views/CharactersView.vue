<script setup lang="ts">
import { ref } from 'vue';
import { useFetch } from '@vueuse/core';
import Hero from '@/components/Hero.vue';
import { useFilters } from '@/composables';
import { Favorite, Tarjeta } from 'christiancazu-squadmakers-lib';
import { ModalsContainer } from 'vue-final-modal';

const characters = ref([])

const { search } = useFilters(() => {
  const _url = new URL('https://rickandmortyapi.com/api/character')

  _url.search = new URLSearchParams({
    name: search.text,
    ...Object.assign({}, ...search.filters.map((filter) => ({ [filter]: search.text })))
  }).toString()

  const { onFetchResponse, onFetchError, onFetchFinally } = useFetch(_url.toString())

  search.isLoading = true

  onFetchResponse(response => {
    response.json().then(({ results }) => {
      characters.value = results
    })
  })

  onFetchError(() => {
    characters.value = []
  })

  onFetchFinally(() => {
    search.isLoading = false
  })
})

const showFavorites = ref(false)
</script>

<template>
  <div class="sm-characters-view">
    <Hero />

    <div class="sm-characters-view__content">
      <div class="sm-characters-view__content__title">
        <p>Show favorites:</p>
        <Favorite
          :is-favorite="showFavorites"
          @toggle-favorite="showFavorites = !showFavorites"
        />
      </div>
      <div class="sm-characters-view__content__characters">
        <div
          v-for="(character, index) in characters"
          :key="index"
        >
          <Tarjeta :character="character" />
        </div>
      </div>
    </div>
  </div>

  <ModalsContainer />
</template>

<style lang="scss" scoped>
.sm-characters-view {
  max-width: 1440px;
  margin: auto;

  &__content {
    border: 1px solid black;
    max-width: 1030px;
    margin: auto;


    &__title {
      display: flex;
      align-items: center;
      margin: 32px 0;

      &>p {
        font-size: 14px;
        margin-right: 8px;
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
