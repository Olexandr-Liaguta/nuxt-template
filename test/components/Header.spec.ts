import {mount, Wrapper} from '@vue/test-utils'
import Header from '~/components/todo/Header.vue'

describe('Header', () => {

  let wrapper: Wrapper<any>;

  const createComponent = () => {
    wrapper = mount(Header)
  }

  it('correctly initialized when loading prop passed', async () => {
    createComponent()

    expect(wrapper.find('h3').text()).toContain('Todos')

    await wrapper.setProps({
      loading: true
    })

    expect(wrapper.find('h3').text()).toContain('Loading...')
  })

})
