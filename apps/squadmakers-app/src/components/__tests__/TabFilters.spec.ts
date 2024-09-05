import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import TabFilters from '../TabFilters.vue'

describe('TabFilters.vue', () => {
  const wrapper = mount(TabFilters)

  it('renders properly', () => {
    expect(wrapper.find('section.sm-tab-filters').exists()).toBeTruthy()
  })
})
