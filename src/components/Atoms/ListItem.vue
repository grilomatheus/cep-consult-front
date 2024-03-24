<!-- src\components\Atoms\ListItem.vue -->
<template>
	<v-list-item>
		<div class="list-item-content">
			<v-list-item-title>{{ item.logradouro }}</v-list-item-title>
			<v-list-item-subtitle>{{ item.bairro }}, {{ item.localidade }} - {{ item.uf }}</v-list-item-subtitle>
		</div>
		<v-list-item-action>
			<v-btn icon @click="remove(item)">
				<v-icon>mdi-delete</v-icon>
			</v-btn>
		</v-list-item-action>
	</v-list-item>
</template>

<script>
export default {
	props: {
		item: Object,
	},
	emits: ['remove'],
	methods: {
		remove(item) {
			this.$emit('remove', item);
		},
	},
};
</script>