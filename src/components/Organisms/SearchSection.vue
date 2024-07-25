<template>
	<v-container>
		<v-row justify="center">
			<v-col cols="12" md="8">
				<v-card variant="outlined" class="pa-3" justify-center>
					<div class="text-center">
						<img src="/logo.png" alt="Logo" style="max-width: 300px;">
					</div>
					<SearchForm @submit-cep="searchCEP" />
					<ResultsList :items="results" @remove-item="removeItem" />
					<v-row justify="center" v-if="results.length > 0">
						<v-col cols="auto">
							<ButtonReset @reset="resetAll" />
						</v-col>
					</v-row>
					<v-alert v-if="errorMessage" type="error" dismissible @input="errorMessage = ''">
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