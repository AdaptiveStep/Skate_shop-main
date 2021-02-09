<template>
	<!-- <div id="nav">
	</div> -->

	<div id="nav" class="header">
		<div id="logo">
			<router-link to="/">
				<img src="../../../assets/sinus-logo.svg" />
			</router-link>
		</div>

		<div id="header-middle"></div>

		<div class="header-right">
			<router-link to="/register">Register </router-link>

			<router-link to="/account">My Account</router-link>

			<div class="hasPopcounter">
				<button class="roundButton bkg-primary">
					<img src="../../../assets/icon-user-black.svg" />
				</button>

				<span class="counter">32</span>
			</div>

			<button class="roundButton bkg-orange">
				<img src="../../../assets/icon-bag-white.svg" />
			</button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'HelloWorld',
	props: {
		msg: String,
	},
}
</script>

<style lang="scss">
@import '@/styles/template.scss';

.header {
	display: flex;
	// border-bottom: 1px solid #d3d3d3;
	overflow: hidden;
	align-items: center;
	flex-wrap: wrap;
}

div#header > div {
	text-align: center;
	border: 4px dashed; /* Useful for positioning */
	overflow: hidden;
}

#logo {
	color: #08a3d9;
	width: 300px;
	border-color: red;
}

#header-middle {
	flex-grow: 4;

	display: flex;
	gap: 1rem;
	border-color: green;
}

.header-right {
	display: flex;
	gap: 1rem;
	align-items: center;
	border-color: blue;
}

router-link {
	background-color: red;
}

.hasPopcounter .counter {
	position: absolute;
	margin-left: -0.8rem;
	margin-bottom: 10rem;
	border-radius: 100%;
	background-color: white;
	padding: 0.2rem;
	box-shadow: 0 0 0.4rem $shadow-color;
}
</style>
