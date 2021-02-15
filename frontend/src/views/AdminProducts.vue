<template>
	<div class="makeOrder">
		<h1>Admin Products</h1>

		<div class="rows">
			<div class="linedTitle">
				<span>Add/Edit</span>
				<hr />
			</div>
			<div class="dataInputs">
				<div class="dataInputImage">
					<label class="button" for="upload">Upload File</label>
					<input id="upload" type="file" />
					<img src="" class="cartProductImage" />
				</div>
				<div class="allFields">
					<div class="datainputLines">
						<input class="Field" type="text" placeholder="Product Name" />
						<input class="Field" type="text" placeholder="Product short desc" />
						<input class="Field" type="text" placeholder="Product Price" />
						<input class="Field" type="text" placeholder="Product Serial" />
					</div>
					<div class="dataInputDescription">
						<textarea
							class="Field"
							type="text"
							placeholder="Product Description"
							cols="30"
							rows="13"
						/>
					</div>
				</div>
			</div>
			<button>Submit</button>

			<Overlay :show="showProductModal" v-on:close="showProductModal = false">
				<div class="modalProduct">
					<div class="modalPic">
						<img
							class="modalImage"
							src="../../../assets/skateboard-generic.png"
						/>
					</div>

					<div class="modalInfo">
						<div class="modalTitle">
							<span>{{ selectedProduct.title }}</span>
						</div>
						<div class="modalSubtitle">
							<span>{{ selectedProduct.shortDesc }}</span>
						</div>
						<div class="modalTextInfo">
							<p>{{ selectedProduct.longDesc }}</p>
						</div>

						<div class="modalCash">
							<span>{{ selectedProduct.price }}</span>
						</div>
						<div class="loginFormCompact">
							<div class="linedTitle">
								<span>Put new info</span>
								<hr />
							</div>
							<div class="input-icons">
								<input
								v-model="selectedProduct.title"
									class="Field"
									type="text"
									:placeholder="selectedProduct.title"
								/>
							</div>

							<div class="input-icons">
								<input
									v-model="selectedProduct.shortDesc"
									class="Field"
									type="text"
									:placeholder="selectedProduct.shortDesc"
								/>
							</div>

							<div class="input-icons">
								<input
								v-model="selectedProduct.price"

									class="Field"
									type="text"
									:placeholder="selectedProduct.price"
								/>
							</div>

							<button @click="saveProduct(selectedProduct)" class="blackPill">
								Save Product
							</button>
						</div>
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

						<button class="roundButton bkg-orange">
							<img src="../../../assets/icon-edit-white.svg" />
						</button>
					</div>
					<div class="cardSubTitle">
						<span>{{ item.shortDesc }}</span>
					</div>

					<div class="cardContent">
						<img
							class="cardImage"
							:src="require(`../../../assets/${item.imgFile}`)"
						/>

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

		<!-- <Overlay :show="showMe" v-on:close="showMe = false">
			<div class="modalProduct">
				<div class="modalPic">
					<img
						class="modalImage"
						src="../../../assets/skateboard-generic.png"
					/>
				</div>

				<div class="modalInfo">
					<div class="modalTitle">
						<span>GRETA FURY</span>
					</div>
					<div class="modalSubtitle">
						<span>Unisex</span>
					</div>
					<div class="modalTextInfo">
						<p>Jag gillar apor som hoppar</p>
					</div>

					<div class="modalCash">
						<span>999 sek</span>
					</div>

					<div class="loginFormCompact">
						<div class="linedTitle">
							<span>Put new info</span>
							<hr />
						</div>
						<div class="input-icons">
							<input class="Field" type="text" placeholder="Product name" />
						</div>

						<div class="input-icons">
							<input class="Field" type="text" placeholder="Description" />
						</div>

						<div class="input-icons">
							<input class="Field" type="text" placeholder="Price" />
						</div>

						<button class="blackPill">
							Save Product
						</button>
					</div>
				</div>
			</div>
		</Overlay> -->
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
			let tmp = '../../../assets/'
			let srctemp = tmp + product.imgFile
			return srctemp
		},

		...mapMutations(['addToCart']),

		...mapActions([
			'giveStuff', // -> this.someMutation
			'loadAllProducts',
			'saveProduct',
		]),
	},
	data() {
		return {
			showProductModal: false,
			selectedProduct: {},
			on: true,
		}
	},
	computed: {
		showModal() {
			return this.showProductModal
		},

		...mapState(['allProducts']),
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
.rows {
	display: flex;

	flex-direction: column;
	padding-top: 2rem;
}
.allFields {
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
	justify-content: space-evenly;
}

.dataInputs {
	display: flex;
	background-color: grey;
	gap: 1rem;
	padding: 1rem;
	justify-content: space-evenly;
	flex-wrap: wrap;
	.dataInputImage {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
}
</style>
