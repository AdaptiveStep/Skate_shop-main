<template>
	<div class="userCart" v-bind:class="{ shadowed }">
		<div v-if="!basketEmpty">
			<div class="cartProducts">
				<transition-group name="list">
					<div
						v-for="item in basket"
						:key="item.product._id"
						class="productHolder"
					>
						<div class="cartProduct">
							<img
								:src="require(`@/assets/${item.product.imgFile}`)"
								alt=""
								class="cartProductImage"
							/>

							<div class="cartProductDetails">
								<h1>{{ item.product.title }}</h1>
								<h2>{{ item.product.category }}</h2>
								<h3>{{ item.product.serial }}</h3>
							</div>
							<div class="cartProductPrice">
								<h1>{{ item.product.price }}</h1>
							</div>

							<div class="modifiers">
								<i
									class="fas fa-plus-circle shadowed "
									@click="addToCart(item.product)"
								></i>
								<i
									class="fas fa-minus-circle shadowed"
									@click="removeFromCart(item.product)"
								></i>
							</div>
						</div>
						<div>
							<transition name="fade" mode="out-in">
								<h1>Amount: {{ item.amount }}</h1>
							</transition>
						</div>
						<hr />
					</div>
				</transition-group>
			</div>
			<hr style="border: 1px dashed $primary-color" />
			<div class="cartTotals">
				<h1>TOTAL</h1>
				<h1>
					<b>{{ basketTotalPrice }}</b>
				</h1>
			</div>

			<router-link to="/makeorder" v-if="withButton"
				><button @click="$emit('clickBuy')" class="blackPill resizedCartPill">
						<img class="bagSvg" src="@/assets/icon-bag-white.svg" />Take my money!
				</button></router-link
			>
		</div>
		<div v-else>
			Your basket is empty.
		</div>
	</div>
</template>

<script>
import { mapMutations, mapGetters, mapActions, mapState } from 'vuex'

export default {
	name: 'Basket',
	props: {
		shadowed: {
			default: false,
			type: Boolean,
		},
		withButton: {
			default: false,
			type: Boolean,
		},
	},
	components: {
		// Overlay,
		// LoginForm,
	},
	data() {
		return {}
	},
	computed: {
		// ...mapState(['basket']),
		...mapGetters(['basketCount', 'basketTotalPrice', 'basketEmpty', 'basket']),
	},
	methods: {
		...mapMutations(['removeFromCart', 'addToCart']),
	},
}
</script>

<style scoped lang="scss">
@import '@/styles/template.scss';

.productHolder {
	display: flex;
	flex-direction: column;
	hr {
		border: 1px solid rgba(0, 0, 0, 0.06);
	}
	padding-right: 1rem;
}
</style>
