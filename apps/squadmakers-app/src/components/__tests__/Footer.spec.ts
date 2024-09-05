import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Footer from '../Footer.vue'

describe('Footer.vue', () => {
  const wrapper = mount(Footer)

  it('renders properly', () => {
    expect(wrapper.find('footer.sm-footer').exists()).toBeTruthy()
  })
})
