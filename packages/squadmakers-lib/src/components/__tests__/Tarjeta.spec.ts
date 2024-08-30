import { describe, it, expect, vi } from 'vitest'

import { mount } from '@vue/test-utils'
import Tarjeta, { Character } from '../Tarjeta/Tarjeta.vue'
import Favorite from '../Favorite/Favorite.vue';

const character: Character = {
  "id": 1,
  "name": "Rick Sanchez",
  "status": "Alive",
  "species": "Human",
  "type": "",
  "gender": "Male",
  "origin": {
    "name": "Earth",
    "url": "https://rickandmortyapi.com/api/location/1"
  },
  "location": {
    "name": "Earth",
    "url": "https://rickandmortyapi.com/api/location/20"
  },
  "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  "episode": [
    "https://rickandmortyapi.com/api/episode/1",
    "https://rickandmortyapi.com/api/episode/2",
  ],
  "url": "https://rickandmortyapi.com/api/character/1",
  "created": "2017-11-04T18:48:46.250Z"
};

describe('Tarjeta', () => {
  const wrapper = mount(Tarjeta, { props: { character }, global: { components: { Favorite } } })

  it('renders properly', () => {
    expect(wrapper.props().character).toBeTruthy()
  })

  it('emit toggleFavorite event', async () => {
    const el = wrapper.find('.sm-favorite')

    wrapper.getComponent(Favorite).vm.$emit('toggleFavorite')

    await el.trigger('click')
    const toggleFavoriteEvent = wrapper.emitted('toggleFavorite')

    expect(toggleFavoriteEvent).toBeTruthy()
  })

  it('emit selectCharacter event', async () => {
    const el = wrapper.find('.sm-card__content__top__text')
    const toggleFavorite = vi.spyOn(el, 'trigger')

    await el.trigger('click')
    const selectCharacterEvent = wrapper.emitted('selectCharacter')

    expect(toggleFavorite).toHaveBeenCalledOnce()
    expect(selectCharacterEvent).toBeTruthy()
    expect(selectCharacterEvent).toEqual([[1]])
  })
})
