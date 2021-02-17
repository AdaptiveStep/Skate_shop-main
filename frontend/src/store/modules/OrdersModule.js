import * as api from '@/api/index.js'

export default {
	mutations: {
		completePayment(state, getters, rootState) {
			//För att komma till sidan efter konfirmerat payment
			rootState.basketItems = []
			rootState.paymentComplete = true
		},

		startNewOrder(state, getters, rootState) {
			rootState.paymentComplete = false
		},
		cacheAllOrders(state, getters, rootState) {
			return (orders) => (rootState.allOrders = orders)
		},
		removeCachedOrder(state, getters, rootState) {
			return (order) => {
				let tmp = rootState.allOrders.findIndex((x) => x._id === order._id)
				tmp >= 0 ? rootState.allOrders.splice(tmp, 1) : ''
			}
		},
	},
	actions: {
		async placeNewOrder({ commit, state }, payload) {
			let result = await api.createOrder(
				payload.user,
				payload.items,
				payload.price
			)
		},

		async getAllOrders({ state, commit }) {
			let result = await api.getAllOrders(state.loggedInUser)
			commit('cacheAllOrders', result)
			return result
		},
	},
	getters: {
		inProcessOrders(state, getters, rootState) {
			return rootState.allOrders.filter((x) => x.status === 'inProcess')
			//return getters.filteredOrders(x => x.status === "inProcess")
		},
		doneOrders(state, getters, rootState) {
			return rootState.allOrders.filter((x) => x.status === 'done')
			//return getters.filteredOrders(x => x.status === "done")
		},

		filteredOrders(state, getters, rootState) {
			return (filter) => rootState.allOrders.filter(filter)
		},
	},
}
