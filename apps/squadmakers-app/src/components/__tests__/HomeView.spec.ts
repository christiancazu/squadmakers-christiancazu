import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import HomeView from '../../views/HomeView.vue'
import Button from '../Button.vue'
import router from '@/router'

describe('HomeView.vue', () => {
  const wrapper = mount(HomeView, {
    global: {
      plugins: [
        router
      ]
    }
  })

  it('renders properly', () => {
    expect(wrapper.find('.sm-home-view').exists()).toBeTruthy()
  })

  it('renders Button component', () => {
    expect(wrapper.findComponent(Button).exists()).toBeTruthy()
  })

  it('navigate to /characters', async () => {
    await router.push('/characters')

    expect(router.currentRoute.value.fullPath).to.eq('/characters')
  })
})
