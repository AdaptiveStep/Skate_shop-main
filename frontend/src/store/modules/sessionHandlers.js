export const sessionModule = {
	namespaced: true,
	state: () => ({}),
	mutations: {
		coolMutation(state) {
			console.log('MODULE FUNGERAR WOHO')
		},

		//Session mutations
		SyncSession() {
			//If there is no state, copy from session. If there is a state, save it to session. Always overwrite.
			//Only SessionStorage.
		},

		getSessionObject() {},
		setSessionObject() {},
	},
	actions: {},
	getters: {
		giveStuff(state) {
			return 'WOW MODULE VALUE'
		},
	},
}
