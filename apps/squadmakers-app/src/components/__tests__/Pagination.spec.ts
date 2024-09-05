import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Pagination from '../Pagination.vue'
import Button from '../Button.vue'

const info = {
  count: 20,
  pages: 5,
  next: 'https://rickandmortyapi.com/api/character/?page=3',
  prev: 'https://rickandmortyapi.com/api/character/?page=1',
}

describe('Pagination.vue', () => {
  const wrapper = mount(Pagination, {
    props: {
      info
    }
  })

  it('renders properly', () => {
    expect(wrapper.props().info).toEqual(info)
  })

  it('handle previous Button click event', async () => {
    const button = wrapper.findAllComponents(Button).at(0)

    expect((wrapper.vm as any).search.page).toBe(1)

    button?.trigger('click')

    await wrapper.vm.$nextTick()

    expect((wrapper.vm as any).search.page).toBe(0)
  })

  it('handle next Button click event', async () => {
    const button = wrapper.findAllComponents(Button).at(2)

    expect((wrapper.vm as any).search.page).toBe(0)

    button?.trigger('click')

    await wrapper.vm.$nextTick()

    expect((wrapper.vm as any).search.page).toBe(1)
  })
})
