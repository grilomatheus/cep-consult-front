<template>
	<v-list-item>
		<v-row class="align-center">
			<v-col cols="9">
				<div class="list-item-content">
					<v-list-item-title>{{ item.logradouro }}</v-list-item-title>
					<v-list-item-subtitle>
						{{ item.bairro }}, {{ item.localidade }} - {{ item.uf }}
					</v-list-item-subtitle>
				</div>
			</v-col>
			<v-col cols="3" class="d-flex justify-end">
				<v-btn color="error" variant="text" icon @click="$emit('remove', index)">
					<v-icon>mdi-delete</v-icon>
				</v-btn>
			</v-col>
		</v-row>
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

<style scoped>
.list-item-content {
	display: flex;
	flex-direction: column;
}
</style>