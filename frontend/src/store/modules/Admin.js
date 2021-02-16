//Local storage can only store strings.

export default {
	state: () => ({}),
	mutations: {
		ActivationMutation() {
			console.log('Activated')
		},
	},
	actions: {},
	getters: {
		sampleStorage() {
			return 'storageID'
		},
	},
}
