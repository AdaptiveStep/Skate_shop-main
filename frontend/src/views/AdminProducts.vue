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
		ShowProductDetails(item) {
			this.selectedProduct = item
			this.showProductModal = true
		},
		urlImage(product) {
			let tmp = '@/assets/'
			let srctemp = tmp + product.imgFile
			return srctemp
		},
		NewProductSubmit(product) {
			this.createProduct(product)
			this.newProduct = {
				title: '',
				price: 0,
				shortDesc: '',
				category: '',
				longDesc: '',
				imgFile: 'hoodie-ash.png',
				serial: '00000000000',
			}
		},

		...mapActions([
			'loadAllProducts',
		]),
	},
	data() {
		return {
			showProductModal: false,
			selectedProduct: {
				title: 'Put new title',
				price: 100,
				shortDesc: 'new Description',
				category: 'Unisex',
				longDesc: 'No description given',
				imgFile: 'hoodie-ash.png',
			},
			on: true,
			newProduct: {
				title: '',
				price: '',
				shortDesc: '',
				category: 'clothes',
				longDesc: '',
				imgFile: 'hoodie-ash.png',
				serial: '00000000000',
			},
			selectedCategory: 'clothes',
			categories: [
				{ text: 'Clothes', value: 'clothes' },
				{ text: 'Board', value: 'board' },
				{ text: 'Wheels', value: 'wheels' },
			],
		}
	},
	computed: {
		showModal() {
			return this.showProductModal
		},

		...mapState(['allProducts']),
		...mapGetters(['allFiles', 'loggedInAsAdmin']),
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
