<template>
	<div class="rows">
		<TitledContainer title="Add/Edit" />
		<form @submit="NewProductSubmit(newProduct)" class="dataInputs">
			<div class="dataInputImages">
				<img
					v-for="(item, index) in allFiles"
					:key="index"
					class="productImage"
					:src="require(`@/assets/${item}`)"
					@click="setNewProductPath(item)"
				/>
			</div>
			<div class="allFields">
				<div class="dataInputFields">
					<input
						v-model="newProduct.title"
						class="Field"
						type="text"
						placeholder="Product Name"
						required
					/>
					<input
						v-model="newProduct.price"
						class="Field"
						type="number"
						placeholder="Product Price"
						required
					/>
					<select class="Field" v-model="newProduct.category">
						<option
							v-for="(item, key) in categories"
							:key="key"
							v-bind:value="item.value"
						>
							{{ item.text }}
						</option>
					</select>

					<input
						v-model="newProduct.shortDesc"
						class="Field"
						type="text"
						placeholder="Product short desc"
						required
					/>
					<div class="dataInputImages">
						<img
							class="selectNewProductImage"
							:src="require(`@/assets/${newProduct.imgFile}`)"
						/>
					</div>
				</div>
				<div class="dataInputDescription">
					<textarea
						v-model="newProduct.longDesc"
						class="Field"
						type="text"
						placeholder="Product Description"
						rows="9"
						cols="50"
						required
					/>
					<div class="adminSubmit">
						<input class="blackPill" type="submit" value="Create New Product" />
					</div>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">

</style>
