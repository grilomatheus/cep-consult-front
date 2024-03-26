<template>
	<v-form @submit.prevent="onSubmit">
		<InputCEP v-model="cep" @update:modelValue="validateCEP" />
		<ButtonSubmit :isValid="isValid" @submit="onSubmit" />
	</v-form>
</template>

<script>
import { ref } from 'vue';
import InputCEP from '../Atoms/InputCEP.vue';
import ButtonSubmit from '../Atoms/ButtonSubmit.vue';

export default {
	components: { InputCEP, ButtonSubmit },
	setup(props, { emit }) {
		const cep = ref('');
		const isValid = ref(false);

		const validateCEP = (value) => {
			isValid.value = /^\d{5}-\d{3}$/.test(value);
		};

		const onSubmit = () => {
			if (isValid.value) {
				emit('submit-cep', cep.value);
			} else {
				alert('Formato de CEP inválido.');
			}
		};

		return { cep, isValid, onSubmit, validateCEP };
	},
};
</script>
