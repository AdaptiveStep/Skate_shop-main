<template>
	<div id="nav" class="header">
		<div id="logo">
			<router-link to="/">
				<img src="@/assets/sinus-logo.svg" />
			</router-link>
		</div>

		<!-- <div id="header-middle"></div> -->

		<div class="header-right">
			<div class="links">
				<router-link to="/register" v-if="!loggedIn">Register </router-link>
				<router-link to="/products" v-if="!loggedInAsAdmin"
					>Products</router-link
				>

				<router-link to="/adminproduct" v-if="loggedInAsAdmin && loggedIn">
					Admin Products</router-link
				>
				<router-link to="/orders" v-if="loggedIn">Orders</router-link>
			</div>

			<div class="ballMenus">
				<!-- Login modal -->
				<LoginForm />

				<!-- Cart modal -->
				<div v-if="!loggedInAsAdmin" class="bagSpace">
					<div class="hasPopcounter">
						<div class="arrowBox">
							<div class="counterAndButton">
								<button
									@click="showUserMod = true"
									class="roundButton  bkg-orange"
								>
									<img src="@/assets/icon-bag-black.svg" />
								</button>

								<span v-if="!basketEmpty" class="counter">{{
									basketCount
								}}</span>
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
								<Basket
									:withButton="true"
									v-on:clickBuy="showUserMod = false"
								/>
							</div>
						</template>
					</Overlay>
				</div>
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
	overflow: hidden;
	align-items: center;
	flex-wrap: wrap;
	justify-content: space-between;
	flex-direction: row;
}

div#header > div {
	text-align: center;
	border: 4px dashed;
	overflow: hidden;
}

#logo {
	color: #08a3d9;

	border-color: red;
	width: 100%;
	max-width: 300px;
}

#header-middle {
	flex-grow: 4;
}

.header-right {
	display: flex;
	gap: 1rem;
	align-items: center;
	justify-content: center;
	min-height: 5rem;
	flex-wrap: wrap;
}

.hasPopcounter .counter {
	position: absolute;
	margin-left: -0.8rem;
	margin-bottom: 10rem;
	border-radius: 100%;
	background-color: white;
	padding: 0.2rem;
	box-shadow: 0 0 0.4rem $shadow-color;
	z-index: 0;
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

.links {
	display: flex;
	flex-wrap: wrap;
	gap: 2rem;
	justify-content: center;
	align-items: center;
	padding-bottom: 1rem;
	padding-top: 1rem;
}

.ballMenus {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 1rem;
	justify-content: center;
}

@media screen and (max-width: 40rem) {
	.header {
		flex-direction: column;
	}
}
</style>
