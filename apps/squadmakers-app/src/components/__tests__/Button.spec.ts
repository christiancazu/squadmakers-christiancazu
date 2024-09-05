import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Button from '../Button.vue'

describe('Button.vue', () => {
  const wrapper = mount(Button, {
    props: {
      label: 'Test',
      circle: true,
      disabled: true,
    }
  })

  it('renders properly', () => {
    expect(wrapper.props().label).toBe('Test')
    expect(wrapper.props().circle).toBeTruthy()
    expect(wrapper.props().disabled).toBeTruthy()
    expect(wrapper.props().flat).toBeFalsy()
  })
})
