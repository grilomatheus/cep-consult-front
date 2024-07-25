<template>
	<v-form @submit.prevent="onSubmit">
		<v-row>
			<v-col cols="12" md="8">
				<InputCEP v-model="cep" @update:modelValue="validateCEP" />
			</v-col>
			<v-col cols="12" md="4" class="btn-mobile">
				<ButtonSubmit :isValid="isValid" @submit="onSubmit" />
			</v-col>
		</v-row>
	</v-form>
</template>

<script>
import { ref } from 'vue';
import { useMainStore } from '../../store';
import InputCEP from '../Atoms/InputCEP.vue';
import ButtonSubmit from '../Atoms/ButtonSubmit.vue';

export default {
	components: { InputCEP, ButtonSubmit },
	setup(props, { emit }) {
		const mainStore = useMainStore();
		const cep = ref('');
		const isValid = ref(false);

		const validateCEP = (value) => {
			isValid.value = /^\d{5}-\d{3}$/.test(value);
		};

		const onSubmit = () => {
			if (isValid.value) {
				emit('submit-cep', cep.value);
			} else {
				mainStore.errorMessage = 'Formato de CEP inválido.';
			}
		};

		return { cep, isValid, onSubmit, validateCEP };
	},
};
</script>

<style scoped>
@media (max-width: 960px) {
	.btn-mobile {
		display: flex;
		align-items: center;
		justify-content: center;
	}
}
</style>