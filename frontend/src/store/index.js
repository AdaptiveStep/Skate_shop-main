import Vue from 'vue'
import Vuex from 'vuex'

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

		//Admin related states:
		selectedUser: {},

		//Cache related states:
		allProducts: {},
	},
	mutations: {
		SyncSession() {
			//If there is no state, copy from session. If there is a state, save it to session. Always overwrite.
			//Only SessionStorage.
		},

		// UserMutations
		addToCart() {},
		removeFromCart() {},
		confirmOrder() {},

		// adminMutations
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
	modules: {},
})
