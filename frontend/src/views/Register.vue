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
			<div class="cut aboutInfo">
				<h1>About us</h1>
				<h3 class="">
					We are a skating website focused on delivering the highest quality
					products at low price!
				</h3>
				<span class="">
					Ever since the dawn of man there has been need for wheels. It is our
					desire to deliver the best skateboards the world has ever seen using
					modern technology available for everyone. Our skateboards and wheels
					are made in modern environmentally friendly polymer using only
					recycled materials. We follow all the International Skateboard
					Annoyance Nonsense Standards and strive to give all workers in our
					factories reasonable working fair trade conditions! You will not find
					better skateboards anywhere in the world! Currently this website is
					under production and in alpha mode so please check back for the latest
					updates soon when we add more products!
				</span>
			</div>

			<form
				@submit.prevent="createUserSimple()"
				v-if="!loggedIn"
				class="inputLength"
			>
				<h1>Register</h1>
				<div class="inputContainer">
					<i class="fa fa-user icon"> </i>
					<input
						v-model="user.name"
						class="Field"
						type="text"
						placeholder="Name"
						required
					/>
				</div>
				<div class="inputContainer">
					<i class="fa fa-envelope icon"> </i>
					<input
						v-model="user.email"
						class="Field"
						type="email"
						placeholder="Email"
						required
					/>
				</div>
				<div class="inputContainer">
					<i class="fa fa-key icon"> </i>
					<input
						v-model="user.password"
						class="Field"
						type="password"
						placeholder="Password"
						required
					/>
				</div>
				<div class="inputContainer">
					<input value="Register" type="submit" class="blackPill" />
				</div>
				<div v-if="showError">Email finns redan</div>
			</form>
			<div v-else>
				<h1>Thank you for registering! Have a nice shopping!</h1>
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

			showError: false,
		}
	},
	methods: {
		toggleModal() {
			this.showModal = !this.showModal
		},

		async createUserSimple() {
			let newUser = {
				name: this.user.name,
				email: this.user.email,
				password: this.user.password,
				repeatPassword: this.user.password,
				role: 'customer',
			}
			let result = await this.createUser(newUser)

			if (result === 'ErrorEmail') {
				this.showError = true
			} else {
				this.showError = false
			}
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
	align-items: center;
	justify-content: flex-end;
}

.icon {
	padding: 1rem;
}

.cut {
	width: 100%;
}

.aboutInfo {
	min-width: 10rem;
}
.twoWrappers {
	display: flex;
	align-items: stretch;

	flex-direction: row;
	gap: 1rem;
	overflow: hidden;
	margin-top: 1rem;

	text-align: left;
	transition: ease all 0.5s;
}

@media only screen and (max-width: 600px) {
	.twoWrappers {
		flex-direction: column;
	}
}
</style>
