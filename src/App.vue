<template>
	<v-app>
		<v-main>
			<SearchSection />
		</v-main>
	</v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SearchSection from './components/Organisms/SearchSection.vue'

export default defineComponent({
	name: 'App',

	components: {
		SearchSection,
	},

	data() {
		return {
			//
		}
	},
})
</script>
