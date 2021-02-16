<template>
	<div class="oneOrder">
		<div class="infoWrapper">
			<div class="orderProducts ">
				<div
					v-for="(product, index) in order.items"
					:key="index"
					@click="viewProductDetails(product)"
					src=""
					alt=""
					class="productImage shadowed"
					tabindex="0"
				/>
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

		<div class="modifiers  ">
			<i class="fas fa-check-circle"></i>
			<i class="fas fa-minus-circle"></i>
		</div>
	</div>
</template>

<script>
import { mapMutations, mapGetters, mapActions, mapState } from 'vuex'

export default {
	props: {
		order: Object,
	},
	methods: {
		viewProductDetails(product) {
			this.selectedProduct = product
			this.showProductModal = true
		},
	},
	data() {
		return {
			showProductModal: false,
			selectedProduct: {},
		}
	},
	computed: {
		showDate() {
			var date = new Date(this.order.timeStamp * 1000)
			return date.toDateString()
		},
	},
	components: {
		// Overlay,
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
	background-color: $primary-color;
	gap: 0.5rem;
	border-radius: 10px;
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
	background-color: red;

	&:hover {
		background-color: green;
	}
	&:focus {
		background-color: green;
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
</style>
