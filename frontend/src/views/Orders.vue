<template>
	<div class="orders">
		<h1>Orders</h1>

		<div class="rows">
			<div class="linedTitle">
				<span>In Progress</span>
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
export default {
	methods: {},
	data() {
		return {}
	},
	computed: {},
	components: {
		// Overlay,
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


.cartProduct {
	background-color: $primary-color;
}
</style>
