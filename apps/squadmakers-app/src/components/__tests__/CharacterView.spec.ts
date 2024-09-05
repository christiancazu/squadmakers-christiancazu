import { describe, it, expect, vi } from 'vitest'

import { mount } from '@vue/test-utils'
import CharacterView from '../../views/CharactersView.vue'
import { createTestingPinia } from '@pinia/testing'
import Hero from '../Hero.vue'
import TabFilters from '../TabFilters.vue'
import { Favorite } from 'christiancazu-squadmakers-lib'
import Pagination from '../Pagination.vue'
import Characters from '../Characters.vue'
import { ModalsContainer } from 'vue-final-modal'

describe('CharacterView.vue', () => {
  const wrapper = mount(CharacterView, {
    global: {
      plugins: [
        createTestingPinia({
          createSpy: vi.fn,
        }),
      ]
    }
  })

  it('renders properly', () => {
    expect(wrapper.find('.sm-characters-view').exists()).toBeTruthy()
  })

  it ('render Hero component', () => {
    expect(wrapper.findComponent(Hero).exists()).toBeTruthy()
  })

  it ('render TabFilters component', () => {
    expect(wrapper.findComponent(TabFilters).exists()).toBeTruthy()
  })

  it ('render Favorite component', () => {
    expect(wrapper.findComponent(Favorite).exists()).toBeTruthy()
  })

  it ('render Pagination component', () => {
    expect(wrapper.findComponent(Pagination).exists()).toBeFalsy()
  })

  it ('render Characters component', () => {
    expect(wrapper.findComponent(Characters).exists()).toBeTruthy()
  })

  it ('render ModalsContainer component', () => {
    expect(wrapper.findComponent(ModalsContainer).exists()).toBeTruthy()
  })
})
