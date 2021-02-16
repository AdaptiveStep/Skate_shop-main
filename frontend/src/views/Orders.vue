<template>
	<div class="orders">
		<h1>Orders</h1>
		<!-- <h1>{{ prodsByIdArray(inProcessOrders[0].items) }}</h1> -->
		<button @click="getAllOrders">TESTA MIG PLZ</button>
		<div class="rows">
			<div class="linedTitle">
				<span>In Progress</span>
				<hr />
			</div>
			<div class="orderList">
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
		...mapActions(['getAllOrders', 'loadAllProducts']),
		...mapGetters(['prodsByIdArray']),
	},
	data() {
		return {}
	},

	computed: {
		...mapGetters(['inProcessOrders', 'doneOrders', 'prodById']),
	},
	components: {
		// Overlay,
		OrderRow,
	},
	created() {
		this.loadAllProducts()
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
	flex-direction: column-reverse;
}

.orderList .order {
	height: 4rem;
	background-color: $primary-color;
}
</style>
