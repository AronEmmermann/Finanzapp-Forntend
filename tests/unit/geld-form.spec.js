import { mount } from '@vue/test-utils'
import GeldForm from '@/components/GeldForm'

describe('Testing GeldForm.vue', () => {
  it('soll Formular nur zeigen wenn der Button gedrückt wird', () => {
    // when
    const wrapper = mount(GeldForm)

    // then
    expect(wrapper.find('#exampleModalLabel').classes()).not.toContain('show')
  })
})
