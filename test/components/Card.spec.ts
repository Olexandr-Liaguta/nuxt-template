import {enableAutoDestroy, mount, Wrapper} from '@vue/test-utils'
import Card from '~/components/Card.vue'
import {someUtilSum} from "~/utils/someUtils";

enableAutoDestroy(afterEach)

describe('Card', () => {

  let wrapper: Wrapper<any> | undefined;

  const createComponent = () => {
    wrapper = mount(Card)
  }

  it('util', () => {
    const a = 5
    const b = 5

    expect(someUtilSum(a, b)).toBe(a + b)
  })

  it('component', () => {
    createComponent()

    expect(wrapper?.text()).toContain('My card')
  })

})
