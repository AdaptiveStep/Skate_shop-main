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
			<router-link to="/register">Register </router-link>
			<router-link to="/products">Products</router-link>

			<div class="bagSpace">
				<a href="#login" @click="showLogin = true">Login</a>

				<Overlay :show="showLogin" v-on:close="showLogin = false">
					<div class="arrowContainer">
						<div class="triangle-up "></div>

						<div class="popoverBag">
							<div class="column loginForm">
								<div class="inputContainer">
									<input class="Field" type="text" placeholder="Username" />
								</div>
								<div class="inputContainer">
									<input class="Field" type="password" placeholder="Password" />
								</div>
								<div class="blackPill loginBtn">Login</div>
							</div>
						</div>
					</div>
				</Overlay>
			</div>

			<router-link to="/account">My Account</router-link>

			<div class="bagSpace">
				<div class="hasPopcounter">
					<button @click="showUserMod = true" class="roundButton bkg-primary">
						<img src="../../../assets/icon-user-black.svg" />
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

								<div class="blackPill resizedCartPill">
									<h1>Take my money</h1>
								</div>
							</div>
						</div>
					</div>
				</Overlay>
			</div>

			<div class="bagSpace">
				<button @click="showBag = true" class="roundButton bkg-orange">
					<img src="../../../assets/icon-bag-white.svg" />
				</button>
				<Overlay :show="showBag" v-on:close="showBag = false">
					<div class="arrowContainer">
						<div class="triangle-up "></div>

						<div class="popoverBag">
							<p>HEEELOO HELLO1</p>
							<p>HEEELOO HELLO2</p>
							<p>HEEELOO HELLO3</p>
							<p>HEEELOO HELLO4</p>
							<p>HEEELOO HELLO5</p>
						</div>
					</div>
				</Overlay>
			</div>

			<div></div>

			<!-- <Overlay :show="false">
				<p>yo</p>
			</Overlay> -->
		</div>
	</div>
</template>

<script>
import Overlay from '@/components/Overlay.vue'
import Dialog from '@/components/Overlay.vue'
export default {
	name: 'Header',
	props: {
		msg: String,
	},
	components: {
		Overlay,
	},
	data() {
		return {
			showBag: false,
			showUserMod: false,
			showLogin: false,
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
