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

/*it('soll Ein- bzw. ausgabe und geldBetrag rendern', () => {
  // when
  const wrapper = mount(Finanzen, {
    propsData: {
      geld: {
        id: 1,
        name: 'Gehalt',
        geldBetrag: 450,
        einnahme: true
      }
    }
  })

  // then
  const cardTitle = wrapper.find('.card-title')
  expect(cardTitle.text()).toBe('Gehalt: 450€')
})

/*it('soll einen Carte erstellen für jede Ein- bzw. Ausgabe',  () => {
  //when
  const wrapper = mount(Finanzen, {
    propsData:{
      gelder: [
        {
          id: 1,
          name: 'Essen',
          geldBetrag: 15,
          einnahme: false
        },
        {
          id: 2,
          name: 'Geburtstag',
          geldBetrag: 300,
          einnahme: true
        }
      ]

    }
  })

  //then
  const finanzen = wrapper.findAllComponents(Finanzen)
  expect(finanzen.length).toBe(2)

})*/






