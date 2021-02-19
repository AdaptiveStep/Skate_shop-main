<template>
	<div class="makeOrder">
		<!-- <HeaderImage image="@blablbl/..../img.jpg" msg="hejjlo"> -->

		<transition name="fade" mode="out-in">
			<div
				v-if="!loggedIn && !paymentComplete"
				class="unloggedOrder"
				key="newBuyer"
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

					<form
						v-if="!basketEmpty"
						@submit.prevent="placeNewUnknownOrder"
						class="loginForm"
					>
						<h1 class="yourDetails">Your Details</h1>
						<div class="gapping">
							<input
								required
								class="Field"
								placeholder="Your name"
								type="text"
							/>
						</div>

						<div class="gapping">
							<input required class="Field" placeholder="Street" type="text" />
						</div>
						<div class="inline gapping">
							<div>
								<input required class="Field" placeholder="ZIP code" />
							</div>
							<div>
								<input required class="Field" placeholder="City" />
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
						<input value="Submit order" type="submit" class="submitBtn" />
					</form>

					<div v-if="false">
						Please login or
						<router-link to="/register" v-if="!loggedIn">Register </router-link>
						to proceed.
					</div>
				</div>
			</div>

			<div
				v-else-if="loggedIn && !paymentComplete"
				class="loggedInOrder"
				key="oldBuyer"
			>
				<div class="pageFlex">
					<TitledContainer title="Items">
						<Basket />
					</TitledContainer>

					<div class="multiFormWrapper">
						<TitledContainer class="fixa" title="Delivery">
							<input
								v-model="loggedInUser.name"
								class="Field"
								placeholder="Name"
								type="text"
							/>

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
						</TitledContainer>

						<TitledContainer class="fixa" title="Payment Details">
							<div class="">
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
								<button v-if="!basketEmpty" @click="Confirm" class="blackPill">
									<img class="bagSvg" src="@/assets/icon-bag-white.svg" />Take
									my money!
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
					<h1>Thank you for making your Purchase. Please consider the following announcement.</h1>
					<h3>
						We are a skating website focused on delivering the highest quality
						products at low price! And we are looking for partners!
					</h3>
					<span>
						Ever since the dawn of man there has been need for wheels. It is our
						desire to deliver the best skateboards the world has ever seen using
						modern technology available for everyone. Our skateboards and wheels
						are made in modern environmentally friendly polymer using only
						recycled materials. We follow all the International Skateboard
						Annoyance Nonsense Standards and strive to give all workers in our
						factories reasonable working fair trade conditions! You will not
						find better skateboards anywhere in the world! Currently this
						website is under production and in alpha mode so please check back
						for the latest updates soon when we add more products!
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

		placeNewUnknownOrder() {
			let items = []
			for (let it of this.basketItems) {
				for (let index = 0; index < it.amount; index++) {
					items.push(it._id)
				}
			}

			let tmptotalprice = this.basketTotalPrice
			let payload = { items: items, price: tmptotalprice }

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

.pageFlex {
	display: flex;
	justify-content: space-evenly;
	flex-wrap: wrap;
	gap: 1rem;
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
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: center;
}
//--------------
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
	display: flex;
	justify-content: flex-end;
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
