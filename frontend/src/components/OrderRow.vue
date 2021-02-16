<template>
	<div class="oneOrder">
		<Overlay :show="showProductModal" v-on:close="showProductModal = false">
			<div class="modalProduct">
				<div class="modalPic">
					<img
						class="modalImage"
						src="../../../assets/skateboard-generic.png"
					/>
					<!-- src="../../../assets/skateboard-generic.png" -->
					<!-- :src="require(`../../../assets/${selectedProduct.imgFile}`)" -->
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
				</div>
			</div>
		</Overlay>

		<div class="infoWrapper">
			<div class="orderProducts ">
				<img
					v-for="(product, index) in productsInOrder"
					:key="index"
					@click="viewProductDetails(product)"
					src="../../../assets/skateboard-generic.png"
					alt=""
					class="productImage shadowed"
					tabindex="0"
				/>

				<!-- src="../../../assets/skateboard-generic.png" -->
				<!-- :src="require(`../../../assets/${selectedProduct.imgFile}`)" -->
			</div>

			<div class="orderDetails ">
				<span><b>Orderid:</b> {{ order._id }}</span>
				<span><b>Date: </b>{{ showDate }}</span>
				<span><b>Items:</b> {{ order.items.length }}</span>
			</div>
			<div class="orderPrice">
				<span><b>Order value:</b> {{ order.orderValue }}</span>
			</div>
		</div>

		<div class="modifiers rowButtons ">
			<i class="fas fa-check-circle"></i>
			<i class="fas fa-minus-circle"></i>
		</div>
	</div>
</template>

<script>
import { mapMutations, mapGetters, mapActions, mapState } from 'vuex'
import Overlay from '@/components/Overlay'

export default {
	props: {
		order: Object,
	},
	methods: {
		viewProductDetails(product) {
			// this.selectedProduct = product
			// this.showProductModal = true
			console.log('PRODUCT', product.title)
			console.log('this.order', this.order)
			let tmp = this.prodById('LZKzvIin1TUdAQXo')
			console.log('TMP STUFF', tmp)
		},
	},
	data() {
		return {
			showProductModal: false,
			selectedProduct: {
				title: 'test',
				price: '111',
				shortDesc: 'test',
				longDesc: 'test',
				imgFile: 'skateboard-generic.png',
				_id: '',
			},
		}
	},
	computed: {
		showDate() {
			var date = new Date(this.order.timeStamp * 1000)
			return date.toDateString()
		},
		...mapGetters(['loggedInAsAdmin', 'prodsByIdArray', 'prodById']),

		productsInOrder() {
			return this.prodsByIdArray(this.order.items)
		},
	},
	components: {
		Overlay,
	},
}
</script>

<style lang="scss">
@import '@/styles/template.scss';

.oneOrder {
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	// flex-wrap: nowrap;
	background-color: $light-grey;
	gap: 0.5rem;
	border-radius: 10px;
	&:hover {
		background-color: $primary-color;
	}
}
.orderProducts {
	display: flex;
	flex-wrap: wrap;
	// background-color: red;
	justify-content: center;
	align-items: center;
	max-height: 10rem;
	width: 10rem;
	gap: 1rem;
	overflow: auto;
	padding: 1rem;

	// flex-shrink: 1;
}
.productImage {
	border-radius: 10%;
	width: 3rem;
	height: 3rem;
	background-color: $shadow-color;

	&:hover {
		background-color: $primary-color;
	}
	&:focus {
		background-color: $orange-color;
	}
}
.orderDetails {
	display: flex;
	flex-direction: column;
	// justify-content: space-evenly;
	align-items: flex-start;

	// background-color: orange;
	gap: 0.5rem;
	padding: 1rem;
	// width: 15rem;
	flex-grow: 1;
	// flex-shrink: 0;
}
.orderPrice {
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: flex-start;
	// width: 15rem;

	// background-color: green;
	gap: 0.5rem;
	padding: 1rem;
	// flex-grow: 1;
	flex-shrink: 0;
}
.infoWrapper {
	display: flex;
	flex-wrap: wrap;
	flex-grow: 4;
}
.rowButtons {
	width: 5rem;
}
</style>
