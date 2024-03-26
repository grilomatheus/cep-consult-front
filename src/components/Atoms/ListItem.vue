<template>
	<v-list-item>
		<div class="list-item-content">
			<v-list-item-title>{{ item.logradouro }}</v-list-item-title>
			<v-list-item-subtitle>{{ item.bairro }}, {{ item.localidade }} - {{ item.uf }}</v-list-item-subtitle>
		</div>
		<v-list-item-action>
			<v-btn icon @click="$emit('remove', index)">
				<v-icon>mdi-delete</v-icon>
			</v-btn>
		</v-list-item-action>
	</v-list-item>
</template>

<script>
import { defineComponent } from 'vue';
import { useMainStore } from '../../store';

export default defineComponent({
	props: {
		item: Object,
		index: Number,
	},
	setup(props) {
		const mainStore = useMainStore();

		const remove = () => {
			mainStore.removeResult(props.index);
		};

		return { remove };
	},
});
</script>
