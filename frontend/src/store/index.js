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
		selectedProduct: {},
		Basket: [{ price: 1 }, { price: 10 }, { price: 10 }, { price: 100 }],

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

		// UserMutations
		addToCart(product) {
			this.Basket.push(product)
		},

		removeFromCart(product) {
			const index = this.Basket.indexOf(product)
			if (index > -1) {
				this.Basket.splice(index, 1)
			}
		},

		completePayment() {
			this.state.paymentComplete = true
		},

		startNewOrder() {
			this.state.Basket = {}
			this.state.paymentComplete = true
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

		loadAllProducts() {
			//Very dumb
		},
		saveProduct() {
			//Adds new if it doesnt exist
		},
		saveUser() {
			//Adds new if it doesnt exist
		},
	},

	getters: {
		basketCount(state) {
			return state.Basket.length
		},
		basketTotalPrice(state) {
			let tmp = state.Basket.reduce((sum, next) => sum + next.price, 0)
			console.log(tmp)
			return tmp
		},
		basketEmpty(state) {
			return state.Basket.length === 0
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
	},

	modules: {
		localStorage: LocalStorageModule,
	},
	plugins: [createPersistedState()],
})
