<!-- src\components\Atoms\InputCEP.vue -->
<template>
	<v-text-field v-model="cep" label="Digite o CEP" :rules="rules" placeholder="00000-000" outlined
		clearable></v-text-field>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
	name: 'InputCEP',
	setup(props, { emit }) {
		const cep = ref('');
		const rules = [
			(v: string) => !!v || 'CEP é obrigatório',
			(v: string) => /^\d{5}-\d{3}$/.test(v) || 'Formato do CEP inválido',
		];

		watch(cep, (newCep) => {
			if (typeof newCep === 'string') {
				const numericCep = newCep.replace(/\D/g, '');
				if (numericCep.length <= 5) {
					cep.value = numericCep;
				} else {
					cep.value = `${numericCep.slice(0, 5)}-${numericCep.slice(5, 8)}`;
				}
			}
			emit('update:modelValue', cep.value);
		});


		return { cep, rules };
	},
});
</script>