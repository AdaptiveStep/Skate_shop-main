<template>
	<div class="register">
		<!-- <HeaderImage image="@blablbl/..../img.jpg" msg="hejjlo"> -->

		<h1>This is an Products page</h1>

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

					<span class="cardPrice">
						<div class="pricePrice">
							133300
						</div>

						<div class="priceSek">
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
.cardPrice {
	position: absolute;
	z-index: 2;
	margin-top: 10rem;
	margin-left: 1rem;
	border-radius: 10rem;
	background-color: black;
  // padding: 0.5rem;
  padding: 0.3rem 0.8rem;
	color: $primary-color;

	display: flex;
	font-size: 1.1rem;
}

.priceSek {
  position: relative;
  margin-left:0.2rem;
	font-size: 0.65rem;
}
</style>
