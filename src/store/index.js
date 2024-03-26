// src/store/index.js
import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
	state: () => ({
		results: [],
		errorMessage: '',
		loading: false,
	}),
	actions: {
		async searchCEP(cep) {
			this.loading = true;
			this.errorMessage = '';
			try {
				const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
				const data = await response.json();
				if (!response.ok || data.erro) {
					throw new Error('CEP não encontrado ou formato inválido.');
				}
				this.results.push(data);
			} catch (error) {
				this.errorMessage = error.message;
			} finally {
				this.loading = false;
			}
		},
		removeResult(index) {
			this.results.splice(index, 1);
		},
		resetCep() {
			this.results.splice(0, this.results.length);
			this.errorMessage = '';
		}
	},
});
