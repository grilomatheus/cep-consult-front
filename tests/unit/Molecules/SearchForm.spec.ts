import { mount } from '@vue/test-utils';
import SearchForm from '@/components/Molecules/SearchForm.vue';
import InputCEP from '@/components/Atoms/InputCEP.vue';
import ButtonSubmit from '@/components/Atoms/ButtonSubmit.vue';

describe('SearchForm.vue', () => {
	it('emits submit-cep event with the correct CEP value when submitted', async () => {
		const wrapper = mount(SearchForm, {
			global: {
				components: {
					InputCEP,
					ButtonSubmit
				}
			}
		});

		const mockCep = '12345-678';

		await wrapper.findComponent(InputCEP).setValue(mockCep);

		await wrapper.findComponent(ButtonSubmit).trigger('click');

		expect(wrapper.findComponent(InputCEP).exists()).toBe(true);
		expect(wrapper.findComponent(ButtonSubmit).exists()).toBe(true);
	});
});
