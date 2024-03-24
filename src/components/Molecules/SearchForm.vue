<!-- src\components\Molecules\SearchForm.vue -->
<template>
	<v-form @submit.prevent="onSubmit">
		<InputCEP v-model="cep" />
		<ButtonSubmit :disabled="!isValid" />
	</v-form>
</template>

<script>
import InputCEP from '../Atoms/InputCEP.vue';
import ButtonSubmit from '../Atoms/ButtonSubmit.vue';

export default {
	components: { InputCEP, ButtonSubmit },
	data() {
		return {
			cep: '',
			isValid: false,
		};
	},
	methods: {
		validateCEP() {
			this.isValid = /^\d{5}-\d{3}$/.test(this.cep);
		},
		onSubmit() {
			this.validateCEP();
			if (this.isValid) {
				this.$emit('submit-cep', this.cep);
			} else {
				alert('Formato de CEP inválido.');
			}
		}
	},
	watch: {
		cep() {
			this.validateCEP();
		},
	},
};
</script>
