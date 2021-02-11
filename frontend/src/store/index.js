import Vue from 'vue'
import Vuex from 'vuex'
import { sessionModule } from '@/store/modules/sessionHandlers.js'

// import * as api from '@/api/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		//General states
		loggedInUser: {},

		// Product states
		selectedProduct: {},
		Basket: {},

		// sessionStates
		loggedIn: false,
		loggedInAsAdmin: false,
		paymentComplete: false,

		//Admin related states:
		selectedUser: {},

		//Cache related states:
		allProducts: {},
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
			this.paymentComplete = true
		},

		startNewOrder() {
			this.Basket = {}
			this.paymentComplete = true
		},

		// admin Helpers
		selectUser(user) {
			this.selectedUser = user
		},
	},
	actions: {
		login() {},
		logout() {},

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
	getters: {},

	modules: {
		session: sessionModule,
	},
})
