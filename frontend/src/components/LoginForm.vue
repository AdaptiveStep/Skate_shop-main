<template>
	<div class="bagSpace">
		<button @click="showLogin = true" class="roundButton bkg-primary">
			<img src="../../../assets/icon-user-black.svg" />
		</button>

		<Overlay :popup="true" :show="showLogin" v-on:close="showLogin = false">
			<template  v-if="showLogin">
				<!-- <div class="triangle-up "></div> -->

				<div class="popoverBag">
					<div class="loginForm">
						<div class="column loginForm" v-if="!loggedIn">
							<div class="inputContainer">
								<input
									class="Field"
									v-model="email"
									type="text"
									placeholder="Username"
								/>
							</div>
							<div class="inputContainer">
								<input
									class="Field"
									type="password"
									v-model="password"
									placeholder="Password"
								/>
							</div>
							<button
								class="blackPill loginBtn"
								@click="loginButtonPressed({ email, password })"
							>
								Login
							</button>
						</div>

						<div v-else>
							<button class="blackPill loginBtn" @click="logoutButtonPressed">
								Logout
							</button>
						</div>
					</div>
				</div>
			</template>
		</Overlay>
	</div>
</template>

<script>
import Overlay from '@/components/Overlay.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
	name: 'Header',
	methods: {
		loginButtonPressed(user) {
			this.showLogin= false,
			this.login(user)
		},

		logoutButtonPressed() {
			this.showLogin= false,
			this.logout()
		},

		...mapActions(['login', 'logout']),
	},
	components: {
		Overlay,
	},
	data() {
		return {
			email: 'customer@example.com',
			password: 'password',
			showLogin: false,
		}
	},
	computed: {
		...mapGetters([
			'loggedIn',
			'loggedInAsAdmin',

			'basketCount',
			'basketTotalPrice',
			'basketEmpty',
		]),
	},
}
</script>

<style lang="scss">
@import '@/styles/template.scss';

.hasPopcounter .counter {
	position: absolute;
	margin-left: -0.8rem;
	margin-bottom: 10rem;
	border-radius: 100%;
	background-color: white;
	padding: 0.2rem;
	box-shadow: 0 0 0.4rem $shadow-color;
}




.loginBtn {
	margin: 1rem;
	align-self: center;
	justify-content: center;
}
</style>
