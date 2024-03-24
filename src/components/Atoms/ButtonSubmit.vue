<!-- src\components\Atoms\ButtonSubmit.vue -->
<template>
	<v-btn :disabled="!isValid" @click="submit">Buscar</v-btn>
</template>

<script>
export default {
	props: {
		isValid: {
			type: Boolean,
			default: false,
		},
	},
	emits: ['submit'],
	methods: {
		submit() {
			console.log('Emitting submit event');
			this.$emit('submit');
		}
	},
};
</script>