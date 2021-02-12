<template>
	<div class="makeOrder">
		<!-- <HeaderImage image="@blablbl/..../img.jpg" msg="hejjlo"> -->

		<div class="unloggedOrder" v-if="!loggedIn && !paymentComplete">
			<h1>Please fill in your details</h1>

			<Overlay :show="showMe" v-on:close="showMe = false">
				<div class="modalProduct">
					<div class="modalPic">
						<img
							class="modalImage"
							src="../../../assets/skateboard-generic.png"
						/>
					</div>

					<div class="modalInfo">
						<div class="modalTitle">
							<span>GRETA FURY</span>
						</div>
						<div class="modalSubtitle">
							<span>Unisex</span>
						</div>
						<div class="modalTextInfo">
							<p>Jag gillar apor som hoppar</p>
						</div>

						<div class="modalCash">
							<span>999 sek</span>
						</div>
					</div>
				</div>
			</Overlay>

			<div class="makeOrder"></div>

			<div class="pageFlex">
				<div class="userCart shadowed">
					<div class="cartProducts">
						<div
							v-for="(item, index) in basket"
							:key="index"
							class="cartProduct"
						>
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
				</div>

				<div class="loginForm">
					<h1>Your Details</h1>
					<div class="input-icons">
						<i class="fa fa-user icon"> </i>
						<input class="Field" type="text" placeholder="Username" />
					</div>

					<div class="input-icons">
						<i class="fa fa-envelope icon"> </i>
						<input class="Field" type="text" placeholder="Username" />
					</div>

					<div class="input-icons">
						<i class="fa fa-key icon"> </i>
						<input class="Field" type="text" placeholder="Username" />
					</div>
					<hr />
					<h1>Payment</h1>
					<div class="input-icons">
						<i class="fa fa-user icon"> </i>
						<input class="Field" type="text" placeholder="Username" />
					</div>

					<div class="input-icons">
						<i class="fa fa-envelope icon"> </i>
						<input class="Field" type="text" placeholder="Username" />
					</div>

					<div class="input-icons">
						<i class="fa fa-key icon"> </i>
						<input class="Field" type="text" placeholder="Username" />
					</div>
					<button class="submitBtn">Submit order</button>
				</div>
			</div>
		</div>

		<div class="loggedInOrder" v-else-if="loggedIn && !paymentComplete">
			<div class="pageFlex">
				<div class="userCart">
					<div class="linedTitle">
						<span>Items</span>
						<hr />
					</div>

					<div class="cartProducts">
						<div
							v-for="(item, index) in basket"
							:key="index"
							class="cartProduct"
						>
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
				</div>
				<div class="multiFormWrapper">
					<div class="loginFormCompact">
						<div class="linedTitle">
							<span>Delivery</span>
							<hr />
						</div>
						<div class="input-icons">
							<i class="fa fa-user icon"> </i>
							<input class="Field" type="text" placeholder="Username" />
						</div>

						<div class="input-icons">
							<i class="fa fa-envelope icon"> </i>
							<input class="Field" type="text" placeholder="Username" />
						</div>

						<div class="input-icons">
							<i class="fa fa-key icon"> </i>
							<input class="Field" type="text" placeholder="Username" />
						</div>
					</div>

					<div class="loginFormCompact">
						<div class="linedTitle">
							<span>Payment details</span>
							<hr />
						</div>
						<div class="input-icons">
							<i class="fa fa-user icon"> </i>
							<input class="Field" type="text" placeholder="Username" />
						</div>

						<div class="input-icons">
							<i class="fa fa-envelope icon"> </i>
							<input class="Field" type="text" placeholder="Username" />
						</div>

						<div class="input-icons">
							<i class="fa fa-key icon"> </i>
							<input class="Field" type="text" placeholder="Username" />
						</div>
						<button @click="Confirm" class="blackPill">Take my Money</button>
					</div>
				</div>
			</div>
		</div>

		<div class="inProcessOrder" v-else-if="paymentComplete">
			<h1>This is an ORDER DONE page</h1>

			<div class="hero">
				<img class="heroImage" src="../../../assets/skate-hero-1.jpg" />
				<div class="heroText">
					<p>Thank you for your order</p>
				</div>
			</div>

			<div class="column">
				<h1>Cowabunga</h1>
				<h3>
					arcu posuere, nec condimentum diam ultrices. Cras fermentum commodo
					tellus at ullamcorper. Fusce euismod pretium tellus, sit amet iaculis
					sem molestie eu. Pellentesque tristique diam sit amet magna maximus,
					vel mollis metus blandit.
				</h3>
				<span>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget ex
					nec purus auctor mollis ac ut nulla. Vivamus maximus, sapien sit amet
					rhoncus sodales, ligula quam tincidunt tellus, sit amet vestibulum
					velit orci et nisl. Nullam aliquet lorem sed tellus vestibulum dictum.
					Etiam efficitur tristique ligula et interdum. In hac habitasse platea
					dictumst. Donec rhoncus maximus orci vel tempus. Quisque interdum leo
					consequat aliquet posuere. Pellentesque habitant morbi tristique
					senectus et netus et malesuada fames ac turpis egestas. Aliquam
					pulvinar libero et arcu posuere, nec condimentum diam ultrices. Cras
					fermentum commodo tellus at ullamcorper. Fusce euismod pretium tellus,
					sit amet iaculis sem molestie eu. Pellentesque tristique diam sit amet
					magna maximus, vel mollis metus blandit.
					<p>TESTING STUFF YO</p>
				</span>
				<button @click="startNewOrder" class="submitBtn">Coolio!</button>
			</div>
		</div>
	</div>
