import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Details from '../Details.vue'
import charactersMock from '@/mocks/characters.mock'

describe('Details.vue', () => {
  const wrapper = mount(Details, {
    props: {
      character: charactersMock[0],
      close: () => { },
    },
  })

  it('renders properly', () => {
    expect(wrapper.props().character).toEqual(charactersMock[0])
    expect(wrapper.props().close).toBeTypeOf('function')
  })


  it('parse date', () => {
    expect((wrapper.vm as any).parseDate('2022-01-01T00:00:00.000Z')).toBe('December 31, 2021')
  })
})
