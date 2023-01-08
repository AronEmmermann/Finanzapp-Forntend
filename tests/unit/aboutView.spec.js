import {mount} from "@vue/test-utils";
import AboutView from "@/views/AboutView.vue";
import AusgabeTabelle from "@/components/AusgabeTabelle.vue";

describe('Testing About Vue', ()=> {
  beforeEach(()=> {
    fetch.resetMocks()
  })

  it('should have create table', () => {
    //when
    const wrapper = mount(AboutView)

    //then
    const ausgabeTable = wrapper.findComponent(AusgabeTabelle)
    expect(ausgabeTable.exists()).toBeTruthy()
  });
})
