<template>
	<div class="makeOrder">
		<!-- <HeaderImage image="@blablbl/..../img.jpg" msg="hejjlo"> -->

		<h1>This is an MakeOrder page</h1>

		<button @click="tryme">KLICK ME</button>

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

			</div>

			<div class="loginForm">
				<div class="inputContainer">
					<input class="Field" type="text" placeholder="Username" />
					<input class="Field" type="text" placeholder="Username" />

				</div>
				<div class="inputContainer">
					<input class="Field" type="password" placeholder="Password" />
				</div>
				<div class="blackPill loginBtn">Login</div>
			</div>
		</div>
	</div>
</template>

<script>
import Overlay from '@/components/Overlay'
export default {
	methods: {
		tryme() {
			this.showMe = !this.showMe
		},
	},
	data() {
		return {
			showMe: false,
		}
	},
	computed: {
		showModal() {
			return this.showMe
		},
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
}

.userCart {
	padding: 1rem;
}
</style>
