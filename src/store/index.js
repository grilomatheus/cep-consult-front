// src/store/index.js
import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
	state: () => ({
		results: [],
		errorMessage: '',
	}),
	actions: {
		async searchCEP(cep) {
			this.errorMessage = '';
			try {
				const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
				if (!response.ok) throw new Error('Falha ao buscar o CEP. Verifique o formato.');

				const data = await response.json();
				if (data.erro) throw new Error('CEP não encontrado.');

				this.results.push(data);
			} catch (error) {
				this.errorMessage = error.message;
			}
		},
		removeResult(index) {
			this.results.splice(index, 1);
		}
	},
});
