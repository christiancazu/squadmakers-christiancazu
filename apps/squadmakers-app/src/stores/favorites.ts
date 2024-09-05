import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Character } from '@/models'

export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
    favorites: ref<Character[]>([])
  }),

  getters: {
    getFavoriteIds: (state) => state.favorites.map(favorite => favorite.id),
    isFavoriteSelected: (state) => (id: number) => state.favorites.some(favorite => favorite.id === id),
  },

  actions: {
    addFavorite (character: Character) {
      this.favorites.push(character)
    },
    removeFavorite (id: number) {
      this.favorites = this.favorites.filter(favorite => favorite.id !== id)
    }
  },

  persist: true
})
