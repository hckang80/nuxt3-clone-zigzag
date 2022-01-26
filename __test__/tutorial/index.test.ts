import { mount } from '@vue/test-utils'
import Page from '@/pages/tutorial/index.vue'

describe('index page', () => {
  const wrapper = mount(Page)
  it('all 버튼 클릭시 all로 선택되어야 한다', async() => {
    await wrapper.find('#electronics').trigger('click')
    // expect(wrapper.vm.selectedCategory).toContain('electronics')
  })
})
