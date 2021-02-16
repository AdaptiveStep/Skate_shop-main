<template>
	<div class="product">
		<!-- <h1>Some stuff form module {{ giveStuff }}</h1> -->
		<Overlay :show="showProductModal" v-on:close="showProductModal = false">
			<div class="modalProduct">
				<div class="modalPic">
					<img
						class="modalImage"
						:src="require(`@/${selectedProduct.imgFile}`)"
					/>
				</div>
				<!-- src="@/assets/skateboard-generic.png" -->
				<!-- :src="require(`@/assets/${selectedProduct.imgFile}`)" -->

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

					<button @click="addToCart(selectedProduct)" class="blackPill">
						Take my Money
					</button>
				</div>
			</div>
		</Overlay>

		<div class="productsContainer" v-if="true">
			<div
				v-for="(item, index) in allProducts"
				:key="index"
				class="card shadowed"
				@click="ShowProductDetails(item)"
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
		</div>
	</div>
</template>

<script>
import Overlay from '@/components/Overlay'
import { mapMutations, mapGetters, mapActions, mapState } from 'vuex'

export default {
	methods: {
		tryme() {
			this.$store.commit('coolMutation')
		},

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

		...mapActions([
			'giveStuff', // -> this.someMutation
			'loadAllProducts',
		]),
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
		...mapGetters(['basket']),
	},
	components: {
		Overlay,
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
