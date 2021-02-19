<template>
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
						<input class="blackPill" type="submit" value="Create New Product" />
					</div>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
import TitledContainer from '@/components/TitledContainer'
import { mapMutations, mapGetters, mapActions, mapState } from 'vuex'

export default {
	data() {
		return {
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
	methods: {
		setNewProductPath(path) {
			this.newProduct.imgFile = path
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
	},
	computed: {
		...mapGetters(['allFiles']),
	},
	components: {
		TitledContainer,
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
