<template>
	<div class="bagSpace">
		<div class="arrowBox">
			<button @click="showLogin = true" class="roundButton bkg-primary">
				<img src="@/assets/icon-user-black.svg" />
			</button>
			<div v-if="showLogin" class="triangle-up "></div>
		</div>

		<Overlay :popup="true" :show="showLogin" v-on:close="showLogin = false">
			<template v-if="showLogin">
				<div class="popoverBag">
					<div class="loginForm">
						<div class="column loginForm" v-if="!loggedIn">
							<input
								class="Field"
								v-model="email"
								type="text"
								placeholder="Username"
							/>
							<input
								class="Field"
								type="password"
								v-model="password"
								placeholder="Password"
							/>
							<button
								class="blackPill loginBtn"
								@click="loginButtonPressed({ email, password })"
							>
								Login
							</button>
						</div>

						<div v-else>
							<p><b>Logged in: </b> {{ loggedInUser.name }}</p>
							<p>{{ loggedInUser.role }}</p>

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
import { mapActions, mapGetters, mapState } from 'vuex'

export default {
	name: 'Header',
	methods: {
		loginButtonPressed(user) {
			this.showLogin = false
			this.login(user)
		},

		logoutButtonPressed() {
			this.showLogin = false
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
		...mapState(['loggedInUser']),
	},
}
</script>

<style  lang="scss">
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
