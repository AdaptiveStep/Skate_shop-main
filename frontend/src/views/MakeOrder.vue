<template>
	<div class="makeOrder">
		<!-- <HeaderImage image="@blablbl/..../img.jpg" msg="hejjlo"> -->

		<transition name="fade" mode="out-in">
			<div
				class="unloggedOrder"
				key="newBuyer"
				v-if="!loggedIn && !paymentComplete"
			>
				<Overlay :show="showMe" v-on:close="showMe = false">
					<div class="modalProduct">
						<div class="modalPic">
							<img class="modalImage" src="@/assets/skateboard-generic.png" />
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
					<Basket v-on:clickBuy="showUserMod = false" />

					<div class="loginForm">
						<h1 class="yourDetails">Your Details</h1>
						<div class="gapping">
							<input class="Field" placeholder="Your name" type="text" />
						</div>

						<div class="gapping">
							<input class="Field" placeholder="Street" type="text" />
						</div>
						<div class="inline gapping">
							<div>
								<input class="Field" placeholder="ZIP code" />
							</div>
							<div>
								<input class="Field" placeholder="City" />
							</div>
						</div>
						<hr />
						<h1 class="payment">Payment</h1>
						<div class="gapping">
							<input class="Field" placeholder="Card Owner" type="text" />
						</div>

						<div class="gapping">
							<input class="Field" placeholder="Card Number" type="text" />
						</div>
						<div class="inline gapping">
							<div>
								<input class="Field" placeholder="Valid until" type="text" />
							</div>
							<div>
								<input class="Field" placeholder="CCV" type="text" />
							</div>
						</div>
						<button class="submitBtn">Submit order</button>
					</div>
				</div>
			</div>

			<div
				class="loggedInOrder"
				key="oldBuyer"
				v-else-if="loggedIn && !paymentComplete"
			>
				<div class="pageFlex">
					<TitledContainer title="items">
						<Basket />
					</TitledContainer>

					<div class="multiFormWrapper">
						<TitledContainer class="fixa" title="Delivery">
							<div class="gapping">
								<input
									v-model="loggedInUser.name"
									class="Field"
									placeholder="Name"
									type="text"
								/>
							</div>

							<div class="gapping">
								<input
									v-model="loggedInUser.adress.street"
									class="Field"
									placeholder="Street adress"
									type="text"
								/>
							</div>
							<div class="inline gapping">
								<div>
									<input
										v-model="loggedInUser.adress.zip"
										class="Field"
										placeholder="City"
									/>
								</div>
								<div>
									<input
										v-model="loggedInUser.adress.city"
										class="Field"
										placeholder="Zip Code"
									/>
								</div>
							</div>

							<button @click="hej" class="blackPill">Update</button>
						</TitledContainer>

						<TitledContainer class="fixa" title="Payment Details">
							<div class="gapping">
								<input class="Field" placeholder="Card owner" type="text" />
							</div>

							<div class="gapping">
								<input class="Field" placeholder="Card Number" type="text" />
							</div>
							<div class="inline gapping">
								<div>
									<input class="Field" placeholder="Valid until" type="text" />
								</div>
								<div>
									<input class="Field" placeholder="CCV" type="text" />
								</div>
							</div>
							<div class="forBut">
								<button @click="Confirm" class="blackPill">
									Take my Money WOW
								</button>
							</div>
						</TitledContainer>
					</div>
				</div>
			</div>

			<div class="inProcessOrder" key="completeBuy" v-else-if="paymentComplete">
				<h1>This is an ORDER DONE page</h1>

				<div class="hero">
					<img class="heroImage" src="@/assets/skate-hero-1.jpg" />
					<div class="heroText">
						<p>Thank you for your order</p>
					</div>
				</div>

				<div class="column">
					<h1>Cowabunga</h1>
					<h3>
						arcu posuere, nec condimentum diam ultrices. Cras fermentum commodo
						tellus at ullamcorper. Fusce euismod pretium tellus, sit amet
						iaculis sem molestie eu. Pellentesque tristique diam sit amet magna
						maximus, vel mollis metus blandit.
					</h3>
					<span>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget ex
						nec purus auctor mollis ac ut nulla. Vivamus maximus, sapien sit
						amet rhoncus sodales, ligula quam tincidunt tellus, sit amet
						vestibulum velit orci et nisl. Nullam aliquet lorem sed tellus
						vestibulum dictum. Etiam efficitur tristique ligula et interdum. In
						hac habitasse platea dictumst. Donec rhoncus maximus orci vel
						tempus. Quisque interdum leo consequat aliquet posuere. Pellentesque
						habitant morbi tristique senectus et netus et malesuada fames ac
						turpis egestas. Aliquam pulvinar libero et arcu posuere, nec
						condimentum diam ultrices. Cras fermentum commodo tellus at
						ullamcorper. Fusce euismod pretium tellus, sit amet iaculis sem
						molestie eu. Pellentesque tristique diam sit amet magna maximus, vel
						mollis metus blandit.
						<p>TESTING STUFF YO</p>
					</span>
					<button @click="startNewOrder" class="submitBtn">Coolio!</button>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
import Overlay from '@/components/Overlay'
import Basket from '@/components/Basket'
import TitledContainer from '@/components/TitledContainer'
import { mapMutations, mapGetters, mapActions, mapState } from 'vuex'

export default {
	methods: {
		tryme() {
			this.showMe = !this.showMe
		},
		Confirm() {
			let tmpuser = this.loggedInUser

			let items = []
			for (let it of this.basketItems) {
				for (let index = 0; index < it.amount; index++) {
					items.push(it._id)
				}
			}

			let tmptotalprice = this.basketTotalPrice
			let payload = { user: tmpuser, items: items, price: tmptotalprice }

			this.placeNewOrder(payload) //Placerar i databas
			this.completePayment() //Sätter payment som klar, och resettar basket
		},
		hej() {
			console.log('hej')
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
		...mapState(['paymentComplete', 'loggedInUser', 'basketItems']),
		...mapGetters([
			'basketCount',
			'basketTotalPrice',
			'basketEmpty',
			'loggedIn',
			'loggedInAsAdmin',
			'basket',
		]),
	},
	components: {
		Overlay,
		Basket,
		TitledContainer,
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

//Remove when cart is done
.userCart {
}

.submitBtn {
	border-radius: 0.3rem;
	background-color: $secondary-color;
	color: $light-grey;
	padding: 0.5rem;
	min-width: 10rem;
	margin-top: 1rem;
}

// ------------------------
.input-icons i {
	position: absolute;
}

.input-icons {
	display: flex;
	flex-direction: column;
	margin: 1rem;
}

.input-icons-extend {
	width: 100%;
	display: table;
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

// Tillfälligt

.yourDetails {
	padding-right: 11rem;
}

.payment {
	padding-right: 14rem;
}

.fixa {
	width: 19rem;
}

.forBut {
	padding-top: 1rem;
	padding-left: 9rem;
}

.gapping {
	padding-top: 1rem;
}

input {
	width: 100%;
	display: block;
}

div.inline {
	width: 100%;
	display: table;
}

div.inline div {
	display: table-cell;
}

div.inline div:nth-child(n + 2) {
	padding-left: 10px;
}
</style>
