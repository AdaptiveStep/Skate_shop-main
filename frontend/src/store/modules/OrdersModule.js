export default {

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