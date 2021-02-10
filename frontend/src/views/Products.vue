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

		<div class="productsContainer" v-if="true">
			<div class="card shadowed">
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

			<div class="card shadowed"></div>
			<div class="card shadowed"></div>
			<div class="card shadowed"></div>
			<div class="card shadowed"></div>
			<div class="card shadowed"></div>
			<div class="card shadowed"></div>
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

.headerImage {
	background-image: '';
}


</style>
