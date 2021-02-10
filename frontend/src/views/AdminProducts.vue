<template>
	<div class="makeOrder">
		<h1>Admin Products</h1>

		<div class="rows">
			<div class="linedTitle">
				<span>Add/Edit</span>
				<hr />
			</div>
			<div class="dataInputs">
				<div class="dataInputImage">
					<label class="button" for="upload">Upload File</label>
					<input id="upload" type="file" />
				</div>
				<div class="datainputLines">
					<input class="Field" type="text" placeholder="Product Name" />
					<input class="Field" type="text" placeholder="Product short desc" />
					<input class="Field" type="text" placeholder="Product Price" />
					<input class="Field" type="text" placeholder="Product Serial" />
				</div>
				<div class="dataInputDescription">
					<textarea
						class="Field"
						type="text"
						placeholder="Product Description"
						cols="30"
						rows="13"
					/>
				</div>
			</div>
			<button>Submit</button>

			<div class="productsContainer" v-if="true">
				<div class="card shadowed" @click="tryme">
					<div class="cardHeader">
						<span>Tricky</span>

						<button class="roundButton bkg-orange">
							<img src="../../../assets/icon-edit-white.svg" />
						</button>
					</div>
					<div class="cardSubTitle">
						<span>Unisex</span>
					</div>

					<div class="cardContent">
						<img
							class="cardImage"
							src="../../../assets/skateboard-generic.png"
						/>

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

					<div class="loginFormCompact">
						<div class="linedTitle">
							<span>Put new info</span>
							<hr />
						</div>
						<div class="input-icons">
							<input class="Field" type="text" placeholder="Product name" />
						</div>

						<div class="input-icons">
							<input class="Field" type="text" placeholder="Description" />
						</div>

						<div class="input-icons">
							<input class="Field" type="text" placeholder="Price" />
						</div>

						<button class="blackPill">
							Save Product
						</button>
					</div>
				</div>
			</div>
		</Overlay>
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
		return { showMe: false }
	},
	computed: {},
	components: {
		Overlay,
	},
}
</script>

<style scoped lang="scss">
@import '@/styles/template.scss';
.rows {
	display: flex;

	flex-direction: column;
	padding-top: 2rem;
}
.dataInputs {
	display: flex;
	background-color: grey;
	gap: 1rem;
	padding: 1rem;
}
</style>
