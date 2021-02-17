<template>
	<div class="orders">
		<div v-if="loggedIn" class="loggedIn">
			<h1>Orders</h1>
			<div class="rows">
				<div class="linedTitle">
					<span>In Progress</span>
					<hr />
				</div>
				<div>
					<transition-group name="list" class="orderList">
						<div v-for="order in inProcessOrders" :key="order._id">
							<OrderRow v-bind:order="order" />
						</div>
					</transition-group>
				</div>
			</div>

			<div class="rows">
				<div class="linedTitle">
					<span>Done</span>
					<hr />
				</div>
				<div class="orderList">
					<div v-for="(order, index) in doneOrders" :key="index">
						<OrderRow v-bind:order="order" />
					</div>
				</div>
			</div>
		</div>
		<div v-else class="notLoggedIn">Please log in to view this page</div>
	</div>
</template>

<script>
// import Overlay from '@/components/Overlay'
import OrderRow from '@/components/orders/OrderRow'
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
		...mapGetters([
			'inProcessOrders',
			'doneOrders',
			'prodById',
			'loggedIn',
			'loggedInAsAdmin',
		]),
	},
	components: {
		// Overlay,
		OrderRow,
	},
	mounted() {
		this.loadAllProducts()

		//getting All orders Requires logged in user.
		this.loggedIn && this.getAllOrders()
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
