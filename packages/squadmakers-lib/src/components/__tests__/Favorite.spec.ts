import { describe, it, expect, vi } from 'vitest'

import { mount } from '@vue/test-utils'
import Favorite from '../Favorite/Favorite.vue'

describe('Favorite', () => {
  const wrapper = mount(Favorite, { props: { isFavorite: true } })

  it('renders properly', () => {
    expect(wrapper.props().isFavorite).toBeTruthy()
  })

  it('emit toggle event', async () => {
    const el = wrapper.find('.sm-favorite')
    const toggleFavorite = vi.spyOn(el, 'trigger')

    await el.trigger('click')
    expect(toggleFavorite).toHaveBeenCalledOnce()
    expect(wrapper.emitted('toggleFavorite')).toBeTruthy()
  })
})
