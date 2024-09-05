import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import BaseModal from '../BaseModal.vue'

describe('BaseModal.vue', () => {
  const wrapper = mount(BaseModal, {
    props: {
      noPadding: true,
      scroll: true,
    }
  })

  it('renders properly', () => {
    expect(wrapper.props().noPadding).toBeTruthy()
    expect(wrapper.props().scroll).toBeTruthy()
  })
})
