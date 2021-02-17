export default {
	namespaced: false,

	mutations: {
		addToCart(state, product, rootState) {
			let exists = rootState.basketItems.some((p) => p._id === product._id)
			if (exists) {
				const withId = (p) => p._id === product._id
				let pIndex = rootState.basketItems.findIndex(withId)
				rootState.basketItems[pIndex].amount += 1
			} else {
				let tmpobj = {
					_id: product._id,
					amount: 1,
				}
				rootState.basketItems.push(tmpobj)
			}
		},
		removeFromCart(state, product, rootState) {
			const index = rootState.basketItems.findIndex(
				(p) => p._id === product._id
			)

			if (index > -1) {
				if (rootState.basketItems[index].amount === 1) {
					rootState.basketItems.splice(index, 1)
				} else {
					rootState.basketItems[index].amount -= 1
				}
			}
		},
	},

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
