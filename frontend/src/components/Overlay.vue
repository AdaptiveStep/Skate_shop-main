<template>
	<div class="overlay" :class="{ show }">
		<div class="fade-layer" :class="{ show }" @click="$emit('close')"></div>

		<div v-if="popup" class="contentPopup" :class="{ show }">
			<slot></slot>
		</div>

		<div v-else class="content" :class="{ show }">
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		show: Boolean,
		backdrop: Boolean,
		popup: Boolean,
	},
}
</script>

<style lang="scss">
@import '@/styles/template.scss';

.overlay {
	pointer-events: none;
	z-index: 1;
}
.overlay.show {
	pointer-events: all;
}

.fade-layer {
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background-color: rgba(0, 0, 0, 0.25);
	transition: opacity 0.25s;
	z-index: 1;
	pointer-events: none;
	opacity: 0;
}
.fade-layer.show {
	pointer-events: all;
	opacity: 1;
}
.content {
	transition: opacity 0.25s;
	opacity: 0;
	position: absolute;
	display: flex;
	flex-direction: column;
}

.contentPopup {
	transition: opacity 0.25s;
	opacity: 0;
	position: absolute;
	display: flex;
	flex-direction: column;
	transform: translate(-65%, 0);
	width: 26rem;
}

.contentPopup.show {
	opacity: 1;
	z-index: 1;
	position: absolute;
}

.content.show {
	opacity: 1;
	z-index: 1;
	position: absolute;
}
</style>
