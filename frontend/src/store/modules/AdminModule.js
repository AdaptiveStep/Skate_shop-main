import * as api from '@/api/index.js'

export default {
	namespaced: false,
	state: () => ({}),
	mutations: {
		login(state, getters, rootState) {
			//Don't use this. Use action instead.
			return (user) => (rootState.loggedInUser = user)
		},
		logout(state, getters, rootState) {
			//Don't use this. Use action instead.
			rootState.loggedInUser = {}
			rootState.allOrders = []
		},
		selectUser(state, getters, rootState) {
			return (user) => (rootState.selectedUser = user)
		},
	},
	actions: {
		async login({ commit, dispatch }, user) {
			let result = await api.login(user)
			let compiledUser = result.user
			compiledUser.token = result.token
			commit('login', compiledUser, null, { root: true })
			dispatch('getAllOrders', null, { root: true })
		},
		logout({ commit }) {
			this.commit('logout', null, { root: true })
		},
		async createUser({ dispatch }, user) {
			let result = await api.createUser(user)
			if (result.message === 'User registered!') {
				dispatch('login', user)
			} else if (result.message === 'Email already exists') {
				console.log('Email already exists')
			}
		},
	},
	getters: {
		loggedInAsAdmin(state, getters, rootState) {
			return rootState.loggedInUser.role === 'admin'
		},
		allFiles() {
			const req = require.context('@/assets/', true, /\.(png)$/i)
			let tmpFiles = []
			req.keys().map((key) => {
				tmpFiles.push(key.slice(2))
			})
			return tmpFiles
		},
		loggedIn(state, getters, rootState) {
			return Object.keys(rootState.loggedInUser).length > 0
		},
	},
}
