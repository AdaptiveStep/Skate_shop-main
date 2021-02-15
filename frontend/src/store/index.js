import Vue from 'vue'
import Vuex from 'vuex'
import LocalStorageModule from '@/store/modules/localStorageHandlers.js'
import createPersistedState from 'vuex-persistedstate'

import * as api from '@/api/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		//General states
		loggedInUser: {},

		// Product states
		basket: [],

		paymentComplete: false,

		//Admin related states:
		selectedUser: {},

		//Cache related states:
		allProducts: [],
	},
	mutations: {
		// testSTUFF(state) {
		// 	api.logInMe()
		// },

		cacheAllProducts(state, products) {
			state.allProducts = products
		},

		// UserMutations
		addToCart(state, product) {
			state.basket.push(product)
		},

		removeFromCart(state, product) {
			const index = state.basket.indexOf(product)
			if (index > -1) {
				state.basket.splice(index, 1)
			}
		},

		completePayment(state) {
			//För att komma till sidan efter konfirmerat payment
			state.basket = []

			state.paymentComplete = true
		},

		startNewOrder(state) {
			state.paymentComplete = false
		},

		login(state, user) {
			//Don't use this. Use action instead.
			state.loggedInUser = user
		},
		logout(state) {
			//Don't use this. Use action instead.
			state.loggedInUser = {}
		},

		// admin Helpers
		selectUser(state, user) {
			state.selectedUser = user
		},
	},
	actions: {
		async login({ commit }, user) {
			let result = await api.login(user)
			let compiledUser = result.user
			compiledUser.token = result.token
			this.commit('login', compiledUser)
		},
		logout({ commit }) {
			this.commit('logout')
		},

		async loadAllProducts({ commit }) {
			let tmp = await api.getAllItems()
			commit('cacheAllProducts', tmp)
		},

		async placeNewOrder({ commit, state }, payload) {
			// console.log('THESE ARE THE RESULTS', payload.items)

			let result = await api.createOrder(
				payload.user,
				payload.items,
				payload.price
			)
		},
		async createProduct({ state, dispatch }, product) {
			let result = await api.createProduct(product, state.loggedInUser)
			dispatch('loadAllProducts')
		},

		async saveProduct({ state, dispatch }, product) {
			let result = await api.updateProductById(product, state.loggedInUser)
			dispatch('loadAllProducts')
		},

		async deleteProductById({ state, dispatch }, product) {
			let result = await api.deleteProductById(product, state.loggedInUser)
			dispatch('loadAllProducts')
		},

		saveUser() {
			//Adds new if it doesnt exist
		},
	},

	getters: {
		basketCount(state) {
			return state.basket.length
		},
		basketTotalPrice(state) {
			let tmp = state.basket.reduce((sum, next) => sum + next.price, 0)
			return tmp
		},
		basketEmpty(state) {
			return state.basket.length === 0
		},
		basketAveragePrice(state, getters) {
			return getters.basketTotalPrice / getters.basketCount
		},

		loggedIn(state) {
			return Object.keys(state.loggedInUser).length > 0
		},
		loggedInAsAdmin(state) {
			return state.loggedInUser.role === 'admin'
		},
		allFiles() {
			const req = require.context('../../../assets/', true, /\.(png)$/i)
			let tmpFiles = []
			req.keys().map((key) => {
				tmpFiles.push(key.slice(2))
			})
			return tmpFiles
		},
	},

	modules: {
		localStorage: LocalStorageModule,
	},
	plugins: [createPersistedState()],
})
