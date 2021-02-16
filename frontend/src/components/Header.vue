<template>
	<div id="nav" class="header">
		<div id="logo">
			<router-link to="/">
				<img src="../../../assets/sinus-logo.svg" />
			</router-link>
		</div>

		<!-- <div id="header-middle"></div> -->

		<div class="header-right">
			<router-link to="/register" v-if="!loggedIn">Register </router-link>
			<router-link to="/products" v-if="!loggedInAsAdmin">Products</router-link>

			<router-link to="/adminproduct" v-if="loggedInAsAdmin && loggedIn">
				<p>Admin Products</p></router-link
			>
			<router-link to="/orders" v-if="loggedIn">Orders</router-link>

			<!-- Login modal -->
			<LoginForm />

			<!-- Cart modal -->
			<div class="bagSpace">
				<div class="hasPopcounter">
					<div class="arrowBox">
						<div class="counterAndButton">
							<button
								@click="showUserMod = true"
								class="roundButton  bkg-orange"
							>
								<img src="../../../assets/icon-bag-black.svg" />
							</button>

							<span v-if="!basketEmpty" class="counter">{{ basketCount }}</span>
						</div>

						<div v-if="showUserMod" class="triangle-up "></div>
					</div>
				</div>

				<Overlay
					:popup="true"
					:show="showUserMod"
					v-on:close="showUserMod = false"
				>
					<template>
						<div class="popoverBag">
							<Basket :withButton="true" v-on:clickBuy="showUserMod = false" />
						</div>
					</template>
				</Overlay>
			</div>
		</div>
	</div>
</template>

<script>
import Overlay from '@/components/Overlay.vue'
import LoginForm from '@/components/LoginForm.vue'
import Basket from '@/components/Basket.vue'

import { mapMutations, mapGetters, mapActions, mapState } from 'vuex'

export default {
	name: 'Header',
	props: {
		msg: String,
	},
	components: {
		Overlay,
		LoginForm,
		Basket,
	},
	data() {
		return {
			showBag: false,
			showUserMod: false,
			showLogin: false,
		}
	},
	computed: {
		// ...mapState(['basket']),
		...mapGetters([
			'basketCount',
			'basketTotalPrice',
			'basketEmpty',
			'loggedIn',
			'loggedInAsAdmin',
			'basket',
		]),
	},
}
</script>

<style lang="scss">
@import '@/styles/template.scss';

.header {
	display: flex;
	// border-bottom: 1px solid #d3d3d3;
	overflow: hidden;
	align-items: center;
	flex-wrap: wrap;
	justify-content: space-between;
	flex-direction: row;
}

div#header > div {
	text-align: center;
	border: 4px dashed; /* Useful for positioning */
	overflow: hidden;
}

#logo {
	color: #08a3d9;
	width: 300px;
	border-color: red;
}

#header-middle {
	flex-grow: 4;
}

.header-right {
	display: flex;
	gap: 1rem;
	align-items: center;
	min-height: 5rem;
}

// .popupOverlay {
// 	transform: translate(-50%);
// }

// router-link {
// 	background-color: red;
// }

.hasPopcounter .counter {
	position: absolute;
	margin-left: -0.8rem;
	margin-bottom: 10rem;
	border-radius: 100%;
	background-color: white;
	padding: 0.2rem;
	box-shadow: 0 0 0.4rem $shadow-color;
	z-index: 2;
}

.resizedCartPill {
	width: 15rem;
	align-self: center;
	justify-content: center;
}

.loginBtn {
	margin: 1rem;
	align-self: center;
	justify-content: center;
}
.arrowBox {
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
}

.counterAndButton {
}
/* On screens that are 600px wide or less, the background color is olive */
@media screen and (max-width: 40rem) {
	.header {
		flex-direction: column;
	}
}
</style>
