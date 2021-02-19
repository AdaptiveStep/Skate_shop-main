<template>
	<div class="productsListingWrapper">
		<Overlay :show="showProductModal" v-on:close="showProductModal = false">
			<ProductDemo :selectedProduct="selectedProduct" />
		</Overlay>

		<div class="productsContainer">
			<div
				v-for="(item, index) in allProducts"
				:key="index"
				class="card shadowed"
				@click="ShowProductDetails(item)"
				tabindex="0"
			>
				<div class="cardHeader">
					<span>{{ item.title }}</span>

					<transition name="fade" mode="out-in">
						<button
							v-if="!loggedInAsAdmin"
							class="roundButton bkg-secondary"
							key="admin"
						>
							<img src="@/assets/icon-bag-white.svg" key="admin" />
						</button>

						<button v-else class="roundButton bkg-orange" key="customer">
							<img src="@/assets/icon-edit-white.svg" key="customer" />
						</button>
					</transition>
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
import { mapMutations, mapGetters, mapActions, mapState } from 'vuex'
import Overlay from '@/components/Overlay'
import ProductDemo from '@/components/product/ProductDemo'

export default {
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
	methods: {
		ShowProductDetails(item) {
			this.selectedProduct = item
			this.showProductModal = true
		},
	},
	computed: {
		showModal() {
			return this.showProductModal
		},
		...mapState(['allProducts']),
		...mapGetters(['basket', 'loggedInAsAdmin']),
	},
	components: {
		Overlay,
		ProductDemo,
	},
}
</script>

<style scoped lang="scss">
@import '@/styles/template.scss';
</style>
