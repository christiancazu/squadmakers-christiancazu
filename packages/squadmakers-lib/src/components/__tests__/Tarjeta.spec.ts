import { describe, it, expect } from 'vitest'

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

  it('emit toggle event', async () => {
    wrapper.getComponent(Favorite).vm.$emit('toggleFavorite')

    expect(wrapper.emitted('toggleFavorite')).toBeTruthy()
  })
})
