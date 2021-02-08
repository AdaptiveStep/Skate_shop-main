<template>
	<div class="register">
		<!-- <HeaderImage image="@blablbl/..../img.jpg" msg="hejjlo"> -->

		<div class="hero">
			<img class="heroImage" src="../../../assets/skate-hero-1.jpg" />
			<div class="heroText">
				<h1>Join the rolling family</h1>
			</div>
		</div>

		<div class="twoWrappers">
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
			</div>

			<div class="column">
				<p>wow cool stuff here</p>
				<p>TESTING STUFF YO</p>
				<h1>WIW THIS WORKS GOOD</h1>
				<h1>Cowabungdfsaaa</h1>
			</div>
		</div>

		<!-- <h1>This is an register page</h1> -->
	</div>
</template>
´
<script>
export default {
	name: 'Register',
	data() {
		return {
			showModal: false,
		}
	},
	methods: {
		toggleModal() {
			this.showModal = !this.showModal
		},
	},
	components: {},
}
</script>
<style scoped lang="scss">
@import '@/styles/template.scss';

.hero {
	position: relative;
	overflow: hidden;
	box-shadow: 0 0 2rem $shadow-color;
}
.heroImage {
	width: 100%;
}
.heroText {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}

.heroText h1 {
	font-size: 3rem;
	color: $primary-color;
}

.twoWrappers {
	display: flex;

	//Aktiveras med mediaquery
	// flex-flow: wrap;

	// justify-content: space-evenly;
	align-items: stretch;
	gap: 1rem;
	overflow: hidden;
	margin-top: 1rem;

	text-align: left;
}

.column {
	padding: 1rem;
	min-width: 25rem;
}

@media screen and (max-width: 600px) {
  .column {
    width: 100%;
  }
}
</style>
