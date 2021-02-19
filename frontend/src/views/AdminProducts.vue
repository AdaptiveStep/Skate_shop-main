<template>
	<div v-if="loggedInAsAdmin" class="makeOrder">
		<h1>Admin Products</h1>
		
		<div class="rows">
			<TitledContainer title="Add/Edit" />
			<form @submit="NewProductSubmit(newProduct)" class="dataInputs">
				<div class="dataInputImages">
					<img
						v-for="(item, index) in allFiles"
						:key="index"
						class="productImage"
						:src="require(`@/assets/${item}`)"
						@click="setNewProductPath(item)"
					/>
				</div>
				<div class="allFields">
					<div class="dataInputFields">
						<input
							v-model="newProduct.title"
							class="Field"
							type="text"
							placeholder="Product Name"
							required
						/>
						<input
							v-model="newProduct.price"
							class="Field"
							type="number"
							placeholder="Product Price"
							required
						/>
						<select class="Field" v-model="newProduct.category">
							<option
								v-for="(item, key) in categories"
								:key="key"
								v-bind:value="item.value"
							>
								{{ item.text }}
							</option>
						</select>

						<input
							v-model="newProduct.shortDesc"
							class="Field"
							type="text"
							placeholder="Product short desc"
							required
						/>
						<div class="dataInputImages">
							<img
								class="selectNewProductImage"
								:src="require(`@/assets/${newProduct.imgFile}`)"
							/>
						</div>
					</div>
					<div class="dataInputDescription">
						<textarea
							v-model="newProduct.longDesc"
							class="Field"
							type="text"
							placeholder="Product Description"
							rows="9"
							cols="50"
							required
						/>
						<div class="adminSubmit">
							<input
								class="blackPill"
								type="submit"
								value="Create New Product"
							/>
						</div>
					</div>
				</div>
			</form>

			<!-- <Overlay :show="showProductModal" v-on:close="showProductModal = false">
				<div class="modalProduct">
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
							<span>{{ selectedProduct.shortDesc }}</span>
						</div>
						<div class="modalTextInfo">
							<p>{{ selectedProduct.longDesc }}</p>
						</div>

						<div class="modalCash">
							<span>{{ selectedProduct.price }}</span>
						</div>
						<div class="loginFormCompact">
							<TitledContainer title="Put new info" />
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
							<select class="Field" v-model="selectedProduct.category">
								<option
									v-for="(item, key) in categories"
									:key="key"
									v-bind:value="item.value"
								>
									{{ item.text }}
								</option>
							</select>
							<div class="input-icons">
								<textarea
									v-model="selectedProduct.longDesc"
									class="Field descriptionField"
									type="text"
									:placeholder="selectedProduct.longDesc"
									rows="9"
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
							<div class="input-icons">
								<input
									disabled
									v-model="selectedProduct.serial"
									class="Field"
									type="text"
									:placeholder="selectedProduct.serial"
								/>
							</div>

							<button @click="saveProduct(selectedProduct)" class="blackPill">
								Save Product
							</button>

							<button
								@click="
									deleteProductById(selectedProduct)
									showProductModal = false
								"
								class="blackPill"
							>
								Delete Product
							</button>
						</div>
					</div>
				</div>
			</Overlay> -->

			<!-- <div class="productsContainer" v-if="true">
				<div
					v-for="(item, index) in allProducts"
					:key="index"
					class="card shadowed"
					@click="ShowProductDetails(item)"
				>
					<div class="cardHeader">
						<span>{{ item.title }}</span>

						<button class="roundButton bkg-orange">
							<img src="@/assets/icon-edit-white.svg" />
						</button>
					</div>
					<div class="cardSubTitle">
						<span>{{ item.shortDesc }}</span>
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

		<ProductListing />
	</div>
	<div v-else>Access Denied</div>
</template>

<script>
import ProductListing from '@/components/product/ProductListing'
import TitledContainer from '@/components/TitledContainer'
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

		...mapMutations(['addToCart']),

		...mapActions([
			'giveStuff',
			'loadAllProducts',
			'saveProduct',
			'createProduct',
			'deleteProductById',
		]),
		setNewProductPath(path) {
			this.newProduct.imgFile = path
		},
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
		TitledContainer,
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

	.dataInputFields {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
}

textarea {
	resize: none;
	box-sizing: border-box;
	margin: 19rem;
	display: block;
}

.dataInputDescription {
	display: flex;
	flex-direction: column;
}

.adminSubmit {
	display: flex;
	justify-content: flex-end;
}

.productImage {
	border-radius: 10%;
	width: 3rem;
	height: 3rem;
	background-color: $shadow-color;
	transition: background-color 0.5s ease;
	&:hover {
		background-color: $primary-color;
	}
	&:focus {
		background-color: $orange-color;
	}
}

.dataInputs {
	display: flex;
	background-color: grey;
	gap: 1rem;
	padding: 1rem;
	justify-content: space-evenly;
	flex-wrap: wrap;
	.dataInputImages {
		display: flex;
		flex-direction: row;
		justify-content: center;
		gap: 1rem;
		flex-wrap: wrap;
		max-width: 15rem;

		.selectNewProductImage {
			width: 3rem;
			height: 3rem;
		}
	}
}
</style>
