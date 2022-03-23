import {mount, Wrapper} from '@vue/test-utils'
import Card from '~/components/Card.vue'

describe('Card', () => {

  let wrapper: Wrapper<any>;

  const createComponent = () => {
    wrapper = mount(Card)
  }

  const MY_CARD = 'My card'

  it(`component title has text ${MY_CARD}`, () => {
    createComponent()
    expect(wrapper.text()).toContain('My card')
  })

  it('close button', async () => {
    createComponent()
    const wrapperBtn = wrapper.findComponent({ name: 'v-btn'});
    expect(wrapperBtn.exists()).toBeTruthy()
  })

})