</template>

<script>
import Overlay from '@/components/Overlay'
import { mapMutations, mapGetters, mapActions, mapState } from 'vuex'

export default {
	methods: {
		tryme() {
			this.showMe = !this.showMe
		},
		Confirm() {
			let tmpuser = this.loggedInUser
			let items = this.basket.map((x) => x._id)

			let tmptotalprice = this.basketTotalPrice
			let payload = { user: tmpuser, items: items, price: tmptotalprice }

			this.placeNewOrder(payload) //Placerar i databas
			this.completePayment() //Sätter payment som klar, och resettar basket
		},

		...mapMutations(['startNewOrder', 'completePayment']),
		...mapActions(['placeNewOrder']),
	},
	data() {
		return {
			showMe: false,
			userLoggedIn: true,
		}
	},
	computed: {
		...mapState(['basket', 'paymentComplete', 'loggedInUser']),
		...mapGetters([
			'basketCount',
			'basketTotalPrice',
			'basketEmpty',
			'loggedIn',
			'loggedInAsAdmin',
		]),
	},
	components: {
		Overlay,
	},
}
</script>

<style scoped lang="scss">
@import '@/styles/template.scss';

.modalProduct {
	display: flex;
	position: fixed;

	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
}

.modalPic {
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	max-width: 20rem;
	min-width: 10rem;
	background-color: $primary-color;
}

.modalInfo {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 20rem;
	background-color: $primary-color;
	padding: 1rem;
}
.modalImage {
	width: 100%;
}
.modalTitle {
	font-size: 1.3rem;
	text-align: left;
}
.modalSubtitle {
	font-size: 0.8rem;
	text-align: left;
}
.modalTextInfo {
	font-size: 0.7rem;
	text-align: left;
}
.modalCash {
	font-size: 1.3rem;
	text-align: left;
}

.pageFlex {
	display: flex;
	justify-content: space-evenly;
	flex-wrap: wrap;
	gap: 1rem;
}

.userCart {
	padding: 1rem;
}

.submitBtn {
	border-radius: 0.3rem;
	background-color: $secondary-color;
	color: $light-grey;
	padding: 0.5rem;
	min-width: 10rem;
}

// ------------------------
.input-icons i {
	position: absolute;
}

.input-icons {
	display: flex;
	flex-direction: column;
}

.icon {
	align-self: flex-end;
	margin-right: 1rem;
	margin-top: 1.5rem;
	z-index: 0;
}
.loginForm {
	width: 23rem;
}
.multiFormWrapper {
	display: flex;
	gap: 1rem;
}
</style>
