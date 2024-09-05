import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import EmptyResult from '../EmptyResult.vue'
import Button from '../Button.vue'

describe('EmptyResult.vue', () => {
  const wrapper = mount(EmptyResult)

  it('renders properly', () => {
    expect(wrapper.text()).toContain('Uh-oh!')
  })

  it('trigger handleClearFilters from Button component', async () => {
    wrapper.getComponent(Button).vm.$emit('click')

    await wrapper.vm.$nextTick()

    expect((wrapper.vm as any).search.filters).toEqual([])
    expect((wrapper.vm as any).search.gender).toBe('all')
    expect((wrapper.vm as any).search.text).toBe('')
  })
})
