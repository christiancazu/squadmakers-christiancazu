import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Spinner from '../Spinner.vue'

describe('Spinner.vue', () => {
  const wrapper = mount(Spinner)

  it('renders properly', () => {
    expect(wrapper.find('svg[viewBox="0 0 24 24"]').exists()).toBeTruthy()
  })
})
