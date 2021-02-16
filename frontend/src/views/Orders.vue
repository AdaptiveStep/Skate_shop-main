<template>
	<div class="orders">
		<h1>Orders</h1>
		<button @click="getAllOrders"> TESTA MIG PLZ</button>
		<div class="rows">
			<div class="linedTitle">
				<span>In Progress</span>
				<hr />
			</div>
			<div class="orderList">
				<div class="oneOrder">
					<div class="orderProducts ">
						<div
							@click="viewProductDetails"
							src=""
							alt=""
							class="cartProductImage shadowed"
							tabindex="0"
						/>
						<div src="" alt="" class="cartProductImage" tabindex="0" />
						<div src="" alt="" class="cartProductImage" tabindex="0" />
						<div src="" alt="" class="cartProductImage" tabindex="0" />
						<div src="" alt="" class="cartProductImage" tabindex="0" />
						<div src="" alt="" class="cartProductImage" tabindex="0" />
					</div>

					<div class="orderDetails ">
						<span><b>Orderid:</b> 14321354</span>
						<span><b>Date: </b>2020/12/5 24:43:23</span>
						<span>Orderid: 14321354</span>
					</div>
					<div class="cartProductPrice ">
						<span><b>Order value:</b> 999</span>
					</div>
					<div class="modifiers  ">
						<i class="fas fa-check-circle" tabindex="0"></i>
					</div>
				</div>

				<div class="order">another other here</div>
				<div class="order">another other here</div>
			</div>
		</div>

		<div class="rows">
			<div class="linedTitle">
				<span>Done</span>
				<hr />
			</div>
			<div class="orderList">
				<div class="cartProduct">
					<img src="" alt="" class="cartProductImage" />

					<div class="cartProductDetails">
						<span><b>Orderid:</b> 14321354</span>
						<span><b>Date</b>2020/12/5 24:43:23</span>
						<span>Orderid: 14321354</span>
					</div>
					<div class="cartProductPrice">
						<span><b>Order value:</b> 999</span>
					</div>
				</div>

				<div class="order">another other here</div>
				<div class="order">another other here</div>
			</div>
		</div>

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
	</div>
</template>

<script>
import Overlay from '@/components/Overlay'
import { mapMutations, mapGetters, mapActions, mapState } from 'vuex'

export default {
	methods: {
		viewProductDetails() {
			this.showProductModal = true
		},
		...mapActions(['getAllOrders']),
	},
	data() {
		return {
			showProductModal: false,
			selectedProduct: {},
		}
	},
	computed: {},
	components: {
		Overlay,
	},
	mount(){
		this.getAllOrders()
	}
}
</script>

<style scoped lang="scss">
@import '@/styles/template.scss';

.rows {
	display: flex;

	flex-direction: column;
	padding-top: 2rem;
}
.orderList {
	display: flex;
	gap: 0.5rem;
	flex-direction: column;
}
.orderList .order {
	height: 4rem;
	background-color: $primary-color;
}

.cartProduct {
	background-color: $primary-color;
}

.orderProducts {
	display: flex;
	flex-wrap: wrap;
	// background-color: red;
	justify-content: flex-start;

	max-height: 10rem;
	max-width: 20rem;
	min-width: 5rem;

	overflow: auto;

	.cartProductImage {
		border-radius: 10%;
		width: 3rem;
		height: 3rem;
		background-color: red;
		&:hover {
			background-color: green;
		}
		&:focus {
			background-color: green;
			width: 2rem;
			height: 2rem;
		}
	}
}

.oneOrder {
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	flex-wrap: wrap;
	background-color: $primary-color;
	gap: 0.5rem;

	.orderDetails {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: flex-start;
		// background-color: green;
		gap: 0.5rem;
		padding: 1rem;
	}
}
</style>
