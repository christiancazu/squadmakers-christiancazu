<template>
  <div class="sm-characters-view">
    <Hero />
    <TabFilters />

    <div class="sm-characters-view__content">
      <div class="sm-characters-view__content__title">
        <p>Show favorites:</p>
        <Favorite
          :is-favorite="showFavorites"
          @toggle-favorite="showFavorites = !showFavorites"
        />
      </div>
      <div class="sm-characters-view__content__characters">
        <template v-if="!isFetching">
          <div
            v-for="(character, index) in characters"
            :key="index"
          >
            <Tarjeta
              :character="character"
              @select-character="handleSelectCharacter"
            />
          </div>
        </template>
        <Spinner v-else />
      </div>
      <EmptyResult v-if="error" />
    </div>
  </div>

  <ModalsContainer />
</template>

<script setup lang="ts">
import { ref, shallowRef } from 'vue';
import { useFetch } from '@vueuse/core';

import Hero from '@/components/Hero.vue';
import TabFilters from '@/components/TabFilters.vue';
import Spinner from '@/components/Spinner.vue';
import BaseModal from '@/components/BaseModal.vue';
import Details from '@/components/Details.vue';
import type { Character } from '@/models';
import EmptyResult from '@/components/EmptyResult.vue';
import { useFilters } from '@/composables';

import { ModalsContainer, useModal, useModalSlot } from 'vue-final-modal';
import { Favorite, Tarjeta } from 'christiancazu-squadmakers-lib';

const showFavorites = ref(false)
const characters = shallowRef<Character[]>([])

const API_URL = 'https://rickandmortyapi.com/api/character'

const url = ref(API_URL)

const { search } = useFilters(() => {
  const _url = new URL(API_URL)

  _url.search = new URLSearchParams({
    name: search.text,
    ...Object.assign({}, ...search.filters.map((filter) => ({ [filter]: search.text }))),
    ...(search.gender && search.gender !== 'all' && { gender: search.gender }),
  }).toString()

  url.value = _url.toString()

  executeFetchCharacters()
})

const { execute: executeFetchCharacters, isFetching, error, onFetchError }
  = useFetch(url, {
    immediate: false, afterFetch: (data) => {
      characters.value = data.data.results
      return data
    }
  }).get().json()

  onFetchError(() => {
    characters.value = []
  })

function handleSelectCharacter(id: number) {
  const { onFetchResponse } = useFetch(`${API_URL}/${id}`)

  onFetchResponse(response => {
    response.json().then((character) => {
      const { open, close } = useModal({
        component: BaseModal,
        attrs: {
          noPadding: true,
          scroll: true
        },
        slots: {
          default: useModalSlot({
            component: Details,
            attrs: {
              close: () => close(),
              character
            }
          })
        }
      })
      open()
    })
  })
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
