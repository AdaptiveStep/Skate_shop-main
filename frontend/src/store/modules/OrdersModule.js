import * as api from '@/api/index.js'

export default {
	actions: {
		async placeNewOrder({ commit, state }, payload) {
			let result = ''

			if (!payload.user) {
				result = await api.createUnknownOrder(
					payload.items,
					payload.price,
				)
			}
			else{
				result = await api.createOrder(
					payload.user,
					payload.items,
					payload.price,
				)
			}
			commit('completePayment')
		},

		async getAllOrders({ state, commit, rootState }) {
			let result = await api.getAllOrders(rootState.loggedInUser)
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
