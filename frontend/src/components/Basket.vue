<template>
	<div class="userCart" v-bind:class="{ shadowed }">
		<div class="cartProducts">
			<div v-for="(item, index) in basket" :key="index" class="cartProduct">
				<img
					:src="require(`../../../assets/${item.imgFile}`)"
					alt=""
					class="cartProductImage"
				/>

				<div class="cartProductDetails">
					<h1>{{ item.title }}</h1>
					<h2>{{ item.category }}</h2>
					<h3>{{ item.serial }}</h3>
				</div>
				<div class="cartProductPrice">
					<h1>{{ item.price }}</h1>
				</div>
			</div>
		</div>
		<hr />
		<div class="cartTotals">
			<h1>TOTAL</h1>
			<h1>
				<b>{{ basketTotalPrice }}</b>
			</h1>
		</div>

		<router-link to="/makeorder" v-if="true"
			><button @click="$emit('clickBuy')" class="blackPill resizedCartPill">
				Take my money
			</button></router-link
		>

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
</style>
