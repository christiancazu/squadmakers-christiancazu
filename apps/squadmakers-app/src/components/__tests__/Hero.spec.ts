import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Hero from '../Hero.vue'
import SearchInput from '../SearchInput.vue'
import { ModalsContainer } from 'vue-final-modal'

describe('Hero.vue', () => {
  const wrapper = mount(Hero)

  it('renders properly', () => {
    expect(wrapper.find('img')).toBeTruthy()
  })

  it('renders SearchInput component', () => {
    expect(wrapper.findComponent(SearchInput).exists()).toBeTruthy()
  })

  it('renders ModalsContainer component', () => {
    expect(wrapper.findComponent(ModalsContainer).exists()).toBeTruthy()
  })
})
