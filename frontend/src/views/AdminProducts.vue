<template>
	<div v-if="loggedInAsAdmin" class="makeOrder">
		<h1>Admin Products</h1>

		<ProductCreator />
		<ProductListing />
	</div>
	<div v-else>Access Denied</div>
</template>

<script>
import ProductListing from '@/components/product/ProductListing'
import ProductCreator from '@/components/product/ProductCreator'
import { mapMutations, mapGetters, mapActions, mapState } from 'vuex'

export default {
	methods: {
		...mapActions(['loadAllProducts']),
	},
	data() {
		return {}
	},
	computed: {
		showModal() {
			return this.showProductModal
		},

		...mapGetters(['loggedInAsAdmin']),
	},
	components: {
		ProductListing,
		ProductCreator,
	},
	mounted() {
		this.loadAllProducts()
	},
}
</script>

<style scoped lang="scss">
@import '@/styles/template.scss';
</style>
