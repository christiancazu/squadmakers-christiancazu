import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Filters from '../Filters.vue'
import Button from '../Button.vue'

describe('Filters.vue', () => {
  const wrapper = mount(Filters, {
    props: {
      handleClose: () => { },
      handleSearch: () => { },
    }
  })

  it('renders properly', () => {
    expect(wrapper.props().handleClose).toBeTypeOf('function')
    expect(wrapper.props().handleSearch).toBeTypeOf('function')
  })

  it('trigger Button with beforeHandleClose event', async () => {
    const button = wrapper.findAllComponents(Button).at(0)

    expect(button?.exists()).toBeTruthy()
    button?.vm.$emit('click')

    await wrapper.vm.$nextTick()

    expect((wrapper.vm as any).prevFilters).toEqual([])
  })

  it('trigger Button with handleSearch event', () => {
    const button = wrapper.findAllComponents(Button).at(1)

    expect(button?.exists()).toBeTruthy()
  })
})
