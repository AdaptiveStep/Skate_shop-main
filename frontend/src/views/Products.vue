<template>
	<div class="product">
		<ProductListing />

		<!-- <Overlay :show="showProductModal" v-on:close="showProductModal = false">
			<ProductDemo :selectedProduct="selectedProduct" /> -->
			<!-- <div class="modalProduct">
				<div class="modalPic">
					<img
						class="modalImage"
						:src="require(`@/assets/${selectedProduct.imgFile}`)"
					/>
				</div>

				<div class="modalInfo">
					<div class="modalTitle">
						<span>{{ selectedProduct.title }}</span>
					</div>
					<div class="modalSubtitle">
						<span>{{ selectedProduct.category }}</span>
					</div>
					<div class="modalTextInfo">
						<p>{{ selectedProduct.longDesc }}</p>
					</div>

					<div class="modalCash">
						<span>{{ selectedProduct.price }}</span>
					</div>

						<button
							v-if="!loggedInAsAdmin"
							@click="addToCart(selectedProduct)"
							class="blackPill"
						>
							<img class="bagSvg" src="@/assets/icon-bag-white.svg" />Take my money!
						</button>
				</div>
			</div> -->
		<!-- </Overlay>  -->

		<!-- <div class="productsContainer">
			<div
				v-for="(item, index) in allProducts"
				:key="index"
				class="card shadowed"
				@click="ShowProductDetails(item)"
				tabindex="0"
			>
				<div class="cardHeader">
					<span>{{ item.title }}</span>

					<button class="roundButton bkg-secondary">
						<img src="@/assets/icon-bag-white.svg" />
					</button>
				</div>
				<div class="cardSubTitle">
					<span>{{ item.category }}</span>
				</div>

				<div class="cardContent">
					<img class="cardImage" :src="require(`@/assets/${item.imgFile}`)" />

					<span class="blackPill move">
						<div class="pillPrice">
							{{ item.price }}
						</div>

						<div class="pillSEK">
							SEK
						</div>
					</span>
				</div>
			</div>
		</div> -->

	</div>
</template>

<script>
// import Overlay from '@/components/Overlay'
import ProductListing from '@/components/product/ProductListing'
import { mapMutations, mapGetters, mapActions, mapState } from 'vuex'

export default {
	methods: {
		// tryme() {
		// 	this.$store.commit('coolMutation')
		// },

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
		// Overlay,
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
