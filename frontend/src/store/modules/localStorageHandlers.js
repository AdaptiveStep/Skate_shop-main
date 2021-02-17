//Local storage can only store strings.

export default {
	namespaced: false,
	state: () => ({}),
	mutations: {
		ActivationMutation() {
			console.log('Activated')
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
		oneStorage() {
			return 'storageID'
		},
	},
}
