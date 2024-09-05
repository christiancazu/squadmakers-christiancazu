import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import SearchInput from '../SearchInput.vue'

describe('SearchInput.vue', () => {
  const wrapper = mount(SearchInput)

  it('renders properly', () => {
    expect(wrapper.find('label.sm-search-input')).toBeTruthy()
  })
})
