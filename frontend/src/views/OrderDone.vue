<template>
	<div class="makeOrder">
		<!-- <HeaderImage image="@blablbl/..../img.jpg" msg="hejjlo"> -->

		<h1>This is an ORDER DONE page</h1>

		<div class="hero">
			<img class="heroImage" src="../../../assets/skate-hero-1.jpg" />
			<div class="heroText">
				<p>Join the rolling family</p>
			</div>
		</div>

		<div class="column">
			<h1>Cowabunga</h1>
			<h3>
				arcu posuere, nec condimentum diam ultrices. Cras fermentum commodo
				tellus at ullamcorper. Fusce euismod pretium tellus, sit amet iaculis
				sem molestie eu. Pellentesque tristique diam sit amet magna maximus, vel
				mollis metus blandit.
			</h3>
			<span>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget ex nec
				purus auctor mollis ac ut nulla. Vivamus maximus, sapien sit amet
				rhoncus sodales, ligula quam tincidunt tellus, sit amet vestibulum velit
				orci et nisl. Nullam aliquet lorem sed tellus vestibulum dictum. Etiam
				efficitur tristique ligula et interdum. In hac habitasse platea
				dictumst. Donec rhoncus maximus orci vel tempus. Quisque interdum leo
				consequat aliquet posuere. Pellentesque habitant morbi tristique
				senectus et netus et malesuada fames ac turpis egestas. Aliquam pulvinar
				libero et arcu posuere, nec condimentum diam ultrices. Cras fermentum
				commodo tellus at ullamcorper. Fusce euismod pretium tellus, sit amet
				iaculis sem molestie eu. Pellentesque tristique diam sit amet magna
				maximus, vel mollis metus blandit.
				<p>TESTING STUFF YO</p>
			</span>
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
</style>
