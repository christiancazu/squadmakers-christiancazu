<template>
  <template v-if="!search.isLoading">
    <div
      v-for="(character, index) in characters"
      :key="index"
    >
      <Tarjeta
        :character="character"
        @toggle-favorite="handleToggleFavorite"
        @select-character="handleSelectCharacter"
      />
    </div>
  </template>
  <Spinner v-else />
  <EmptyResult v-if="error" />
</template>

<script setup lang="ts">
import { useFetch } from '@vueuse/core';
import { useModal, useModalSlot } from 'vue-final-modal';
import { Tarjeta } from 'christiancazu-squadmakers-lib';

import EmptyResult from './EmptyResult.vue';
import Spinner from './Spinner.vue';
import BaseModal from './BaseModal.vue';
import { useFilters } from '@/composables';
import Details from './Details.vue';

import type { Character } from '@/models';
import { useFavoritesStore } from '@/stores/favorites';
import { storeToRefs } from 'pinia';

const API_URL = import.meta.env.VITE_API_URL + '/character'

defineProps<{
  characters: Character[] | undefined
  error?: string
}>()

const emit = defineEmits(['update-favorite'])

const favoriteStore = useFavoritesStore()
const { isFavoriteSelected } = storeToRefs(favoriteStore)
const { search } = useFilters()

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

function handleToggleFavorite(character: Character) {
  if (isFavoriteSelected.value(character.id)) {
    favoriteStore.removeFavorite(character.id)
  } else {
    favoriteStore.addFavorite(character!)
  }
  emit('update-favorite', character.id)
}
</script>
