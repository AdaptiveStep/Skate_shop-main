<template>
	<div class="titledContainer">
		<div class="linedTitle">
			<span>{{ title }}</span>
			<hr />
		</div>

		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'Basket',
	props: {
		title: String,
	},
	components: {
		// Overlay,
		// LoginForm,
	},
	data() {
		return {}
	},
	computed: {},
}
</script>

<style lang="scss">
@import '@/styles/template.scss';
.titledContainer {
	
}
</style>
