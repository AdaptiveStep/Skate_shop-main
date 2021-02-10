<template>
	<div class="register">
		<!-- <HeaderImage image="@blablbl/..../img.jpg" msg="hejjlo"> -->

		<div class="hero"> 
			<img class="heroImage" src="../../../assets/skate-hero-1.jpg" />
			<div class="heroText">
				<p>Join the rolling family</p>
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
				<h1>Register</h1>
				<div class="inputContainer">
					<label>Name</label>

					<i class="fa fa-passport icon"> </i>
					<input class="Field" type="text" />
				</div>
				<div class="inputContainer">
					<label>Email</label>

					<i class="fa fa-envelope icon"> </i>
					<input class="Field" type="text" />
				</div>
				<div class="inputContainer">
					<label>Password</label>

					<i class="fa fa-key icon"> </i>
					<input class="Field" type="password" />
				</div>
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


</style>
