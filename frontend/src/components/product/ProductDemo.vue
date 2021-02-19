<template>
	<div class="modalProduct">
		<div class="modalPic">
			<img
				class="modalImage"
				:src="require(`@/assets/${selectedProduct.imgFile}`)"
			/>
		</div>

		<div class="modalInfo">
			<div class="topText">
				<div class="modalTitle">
					<span>{{ selectedProduct.title }}</span>
				</div>
				<div class="modalSubtitle">
					<span>{{ selectedProduct.shortDesc }}</span>
				</div>
			</div>
			<div class="modalTextInfo">
				<p>{{ selectedProduct.longDesc }}</p>
			</div>

			<div class="modalCash">
				<span>{{ selectedProduct.price }} sek</span>
			</div>
			<button
				v-if="!loggedInAsAdmin"
				@click="addToCart(selectedProduct)"
				class="blackPill"
			>
				<img class="bagSvg" src="@/assets/icon-bag-white.svg" />Take my money!
			</button>

			<div v-if="loggedInAsAdmin" class="loginFormCompact">
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
</template>

<script>
import { mapMutations, mapGetters, mapActions, mapState } from 'vuex'
import TitledContainer from '@/components/TitledContainer'

export default {
	data() {
		return {
			selectedCategory: 'clothes',
			categories: [
				{ text: 'Clothes', value: 'clothes' },
				{ text: 'Board', value: 'board' },
				{ text: 'Wheels', value: 'wheels' },
			],
		}
	},
	props: {
		selectedProduct: {
			title: '',
			price: '',
			shortDesc: '',
			longDesc: '',
			imgFile: 'skateboard-generic.png',
			_id: '',
		},
	},
	methods: {
		...mapMutations(['addToCart']),
		...mapActions([
			'giveStuff',
			'loadAllProducts',
			'saveProduct',
			'createProduct',
			'deleteProductById',
		]),
	},
	computed: {
		...mapGetters(['loggedInAsAdmin']),
	},
	components: {
		TitledContainer,
	},
}
</script>

<style scoped lang="scss">
@import '@/styles/template.scss';
.descriptionField {
	resize: vertical;
}

.Field {
	margin-bottom: 1rem;
}

.topText {
	display: flex;
	flex-direction: column;
}
</style>
