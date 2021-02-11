<template>
	<div class="loginForm">
		<form class="column loginForm" v-if="!loggedIn">
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
			<button class="blackPill loginBtn" @click="login({ email, password })">
				Login
			</button>
		</form>

		<form v-else>
			<button class="blackPill loginBtn" @click="logout">
				Logout
			</button>
		</form>
	</div>
</template>

<script>
// import Overlay from '@/components/Overlay.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
	name: 'Header',
	methods: {
		...mapActions(['login', 'logout']),
	},
	components: {
		// Overlay,
	},
	data() {
		return {
			email: 'admin@example.com',
			password: 'password',
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
</style>
