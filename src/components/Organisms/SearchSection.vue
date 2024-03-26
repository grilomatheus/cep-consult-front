<template>
	<v-container>
		<v-row justify="center">
			<v-col cols="12" md="8">
				<v-card class="pa-3">
					<div class="text-center">
						<img src="/logo.png" alt="Logo" style="max-width: 100px;">
					</div>
					<SearchForm @submit-cep="searchCEP" />
					<ResultsList :items="results" @remove-item="removeItem" />
					<ButtonReset v-if="results.length > 0" @reset="resetAll" />
					<v-alert v-if="errorMessage && showAlert" type="error" dismissible @input="showAlert = false">
						{{ errorMessage }}
					</v-alert>
					<v-progress-circular v-if="loading" indeterminate color="primary"></v-progress-circular>
					</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import { useMainStore } from '../../store';
import { ref } from 'vue';
import SearchForm from '../Molecules/SearchForm.vue';
import ResultsList from '../Molecules/ResultsList.vue';
import ButtonReset from '../Atoms/ButtonReset.vue';

export default {
	components: { SearchForm, ResultsList, ButtonReset },
	setup() {
		const mainStore = useMainStore();
		const showAlert = ref(true);

		const resetAll = () => {
			mainStore.resetCep();
			showAlert.value = true;
		};

		return {
			results: mainStore.results,
			errorMessage: mainStore.errorMessage,
			loading: mainStore.loading,
			searchCEP: mainStore.searchCEP,
			resetAll,
			removeItem: mainStore.removeResult,
			showAlert,
		};
	},
};
</script>