//Local storage can only store strings.

export default {
	namespaced: false,
	state: () => ({}),
	mutations: {
		ActivationMutation() {
			console.log('Activated')
		},
	},
	actions: {},
	getters: {
		Active() {
			return 'AdminModuleID'
		},
	},
}
