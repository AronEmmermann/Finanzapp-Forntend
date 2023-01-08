import { mount } from '@vue/test-utils'
import Finanzen from '@/views/Finanzen'


describe('Testing Finanzen.vue', () => {
  it('soll den titel der Seite zeigen', () =>{
    //when
    const wrapper = mount(Finanzen)

    //then
    expect(wrapper.text()).toMatch('Willkommen, hier finden Sie Ihre Finanzübersicht:)')
  })
})
