<template>
	<div id="app">
		<Header />
		<router-view />
	</div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
	name: 'App',
	components: {
		Header,
	},
}
</script>

<style lang="scss">
@import '@/styles/template.scss';

$fa-font-path: '~@fortawesome/fontawesome-free/webfonts';
@import '~@fortawesome/fontawesome-free/scss/fontawesome';
@import '~@fortawesome/fontawesome-free/scss/solid'; // fas
@import '~@fortawesome/fontawesome-free/scss/regular'; // far
@import '~@fortawesome/fontawesome-free/scss/brands'; // fab

body {
	background-color: $light-grey;
}

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: $secondary-color;

	margin: 0 auto;
	max-width: 65rem;
	// background-color: $primary-color;
}

#nav {
	padding: 30px;

	a {
		font-weight: bold;
		color: #2c3e50;
		text-decoration: none;
		&.router-link-exact-active {
			color: $secondary-color;
			text-underline-offset: 0.5rem;
			text-decoration-line: underline;
			text-decoration-thickness: 0.5em;
		}
	}
}
</style>
