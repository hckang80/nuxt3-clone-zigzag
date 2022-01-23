import { mount } from '@vue/test-utils'
import Page from '@/pages/tutorial/index.vue'

describe('index page', () => {
  it('shows interactive click counter', async() => {
    const page = mount(Page)
    expect(page.vm).toBeTruthy()
  })
})
