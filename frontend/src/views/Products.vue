<template>
	<div class="register">
		<!-- <HeaderImage image="@blablbl/..../img.jpg" msg="hejjlo"> -->

		<h1>This is an Products page</h1>

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

					<span class="blackPill">
						Take my Money
					</span>
				</div>
			</div>
		</Overlay>

		<div class="container">
			<div class="card">
				<div class="cardHeader">
					<span>Tricky</span>

					<button class="roundButton bkg-secondary">
						<img src="../../../assets/icon-bag-white.svg" />
					</button>
				</div>
				<div class="cardSubTitle">
					<span>Unisex</span>
				</div>

				<div class="cardContent">
					<img class="cardImage" src="../../../assets/skateboard-generic.png" />

					<span class="blackPill move">
						<div class="pillPrice">
							133300
						</div>

						<div class="pillSEK">
							SEK
						</div>
					</span>
				</div>
			</div>

			<div class="card"></div>
			<div class="card"></div>
			<div class="card"></div>
			<div class="card"></div>
			<div class="card"></div>
			<div class="card"></div>
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
			showMe: true,
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

.headerImage {
	background-image: '';
}

.container {
	display: flex;
	gap: 1rem;
	flex-wrap: wrap;
	padding: 2rem;
}

.card {
	display: flex;
	background-color: white;
	width: 12rem;
	min-height: 15rem;
	flex-direction: column;
	// padding: 1rem;
	padding-left: 1rem;
	padding-right: 1rem;
	padding-top: 1rem;
	box-shadow: 0 0 0.5rem $shadow-color;
}
.cardHeader {
	display: flex;
	justify-content: space-between;
	/* background-color: green; */

	font-size: 2rem;
	align-items: center;
}
.cardSubTitle {
	display: flex;
	/* margin: 1rem; */
	/* background-color: pink; */
}

.cardImage {
	width: 100%;
}

.cardContent {
	display: flex;
}

.blackPill {
	border-radius: 10rem;
	background-color: black;
	// padding: 0.5rem;
	padding: 0.3rem 0.8rem;
	color: $primary-color;

	display: flex;
	font-size: 1.1rem;
}

.move {
	position: absolute;
	margin-top: 10rem;
	margin-left: 1rem;
	z-index: 0;
}

.pillSEK {
	position: relative;
	margin-left: 0.2rem;
	font-size: 0.65rem;
}

.modalProduct {
	display: flex;
}

.modalPic {
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	max-width: 20rem;
	min-width: 10rem;
	background-color: red;
}

.modalInfo {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 20rem;
	background-color: green;
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
</style>
