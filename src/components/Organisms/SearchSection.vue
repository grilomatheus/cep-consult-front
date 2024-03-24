<!-- src\components\Organisms\SearchSection.vue -->
<template>
	<v-container>
		<v-row justify="center">
			<v-col cols="12" md="8">
				<v-card class="pa-3">
					<img src="/logo.png" alt="logo" />
					<SearchForm @submit-cep="searchCEP" />
					<ResultsList :items="results" @remove-item="removeResult" />
					<ButtonReset v-if="results.length > 0" @reset="resetCep" />
					<v-alert v-if="errorMessage" type="error" class="mt-3">{{ errorMessage }}</v-alert>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>


<script>
import { ref } from 'vue';
import SearchForm from '../Molecules/SearchForm.vue';
import ResultsList from '../Molecules/ResultsList.vue';
import ButtonReset from '../Atoms/ButtonReset.vue';

export default {
	components: { SearchForm, ResultsList, ButtonReset },
	setup() {
		const results = ref([]);
		const errorMessage = ref('');

		const searchCEP = async (cep) => {
			errorMessage.value = '';
			try {
				const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
				const data = await response.json();
				if (!response.ok) throw new Error('Falha ao buscar o CEP. Verifique o formato.');
				if (data.erro) throw new Error('CEP não encontrado.');

				results.value.push(data);
			} catch (error) {
				errorMessage.value = error.message;
			}
		};



		const removeResult = (index) => {
			results.value.splice(index, 1);
		};
		
		const resetCep = () => {
			results.value = [];
			errorMessage.value = '';
		};

		return { results, searchCEP, removeResult, resetCep, errorMessage };
	},
};
</script>