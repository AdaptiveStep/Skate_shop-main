<template>
	<div class="userCart" v-bind:class="{ shadowed }">
		<div v-if="!basketEmpty">
			<div class="cartProducts">
				<div v-for="(item, index) in basket" :key="index" class="productHolder">
					<div class="cartProduct">
						<img
							:src="require(`../../../assets/${item.imgFile}`)"
							alt=""
							class="cartProductImage shadowed"
						/>

						<div class="cartProductDetails">
							<h1>{{ item.title }}</h1>
							<h2>{{ item.category }}</h2>
							<h3>{{ item.serial }}</h3>
						</div>
						<div class="cartProductPrice">
							<h1>{{ item.price }}</h1>
						</div>
						<div class="modifiers">
							
							<i class="fas fa-plus-square shadowed"></i>
							<i class="fas fa-minus-circle shadowed"></i>
						</div>
					</div>
					<hr />
				</div>
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
					Take my money
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
		...mapState(['basket']),
		...mapGetters(['basketCount', 'basketTotalPrice', 'basketEmpty']),
	},
}
</script>

<style lang="scss">
@import '@/styles/template.scss';

.productHolder {
	display: flex;
	flex-direction: column;
	hr {
		border: 1px solid rgba(0, 0, 0, 0.06);
	}
	padding-right: 1rem;
}
.modifiers {
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	color: $primary-color;
	gap: 0.1rem;
	

	.fas {
		width: 1.5rem;
		height: 1.5rem;
		background-color: $secondary-color;
		border-radius: 50%;
		text-align: center;
		padding: 0.1rem;
		font-size: 2rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}
}
</style>
