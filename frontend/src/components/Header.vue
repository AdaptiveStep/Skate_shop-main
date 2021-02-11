<template>
	<!-- <div id="nav">
	</div> -->

	<div id="nav" class="header">
		<div id="logo">
			<router-link to="/">
				<img src="../../../assets/sinus-logo.svg" />
			</router-link>
		</div>

		<div id="header-middle"></div>

		<div class="header-right">
			<router-link to="/register" v-if="!loggedIn">Register </router-link>
			<router-link to="/products" v-if="!loggedInAsAdmin">Products</router-link>

			<router-link to="/adminproduct" v-if="loggedInAsAdmin && loggedIn">
				<p>Admin Products</p></router-link
			>
			<router-link to="/orders" v-if="loggedInAsAdmin && loggedIn"
				>Orders</router-link
			>

			<!-- Login modal -->

			<LoginForm />

			<!-- Cart modal -->
			<div class="bagSpace">
				<div class="hasPopcounter">
					<button @click="showUserMod = true" class="roundButton  bkg-orange">
						<img src="../../../assets/icon-bag-black.svg" />
					</button>

					<span class="counter">32</span>
				</div>

				<Overlay :show="showUserMod" v-on:close="showUserMod = false">
					<div class="arrowContainer ">
						<div class="triangle-up "></div>

						<div class="popoverBag">
							<div class="userCart">
								<div class="cartProducts">
									<div class="cartProduct">
										<img src="" alt="" class="cartProductImage" />

										<div class="cartProductDetails">
											<h1>Greta</h1>
											<h2>Unisex</h2>
											<h3>SN112312323245</h3>
										</div>
										<div class="cartProductPrice">
											<h1>999</h1>
										</div>
									</div>

									<div class="cartProduct"></div>
									<div class="cartProduct"></div>
									<div class="cartProduct"></div>
								</div>
								<hr />
								<div class="cartTotals">
									<h1>TOTAL</h1>
									<h1><b>2097</b></h1>
								</div>
								<router-link to="/makeorder"
									><button
										@click="showUserMod = false"
										class="blackPill resizedCartPill"
									>
										Take my money
									</button></router-link
								>
							</div>
						</div>
					</div>
				</Overlay>
			</div>
		</div>
	</div>
</template>

<script>
import Overlay from '@/components/Overlay.vue'
import LoginForm from '@/components/LoginForm.vue'
export default {
	name: 'Header',
	props: {
		msg: String,
	},
	components: {
		Overlay,
		LoginForm,
	},
	data() {
		return {
			showBag: false,
			showUserMod: false,
			showLogin: false,
			loggedInAsAdmin: false,
			loggedIn: true,
		}
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

	display: flex;
	gap: 1rem;
	border-color: green;
}

.header-right {
	display: flex;
	gap: 1rem;
	align-items: center;
	border-color: blue;
}

router-link {
	background-color: red;
}

.hasPopcounter .counter {
	position: absolute;
	margin-left: -0.8rem;
	margin-bottom: 10rem;
	border-radius: 100%;
	background-color: white;
	padding: 0.2rem;
	box-shadow: 0 0 0.4rem $shadow-color;
}

.popoverBag {
	position: relative;
	background-color: $primary-color;
	transform: translate(-50%, 0);
	box-shadow: 0 0 0.5rem $shadow-color;
	padding: 1rem;
}

.bagSpace {
	position: static;
}
.overlayBag {
	position: absolute;
	z-index: 1;
}

.triangle-up {
	width: 0;
	height: 0;
	border-left: 10px solid transparent;
	border-right: 10px solid transparent;
	border-bottom: 20px solid $primary-color;
	transform: translate(-85%, 0);
	z-index: 1;
}
.arrowContainer {
	display: flex;
	flex-direction: column;
	transform: translate(0, -10%);
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
</style>
