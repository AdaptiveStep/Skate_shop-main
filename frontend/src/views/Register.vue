<template>
	<div class="register">
		<!-- <HeaderImage image="@blablbl/..../img.jpg" msg="hejjlo"> -->

		<div class="hero">
			<img class="heroImage" src="@/assets/skate-hero-1.jpg" />
			<div class="heroText">
				<p>Join the rolling family</p>
			</div>
		</div>

		<div class="twoWrappers">
			<div class="cut">
				<h1>Cowabunga</h1>
				<h3 class="">
					arcu posuere, nec condimentum diam ultrices. Cras fermentum commodo
					tellus at ullamcorper. Fusce euismod pretium tellus, sit amet iaculis
					sem molestie eu. Pellentesque tristique diam sit amet magna maximus,
					vel mollis metus blandit.
				</h3>
				<span class="">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget ex
					nec purus auctor mollis ac ut nulla. Vivamus maximus, sapien sit amet
					rhoncus sodales, ligula quam tincidunt tellus, sit amet vestibulum
					velit orci et nisl. Nullam aliquet lorem sed tellus vestibulum dictum.
					Etiam efficitur tristique ligula et interdum. In hac habitasse platea
				</span>
			</div>

			<div v-if="!loggedIn" class="inputLength">
				<h1>Register</h1>
				<div class="inputContainer">
					<i class="fa fa-user icon"> </i>
					<input
						v-model="user.name"
						class="Field"
						type="text"
						placeholder="Name"
					/>
				</div>
				<div class="inputContainer">
					<i class="fa fa-envelope icon"> </i>
					<input
						v-model="user.email"
						class="Field"
						type="text"
						placeholder="Email"
					/>
				</div>
				<div class="inputContainer">
					<i class="fa fa-key icon"> </i>
					<input
						v-model="user.password"
						class="Field"
						type="password"
						placeholder="Password"
					/>
				</div>
				<div class="inputContainer">
					<button @click="createUserSimple()" class="blackPill">
						Register
					</button>
				</div>
			</div>
			<div v-else>
				<h1>Tack för att du är medlem hos oss!</h1>
			</div>
		</div>

		<!-- <h1>This is an register page</h1> -->
	</div>
</template>
<script>
import { mapMutations, mapGetters, mapActions, mapState } from 'vuex'

export default {
	name: 'Register',
	data() {
		return {
			showModal: false,
			user: {
				name: '',
				email: '',
				password: '',
				repeatPassword: '',
				role: 'customer',
			},
			errorMessage: false,
		}
	},
	methods: {
		toggleModal() {
			this.showModal = !this.showModal
		},
		hejsan() {
			console.log('hejhej')
		},
		createUserSimple() {
			let newUser = {
				name: this.user.name,
				email: this.user.email,
				password: this.user.password,
				repeatPassword: this.user.password,
				role: 'customer',
			}
			//WORK HERE
			let result = this.createUser(newUser)
		},
		...mapActions(['createUser']),
	},
	computed: {
		...mapGetters(['loggedIn']),
	},
	components: {},
}
</script>
<style scoped lang="scss">
@import '@/styles/template.scss';

.inputLength {
	width: 100%;
}

.inputContainer i {
	position: absolute;
}
.inputContainer {
	width: 100%;
	padding-top: 1rem;
	display: flex;
	justify-content: flex-end;
}

.icon {
	padding: 10px;
}

.cut {
	width: 100%;
}
</style>
