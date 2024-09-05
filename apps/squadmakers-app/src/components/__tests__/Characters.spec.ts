import { describe, it, expect, vi } from 'vitest'

import { mount } from '@vue/test-utils'
import Characters from '../Characters.vue'
import mockCharacters from '../../mocks/characters.mock'
import { createTestingPinia } from '@pinia/testing'

describe('Characters.vue', () => {
  const wrapper = mount(Characters, {
    props: {
      characters: mockCharacters,
      error: 'Test error message',
    },
    global: {
      plugins: [
        createTestingPinia({
          createSpy: vi.fn,
        }),
      ]
    }
  })

  it('renders properly', () => {
    expect(wrapper.props().error).toBe('Test error message')
    expect(wrapper.props().characters).toEqual(mockCharacters)
  })

  it('emit update-favorite with payload', async () => {
    wrapper.vm.$emit('update-favorite', 1)

    await wrapper.vm.$nextTick()

    expect(wrapper.emitted()['update-favorite'][0]).toEqual([1])
  })
})
