export default {
	getters: {
		basket(state, getters, rootState) {
			let tmpbasket = {}
			rootState.basketItems.map((item) => {
				tmpbasket[item._id] = {
					product: rootState.allProdDictionary[item._id],
					amount: item.amount,
				}
			})

			return tmpbasket
		},
		basketCount(state, getters, rootState) {
			return rootState.basketItems.reduce((x, next) => x + next.amount, 0)
		},
		basketTotalPrice(state, getters, rootState) {
			let tmp = Object.entries(getters.basket)

			const reducer = (accumulator, currentValue) =>
				accumulator + currentValue[1].amount * currentValue[1].product.price

			const newnum = tmp.reduce(reducer, 0)
			return newnum
		},
		basketEmpty(state, getters, rootState) {
			return getters.basketCount === 0
		},
		basketAveragePrice(state, getters, rootState) {
			return getters.basketTotalPrice / getters.basketCount
		},
	},
}
