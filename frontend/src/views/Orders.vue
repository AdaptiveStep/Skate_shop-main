<template>
	<div class="orders">
		<h1>Orders</h1>
		<button @click="getAllOrders">TESTA MIG PLZ</button>
		<div class="rows">
			<div class="linedTitle">
				<span>In Progress</span>
				<hr />
			</div>
			<div class="orderList">
				<!-- <div
					v-for="(order, index) in inProcessOrders"
					:key="index"
					class="oneOrder"
				>
					<div class="orderProducts ">
						<div
							v-for="(item, index) in order.items"
							:key="index"
							@click="viewProductDetails"
							src=""
							alt=""
							class="cartProductImage shadowed"
							tabindex="0"
						/>
					</div>

					<div class="orderDetails ">
						<span><b>Orderid:</b> {{ order._id }}</span>
						<span><b>Date: </b>{{ order.timeStamp }}</span>
						<span>Orderid: 14321354</span>
					</div>
					<div class="cartProductPrice ">
						<span><b>Order value:</b> {{ order.orderValue }}</span>
					</div>

					<div class="modifiers  ">
						<i class="fas fa-check-circle" tabindex="0"></i>
						<i class="fas fa-minus-circle" tabindex="0"></i>
					</div>
				</div> -->
				<div v-for="(order, index) in inProcessOrders" :key="index">
					<OrderRow v-bind:order="order" />
				</div>
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
	</div>
</template>

<script>
// import Overlay from '@/components/Overlay'
import OrderRow from '@/components/OrderRow'
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
	computed: {
		...mapGetters(['inProcessOrders', 'doneOrders']),
	},
	components: {
		// Overlay,
		OrderRow,
	},
	mount() {
		this.getAllOrders()
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
.orderList {
	display: flex;
	gap: 0.5rem;
	flex-direction: column;
}
.orderList .order {
	height: 4rem;
	background-color: $primary-color;
}
</style>
