<template>
	<article>
		<slot name="heading">
			<h1>heading</h1>
		</slot>

		<slot name="content">
			<p>Lorem ipsum dolor sit amet consectetur</p>
		</slot>
		<button>OK</button>
		<button @click="$emit('cancel')">Cancel</button>
	</article>
</template>

<script>
export default {}
</script>

<style scoped lang="sass">
article
  background-color: white
  padding: 2rem
  border-radius: 5px
  p
    color: hotpink
</style>
