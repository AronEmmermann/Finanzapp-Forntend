import { mount } from '@vue/test-utils'
import GeldForm from '@/components/GeldForm'
import AboutView from "@/views/AboutView.vue";
import AusgabeTabelle from "@/components/AusgabeTabelle.vue";
import HomeView from "@/views/HomeView.vue";

describe('Testing GeldForm.vue', () => {
  it('soll Formular nur zeigen wenn der Button gedrückt wird', () => {
    // when
    const wrapper = mount(GeldForm)

    // then
    expect(wrapper.find('#exampleModalLabel').classes()).not.toContain('show')
  })

  it('should have create a form', () => {
    //when
    const wrapper = mount(HomeView)

    //then
    const geldForm = wrapper.findComponent(GeldForm)
    expect(geldForm.exists()).toBeTruthy()
  });
})
