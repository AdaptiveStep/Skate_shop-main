<template>
	<div class="product">
		<h1>Products</h1>
		<ProductListing />
	</div>
</template>

<script>
import ProductListing from '@/components/product/ProductListing'
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

		...mapMutations(['addToCart']),

		...mapActions(['giveStuff', 'loadAllProducts']),
	},
	data() {
		return {
			showProductModal: false,
			selectedProduct: {
				title: '',
				price: '',
				shortDesc: '',
				longDesc: '',
				imgFile: 'skateboard-generic.png',
				_id: '',
			},
			on: true,
		}
	},
	computed: {
		showModal() {
			return this.showProductModal
		},

		...mapState(['allProducts']),
		...mapGetters(['basket', 'loggedInAsAdmin']),
	},
	components: {
		ProductListing,
	},
	mounted() {
		this.loadAllProducts()
	},
}
</script>

<style scoped lang="scss">
@import '@/styles/template.scss';

.headerImage {
	background-image: '';
}

.testButton {
	height: 5rem;
	min-width: 10rem;
}
</style>
