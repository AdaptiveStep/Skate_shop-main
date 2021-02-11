//Local storage can only store strings.

export default {
	state: () => ({}),
	mutations: {
		coolMutation() {
			console.log('MODULE FUNGERAR WOHO')
		},

		//Session mutations
		SyncStorage() {
			//If there is no state, copy from session. If there is a state, save it to session. Always overwrite.
			//Only SessionStorage.
		},

		getStorageObject(stringKey) {
			sessionStorage.getItem(JSON.parse(stringKey))
		},

		setStorageObject(stringKey, payload) {
			sessionStorage.setItem(stringKey, JSON.stringify(payload))
		},

		clearStorage() {},
	},
	actions: {},
	getters: {
		giveStuff() {
			return 'WOW MODULE VALUE'
		},
	},
}
