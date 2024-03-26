import { mount } from '@vue/test-utils';
import ButtonReset from '@/components/Atoms/ButtonReset.vue';

describe('ButtonReset.vue', () => {
  it('emits an event when clicked', async () => {
    const wrapper = mount(ButtonReset);
    await wrapper.trigger('click');
    expect(wrapper.emitted()).toHaveProperty('reset');
  });
});
